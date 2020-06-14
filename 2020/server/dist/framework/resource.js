"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResource = exports.createMemoryTemplate = exports.defaultFilter = exports.createTransformer = void 0;
function createTransformer(template, transformer) {
    return transformer;
}
exports.createTransformer = createTransformer;
function isAsyncResponse(response) {
    return response.then !== undefined;
}
function defaultFilter(query, item) {
    let filterValue = '';
    query.forEach((q) => {
        if (q.keys.indexOf('value') !== -1) {
            filterValue = q.value || '';
        }
    });
    if (!filterValue) {
        return true;
    }
    let filterText = item.label || item.value;
    return filterText.toLocaleLowerCase().indexOf(filterValue.toLocaleLowerCase()) >= 0;
}
exports.defaultFilter = defaultFilter;
function createMemoryTemplate({ filter } = {}) {
    return {
        read: ({ query }, put, get) => {
            let data = get();
            const filteredData = filter && query ? data.filter((i) => filter(query, i)) : data;
            put(0, filteredData);
            return { data: filteredData, total: filteredData.length };
        }
    };
}
exports.createMemoryTemplate = createMemoryTemplate;
function createResource(config = createMemoryTemplate()) {
    const { read } = config;
    let queryMap = new Map();
    let statusMap = new Map();
    let totalMap = new Map();
    const invalidatorMaps = {
        data: new Map(),
        total: new Map(),
        loading: new Map(),
        failed: new Map()
    };
    function invalidate(types, options) {
        const key = `${getQueryKey(options)}-${getPageKey(options)}`;
        types.forEach((type) => {
            const keyedInvalidatorMap = invalidatorMaps[type];
            const invalidatorSet = keyedInvalidatorMap.get(key);
            if (invalidatorSet) {
                [...invalidatorSet].forEach((invalidator) => {
                    invalidator();
                });
            }
        });
    }
    function getPageKey({ pageNumber, pageSize }) {
        return `page-${pageNumber}-pageSize-${pageSize}`;
    }
    function getQueryKey(query = {}) {
        return JSON.stringify(query);
    }
    function subscribe(type, options, invalidator) {
        const key = `${getQueryKey(options)}-${getPageKey(options)}`;
        const keyedInvalidatorMap = invalidatorMaps[type];
        const invalidatorSet = keyedInvalidatorMap.get(key) || new Set();
        invalidatorSet.add(invalidator);
        keyedInvalidatorMap.set(key, invalidatorSet);
    }
    function unsubscribe(invalidator) {
        Object.keys(invalidatorMaps).forEach((type) => {
            const keyedInvalidatorMap = invalidatorMaps[type];
            const keys = keyedInvalidatorMap.keys();
            [...keys].forEach((key) => {
                const invalidatorSet = keyedInvalidatorMap.get(key);
                if (invalidatorSet && invalidatorSet.has(invalidator)) {
                    invalidatorSet.delete(invalidator);
                    keyedInvalidatorMap.set(key, invalidatorSet);
                }
            });
        });
    }
    function isStatus(status, options) {
        const queryKey = getQueryKey(options.query);
        const pageKey = getPageKey(options);
        const pageStatuses = statusMap.get(queryKey);
        if (pageStatuses) {
            return pageStatuses[pageKey] === status;
        }
        return false;
    }
    function setStatus(status, options) {
        const queryKey = getQueryKey(options.query);
        const pageKey = getPageKey(options);
        const pageStatuses = statusMap.get(queryKey) || {};
        pageStatuses[pageKey] = status;
        statusMap.set(queryKey, pageStatuses);
    }
    function clearStatus(options) {
        const queryKey = getQueryKey(options.query);
        const pageKey = getPageKey(options);
        const pageStatuses = statusMap.get(queryKey);
        if (pageStatuses && pageStatuses[pageKey]) {
            delete pageStatuses[pageKey];
            statusMap.set(queryKey, pageStatuses);
        }
    }
    function isLoading(options) {
        return isStatus('LOADING', options);
    }
    function isFailed(options) {
        return isStatus('FAILED', options);
    }
    function getTotal(options) {
        const queryKey = getQueryKey(options.query);
        return totalMap.get(queryKey);
    }
    function get(options) {
        const { pageNumber, pageSize } = options;
        const queryKey = getQueryKey(options.query);
        const cachedQueryData = queryMap.get(queryKey);
        if (!cachedQueryData) {
            return [];
        }
        if (pageSize && pageNumber) {
            const start = (pageNumber - 1) * pageSize;
            const end = start + pageSize;
            const total = totalMap.get(queryKey) || end;
            const calculatedEnd = Math.min(end, total);
            const requiredData = cachedQueryData.slice(start, calculatedEnd);
            if (requiredData.filter(() => true).length === calculatedEnd - start) {
                return requiredData;
            }
            else {
                return [];
            }
        }
        else {
            return cachedQueryData;
        }
    }
    function setData(start, data, size, query = {}) {
        const queryKey = getQueryKey(query);
        const cachedQueryData = queryMap.get(queryKey);
        const newQueryData = cachedQueryData && cachedQueryData.length ? cachedQueryData : [];
        for (let i = 0; i < size; i += 1) {
            newQueryData[start + i] = data[i];
        }
        queryMap.set(queryKey, newQueryData);
    }
    function getOrRead(options) {
        const { pageNumber, query, pageSize } = options;
        const queryKey = getQueryKey(options.query);
        if (isLoading(options) || isFailed(options)) {
            return undefined;
        }
        const cachedQueryData = queryMap.get(queryKey);
        if (cachedQueryData &&
            (!pageSize || !pageNumber) &&
            cachedQueryData.filter(() => true).length === totalMap.get(queryKey)) {
            return cachedQueryData;
        }
        if (pageSize && pageNumber && cachedQueryData && cachedQueryData.length) {
            const start = (pageNumber - 1) * pageSize;
            const end = start + pageSize;
            const total = totalMap.get(queryKey) || end;
            const calculatedEnd = Math.min(end, total);
            const requiredData = cachedQueryData.slice(start, calculatedEnd);
            if (requiredData.length && requiredData.filter(() => true).length === calculatedEnd - start) {
                return requiredData;
            }
        }
        const readOptions = {};
        if (pageNumber !== undefined && pageSize !== undefined) {
            readOptions.offset = (pageNumber - 1) * pageSize;
            readOptions.size = pageSize;
        }
        if (query) {
            readOptions.query = query;
        }
        const response = read(readOptions, (start = 0, data) => {
            setData(start, data, data.length, query);
        }, (query) => {
            return get({ query });
        });
        if (isAsyncResponse(response)) {
            setStatus('LOADING', options);
            invalidate(['loading'], options);
            response
                .then(({ data, total }) => {
                const start = readOptions.offset || 0;
                const size = Math.min(data.length, readOptions.size || data.length);
                setData(start, data, size, query);
                clearStatus(options);
                invalidate(['loading', 'data'], options);
                if (total !== totalMap.get(queryKey)) {
                    totalMap.set(queryKey, total);
                    invalidate(['total'], options);
                }
            })
                .catch(() => {
                setStatus('FAILED', options);
                invalidate(['failed', 'loading'], options);
            });
            return undefined;
        }
        else {
            const { data, total } = response;
            const start = readOptions.offset || 0;
            const size = Math.min(data.length, readOptions.size || data.length);
            setData(start, data, size, query);
            invalidate(['data'], options);
            if (total !== totalMap.get(queryKey)) {
                totalMap.set(queryKey, total);
                invalidate(['total'], options);
            }
            return data;
        }
    }
    function resource(data) {
        return {
            resource,
            data
        };
    }
    resource.getOrRead = getOrRead;
    resource.get = get;
    resource.getTotal = getTotal;
    resource.subscribe = subscribe;
    resource.unsubscribe = unsubscribe;
    resource.isFailed = isFailed;
    resource.isLoading = isLoading;
    resource.set = function set(data) {
        setData(0, data, data.length);
        totalMap.set(getQueryKey(), data.length);
    };
    return resource;
}
exports.createResource = createResource;
//# sourceMappingURL=resource.js.map