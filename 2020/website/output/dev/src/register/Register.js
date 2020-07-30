(window["dojoWebpackJsonpapconf2020"] = window["dojoWebpackJsonpapconf2020"] || []).push([["src/register/Register"],{

/***/ "./node_modules/@dojo/framework/core/middleware/dimensions.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/@dojo/framework/core/middleware/dimensions.mjs ***!
  \*********************************************************************/
/*! exports provided: dimensions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dimensions", function() { return dimensions; });
/* harmony import */ var _vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");

const factory = Object(_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({ node: _vdom__WEBPACK_IMPORTED_MODULE_0__["node"] });
const defaultDimensions = {
    client: {
        height: 0,
        left: 0,
        top: 0,
        width: 0
    },
    offset: {
        height: 0,
        left: 0,
        top: 0,
        width: 0
    },
    position: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
    },
    scroll: {
        height: 0,
        left: 0,
        top: 0,
        width: 0
    },
    size: {
        width: 0,
        height: 0
    }
};
const dimensions = factory(({ middleware: { node } }) => {
    return {
        get(key) {
            const domNode = node.get(key);
            if (!domNode) {
                return {
                    client: Object.assign({}, defaultDimensions.client),
                    offset: Object.assign({}, defaultDimensions.offset),
                    position: Object.assign({}, defaultDimensions.position),
                    scroll: Object.assign({}, defaultDimensions.scroll),
                    size: Object.assign({}, defaultDimensions.size)
                };
            }
            const boundingDimensions = domNode.getBoundingClientRect();
            const result = {
                client: {
                    height: domNode.clientHeight,
                    left: domNode.clientLeft,
                    top: domNode.clientTop,
                    width: domNode.clientWidth
                },
                offset: {
                    height: domNode.offsetHeight,
                    left: domNode.offsetLeft,
                    top: domNode.offsetTop,
                    width: domNode.offsetWidth
                },
                position: {
                    bottom: boundingDimensions.bottom,
                    left: boundingDimensions.left,
                    right: boundingDimensions.right,
                    top: boundingDimensions.top
                },
                scroll: {
                    height: domNode.scrollHeight,
                    left: domNode.scrollLeft,
                    top: domNode.scrollTop,
                    width: domNode.scrollWidth
                },
                size: {
                    width: boundingDimensions.width,
                    height: boundingDimensions.height
                }
            };
            return result;
        }
    };
});
/* harmony default export */ __webpack_exports__["default"] = (dimensions);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/middleware/focus.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@dojo/framework/core/middleware/focus.mjs ***!
  \****************************************************************/
/*! exports provided: focus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focus", function() { return focus; });
/* harmony import */ var _shim_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shim/global */ "./node_modules/@dojo/framework/shim/global.mjs");
/* harmony import */ var _vdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _icache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icache */ "./node_modules/@dojo/framework/core/middleware/icache.mjs");



const icache = Object(_icache__WEBPACK_IMPORTED_MODULE_2__["createICacheMiddleware"])();
const factory = Object(_vdom__WEBPACK_IMPORTED_MODULE_1__["create"])({ icache, diffProperty: _vdom__WEBPACK_IMPORTED_MODULE_1__["diffProperty"], node: _vdom__WEBPACK_IMPORTED_MODULE_1__["node"], destroy: _vdom__WEBPACK_IMPORTED_MODULE_1__["destroy"], invalidator: _vdom__WEBPACK_IMPORTED_MODULE_1__["invalidator"] }).properties();
const focus = factory(({ middleware: { icache, diffProperty, node, destroy, invalidator } }) => {
    let initialized = false;
    let currentElement;
    let previous = 0;
    const nodeSet = new Set();
    diffProperty('focus', (_, next) => {
        const result = next.focus && next.focus();
        if (result) {
            const current = icache.getOrSet('current', 0);
            icache.set('current', current + 1);
        }
    });
    function onFocusChange() {
        const activeElement = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].document.activeElement;
        if ((nodeSet.has(currentElement) || nodeSet.has(activeElement)) && currentElement !== activeElement) {
            invalidator();
        }
        currentElement = activeElement;
    }
    destroy(() => {
        _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].document.removeEventListener('focusin', onFocusChange);
        _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].document.removeEventListener('focusout', onFocusChange);
        nodeSet.clear();
    });
    return {
        shouldFocus() {
            const current = icache.get('current') || 0;
            const shouldFocus = current !== previous;
            previous = current;
            return shouldFocus;
        },
        focus() {
            const current = icache.getOrSet('current', 0);
            icache.set('current', current + 1);
        },
        isFocused(key) {
            const domNode = node.get(key);
            if (!domNode) {
                return false;
            }
            nodeSet.add(domNode);
            if (!initialized) {
                _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].document.addEventListener('focusin', onFocusChange);
                _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].document.addEventListener('focusout', onFocusChange);
                initialized = true;
            }
            return _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].document.activeElement === domNode;
        }
    };
});
/* harmony default export */ __webpack_exports__["default"] = (focus);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/middleware/validity.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@dojo/framework/core/middleware/validity.mjs ***!
  \*******************************************************************/
/*! exports provided: validity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validity", function() { return validity; });
/* harmony import */ var _vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");

const factory = Object(_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({ node: _vdom__WEBPACK_IMPORTED_MODULE_0__["node"], invalidator: _vdom__WEBPACK_IMPORTED_MODULE_0__["invalidator"] });
const validity = factory(function ({ middleware: { node, invalidator } }) {
    return {
        get(key, value) {
            const domNode = node.get(key);
            if (!domNode) {
                return { valid: undefined, message: '' };
            }
            if (value !== domNode.value) {
                setTimeout(() => invalidator());
            }
            return {
                valid: domNode.validity.valid,
                message: domNode.validationMessage
            };
        }
    };
});
/* harmony default export */ __webpack_exports__["default"] = (validity);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/util.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@dojo/framework/core/util.mjs ***!
  \****************************************************/
/*! exports provided: deepAssign, deepMixin, mixin, partial, guaranteeMinimumTimeout, debounce, throttle, uuid, decorate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepAssign", function() { return deepAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepMixin", function() { return deepMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return mixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return partial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guaranteeMinimumTimeout", function() { return guaranteeMinimumTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorate", function() { return decorate; });
/* harmony import */ var _vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");

const slice = Array.prototype.slice;
const hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Type guard that ensures that the value can be coerced to Object
 * to weed out host objects that do not derive from Object.
 * This function is used to check if we want to deep copy an object or not.
 * Note: In ES6 it is possible to modify an object's Symbol.toStringTag property, which will
 * change the value returned by `toString`. This is a rare edge case that is difficult to handle,
 * so it is not handled here.
 * @param  value The value to check
 * @return       If the value is coercible into an Object
 */
function shouldDeepCopyObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}
function copyArray(array, inherited) {
    return array.map(function (item) {
        if (Array.isArray(item)) {
            return copyArray(item, inherited);
        }
        return !shouldDeepCopyObject(item)
            ? item
            : _mixin({
                deep: true,
                inherited: inherited,
                sources: [item],
                target: {}
            });
    });
}
function _mixin(kwArgs) {
    const deep = kwArgs.deep;
    const inherited = kwArgs.inherited;
    const target = kwArgs.target;
    const copied = kwArgs.copied || [];
    const copiedClone = [...copied];
    for (let i = 0; i < kwArgs.sources.length; i++) {
        const source = kwArgs.sources[i];
        if (source === null || source === undefined) {
            continue;
        }
        for (let key in source) {
            if (inherited || hasOwnProperty.call(source, key)) {
                let value = source[key];
                if (copiedClone.indexOf(value) !== -1) {
                    continue;
                }
                if (deep) {
                    if (Array.isArray(value)) {
                        value = copyArray(value, inherited);
                    }
                    else if (shouldDeepCopyObject(value)) {
                        const targetValue = target[key] || {};
                        copied.push(source);
                        value = _mixin({
                            deep: true,
                            inherited: inherited,
                            sources: [value],
                            target: targetValue,
                            copied
                        });
                    }
                }
                target[key] = value;
            }
        }
    }
    return target;
}
function deepAssign(target, ...sources) {
    return _mixin({
        deep: true,
        inherited: false,
        sources: sources,
        target: target
    });
}
function deepMixin(target, ...sources) {
    return _mixin({
        deep: true,
        inherited: true,
        sources: sources,
        target: target
    });
}
function mixin(target, ...sources) {
    return _mixin({
        deep: false,
        inherited: true,
        sources: sources,
        target: target
    });
}
/**
 * Returns a function which invokes the given function with the given arguments prepended to its argument list.
 * Like `Function.prototype.bind`, but does not alter execution context.
 *
 * @param targetFunction The function that needs to be bound
 * @param suppliedArgs An optional array of arguments to prepend to the `targetFunction` arguments list
 * @return The bound function
 */
function partial(targetFunction, ...suppliedArgs) {
    return function () {
        const args = arguments.length ? suppliedArgs.concat(slice.call(arguments)) : suppliedArgs;
        return targetFunction.apply(this, args);
    };
}
function guaranteeMinimumTimeout(callback, delay) {
    const startTime = Date.now();
    let timerId;
    function timeoutHandler() {
        const delta = Date.now() - startTime;
        if (delay == null || delta >= delay) {
            callback();
        }
        else {
            timerId = setTimeout(timeoutHandler, delay - delta);
        }
    }
    timerId = setTimeout(timeoutHandler, delay);
    return {
        destroy: () => {
            if (timerId != null) {
                clearTimeout(timerId);
                timerId = null;
            }
        }
    };
}
function debounce(callback, delay) {
    let timer;
    return function () {
        timer && timer.destroy();
        let context = this;
        let args = arguments;
        timer = guaranteeMinimumTimeout(function () {
            callback.apply(context, args);
            args = context = timer = null;
        }, delay);
    };
}
function throttle(callback, delay) {
    let ran;
    return function () {
        if (ran) {
            return;
        }
        ran = true;
        let args = arguments;
        callback.apply(this, args);
        guaranteeMinimumTimeout(function () {
            ran = null;
        }, delay);
    };
}
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
function decorate(dNodes, optionsOrModifier, predicate) {
    let shallow = false;
    let modifier;
    if (typeof optionsOrModifier === 'function') {
        modifier = optionsOrModifier;
    }
    else {
        modifier = optionsOrModifier.modifier;
        predicate = optionsOrModifier.predicate;
        shallow = optionsOrModifier.shallow || false;
    }
    let nodes = Array.isArray(dNodes) ? [...dNodes] : [dNodes];
    function breaker() {
        nodes = [];
    }
    while (nodes.length) {
        const node = nodes.shift();
        if (node && node !== true) {
            if (!shallow && (Object(_vdom__WEBPACK_IMPORTED_MODULE_0__["isWNode"])(node) || Object(_vdom__WEBPACK_IMPORTED_MODULE_0__["isVNode"])(node)) && node.children) {
                nodes = [...nodes, ...node.children];
            }
            if (!predicate || predicate(node)) {
                modifier(node, breaker);
            }
        }
    }
    return dNodes;
}


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, main, scripts, dependencies, devDependencies, redaktor, default */
/***/ (function(module) {

module.exports = {"name":"apconf2020","version":"1.0.0","main":"src/main.tsx","scripts":{"dev":"dojo build -m dev -w -s","build":"dojo build","build:ghpages":"dojo build --dojorc .dojorc-ghpages","build:test":"dojo build -m unit","lint":"eslint \"src/**/*.{ts,tsx}\"","test":"run-s build:test test:local","test:ci":"run-s build:test test:headless","test:local":"dojo test -c local","test:headless":"dojo test -c headless"},"dependencies":{"@dojo/framework":"next","snarkdown":"1.2.2","tslib":"^1.10.0"},"devDependencies":{"@dojo/cli":"next","@dojo/cli-build-app":"next","@dojo/cli-test-intern":"next","@dojo/scripts":"^4.0.2","@types/node":"^12.12.32","@types/sinon":"^7.5.2","@typescript-eslint/eslint-plugin":"2.25.0","@typescript-eslint/parser":"2.25.0","eslint":"6.8.0","eslint-config-prettier":"6.10.1","eslint-plugin-import":"2.20.2","npm-run-all":"4.1.5","sinon":"^9.0.1","typescript":"~3.4.5"},"redaktor":{"_serverHint":"The full URL to the webserver. Can be a static directory, should have trailing slash:","server":"https://apconf.uber.space/server/"}};

/***/ }),

/***/ "./src/assets/photos/low00_apconf_hellekin_001_hd.jpg":
/*!************************************************************!*\
  !*** ./src/assets/photos/low00_apconf_hellekin_001_hd.jpg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "low00_apconf_hellekin_001_hd.2wI1Qlo1.jpg";

/***/ }),

/***/ "./src/assets/photos/low04_apconf_sl_002_hd.jpg":
/*!******************************************************!*\
  !*** ./src/assets/photos/low04_apconf_sl_002_hd.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "low04_apconf_sl_002_hd.17CYAaX3.jpg";

/***/ }),

/***/ "./src/assets/photos/low05_apconf_sl_003_hd.jpg":
/*!******************************************************!*\
  !*** ./src/assets/photos/low05_apconf_sl_003_hd.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "low05_apconf_sl_003_hd.3nfh05rK.jpg";

/***/ }),

/***/ "./src/assets/photos/low32_apconf_sl029.jpg":
/*!**************************************************!*\
  !*** ./src/assets/photos/low32_apconf_sl029.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "low32_apconf_sl029.3S_wn-cL.jpg";

/***/ }),

/***/ "./src/assets/timezones.ts":
/*!*********************************!*\
  !*** ./src/assets/timezones.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const zones = {
    Africa: [
        'Abidjan', 'Accra', 'Nairobi', 'Algiers', 'Lagos', 'Bissau', 'Maputo', 'Cairo', 'Casablanca',
        'Ceuta', 'El_Aaiun', 'Johannesburg', 'Juba', 'Khartoum', 'Monrovia', 'Ndjamena', 'Sao_Tome',
        'Tripoli', 'Tunis', 'Windhoek'
    ],
    America: [
        'Adak', 'Anchorage', 'Port_of_Spain', 'Araguaina', 'Argentina', 'Curacao', 'Asuncion', 'Atikokan',
        'Bahia_Banderas', 'Bahia', 'Barbados', 'Belem', 'Belize', 'Blanc-Sablon', 'Boa_Vista', 'Bogota',
        'Boise', 'Cambridge_Bay', 'Campo_Grande', 'Cancun', 'Caracas', 'Cayenne', 'Panama', 'Chicago',
        'Chihuahua', 'Costa_Rica', 'Creston', 'Cuiaba', 'Danmarkshavn', 'Dawson_Creek', 'Dawson', 'Denver',
        'Detroit', 'Edmonton', 'Eirunepe', 'El_Salvador', 'Tijuana', 'Fort_Nelson', 'Fort_Wayne', 'Fortaleza',
        'Glace_Bay', 'Godthab', 'Goose_Bay', 'Grand_Turk', 'Guatemala', 'Guayaquil', 'Guyana', 'Halifax', 'Havana',
        'Hermosillo', 'Indiana', 'Inuvik', 'Iqaluit', 'Jamaica', 'Juneau', 'Kentucky', 'La_Paz', 'Lima', 'Los_Angeles',
        'Maceio', 'Managua', 'Manaus', 'Martinique', 'Matamoros', 'Mazatlan', 'Menominee', 'Merida', 'Metlakatla',
        'Mexico_City', 'Miquelon', 'Moncton', 'Monterrey', 'Montevideo', 'Toronto', 'Nassau', 'New_York', 'Nipigon',
        'Nome', 'Noronha', 'North_Dakota', 'Ojinaga', 'Pangnirtung', 'Paramaribo', 'Phoenix', 'Port-au-Prince', 'Rio_Branco',
        'Porto_Velho', 'Puerto_Rico', 'Punta_Arenas', 'Rainy_River', 'Rankin_Inlet', 'Recife', 'Regina', 'Resolute',
        'Santarem', 'Santiago', 'Santo_Domingo', 'Sao_Paulo', 'Scoresbysund', 'Sitka', 'St_Johns', 'Swift_Current',
        'Tegucigalpa', 'Thule', 'Thunder_Bay', 'Vancouver', 'Whitehorse', 'Winnipeg', 'Yakutat', 'Yellowknife'
    ],
    Antarctica: ['Casey', 'Davis', 'DumontDUrville', 'Macquarie', 'Mawson', 'Palmer', 'Rothera', 'Syowa', 'Troll', 'Vostok'],
    Pacific: [
        'Auckland', 'Easter', 'Port_Moresby', 'Tarawa', 'Palau', 'Kwajalein', 'Chatham', 'Apia', 'Bougainville', 'Chuuk', 'Efate',
        'Enderbury', 'Fakaofo', 'Fiji', 'Galapagos', 'Gambier', 'Guadalcanal', 'Guam', 'Honolulu', 'Kiritimati', 'Kosrae', 'Majuro',
        'Marquesas', 'Pago_Pago', 'Nauru', 'Niue', 'Norfolk', 'Noumea', 'Pitcairn', 'Pohnpei', 'Rarotonga', 'Tahiti', 'Tongatapu'
    ],
    Europe: [
        'Oslo', 'Istanbul', 'Dublin', 'Amsterdam', 'Andorra', 'Astrakhan', 'Athens', 'London', 'Belgrade', 'Berlin', 'Prague', 'Brussels',
        'Bucharest', 'Budapest', 'Zurich', 'Chisinau', 'Copenhagen', 'Gibraltar', 'Helsinki', 'Kaliningrad', 'Kiev', 'Kirov', 'Lisbon',
        'Luxembourg', 'Madrid', 'Malta', 'Minsk', 'Monaco', 'Moscow', 'Paris', 'Riga', 'Rome', 'Samara', 'Saratov', 'Simferopol', 'Sofia',
        'Stockholm', 'Tallinn', 'Tirane', 'Ulyanovsk', 'Uzhgorod', 'Vienna', 'Vilnius', 'Volgograd', 'Warsaw', 'Zaporozhye'
    ],
    Asia: [
        'Riyadh', 'Almaty', 'Amman', 'Anadyr', 'Aqtau', 'Aqtobe', 'Ashgabat', 'Atyrau', 'Baghdad', 'Qatar', 'Baku', 'Bangkok',
        'Barnaul', 'Beirut', 'Bishkek', 'Brunei', 'Kolkata', 'Chita', 'Choibalsan', 'Shanghai', 'Colombo', 'Dhaka', 'Damascus', 'Dili',
        'Dubai', 'Dushanbe', 'Famagusta', 'Gaza', 'Hebron', 'Ho_Chi_Minh', 'Hong_Kong', 'Hovd', 'Irkutsk', 'Jakarta', 'Jayapura',
        'Jerusalem', 'Kabul', 'Kamchatka', 'Karachi', 'Urumqi', 'Kathmandu', 'Khandyga', 'Krasnoyarsk', 'Kuala_Lumpur', 'Kuching',
        'Macau', 'Magadan', 'Makassar', 'Manila', 'Nicosia', 'Novokuznetsk', 'Novosibirsk', 'Omsk', 'Oral', 'Pontianak', 'Pyongyang',
        'Qostanay', 'Qyzylorda', 'Rangoon', 'Sakhalin', 'Samarkand', 'Seoul', 'Srednekolymsk', 'Taipei', 'Tashkent', 'Tbilisi',
        'Tehran', 'Thimphu', 'Tokyo', 'Tomsk', 'Ulaanbaatar', 'Ust-Nera', 'Vladivostok', 'Yakutsk', 'Yekaterinburg', 'Yerevan'
    ],
    Atlantic: ['Azores', 'Bermuda', 'Canary', 'Cape_Verde', 'Faroe', 'Madeira', 'Reykjavik', 'South_Georgia', 'Stanley'],
    Australia: [
        'Sydney', 'Adelaide', 'Brisbane', 'Broken_Hill', 'Currie', 'Darwin', 'Eucla', 'Hobart',
        'Lord_Howe', 'Lindeman', 'Melbourne', 'Perth'
    ],
    Indian: ['Christmas', 'Chagos', 'Cocos', 'Kerguelen', 'Mahe', 'Maldives', 'Mauritius', 'Reunion'],
    Etc: [...Array(27).keys()].map((v, i) => `GMT${i < 15 ? `-${i}` : `+${i - 14}`}`).concat('UTC')
};
const timezones = Object.keys(zones).reduce((a, continent) => {
    a = a.concat(zones[continent].map((city) => `${continent}/${city}`));
    return a;
}, []).concat(['CET', 'CST6CDT', 'EET', 'EST', 'EST5EDT']);
/* harmony default export */ __webpack_exports__["default"] = (timezones);


/***/ }),

/***/ "./src/button/index.tsx":
/*!******************************!*\
  !*** ./src/button/index.tsx ***!
  \******************************/
/*! exports provided: Button, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util */ "./src/common/util.ts");
/* harmony import */ var _dojo_framework_core_middleware_dimensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dojo/framework/core/middleware/dimensions */ "./node_modules/@dojo/framework/core/middleware/dimensions.mjs");
/* harmony import */ var _dojo_framework_core_middleware_focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dojo/framework/core/middleware/focus */ "./node_modules/@dojo/framework/core/middleware/focus.mjs");
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _middleware_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../middleware/theme */ "./src/middleware/theme.tsx");
/* harmony import */ var _theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/material/_ui.m.css */ "./src/theme/material/_ui.m.css");
/* harmony import */ var _theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _theme_material_color_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/material/_color.m.css */ "./src/theme/material/_color.m.css");
/* harmony import */ var _theme_material_color_m_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_theme_material_color_m_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_material_button_m_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/material/button.m.css */ "./src/theme/material/button.m.css");
/* harmony import */ var _theme_material_button_m_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_theme_material_button_m_css__WEBPACK_IMPORTED_MODULE_7__);








/* We make sure that the event has offsetX and offsetY
// (some Pointer Events polyfills do not)
evt. set the CSS variables if 'animated'
and return the event */
/* TODO FIXME : set only on root ! */
const devicesAll = ['mouse', 'pen', 'touch'];
function setClickDimensions(e, devices, dim) {
    const docStyle = document.documentElement.style;
    const elW = dim.offset.width;
    if (typeof e.offsetX !== 'number') {
        e.offsetX = (e.clientX - dim.position.left) || -1;
    }
    if (typeof e.offsetY !== 'number') {
        e.offsetY = (e.clientY - dim.position.top) || -1;
    }
    const doSet = devices.indexOf(e.pointerType) > -1;
    if (!!doSet && !!elW && typeof e.offsetX === 'number' && e.offsetX > -1) {
        const btnW = elW / 2 + Math.abs(elW / 2 - e.offsetX);
        docStyle.setProperty('--redaktor-btn-w', `${btnW}px`);
        docStyle.setProperty('--redaktor-btn-x', `${e.offsetX}px`);
        docStyle.setProperty('--redaktor-btn-y', `${e.offsetY}px`);
    }
    return e;
}
const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["create"])({ dimensions: _dojo_framework_core_middleware_dimensions__WEBPACK_IMPORTED_MODULE_1__["dimensions"], focus: _dojo_framework_core_middleware_focus__WEBPACK_IMPORTED_MODULE_2__["focus"], theme: _middleware_theme__WEBPACK_IMPORTED_MODULE_4__["theme"] }).properties();
const Button = factory(function Button({ children, id, middleware: { dimensions, focus, theme }, properties }) {
    const { aria = {}, animated = true, variant = 'flat', responsive = false, disabled, widgetId, name, pressed, type = 'button', value, onClick, onOut, onOver, onDown, onUp, onBlur, onFocus } = properties();
    const themedCss = theme.classes(_theme_material_button_m_css__WEBPACK_IMPORTED_MODULE_7__);
    const idBase = widgetId || `button-${id}`;
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["tsx"])("button", Object.assign({ key: "root", classes: [
            theme.variant(),
            themedCss.root,
            themedCss[variant],
            theme.sized(_theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_5__),
            theme.spaced(_theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_5__),
            theme.colored(_theme_material_color_m_css__WEBPACK_IMPORTED_MODULE_6__),
            theme.animated(themedCss),
            responsive ? themedCss.responsive : null,
            disabled ? themedCss.disabled : null,
            pressed ? themedCss.pressed : null
        ], disabled: disabled, id: idBase, focus: focus.shouldFocus(), name: name, type: type, value: value, onblur: () => onBlur && onBlur(), onclick: (event) => {
            event.stopPropagation();
            onClick && onClick();
        }, onfocus: () => onFocus && onFocus(), onpointerenter: () => onOver && onOver(), onpointerleave: () => onOut && onOut(), onpointerdown: (event) => {
            event.stopPropagation();
            const devs = !animated ? [] :
                (Array.isArray(animated) ? animated : devicesAll);
            const evt = setClickDimensions(event, devs, dimensions.get('root'));
            return onDown && onDown(evt);
        }, onpointerup: () => onUp && onUp() }, Object(_common_util__WEBPACK_IMPORTED_MODULE_0__["formatAriaProperties"])(aria), { onanimationend: "this.blur()", "aria-pressed": typeof pressed === 'boolean' ? pressed.toString() : null }), children()));
});
/* harmony default export */ __webpack_exports__["default"] = (Button);


/***/ }),

/***/ "./src/checkbox/index.tsx":
/*!********************************!*\
  !*** ./src/checkbox/index.tsx ***!
  \********************************/
/*! exports provided: Checkbox, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var _dojo_framework_core_middleware_focus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dojo/framework/core/middleware/focus */ "./node_modules/@dojo/framework/core/middleware/focus.mjs");
/* harmony import */ var _middleware_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/theme */ "./src/middleware/theme.tsx");
/* harmony import */ var _dojo_framework_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dojo/framework/core/util */ "./node_modules/@dojo/framework/core/util.mjs");
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/material/_ui.m.css */ "./src/theme/material/_ui.m.css");
/* harmony import */ var _theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme_material_color_m_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/material/_color.m.css */ "./src/theme/material/_color.m.css");
/* harmony import */ var _theme_material_color_m_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_theme_material_color_m_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _theme_material_checkbox_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/material/checkbox.m.css */ "./src/theme/material/checkbox.m.css");
/* harmony import */ var _theme_material_checkbox_m_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_theme_material_checkbox_m_css__WEBPACK_IMPORTED_MODULE_6__);




// import Label from '../label/index';



const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["create"])({ theme: _middleware_theme__WEBPACK_IMPORTED_MODULE_1__["theme"], focus: _dojo_framework_core_middleware_focus__WEBPACK_IMPORTED_MODULE_0__["default"] })
    .properties()
    .children();
const Checkbox = factory(function Checkbox({ children, properties, id, middleware: { theme, focus } }) {
    const [label] = children();
    const themedCss = theme.classes(_theme_material_checkbox_m_css__WEBPACK_IMPORTED_MODULE_6__);
    const { _inputType = 'checkbox', aria = {}, variant = 'flat', checked = false, icon = 'checkmark', disabled, labelHidden, name, onBlur, onFocus, onValue, onOut, onOver, readOnly, required, theme: themeProp, valid, value, widgetId } = properties();
    const idBase = widgetId || `radio-${id}` || Object(_dojo_framework_core_util__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["tsx"])("label", { key: "root", classes: [
            theme.variant(),
            themedCss.root,
            theme.sized(_theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_4__),
            theme.spaced(_theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_4__),
            theme.colored(_theme_material_color_m_css__WEBPACK_IMPORTED_MODULE_5__),
            theme.animated(themedCss),
            checked ? themedCss.checked : null,
            disabled ? themedCss.disabled : null,
            valid === false ? themedCss.invalid : null,
            valid === true ? themedCss.valid : null,
            readOnly ? themedCss.readonly : null,
            required ? themedCss.required : null,
            focus.isFocused('root') ? themedCss.focused : null
        ], theme: themeProp, disabled: disabled, focused: focus.isFocused('root'), valid: valid, readOnly: readOnly, required: required, hidden: labelHidden, for: idBase, secondary: true },
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["tsx"])("input", Object.assign({ key: "input", id: idBase }, Object(_middleware_theme__WEBPACK_IMPORTED_MODULE_1__["formatAriaProperties"])(aria), { classes: themedCss.input, checked: checked, disabled: disabled, focus: focus.shouldFocus(), "aria-invalid": valid === false ? 'true' : null, name: name, readonly: readOnly, "aria-readonly": readOnly === true ? 'true' : null, required: required, type: _inputType, value: value, onblur: () => onBlur && onBlur(), onchange: (event) => {
                event.stopPropagation();
                const checkbox = event.target;
                onValue && onValue(checkbox.checked);
            }, onfocus: () => onFocus && onFocus(), onpointerenter: () => onOver && onOver(), onpointerleave: () => onOut && onOut() })),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["tsx"])("div", { key: "box", classes: [
                themedCss.box,
                themedCss[variant],
                themedCss[icon]
            ] }),
        label));
});
/* harmony default export */ __webpack_exports__["default"] = (Checkbox);


/***/ }),

/***/ "./src/common/styles/base.m.css":
/*!**************************************!*\
  !*** ./src/common/styles/base.m.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/base","visuallyHidden":"base-m__visuallyHidden__ecb8b21AeWe","focusable":"base-m__focusable__ecb8b21_qAN","hidden":"base-m__hidden__ecb8b23QddU"};

/***/ }),

/***/ "./src/email-input/index.tsx":
/*!***********************************!*\
  !*** ./src/email-input/index.tsx ***!
  \***********************************/
/*! exports provided: EmailInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailInput", function() { return EmailInput; });
/* harmony import */ var _text_input___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../text-input/ */ "./src/text-input/index.tsx");
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _dojo_framework_core_middleware_icache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dojo/framework/core/middleware/icache */ "./node_modules/@dojo/framework/core/middleware/icache.mjs");
/* harmony import */ var _middleware_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middleware/theme */ "./src/middleware/theme.tsx");
/* harmony import */ var _theme_material_text_input_m_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/material/text-input.m.css */ "./src/theme/material/text-input.m.css");
/* harmony import */ var _theme_material_text_input_m_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_theme_material_text_input_m_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme_material_email_input_m_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/material/email-input.m.css */ "./src/theme/material/email-input.m.css");
/* harmony import */ var _theme_material_email_input_m_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_theme_material_email_input_m_css__WEBPACK_IMPORTED_MODULE_5__);






const icache = Object(_dojo_framework_core_middleware_icache__WEBPACK_IMPORTED_MODULE_2__["createICacheMiddleware"])();
const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_1__["create"])({ icache, theme: _middleware_theme__WEBPACK_IMPORTED_MODULE_3__["default"] })
    .properties()
    .children();
const EmailInput = factory(function ({ properties, children, middleware: { icache, theme } }) {
    const { get, set } = icache;
    const props = properties();
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_1__["tsx"])(_text_input___WEBPACK_IMPORTED_MODULE_0__["TextInput"], Object.assign({}, props, { type: 'email', classes: (props.classes || [_theme_material_email_input_m_css__WEBPACK_IMPORTED_MODULE_5__["helperText"]]), onValidate: (valid, message) => {
            set('valid', valid);
            set('message', message);
            props.onValidate && props.onValidate(valid, message);
        }, valid: { valid: get('valid'), message: get('message') }, theme: theme.compose(_theme_material_text_input_m_css__WEBPACK_IMPORTED_MODULE_4__, _theme_material_email_input_m_css__WEBPACK_IMPORTED_MODULE_5__) }), children()));
});
/* harmony default export */ __webpack_exports__["default"] = (EmailInput);


/***/ }),

/***/ "./src/helper-text/index.tsx":
/*!***********************************!*\
  !*** ./src/helper-text/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dojo_framework_core_middleware_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dojo/framework/core/middleware/theme */ "./node_modules/@dojo/framework/core/middleware/theme.mjs");
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _theme_material_helper_text_m_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/material/helper-text.m.css */ "./src/theme/material/helper-text.m.css");
/* harmony import */ var _theme_material_helper_text_m_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_material_helper_text_m_css__WEBPACK_IMPORTED_MODULE_2__);



const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_1__["create"])({ theme: _dojo_framework_core_middleware_theme__WEBPACK_IMPORTED_MODULE_0__["default"] }).properties();
/* harmony default export */ __webpack_exports__["default"] = (factory(function HelperText({ properties, middleware: { theme } }) {
    const { text, valid, classes = [] } = properties();
    const themedCss = theme.classes(_theme_material_helper_text_m_css__WEBPACK_IMPORTED_MODULE_2__);
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_1__["tsx"])("div", { key: "root", classes: [
            theme.variant(),
            themedCss.root,
            valid === true ? themedCss.valid : null,
            valid === false ? themedCss.invalid : null,
            ...(classes || [])
        ] }, text && (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_1__["tsx"])("p", { key: "text", classes: themedCss.text, "aria-hidden": 'true', title: text }, text))));
}));


/***/ }),

/***/ "./src/label/index.tsx":
/*!*****************************!*\
  !*** ./src/label/index.tsx ***!
  \*****************************/
/*! exports provided: Label, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _common_styles_base_m_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/styles/base.m.css */ "./src/common/styles/base.m.css");
/* harmony import */ var _common_styles_base_m_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_styles_base_m_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _middleware_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/theme */ "./src/middleware/theme.tsx");
/* harmony import */ var _theme_default_label_m_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/default/label.m.css */ "./src/theme/default/label.m.css");
/* harmony import */ var _theme_default_label_m_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_default_label_m_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/util */ "./src/common/util.ts");





const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({ theme: _middleware_theme__WEBPACK_IMPORTED_MODULE_2__["default"] }).properties();
const Label = factory(function Label({ properties, id, children, middleware: { theme } }) {
    const { aria = {}, active, disabled, focused, forId, hidden, readOnly, required, secondary, valid, widgetId = `label-${id}` } = properties();
    const themeCss = theme.classes(_theme_default_label_m_css__WEBPACK_IMPORTED_MODULE_3__);
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("label", Object.assign({}, Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["formatAriaProperties"])(aria), { id: widgetId, classes: [
            theme.variant(),
            themeCss.root,
            disabled ? themeCss.disabled : null,
            focused ? themeCss.focused : null,
            valid === true ? themeCss.valid : null,
            valid === false ? themeCss.invalid : null,
            readOnly ? themeCss.readonly : null,
            required ? themeCss.required : null,
            secondary ? themeCss.secondary : null,
            active ? themeCss.active : null,
            hidden ? _common_styles_base_m_css__WEBPACK_IMPORTED_MODULE_1__["visuallyHidden"] : null
        ], for: forId }), children()));
});
/* harmony default export */ __webpack_exports__["default"] = (Label);


/***/ }),

/***/ "./src/register/Register.m.css":
/*!*************************************!*\
  !*** ./src/register/Register.m.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/Register","root":"Register-m__root__ecb8b23NdBt","sent":"Register-m__sent__ecb8b2CoryU","figure":"Register-m__figure__ecb8b237kjX","noMB":"Register-m__noMB__ecb8b2ZuEjF","img":"Register-m__img__ecb8b2_zpxW","m8l":"Register-m__m8l__ecb8b21TZsr","stub":"Register-m__stub__ecb8b22qjyl","check":"Register-m__check__ecb8b21-y1O","success":"Register-m__success__ecb8b2IjOjJ","confirmed":"Register-m__confirmed__ecb8b23CXsb","confirmedTrp":"Register-m__confirmedTrp__ecb8b21nnIA","confirmedBottom":"Register-m__confirmedBottom__ecb8b21M__j","helperText":"Register-m__helperText__ecb8b226aZT _ui-m__s__ecb8b21rol0 _typo__s__ecb8b22332p","codeOfConduct":"Register-m__codeOfConduct__ecb8b21Ez9F","widescreen":"Register-m__widescreen__ecb8b22G76g","bottom":"Register-m__bottom__ecb8b2T9ymp","flex":"Register-m__flex__ecb8b2gbWUi","flexBottom":"Register-m__flexBottom__ecb8b23SI5M","description":"Register-m__description__ecb8b22mX1u _typo__serif__ecb8b22EAdY","descCaption":"Register-m__descCaption__ecb8b23NibH","proposals":"Register-m__proposals__ecb8b2gYKWI","help":"Register-m__help__ecb8b27c_WW","submit":"Register-m__submit__ecb8b2KWcJi","asideColumn":"Register-m__asideColumn__ecb8b23KXzX","addControl":"Register-m__addControl__ecb8b23j3Q8","top":"Register-m__top__ecb8b2-zj1x","line":"Register-m__line__ecb8b2BkVna","num":"Register-m__num__ecb8b2GoNiw _ui-m__s__ecb8b21rol0 _typo__s__ecb8b22332p","caption":"Register-m__caption__ecb8b21YYzO _ui-m__s__ecb8b21rol0 _typo__s__ecb8b22332p","input":"Register-m__input__ecb8b2LEmkB","tzCaption":"Register-m__tzCaption__ecb8b21It2A","available":"Register-m__available__ecb8b21iWh9","number":"Register-m__number__ecb8b23orfM","invite":"Register-m__invite__ecb8b21pAKQ _ui-m__xl__ecb8b21ewdq _typo__xl__ecb8b2-KCUG","big":"Register-m__big__ecb8b21NOQh","right":"Register-m__right__ecb8b21euUk","controlWrapper":"Register-m__controlWrapper__ecb8b2IbA_Z","angel":"Register-m__angel__ecb8b2r1gKa","sentAside":"Register-m__sentAside__ecb8b21FdRu"};

/***/ }),

/***/ "./src/register/Register.tsx":
/*!***********************************!*\
  !*** ./src/register/Register.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _dojo_framework_core_middleware_icache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dojo/framework/core/middleware/icache */ "./node_modules/@dojo/framework/core/middleware/icache.mjs");
/* harmony import */ var _dojo_framework_core_middleware_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dojo/framework/core/middleware/i18n */ "./node_modules/@dojo/framework/core/middleware/i18n.mjs");
/* harmony import */ var _middleware_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middleware/theme */ "./src/middleware/theme.tsx");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button */ "./src/button/index.tsx");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../checkbox */ "./src/checkbox/index.tsx");
/* harmony import */ var _text_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../text-input */ "./src/text-input/index.tsx");
/* harmony import */ var _text_area__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../text-area */ "./src/text-area/index.tsx");
/* harmony import */ var _email_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../email-input */ "./src/email-input/index.tsx");
/* harmony import */ var _assets_timezones__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/timezones */ "./src/assets/timezones.ts");
/* harmony import */ var _AppContent_m_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../AppContent.m.css */ "./src/AppContent.m.css");
/* harmony import */ var _AppContent_m_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_AppContent_m_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Register_m_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Register.m.css */ "./src/register/Register.m.css");
/* harmony import */ var _Register_m_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Register_m_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _nls_main__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nls/main */ "./src/register/nls/main.ts");






// import Radio from '../radio';



// import RangeSlider from '../range-slider';




const snarkdown = __webpack_require__(/*! snarkdown */ "./node_modules/snarkdown/dist/snarkdown.es.js").default;
const packageJSON = __webpack_require__(/*! ../../package.json */ "./package.json");
const icache = Object(_dojo_framework_core_middleware_icache__WEBPACK_IMPORTED_MODULE_1__["createICacheMiddleware"])();
const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({ icache, theme: _middleware_theme__WEBPACK_IMPORTED_MODULE_3__["default"], i18n: _dojo_framework_core_middleware_i18n__WEBPACK_IMPORTED_MODULE_2__["default"] }).properties();
const apconf2019_1 = __webpack_require__(/*! ../assets/photos/low04_apconf_sl_002_hd.jpg */ "./src/assets/photos/low04_apconf_sl_002_hd.jpg");
const apconf2019_2 = __webpack_require__(/*! ../assets/photos/low00_apconf_hellekin_001_hd.jpg */ "./src/assets/photos/low00_apconf_hellekin_001_hd.jpg");
const apconf2019_3 = __webpack_require__(/*! ../assets/photos/low32_apconf_sl029.jpg */ "./src/assets/photos/low32_apconf_sl029.jpg");
const apconf2019_4 = __webpack_require__(/*! ../assets/photos/low05_apconf_sl_003_hd.jpg */ "./src/assets/photos/low05_apconf_sl_003_hd.jpg");
/*
TODO : customValidator for the badge name for uniqueness ???

video angel
moderation angel

code of conduct Check
ok recording Check

Talk / BoF CFP


<RangeSlider
    minimumLabel={`${minmax.min} h`}
    min={minmax.min}
    minConstraint={10}
    minName="availableFrom"
    maximumLabel={`${minmax.max > 24 ? minmax.max-24 : minmax.max} h`}
    max={minmax.max}
    maxName="availableTo"
    onValue={(v) => {
        icache.set('available',`${v.min} – ${v.max > 24 ? v.max-24 : v.max} h`)
    }}
    labelHidden={false}
/>
*/
/* harmony default export */ __webpack_exports__["default"] = (factory(function Register({ properties, middleware: { icache, theme, i18n } }) {
    const { get, set } = icache;
    const { messages } = i18n.localize(_nls_main__WEBPACK_IMPORTED_MODULE_12__["default"]);
    const themedCss = theme.classes(_Register_m_css__WEBPACK_IMPORTED_MODULE_11__);
    const registerHelper = [themedCss.helperText];
    const timeOptions = Object.assign({}, Intl.DateTimeFormat().resolvedOptions(), { offset: new Date().getTimezoneOffset() });
    const { state = 'new' } = properties();
    if (state === 'sent') {
        return Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("output", { classes: [_AppContent_m_css__WEBPACK_IMPORTED_MODULE_10__["blue"], _AppContent_m_css__WEBPACK_IMPORTED_MODULE_10__["root"], themedCss.root, themedCss.sent] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: _AppContent_m_css__WEBPACK_IMPORTED_MODULE_10__["headline"] },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h1", null, messages.headline)),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: _AppContent_m_css__WEBPACK_IMPORTED_MODULE_10__["headline"] },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h4", null, messages.bylineSent)),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", null),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: _AppContent_m_css__WEBPACK_IMPORTED_MODULE_10__["autoColumn"] },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", { class: 'serif', innerHTML: snarkdown(messages.mailSent) })),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [_AppContent_m_css__WEBPACK_IMPORTED_MODULE_10__["asideColumn"], themedCss.sentAside] }));
    }
    /*
        const TIMES = [
            { US: 1, America: 1, Paific: 1, Brazil: 1, Canada: 1, Antarctica: 1, min: 6, max: 19 },
            { Europe: 1, Africa: 1, min: 14, max: 27 },
            { Asia: 1, Atlantic: 1, Australia: 1, min: 5, max: 27 }
        ];
        const region = icache.getOrSet('TZ', timeOptions.timeZone).split('/')[0];
    
        const minmax = TIMES.reduce((o, t) => {
            if (t.hasOwnProperty(region)) {
                o.min = t.min;
                o.max = t.max;
            }
            return o
        }, {min: 0, max: 24});*/
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("form", { action: state === 'confirmed' ? '#' : packageJSON.redaktor.server, method: "POST", classes: [_AppContent_m_css__WEBPACK_IMPORTED_MODULE_10__["blue"], _AppContent_m_css__WEBPACK_IMPORTED_MODULE_10__["root"], themedCss.root] },
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("datalist", { id: 'timezones' }, _assets_timezones__WEBPACK_IMPORTED_MODULE_9__["default"].map((tz) => Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("option", { value: tz }))),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: _AppContent_m_css__WEBPACK_IMPORTED_MODULE_10__["headline"] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h1", null, state === 'confirmed' ? messages.headlineConfirmed : messages.headline)),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: _AppContent_m_css__WEBPACK_IMPORTED_MODULE_10__["headline"] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h4", null, state === 'confirmed' ? messages.bylineConfirmed : messages.byline)),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("aside", { classes: [_AppContent_m_css__WEBPACK_IMPORTED_MODULE_10__["leftColumn"], themedCss.asideColumn] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("figure", { classes: themedCss.figure },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("img", { classes: [themedCss.img], src: apconf2019_1 }),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("img", { classes: [themedCss.img], src: apconf2019_2 }),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("img", { classes: [themedCss.img], src: apconf2019_3 }),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("img", { classes: [themedCss.img], src: apconf2019_4 }),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("figcaption", null,
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", null, messages.photocaption),
                    "Sebastian Lasse, hellekin"))),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("aside", { classes: [themedCss.stub, state === 'confirmed' ? themedCss.confirmed : null] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: themedCss.top },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", null, "Admit"),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", { classes: themedCss.line }),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", { classes: themedCss.num },
                    state === 'confirmed' ? 'Ticket' : 'Invitation',
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", null, " 31415926"))),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: themedCss.number }, "1"),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: themedCss.invite },
                state === 'confirmed' ? 'You' : 'sold out',
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", null))),
        (state === 'confirmed' ?
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [themedCss.check] },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h1", { classes: [themedCss.success] }, messages.headerConfirmed),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", null),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h3", null, messages.textConfirmed)) :
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [themedCss.check] },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_text_input__WEBPACK_IMPORTED_MODULE_6__["default"], { name: 'publicBadgeName', autocomplete: 'name', maxLength: 800, responsive: true, size: 'l', required: true, placeholder: messages.pBadgeName, onValidate: (valid, message) => {
                        set('validBadgeName', !!valid);
                        set('messageBadgeName', message);
                    }, valid: { valid: get('validBadgeName'), message: get('messageBadgeName') }, classes: registerHelper }, messages.iBadgeName),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_email_input__WEBPACK_IMPORTED_MODULE_8__["default"], { name: 'privateEmail', autocomplete: 'email', responsive: true, size: 'l', required: true, placeholder: messages.pEmail, onValidate: (valid, message) => {
                        set('validMail', !!valid);
                        set('messageMail', message);
                    }, classes: registerHelper }, messages.iEmail),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_text_input__WEBPACK_IMPORTED_MODULE_6__["default"], { name: 'publicBadgeByline', maxLength: 800, responsive: true }, messages.iBadgeByline),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_text_input__WEBPACK_IMPORTED_MODULE_6__["default"], { name: 'timezone', autocomplete: "off", list: 'timezones', responsive: true, value: icache.get('TZ') || timeOptions.timeZone, onValue: (v) => icache.set('TZ', v || timeOptions.timeZone), onValidate: (valid, message) => {
                        set('validTimezone', !!valid);
                        set('messageTimezone', message);
                    }, valid: { valid: get('validTimezone'), message: get('messageTimezone') }, pattern: _assets_timezones__WEBPACK_IMPORTED_MODULE_9__["default"].join('|') }, messages.iTimezone),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("input", { classes: themedCss.confirmedTrp, type: "text", name: 'confirmed' }),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_text_input__WEBPACK_IMPORTED_MODULE_6__["default"], { name: 'privateName', autocomplete: 'name', maxLength: 400, responsive: true }, messages.iName),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_text_input__WEBPACK_IMPORTED_MODULE_6__["default"], { name: 'org', autocomplete: 'organization', maxLength: 800, responsive: true }, messages.iOrg),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_text_input__WEBPACK_IMPORTED_MODULE_6__["default"], { name: 'ActivityPub', maxLength: 800, responsive: true, placeholder: 'https://octodon.social/@cwebber/' }, messages.iAP),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_text_input__WEBPACK_IMPORTED_MODULE_6__["default"], { name: 'website', maxLength: 400, responsive: true }, messages.iWebsite),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [themedCss.caption, themedCss.tzCaption] },
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h4", null, messages.tzClosedCaption1),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h4", null, messages.tzClosedCaption2),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("input", { name: "available", type: "hidden", value: `${icache.get('available')} ${icache.get('TZ')}` })),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", null),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", null))),
        state === 'confirmed' ? Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: themedCss.bottom }) : Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: themedCss.bottom },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: themedCss.widescreen },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", { classes: themedCss.description },
                    messages.registrationMail,
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", null, ": "),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", { classes: themedCss.m8l },
                        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", null, "activitypub "),
                        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", null, "conf"),
                        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", null, " @rise ")),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", null, "up.net"),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("br", null),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", { innerHTML: snarkdown(messages.description) }))),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: themedCss.proposals },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", { classes: themedCss.description },
                    "The CFP for talks closed with 75 registered attendees.",
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("br", null),
                    "The Registration closed with 100 registered attendees.",
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("br", null),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("em", { classes: themedCss.descCaption }, "Thank You!")),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("details", null,
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("summary", null,
                        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h3", { key: "bofControl", onclick: () => { icache.set('hasBof', true); }, classes: themedCss.flex },
                            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: themedCss.addControl }),
                            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", null,
                                " ",
                                messages.add,
                                " ",
                                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("abbr", { title: "Birds of Feather session" }, "BoF"),
                                " ",
                                messages.proposal))),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("small", { class: "serif" }, messages.bofCaption),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("p", { key: "bofs", classes: themedCss.controlWrapper },
                        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_text_input__WEBPACK_IMPORTED_MODULE_6__["default"], { name: "BofProposal", key: "bofProposal", maxLength: 200, placeholder: 'title max. 200 characters [en]', labelHidden: true, responsive: true }, "Title for the session"),
                        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("br", null),
                        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_text_area__WEBPACK_IMPORTED_MODULE_7__["default"], { name: "BofProposalSummary", key: "bofProposalSummary", maxLength: 1600, placeholder: 'summary max. 1.600 characters [en]', labelHidden: true, responsive: true }, "Summary of the session"),
                        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("br", null)))),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: themedCss.help },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h3", { classes: themedCss.angel }, messages.offer),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", null,
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], { name: "helpsVideoRecording" }, messages.oVR),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("br", null),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], { name: "helpsVideoEdit" }, messages.oVE),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("br", null),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], { name: "helpsModeration" }, messages.oMo),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("br", null),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], { name: "helpsWebdesign" }, messages.oWE),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("br", null)),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: themedCss.codeOfConduct },
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("small", { classes: themedCss.noMB },
                        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("a", { href: 'https://www.contributor-covenant.org/version/1/4/code-of-conduct', target: '_blank' },
                            messages.iConduct,
                            ":")),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], { spaced: false, name: "codeOfConduct", required: true, value: 'agreed' }, messages.iAgree)),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: themedCss.submit },
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_button__WEBPACK_IMPORTED_MODULE_4__["default"], { color: "blue", spaced: false, responsive: true, type: 'submit', size: 'xxl', variant: 'filled' }, "Join list"))))));
}));


/***/ }),

/***/ "./src/register/nls/main.ts":
/*!**********************************!*\
  !*** ./src/register/nls/main.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    locales: {
        de: () => __webpack_require__.e(/*! import() | src/register/nls/de/main */ "src/register/nls/de/main").then(__webpack_require__.bind(null, /*! ./de/main */ "./src/register/nls/de/main.ts")),
        fr: () => __webpack_require__.e(/*! import() | src/register/nls/fr/main */ "src/register/nls/fr/main").then(__webpack_require__.bind(null, /*! ./fr/main */ "./src/register/nls/fr/main.ts"))
    },
    messages: {
        headline: 'Waiting List',
        headlineConfirmed: 'Waiting List joined',
        byline: `Registration closed`,
        bylineSent: `confirm the mail`,
        bylineConfirmed: `OK`,
        headerConfirmed: `Awesome!`,
        textConfirmed: `You joined the waiting list.`,
        registrationMail: `You can also send proposals by eMail`,
        description: `It is important to *confirm the link* in the mail we send you.`,
        mailSent: `
# Final step:
Please read and *confirm* the mail we sent to complete your request.`,
        photocaption: 'Pictures of ActivityPub Conference 2019 Prague',
        iBadgeName: 'Badge Name',
        pBadgeName: 'enter a public identifier',
        iEmail: 'eMail Address',
        pEmail: 'will not be published',
        iBadgeByline: 'Badge Byline',
        iTimezone: 'Timezone',
        tzCaption: `Given the audience of this conf,
we'll try to schedule talks that can be attended by people around the world.
Though we cannot guarantee to accommodate everyone, please help us by selecting
a time-range you're comfortable with`,
        tzClosedCaption1: `The official registration for ActivityPub Conference is closed!`,
        tzClosedCaption2: ` `,
        iName: 'Real Name',
        iOrg: 'Project, Org. or Company',
        iAP: 'ActivityPub Address',
        iWebsite: 'Website',
        iConduct: 'Code of Conduct',
        iAgree: 'I agree',
        offer: 'I can help',
        oVR: 'Recording',
        oVE: 'Video edit',
        oMo: 'Moderation',
        oWE: 'Webdesign',
        add: 'Add a',
        proposal: 'proposal',
        talkCaption: 'Enter the title and a brief summary',
        bofCaption: 'Enter the title and a brief session summary',
    }
});


/***/ }),

/***/ "./src/text-area/index.tsx":
/*!*********************************!*\
  !*** ./src/text-area/index.tsx ***!
  \*********************************/
/*! exports provided: TextArea, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _label_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../label/index */ "./src/label/index.tsx");
/* harmony import */ var _theme_material_label_m_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/material/label.m.css */ "./src/theme/material/label.m.css");
/* harmony import */ var _theme_material_label_m_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_material_label_m_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_text_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper-text/index */ "./src/helper-text/index.tsx");
/* harmony import */ var _dojo_framework_core_middleware_icache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dojo/framework/core/middleware/icache */ "./node_modules/@dojo/framework/core/middleware/icache.mjs");
/* harmony import */ var _middleware_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../middleware/theme */ "./src/middleware/theme.tsx");
/* harmony import */ var _theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/material/_ui.m.css */ "./src/theme/material/_ui.m.css");
/* harmony import */ var _theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_material_color_m_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/material/_color.m.css */ "./src/theme/material/_color.m.css");
/* harmony import */ var _theme_material_color_m_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_theme_material_color_m_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _theme_material_text_input_m_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../theme/material/text-input.m.css */ "./src/theme/material/text-input.m.css");
/* harmony import */ var _theme_material_text_input_m_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_theme_material_text_input_m_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _theme_material_text_area_m_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../theme/material/text-area.m.css */ "./src/theme/material/text-area.m.css");
/* harmony import */ var _theme_material_text_area_m_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_theme_material_text_area_m_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _dojo_framework_core_middleware_focus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @dojo/framework/core/middleware/focus */ "./node_modules/@dojo/framework/core/middleware/focus.mjs");
/* harmony import */ var _dojo_framework_core_middleware_validity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @dojo/framework/core/middleware/validity */ "./node_modules/@dojo/framework/core/middleware/validity.mjs");





// import dimensions from '@dojo/framework/core/middleware/dimensions';







const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({
    icache: Object(_dojo_framework_core_middleware_icache__WEBPACK_IMPORTED_MODULE_4__["createICacheMiddleware"])(),
    theme: _middleware_theme__WEBPACK_IMPORTED_MODULE_5__["theme"],
    focus: _dojo_framework_core_middleware_focus__WEBPACK_IMPORTED_MODULE_10__["default"],
    // dimensions,
    validity: _dojo_framework_core_middleware_validity__WEBPACK_IMPORTED_MODULE_11__["default"]
})
    .properties()
    .children();
const TextArea = factory(function TextArea({ id, middleware: { icache, theme, focus, /*dimensions,*/ validity }, properties, children }) {
    const themedCss = theme.classes(_theme_material_text_area_m_css__WEBPACK_IMPORTED_MODULE_9__);
    const line = icache.getOrSet('line', 22); // TODO FIXME and do:
    /*
    if (!icache.get('line')) {
        const r = renderer(() => dnode);
        const div = global.document.createElement('div');
        div.style.position = 'absolute';
        global.document.body.appendChild(div);
        r.mount({ domNode: div, sync: true });
        const dimensions = div.getBoundingClientRect();
    }
    */
    function callOnValidate(valid, message) {
        let { valid: previousValid, onValidate } = properties();
        let previousMessage;
        if (typeof previousValid === 'object') {
            previousMessage = previousValid.message;
            previousValid = previousValid.valid;
        }
        if (valid !== previousValid || message !== previousMessage) {
            onValidate && onValidate(valid, message);
        }
    }
    function validate() {
        const { customValidator, value = icache.get('value') || '' } = properties();
        const dirty = icache.getOrSet('dirty', false);
        if (value === '' && !dirty) {
            callOnValidate(undefined, '');
            return;
        }
        icache.set('dirty', true);
        let { valid, message = '' } = validity.get('input', value || '');
        if (valid && customValidator) {
            const customValid = customValidator(value);
            if (customValid) {
                valid = customValid.valid;
                message = customValid.message || '';
            }
        }
        callOnValidate(valid, message);
    }
    function getValidity() {
        const { valid = { valid: undefined, message: undefined } } = properties();
        if (typeof valid === 'boolean') {
            return { valid, message: undefined };
        }
        return {
            valid: valid.valid,
            message: valid.message
        };
    }
    const { aria = {}, variant = 'flat', responsive = false, expand = true, columns = 20, disabled, widgetId = `textarea-${id}`, maxLength, minLength, name, placeholder, readOnly, required, rows = 2, initialValue, wrapText, theme: themeProp, classes, labelHidden, helperText, onValidate } = properties();
    let { value } = properties();
    if (value === undefined) {
        value = icache.get('value');
        const existingInitialValue = icache.get('initialValue');
        if (initialValue !== existingInitialValue) {
            icache.set('value', initialValue);
            icache.set('initialValue', initialValue);
            value = initialValue;
        }
    }
    onValidate && validate();
    const { valid, message } = getValidity();
    const computedHelperText = (valid === false && message) || helperText;
    const inputFocused = focus.isFocused('input');
    const [{ label: l } = {}] = children();
    const label = (!!l ? l : (!l && !!children()) ?
        children() : void 0) || void 0;
    //	const [label] = children();
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { key: "root", classes: [
            themedCss.root,
            expand ? themedCss.expand : null,
            responsive ? themedCss.responsive : null,
            theme.variant(),
            _theme_material_text_input_m_css__WEBPACK_IMPORTED_MODULE_8__[variant],
            theme.sized(_theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_6__),
            theme.spaced(_theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_6__),
            theme.colored(_theme_material_color_m_css__WEBPACK_IMPORTED_MODULE_7__),
            theme.animated(themedCss)
        ] },
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { key: "wrapper", classes: [
                themedCss.wrapper,
                disabled ? themedCss.disabled : null,
                valid === false ? themedCss.invalid : null,
                valid === true ? themedCss.valid : null,
                readOnly ? themedCss.readonly : null,
                required ? themedCss.required : null,
                inputFocused ? themedCss.focused : null
            ] },
            label ? (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_label_index__WEBPACK_IMPORTED_MODULE_1__["default"], { theme: theme.compose(_theme_material_label_m_css__WEBPACK_IMPORTED_MODULE_2__, _theme_material_text_area_m_css__WEBPACK_IMPORTED_MODULE_9__, 'label'), classes: classes, disabled: disabled, valid: valid, readOnly: readOnly, required: required, hidden: labelHidden, forId: widgetId, focused: inputFocused, active: !!value || inputFocused }, label)) : null,
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("textarea", Object.assign({ id: widgetId, key: "input" }, Object(_middleware_theme__WEBPACK_IMPORTED_MODULE_5__["formatAriaProperties"])(aria), { classes: themedCss.input, style: expand && icache.get('style'), cols: `${columns}`, disabled: disabled, focus: focus.shouldFocus, "aria-invalid": valid === false ? 'true' : null, maxlength: maxLength ? `${maxLength}` : null, minlength: minLength ? `${minLength}` : null, name: name, placeholder: placeholder, readOnly: readOnly, "aria-readonly": readOnly ? 'true' : null, required: required, rows: `${rows}`, value: value, wrap: wrapText, onblur: () => {
                    const { onBlur } = properties();
                    onBlur && onBlur();
                }, onfocus: () => {
                    const { onFocus } = properties();
                    onFocus && onFocus();
                }, oninput: (event) => {
                    const { onValue } = properties();
                    event.stopPropagation();
                    const value = event.target.value;
                    if (expand) {
                        let numberOfLineBreaks = (value.match(/\n/g) || []).length + 1;
                        icache.set('style', `height: ${numberOfLineBreaks * line}px;`);
                    }
                    icache.set('value', value);
                    onValue && onValue(value);
                }, onkeydown: (event) => {
                    const { onKeyDown } = properties();
                    event.stopPropagation();
                    //
                    onKeyDown &&
                        onKeyDown(event.which, () => {
                            event.preventDefault();
                        });
                }, onkeyup: (event) => {
                    const { onKeyUp } = properties();
                    event.stopPropagation();
                    /*
                    icache.set('style', 'height: auto;');
                    expand && setExpandStyle();
                    */
                    onKeyUp &&
                        onKeyUp(event.which, () => {
                            event.preventDefault();
                        });
                }, onclick: () => {
                    const { onClick } = properties();
                    onClick && onClick();
                }, onpointerenter: () => {
                    const { onOver } = properties();
                    onOver && onOver();
                }, onpointerleave: () => {
                    const { onOut } = properties();
                    onOut && onOut();
                } })),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("b", { classes: themedCss.border }),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("b", { classes: themedCss.bg })),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_helper_text_index__WEBPACK_IMPORTED_MODULE_3__["default"], { text: computedHelperText, valid: valid, classes: classes, theme: themeProp })));
});
/* harmony default export */ __webpack_exports__["default"] = (TextArea);


/***/ }),

/***/ "./src/text-input/index.tsx":
/*!**********************************!*\
  !*** ./src/text-input/index.tsx ***!
  \**********************************/
/*! exports provided: TextInput, Addon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addon", function() { return Addon; });
/* harmony import */ var _dojo_framework_core_middleware_focus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dojo/framework/core/middleware/focus */ "./node_modules/@dojo/framework/core/middleware/focus.mjs");
/* harmony import */ var _dojo_framework_core_middleware_icache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dojo/framework/core/middleware/icache */ "./node_modules/@dojo/framework/core/middleware/icache.mjs");
/* harmony import */ var _dojo_framework_core_middleware_validity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dojo/framework/core/middleware/validity */ "./node_modules/@dojo/framework/core/middleware/validity.mjs");
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _helper_text_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper-text/index */ "./src/helper-text/index.tsx");
/* harmony import */ var _middleware_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../middleware/theme */ "./src/middleware/theme.tsx");
/* harmony import */ var _theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/material/_ui.m.css */ "./src/theme/material/_ui.m.css");
/* harmony import */ var _theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_material_color_m_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/material/_color.m.css */ "./src/theme/material/_color.m.css");
/* harmony import */ var _theme_material_color_m_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_theme_material_color_m_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _theme_material_text_input_m_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../theme/material/text-input.m.css */ "./src/theme/material/text-input.m.css");
/* harmony import */ var _theme_material_text_input_m_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_theme_material_text_input_m_css__WEBPACK_IMPORTED_MODULE_8__);





// import Label from '../label/index';




function formatAutocomplete(autocomplete) {
    if (typeof autocomplete === 'boolean') {
        return autocomplete ? 'on' : 'off';
    }
    return autocomplete;
}
const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["create"])({
    theme: _middleware_theme__WEBPACK_IMPORTED_MODULE_5__["theme"],
    icache: Object(_dojo_framework_core_middleware_icache__WEBPACK_IMPORTED_MODULE_1__["createICacheMiddleware"])(),
    validity: _dojo_framework_core_middleware_validity__WEBPACK_IMPORTED_MODULE_2__["default"],
    focus: _dojo_framework_core_middleware_focus__WEBPACK_IMPORTED_MODULE_0__["default"],
    diffProperty: _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["diffProperty"],
    invalidator: _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["invalidator"]
})
    .properties()
    .children();
const TextInput = factory(function TextInput({ middleware: { icache, theme, validity, focus, diffProperty, invalidator }, properties, children, id }) {
    diffProperty('pattern', (previous, next) => {
        const value = next.pattern instanceof RegExp ? next.pattern.source : next.pattern;
        if (value !== previous.pattern) {
            invalidator();
        }
    });
    const themedCss = theme.classes(_theme_material_text_input_m_css__WEBPACK_IMPORTED_MODULE_8__);
    const dirty = icache.getOrSet('dirty', false);
    const { aria = {}, variant = 'flat', responsive, autocomplete, classes, customValidator, disabled, helperText, labelAnimated = true, labelHidden = false, list, max, maxLength, min, minLength, name, onBlur, onClick, onFocus, onKeyDown, onKeyUp, onOut, onOver, onValidate, onValue, pattern: patternValue, placeholder, readOnly, required, step, theme: themeProp, type = 'text', initialValue, valid: validValue = { valid: undefined, message: '' }, widgetId = `text-input-${id}` } = properties();
    let { value } = properties();
    const [{ label: l, leading, trailing, focusContent } = {}] = children();
    const label = (!!l ? l : (!l && !!children()) ?
        children() : void 0);
    if (value === undefined) {
        value = icache.get('value');
        const existingInitialValue = icache.get('initialValue');
        if (initialValue !== existingInitialValue) {
            icache.set('value', initialValue);
            icache.set('initialValue', initialValue);
            value = initialValue;
        }
    }
    const pattern = patternValue instanceof RegExp ? patternValue.source : patternValue;
    function _callOnValidate(valid, message) {
        let { valid: previousValid } = properties();
        let previousMessage;
        if (typeof previousValid === 'object') {
            previousMessage = previousValid.message;
            previousValid = previousValid.valid;
        }
        if (valid !== previousValid || message !== previousMessage) {
            onValidate && onValidate(valid, message);
        }
    }
    if (onValidate) {
        if (value === '' && !dirty) {
            _callOnValidate(undefined, '');
        }
        else {
            icache.set('dirty', true);
            let { valid, message = '' } = validity.get('input', value || '');
            if (valid && customValidator) {
                const customValid = customValidator(value || '');
                if (customValid) {
                    valid = customValid.valid;
                    message = customValid.message || '';
                }
            }
            _callOnValidate(valid, message);
        }
    }
    const { valid, message } = typeof validValue === 'boolean' ? { valid: validValue, message: '' } : validValue;
    const computedHelperText = (valid === false && message) || helperText;
    const inputFocused = focus.isFocused('input');
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["tsx"])("div", { key: "root", classes: [
            themedCss.root,
            theme.variant(),
            themedCss[variant],
            theme.sized(_theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_6__),
            theme.spaced(_theme_material_ui_m_css__WEBPACK_IMPORTED_MODULE_6__, false),
            theme.colored(_theme_material_color_m_css__WEBPACK_IMPORTED_MODULE_7__),
            theme.animated(themedCss),
            responsive ? themedCss.responsive : null,
            label && labelAnimated === true ? themedCss.slideLabel : themedCss.staticLabel,
            !label || labelHidden ? themedCss.noLabel : null
        ], role: "presentation" },
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["tsx"])("div", { key: "wrapper", classes: [
                themedCss.wrapper,
                disabled ? themedCss.disabled : null,
                inputFocused ? themedCss.focused : null,
                valid === false ? themedCss.invalid : null,
                valid === true ? themedCss.valid : null,
                readOnly ? themedCss.readonly : null,
                required ? themedCss.required : null,
                leading ? themedCss.hasLeading : null,
                trailing ? themedCss.hasTrailing : null
            ], role: "presentation" },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["tsx"])("div", { key: "inputWrapper", classes: [
                    themedCss.inputWrapper,
                ], role: "presentation" },
                leading,
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["tsx"])("input", Object.assign({}, Object(_middleware_theme__WEBPACK_IMPORTED_MODULE_5__["formatAriaProperties"])(aria), { "aria-invalid": valid === false ? 'true' : null, autocomplete: formatAutocomplete(autocomplete), classes: themedCss.input, disabled: disabled, id: widgetId, focus: focus.shouldFocus, key: 'input', list: list, max: max, maxlength: maxLength ? `${maxLength}` : null, min: min, minlength: minLength ? `${minLength}` : null, name: name, pattern: pattern, placeholder: placeholder ? placeholder : (labelAnimated === true ? ' ' : void 0), readOnly: readOnly, "aria-readonly": readOnly ? 'true' : null, required: required, step: step, type: type, value: value, onblur: () => {
                        onBlur && onBlur();
                    }, onfocus: () => {
                        onFocus && onFocus();
                    }, oninput: (event) => {
                        event.stopPropagation();
                        const value = event.target.value;
                        icache.set('value', value);
                        onValue && onValue(value);
                    }, onkeydown: (event) => {
                        event.stopPropagation();
                        onKeyDown && onKeyDown(event.which, () => event.preventDefault());
                    }, onkeyup: (event) => {
                        event.stopPropagation();
                        onKeyUp && onKeyUp(event.which, () => event.preventDefault());
                    }, onclick: () => {
                        onClick && onClick();
                    }, onpointerenter: () => {
                        onOver && onOver();
                    }, onpointerleave: () => {
                        onOut && onOut();
                    } })),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["tsx"])("div", { classes: [themedCss.border, theme.colored(_theme_material_color_m_css__WEBPACK_IMPORTED_MODULE_7__)] }),
                focusContent && Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["tsx"])("div", { classes: [themedCss.focusedContent] }, focusContent),
                trailing,
                label && (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["tsx"])("label", { classes: themedCss.label, theme: themeProp, disabled: disabled, valid: valid, focused: inputFocused, readOnly: readOnly, required: required, hidden: labelHidden, for: widgetId, active: !!value || inputFocused }, label)))),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["tsx"])(_helper_text_index__WEBPACK_IMPORTED_MODULE_4__["default"], { text: computedHelperText, valid: valid, classes: classes, theme: themeProp })));
});
const addonFactory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["create"])({
    theme: _middleware_theme__WEBPACK_IMPORTED_MODULE_5__["theme"]
})
    .properties()
    .children();
const Addon = addonFactory(function Addon({ middleware: { theme }, properties, children }) {
    const themedCss = theme.classes(_theme_material_text_input_m_css__WEBPACK_IMPORTED_MODULE_8__);
    const { filled } = properties();
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_3__["tsx"])("span", { classes: [themedCss.addonRoot, filled ? themedCss.addonFilled : null] }, children()));
});
/* harmony default export */ __webpack_exports__["default"] = (TextInput);


/***/ }),

/***/ "./src/theme/default/label.m.css":
/*!***************************************!*\
  !*** ./src/theme/default/label.m.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/label","root":"label-m__root__ecb8b23Kk7r","readonly":"label-m__readonly__ecb8b22pxUq","invalid":"label-m__invalid__ecb8b21CZyi","valid":"label-m__valid__ecb8b22hdFV","required":"label-m__required__ecb8b22WVo7","disabled":"label-m__disabled__ecb8b234MEb","focused":"label-m__focused__ecb8b2ISy0H","secondary":"label-m__secondary__ecb8b237QWK","active":"label-m__active__ecb8b23MoIi"};

/***/ }),

/***/ "./src/theme/material/_color.m.css":
/*!*****************************************!*\
  !*** ./src/theme/material/_color.m.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/_color","red":"_color-m__red__ecb8b21EF1P","deep_orange":"_color-m__deep_orange__ecb8b2w6hqG","orange":"_color-m__orange__ecb8b2T5FDo","amber":"_color-m__amber__ecb8b23TNDg","yellow":"_color-m__yellow__ecb8b21vHhD","lime":"_color-m__lime__ecb8b2gDlIA","light_green":"_color-m__light_green__ecb8b21as0A","green":"_color-m__green__ecb8b23Ha7q","teal":"_color-m__teal__ecb8b22wWZN","cyan":"_color-m__cyan__ecb8b220Rch","light_blue":"_color-m__light_blue__ecb8b2g4Exh","blue":"_color-m__blue__ecb8b2uH4U_","indigo":"_color-m__indigo__ecb8b22BLUI","deep_purple":"_color-m__deep_purple__ecb8b22fzvw","purple":"_color-m__purple__ecb8b22Y_9Q","pink":"_color-m__pink__ecb8b22qIZJ","brown":"_color-m__brown__ecb8b23RJEL","blue_grey":"_color-m__blue_grey__ecb8b22eqmZ","grey":"_color-m__grey__ecb8b23WlFO","settings":"_color-m__settings__ecb8b2UFkqs _color-m__deep_orange__ecb8b2w6hqG","error":"_color-m__error__ecb8b2GOTG8 _color-m__red__ecb8b21EF1P","warning":"_color-m__warning__ecb8b2n4eEK _color-m__amber__ecb8b23TNDg","success":"_color-m__success__ecb8b22tG8h _color-m__lime__ecb8b2gDlIA","info":"_color-m__info__ecb8b2sXiOs _color-m__cyan__ecb8b220Rch","primary":"_color-m__primary__ecb8b22ynz1 _color-m__purple__ecb8b22Y_9Q","secondary":"_color-m__secondary__ecb8b23dUhF _color-m__orange__ecb8b2T5FDo","neutral":"_color-m__neutral__ecb8b2_oRYS _color-m__grey__ecb8b23WlFO"};

/***/ }),

/***/ "./src/theme/material/_ui.m.css":
/*!**************************************!*\
  !*** ./src/theme/material/_ui.m.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/_ui","flex":"_ui-m__flex__ecb8b2tbQfK","flexRow":"_ui-m__flexRow__ecb8b2252a-","heroBaseline":"_ui-m__heroBaseline__ecb8b2dk6v5","xs":"_ui-m__xs__ecb8b21Xt3K _typo__xs__ecb8b2qYY0M","s":"_ui-m__s__ecb8b21rol0 _typo__s__ecb8b22332p","m":"_ui-m__m__ecb8b2jIhQa _typo__m__ecb8b23DnWG","l":"_ui-m__l__ecb8b2MGqUU _typo__l__ecb8b23jYig","xl":"_ui-m__xl__ecb8b21ewdq _typo__xl__ecb8b2-KCUG","xxl":"_ui-m__xxl__ecb8b21ooQp _typo__xxl__ecb8b214eYl","ui":"_ui-m__ui__ecb8b22kN0R","uiVar":"_ui-m__uiVar__ecb8b23z3Ir","ui-input":"_ui-m__ui-input__ecb8b23qERm","square":"_ui-m__square__ecb8b22d-_8","nextBaseline":"_ui-m__nextBaseline__ecb8b23feBR","spaceEqual":"_ui-m__spaceEqual__ecb8b2diem5","spaceLeft":"_ui-m__spaceLeft__ecb8b217Ind","spaceRight":"_ui-m__spaceRight__ecb8b2UAsBM","box":"_ui-m__box__ecb8b22G_3_","disabled":"_ui-m__disabled__ecb8b22OTHF","flat":"_ui-m__flat__ecb8b2IbkG-","filled":"_ui-m__filled__ecb8b21z_MC","raised":"_ui-m__raised__ecb8b22JCfN","shaped":"_ui-m__shaped__ecb8b22ua-o","outlined":"_ui-m__outlined__ecb8b213fa8","noHover":"_ui-m__noHover__ecb8b2lk8wn","input-box":"_ui-m__input-box__ecb8b227z_p","strongTypo":"_ui-m__strongTypo__ecb8b21icFv","muted":"_ui-m__muted__ecb8b23u-3O","accent":"_ui-m__accent__ecb8b22TIDa","subtitle":"_ui-m__subtitle__ecb8b217k9Q","wide":"_ui-m__wide__ecb8b2Xxn3u","spaced":"_ui-m__spaced__ecb8b232VpU","narrow":"_ui-m__narrow__ecb8b2iqkyD","helperText":"_ui-m__helperText__ecb8b21qWX9","invalid":"_ui-m__invalid__ecb8b21_ftV","valid":"_ui-m__valid__ecb8b25RZA6","running":"_ui-m__running__ecb8b27SoOc","absolute":"_ui-m__absolute__ecb8b22QdfE","inner":"_ui-m__inner__ecb8b23-7rq","ui-border":"_ui-m__ui-border__ecb8b2HMzcs","ui-transition":"_ui-m__ui-transition__ecb8b2zd6te","wrapper":"_ui-m__wrapper__ecb8b21jf8R","hasPrefix":"_ui-m__hasPrefix__ecb8b23e9rR","hasSuffix":"_ui-m__hasSuffix__ecb8b2pKjAQ","prefix":"_ui-m__prefix__ecb8b23uVST","suffix":"_ui-m__suffix__ecb8b21To1e","input":"_ui-m__input__ecb8b23_jeS","ui-box":"_ui-m__ui-box__ecb8b22gmPG"};

/***/ }),

/***/ "./src/theme/material/email-input.m.css":
/*!**********************************************!*\
  !*** ./src/theme/material/email-input.m.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/email-input","helperText":"email-input-m__helperText__ecb8b22nTfp _ui-m__s__ecb8b21rol0 _typo__s__ecb8b22332p"};

/***/ }),

/***/ "./src/theme/material/label.m.css":
/*!****************************************!*\
  !*** ./src/theme/material/label.m.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/label","root":"label-m__root__ecb8b22OcvT","active":"label-m__active__ecb8b21CdbX","secondary":"label-m__secondary__ecb8b22qRmS"};

/***/ })

}]);
//# sourceMappingURL=Register.js.map