(window["dojoWebpackJsonpapconf2020"] = window["dojoWebpackJsonpapconf2020"] || []).push([["main"],{

/***/ "./node_modules/@dojo/framework/core/Destroyable.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@dojo/framework/core/Destroyable.mjs ***!
  \***********************************************************/
/*! exports provided: Destroyable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Destroyable", function() { return Destroyable; });
/* harmony import */ var _shim_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shim/Promise */ "./node_modules/@dojo/framework/shim/Promise.mjs");

/**
 * No op function used to replace a Destroyable instance's `destroy` method, once the instance has been destroyed
 */
function noop() {
    return _shim_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(false);
}
/**
 * No op function used to replace a Destroyable instance's `own` method, once the instance has been destroyed
 */
function destroyed() {
    throw new Error('Call made to destroyed method');
}
class Destroyable {
    /**
     * @constructor
     */
    constructor() {
        this.handles = [];
    }
    /**
     * Register handles for the instance that will be destroyed when `this.destroy` is called
     *
     * @param {Handle} handle The handle to add for the instance
     * @returns {Handle} A wrapper Handle. When the wrapper Handle's `destroy` method is invoked, the original handle is
     *                   removed from the instance, and its `destroy` method is invoked.
     */
    own(handle) {
        const { handles: _handles } = this;
        _handles.push(handle);
        return {
            destroy() {
                _handles.splice(_handles.indexOf(handle));
                handle.destroy();
            }
        };
    }
    /**
     * Destroys all handlers registered for the instance
     *
     * @returns {Promise<any} A Promise that resolves once all handles have been destroyed
     */
    destroy() {
        return new _shim_Promise__WEBPACK_IMPORTED_MODULE_0__["default"]((resolve) => {
            this.handles.forEach((handle) => {
                handle && handle.destroy && handle.destroy();
            });
            this.destroy = noop;
            this.own = destroyed;
            resolve(true);
        });
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Destroyable);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/Evented.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@dojo/framework/core/Evented.mjs ***!
  \*******************************************************/
/*! exports provided: isGlobMatch, Evented, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGlobMatch", function() { return isGlobMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Evented", function() { return Evented; });
/* harmony import */ var _shim_Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shim/Map */ "./node_modules/@dojo/framework/shim/Map.mjs");
/* harmony import */ var _Destroyable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Destroyable */ "./node_modules/@dojo/framework/core/Destroyable.mjs");


/**
 * Map of computed regular expressions, keyed by string
 */
const regexMap = new _shim_Map__WEBPACK_IMPORTED_MODULE_0__["default"]();
/**
 * Determines if the event type glob has been matched
 *
 * @returns boolean that indicates if the glob is matched
 */
function isGlobMatch(globString, targetString) {
    if (typeof targetString === 'string' && typeof globString === 'string' && globString.indexOf('*') !== -1) {
        let regex;
        if (regexMap.has(globString)) {
            regex = regexMap.get(globString);
        }
        else {
            regex = new RegExp(`^${globString.replace(/\*/g, '.*')}$`);
            regexMap.set(globString, regex);
        }
        return regex.test(targetString);
    }
    else {
        return globString === targetString;
    }
}
/**
 * Event Class
 */
class Evented extends _Destroyable__WEBPACK_IMPORTED_MODULE_1__["Destroyable"] {
    constructor() {
        super(...arguments);
        /**
         * map of listeners keyed by event type
         */
        this.listenersMap = new _shim_Map__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    emit(event) {
        this.listenersMap.forEach((methods, type) => {
            if (isGlobMatch(type, event.type)) {
                [...methods].forEach((method) => {
                    method.call(this, event);
                });
            }
        });
    }
    on(type, listener) {
        if (Array.isArray(listener)) {
            const handles = listener.map((listener) => this._addListener(type, listener));
            return {
                destroy() {
                    handles.forEach((handle) => handle.destroy());
                }
            };
        }
        return this._addListener(type, listener);
    }
    _addListener(type, listener) {
        const listeners = this.listenersMap.get(type) || [];
        listeners.push(listener);
        this.listenersMap.set(type, listeners);
        return {
            destroy: () => {
                const listeners = this.listenersMap.get(type) || [];
                listeners.splice(listeners.indexOf(listener), 1);
            }
        };
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Evented);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/I18nInjector.mjs":
/*!************************************************************!*\
  !*** ./node_modules/@dojo/framework/core/I18nInjector.mjs ***!
  \************************************************************/
/*! exports provided: INJECTOR_KEY, I18nInjector, registerI18nInjector, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECTOR_KEY", function() { return INJECTOR_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nInjector", function() { return I18nInjector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerI18nInjector", function() { return registerI18nInjector; });
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../i18n/i18n */ "./node_modules/@dojo/framework/i18n/i18n.mjs");
/* harmony import */ var _Injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Injector */ "./node_modules/@dojo/framework/core/Injector.mjs");
/* harmony import */ var _shim_Promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shim/Promise */ "./node_modules/@dojo/framework/shim/Promise.mjs");



const INJECTOR_KEY = '__i18n_injector';
class I18nInjector extends _Injector__WEBPACK_IMPORTED_MODULE_1__["Injector"] {
    set(localeData = {}) {
        const result = Object(_i18n_i18n__WEBPACK_IMPORTED_MODULE_0__["setLocale"])({ locale: localeData.locale || Object(_i18n_i18n__WEBPACK_IMPORTED_MODULE_0__["getComputedLocale"])() });
        if (Object(_shim_Promise__WEBPACK_IMPORTED_MODULE_2__["isThenable"])(result)) {
            result.then(() => {
                super.set(localeData);
            });
            return;
        }
        super.set(localeData);
    }
}
function registerI18nInjector(localeData, registry) {
    const injector = new I18nInjector(localeData);
    registry.defineInjector(INJECTOR_KEY, (invalidator) => {
        injector.setInvalidator(invalidator);
        return () => injector;
    });
    return injector;
}
/* harmony default export */ __webpack_exports__["default"] = (I18nInjector);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/Injector.mjs":
/*!********************************************************!*\
  !*** ./node_modules/@dojo/framework/core/Injector.mjs ***!
  \********************************************************/
/*! exports provided: Injector, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Injector", function() { return Injector; });
/* harmony import */ var _core_Evented__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Evented */ "./node_modules/@dojo/framework/core/Evented.mjs");

class Injector extends _core_Evented__WEBPACK_IMPORTED_MODULE_0__["Evented"] {
    constructor(payload) {
        super();
        this._payload = payload;
    }
    setInvalidator(invalidator) {
        this._invalidator = invalidator;
    }
    get() {
        return this._payload;
    }
    set(payload) {
        this._payload = payload;
        if (this._invalidator) {
            this._invalidator();
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Injector);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/Registry.mjs":
/*!********************************************************!*\
  !*** ./node_modules/@dojo/framework/core/Registry.mjs ***!
  \********************************************************/
/*! exports provided: WIDGET_BASE_TYPE, isWidgetBaseConstructor, isWidgetFunction, isWNodeFactory, isWidget, isWidgetConstructorDefaultExport, Registry, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDGET_BASE_TYPE", function() { return WIDGET_BASE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWidgetBaseConstructor", function() { return isWidgetBaseConstructor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWidgetFunction", function() { return isWidgetFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWNodeFactory", function() { return isWNodeFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWidget", function() { return isWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWidgetConstructorDefaultExport", function() { return isWidgetConstructorDefaultExport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registry", function() { return Registry; });
/* harmony import */ var _shim_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shim/Promise */ "./node_modules/@dojo/framework/shim/Promise.mjs");
/* harmony import */ var _shim_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shim/Map */ "./node_modules/@dojo/framework/shim/Map.mjs");
/* harmony import */ var _core_Evented__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Evented */ "./node_modules/@dojo/framework/core/Evented.mjs");



/**
 * Widget base type
 */
const WIDGET_BASE_TYPE = '__widget_base_type';
/**
 * Checks is the item is a subclass of WidgetBase (or a WidgetBase)
 *
 * @param item the item to check
 * @returns true/false indicating if the item is a WidgetBaseConstructor
 */
function isWidgetBaseConstructor(item) {
    return Boolean(item && item._type === WIDGET_BASE_TYPE);
}
function isWidgetFunction(item) {
    return Boolean(item && item.isWidget);
}
function isWNodeFactory(node) {
    if (typeof node === 'function' && node.isFactory) {
        return true;
    }
    return false;
}
function isWidget(item) {
    return isWidgetBaseConstructor(item) || isWidgetFunction(item);
}
function isWidgetConstructorDefaultExport(item) {
    return Boolean(item &&
        item.hasOwnProperty('__esModule') &&
        item.hasOwnProperty('default') &&
        (isWidget(item.default) || isWNodeFactory(item.default)));
}
/**
 * The Registry implementation
 */
class Registry extends _core_Evented__WEBPACK_IMPORTED_MODULE_2__["Evented"] {
    /**
     * Emit loaded event for registry label
     */
    emitLoadedEvent(widgetLabel, item) {
        this.emit({
            type: widgetLabel,
            action: 'loaded',
            item
        });
    }
    define(label, item) {
        if (this._widgetRegistry === undefined) {
            this._widgetRegistry = new _shim_Map__WEBPACK_IMPORTED_MODULE_1__["default"]();
        }
        if (this._widgetRegistry.has(label)) {
            throw new Error(`widget has already been registered for '${label.toString()}'`);
        }
        this._widgetRegistry.set(label, item);
        if (item instanceof _shim_Promise__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            item.then((widgetCtor) => {
                this._widgetRegistry.set(label, widgetCtor);
                this.emitLoadedEvent(label, widgetCtor);
                return widgetCtor;
            }, (error) => {
                throw error;
            });
        }
        else if (isWidgetBaseConstructor(item)) {
            this.emitLoadedEvent(label, item);
        }
    }
    defineInjector(label, injectorFactory) {
        if (this._injectorRegistry === undefined) {
            this._injectorRegistry = new _shim_Map__WEBPACK_IMPORTED_MODULE_1__["default"]();
        }
        if (this._injectorRegistry.has(label)) {
            throw new Error(`injector has already been registered for '${label.toString()}'`);
        }
        const invalidator = new _core_Evented__WEBPACK_IMPORTED_MODULE_2__["Evented"]();
        const injectorItem = {
            injector: injectorFactory(() => invalidator.emit({ type: 'invalidate' })),
            invalidator
        };
        this._injectorRegistry.set(label, injectorItem);
        this.emitLoadedEvent(label, injectorItem);
    }
    get(label) {
        if (!this._widgetRegistry || !this.has(label)) {
            return null;
        }
        const item = this._widgetRegistry.get(label);
        if (isWidget(item) || isWNodeFactory(item)) {
            return item;
        }
        if (item instanceof _shim_Promise__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            return null;
        }
        const promise = item();
        this._widgetRegistry.set(label, promise);
        promise.then((widgetCtor) => {
            if (isWidgetConstructorDefaultExport(widgetCtor)) {
                widgetCtor = widgetCtor.default;
            }
            this._widgetRegistry.set(label, widgetCtor);
            this.emitLoadedEvent(label, widgetCtor);
            return widgetCtor;
        }, (error) => {
            throw error;
        });
        return null;
    }
    getInjector(label) {
        if (!this._injectorRegistry || !this.hasInjector(label)) {
            return null;
        }
        return this._injectorRegistry.get(label);
    }
    has(label) {
        return Boolean(this._widgetRegistry && this._widgetRegistry.has(label));
    }
    hasInjector(label) {
        return Boolean(this._injectorRegistry && this._injectorRegistry.has(label));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Registry);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/RegistryHandler.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@dojo/framework/core/RegistryHandler.mjs ***!
  \***************************************************************/
/*! exports provided: RegistryHandler, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryHandler", function() { return RegistryHandler; });
/* harmony import */ var _shim_Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shim/Map */ "./node_modules/@dojo/framework/shim/Map.mjs");
/* harmony import */ var _core_Evented__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Evented */ "./node_modules/@dojo/framework/core/Evented.mjs");
/* harmony import */ var _Registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registry */ "./node_modules/@dojo/framework/core/Registry.mjs");



class RegistryHandler extends _core_Evented__WEBPACK_IMPORTED_MODULE_1__["Evented"] {
    constructor() {
        super();
        this._registry = new _Registry__WEBPACK_IMPORTED_MODULE_2__["Registry"]();
        this._registryWidgetLabelMap = new _shim_Map__WEBPACK_IMPORTED_MODULE_0__["Map"]();
        this._registryInjectorLabelMap = new _shim_Map__WEBPACK_IMPORTED_MODULE_0__["Map"]();
        this.own(this._registry);
        const destroy = () => {
            if (this.baseRegistry) {
                this._registryWidgetLabelMap.delete(this.baseRegistry);
                this._registryInjectorLabelMap.delete(this.baseRegistry);
                this.baseRegistry = undefined;
            }
        };
        this.own({ destroy });
    }
    set base(baseRegistry) {
        if (this.baseRegistry) {
            this._registryWidgetLabelMap.delete(this.baseRegistry);
            this._registryInjectorLabelMap.delete(this.baseRegistry);
        }
        this.baseRegistry = baseRegistry;
    }
    get base() {
        return this.baseRegistry;
    }
    define(label, widget) {
        this._registry.define(label, widget);
    }
    defineInjector(label, injector) {
        this._registry.defineInjector(label, injector);
    }
    has(label) {
        return this._registry.has(label) || Boolean(this.baseRegistry && this.baseRegistry.has(label));
    }
    hasInjector(label) {
        return this._registry.hasInjector(label) || Boolean(this.baseRegistry && this.baseRegistry.hasInjector(label));
    }
    get(label, globalPrecedence = false) {
        return this._get(label, globalPrecedence, 'get', this._registryWidgetLabelMap);
    }
    getInjector(label, globalPrecedence = false) {
        return this._get(label, globalPrecedence, 'getInjector', this._registryInjectorLabelMap);
    }
    _get(label, globalPrecedence, getFunctionName, labelMap) {
        const registries = globalPrecedence ? [this.baseRegistry, this._registry] : [this._registry, this.baseRegistry];
        for (let i = 0; i < registries.length; i++) {
            const registry = registries[i];
            if (!registry) {
                continue;
            }
            const item = registry[getFunctionName](label);
            const registeredLabels = labelMap.get(registry) || [];
            if (item) {
                return item;
            }
            else if (registeredLabels.indexOf(label) === -1) {
                const handle = registry.on(label, (event) => {
                    if (event.action === 'loaded' &&
                        this[getFunctionName](label, globalPrecedence) === event.item) {
                        this.emit({ type: 'invalidate' });
                    }
                });
                this.own(handle);
                labelMap.set(registry, [...registeredLabels, label]);
            }
        }
        return null;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (RegistryHandler);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/ThemeInjector.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@dojo/framework/core/ThemeInjector.mjs ***!
  \*************************************************************/
/*! exports provided: isVariantModule, isThemeWithVariant, isThemeWithVariants, isThemeInjectorPayloadWithVariant, ThemeInjector, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVariantModule", function() { return isVariantModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isThemeWithVariant", function() { return isThemeWithVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isThemeWithVariants", function() { return isThemeWithVariants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isThemeInjectorPayloadWithVariant", function() { return isThemeInjectorPayloadWithVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeInjector", function() { return ThemeInjector; });
/* harmony import */ var _shim_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shim/global */ "./node_modules/@dojo/framework/shim/global.mjs");
/* harmony import */ var _Injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Injector */ "./node_modules/@dojo/framework/core/Injector.mjs");
/* harmony import */ var _shim_cssVariables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shim/cssVariables */ "./node_modules/@dojo/framework/shim/cssVariables.mjs");
/* harmony import */ var _shim_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shim/Map */ "./node_modules/@dojo/framework/shim/Map.mjs");
/* harmony import */ var _has__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./has */ "./node_modules/@dojo/framework/core/has.mjs");





function isVariantModule(variant) {
    return typeof variant !== 'string';
}
function isThemeWithVariant(theme) {
    return theme && theme.hasOwnProperty('variant');
}
function isThemeWithVariants(theme) {
    return theme && theme.hasOwnProperty('variants');
}
function isThemeInjectorPayloadWithVariant(theme) {
    return !!theme && theme.hasOwnProperty('variant');
}
let processCssVariant = function (_) { };
if (false) {}
function createThemeInjectorPayload(theme, variant) {
    if (isThemeWithVariant(theme)) {
        if (typeof theme.variant === 'string') {
            return {
                theme: theme.theme,
                variant: { name: theme.variant, value: theme.theme.variants[theme.variant] }
            };
        }
        return { theme: theme.theme, variant: theme.variant };
    }
    else if (isThemeWithVariants(theme)) {
        variant = variant || 'default';
        if (isVariantModule(variant)) {
            if (false) {}
            return { theme, variant };
        }
        if (false) {}
        return { theme: theme, variant: { name: variant, value: theme.variants[variant] } };
    }
    return { theme };
}
class ThemeInjector extends _Injector__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(theme) {
        super(theme ? createThemeInjectorPayload(theme) : theme);
    }
    set(theme, variant) {
        super.set(createThemeInjectorPayload(theme, variant));
    }
    get() {
        return super.get();
    }
}
/* harmony default export */ __webpack_exports__["default"] = (ThemeInjector);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/decorators/afterRender.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/@dojo/framework/core/decorators/afterRender.mjs ***!
  \**********************************************************************/
/*! exports provided: afterRender, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterRender", function() { return afterRender; });
/* harmony import */ var _handleDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleDecorator */ "./node_modules/@dojo/framework/core/decorators/handleDecorator.mjs");

function afterRender(method) {
    return Object(_handleDecorator__WEBPACK_IMPORTED_MODULE_0__["handleDecorator"])((target, propertyKey) => {
        target.addDecorator('afterRender', propertyKey ? target[propertyKey] : method);
    });
}
/* harmony default export */ __webpack_exports__["default"] = (afterRender);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/decorators/beforeProperties.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@dojo/framework/core/decorators/beforeProperties.mjs ***!
  \***************************************************************************/
/*! exports provided: beforeProperties, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeProperties", function() { return beforeProperties; });
/* harmony import */ var _handleDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleDecorator */ "./node_modules/@dojo/framework/core/decorators/handleDecorator.mjs");

function beforeProperties(method) {
    return Object(_handleDecorator__WEBPACK_IMPORTED_MODULE_0__["handleDecorator"])((target, propertyKey) => {
        target.addDecorator('beforeProperties', propertyKey ? target[propertyKey] : method);
    });
}
/* harmony default export */ __webpack_exports__["default"] = (beforeProperties);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/decorators/handleDecorator.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@dojo/framework/core/decorators/handleDecorator.mjs ***!
  \**************************************************************************/
/*! exports provided: handleDecorator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDecorator", function() { return handleDecorator; });
/**
 * Generic decorator handler to take care of whether or not the decorator was called at the class level
 * or the method level.
 *
 * @param handler
 */
function handleDecorator(handler) {
    return function (target, propertyKey, descriptor) {
        if (typeof target === 'function') {
            handler(target.prototype, undefined);
        }
        else {
            handler(target, propertyKey);
        }
    };
}
/* harmony default export */ __webpack_exports__["default"] = (handleDecorator);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/decorators/inject.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@dojo/framework/core/decorators/inject.mjs ***!
  \*****************************************************************/
/*! exports provided: getInjector, inject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInjector", function() { return getInjector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return inject; });
/* harmony import */ var _shim_WeakMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shim/WeakMap */ "./node_modules/@dojo/framework/shim/WeakMap.mjs");
/* harmony import */ var _handleDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleDecorator */ "./node_modules/@dojo/framework/core/decorators/handleDecorator.mjs");
/* harmony import */ var _beforeProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beforeProperties */ "./node_modules/@dojo/framework/core/decorators/beforeProperties.mjs");



/**
 * Map of instances against registered injectors.
 */
const registeredInjectorsMap = new _shim_WeakMap__WEBPACK_IMPORTED_MODULE_0__["default"]();
function getInjector(instance, name) {
    const injectorItem = instance.registry.getInjector(name);
    if (injectorItem) {
        const { injector, invalidator } = injectorItem;
        const registeredInjectors = registeredInjectorsMap.get(instance) || [];
        if (registeredInjectors.length === 0) {
            registeredInjectorsMap.set(instance, registeredInjectors);
        }
        if (registeredInjectors.indexOf(injectorItem) === -1) {
            instance.own(invalidator.on('invalidate', () => {
                instance.invalidate();
            }));
            registeredInjectors.push(injectorItem);
        }
        return injector;
    }
}
/**
 * Decorator retrieves an injector from an available registry using the name and
 * calls the `getProperties` function with the payload from the injector
 * and current properties with the the injected properties returned.
 *
 * @param InjectConfig the inject configuration
 */
function inject({ name, getProperties }) {
    return Object(_handleDecorator__WEBPACK_IMPORTED_MODULE_1__["handleDecorator"])((target) => {
        Object(_beforeProperties__WEBPACK_IMPORTED_MODULE_2__["beforeProperties"])(function (properties) {
            const injector = getInjector(this, name);
            if (injector) {
                return getProperties(injector(), properties);
            }
        })(target);
    });
}
/* harmony default export */ __webpack_exports__["default"] = (inject);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/diff.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@dojo/framework/core/diff.mjs ***!
  \****************************************************/
/*! exports provided: always, ignore, reference, shallow, auto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "always", function() { return always; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignore", function() { return ignore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallow", function() { return shallow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return auto; });
/* harmony import */ var _Registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registry */ "./node_modules/@dojo/framework/core/Registry.mjs");

function isObjectOrArray(value) {
    return Object.prototype.toString.call(value) === '[object Object]' || Array.isArray(value);
}
function always(previousProperty, newProperty) {
    return {
        changed: true,
        value: newProperty
    };
}
function ignore(previousProperty, newProperty) {
    return {
        changed: false,
        value: newProperty
    };
}
function reference(previousProperty, newProperty) {
    return {
        changed: previousProperty !== newProperty,
        value: newProperty
    };
}
function shallow(previousProperty, newProperty, depth = 0) {
    let changed = false;
    const validOldProperty = previousProperty && isObjectOrArray(previousProperty);
    const validNewProperty = newProperty && isObjectOrArray(newProperty);
    if (!validOldProperty || !validNewProperty) {
        return {
            changed: true,
            value: newProperty
        };
    }
    const previousKeys = Object.keys(previousProperty);
    const newKeys = Object.keys(newProperty);
    if (previousKeys.length !== newKeys.length) {
        changed = true;
    }
    else {
        changed = newKeys.some((key) => {
            if (depth > 0) {
                return auto(newProperty[key], previousProperty[key], depth - 1).changed;
            }
            return newProperty[key] !== previousProperty[key];
        });
    }
    return {
        changed,
        value: newProperty
    };
}
function auto(previousProperty, newProperty, depth = 0) {
    let result;
    if (typeof newProperty === 'function') {
        if (newProperty._type === _Registry__WEBPACK_IMPORTED_MODULE_0__["WIDGET_BASE_TYPE"]) {
            result = reference(previousProperty, newProperty);
        }
        else {
            result = ignore(previousProperty, newProperty);
        }
    }
    else if (isObjectOrArray(newProperty)) {
        result = shallow(previousProperty, newProperty, depth);
    }
    else {
        result = reference(previousProperty, newProperty);
    }
    return result;
}


/***/ }),

/***/ "./node_modules/@dojo/framework/core/middleware/i18n.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@dojo/framework/core/middleware/i18n.mjs ***!
  \***************************************************************/
/*! exports provided: INJECTOR_KEY, registerI18nInjector, i18n, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../i18n/i18n */ "./node_modules/@dojo/framework/i18n/i18n.mjs");
/* harmony import */ var _vdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injector */ "./node_modules/@dojo/framework/core/middleware/injector.mjs");
/* harmony import */ var _shim_Promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shim/Promise */ "./node_modules/@dojo/framework/shim/Promise.mjs");
/* harmony import */ var _I18nInjector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../I18nInjector */ "./node_modules/@dojo/framework/core/I18nInjector.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INJECTOR_KEY", function() { return _I18nInjector__WEBPACK_IMPORTED_MODULE_4__["INJECTOR_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerI18nInjector", function() { return _I18nInjector__WEBPACK_IMPORTED_MODULE_4__["registerI18nInjector"]; });







const factory = Object(_vdom__WEBPACK_IMPORTED_MODULE_1__["create"])({ invalidator: _vdom__WEBPACK_IMPORTED_MODULE_1__["invalidator"], injector: _injector__WEBPACK_IMPORTED_MODULE_2__["default"], getRegistry: _vdom__WEBPACK_IMPORTED_MODULE_1__["getRegistry"], diffProperty: _vdom__WEBPACK_IMPORTED_MODULE_1__["diffProperty"] }).properties();
const i18n = factory(({ properties, middleware: { invalidator, injector, getRegistry, diffProperty } }) => {
    const i18nInjector = injector.get(_I18nInjector__WEBPACK_IMPORTED_MODULE_4__["INJECTOR_KEY"]);
    if (!i18nInjector) {
        const registry = getRegistry();
        if (registry) {
            Object(_I18nInjector__WEBPACK_IMPORTED_MODULE_4__["registerI18nInjector"])({}, registry.base);
        }
    }
    diffProperty('locale', properties, (current, next) => {
        const localeDataInjector = injector.get(_I18nInjector__WEBPACK_IMPORTED_MODULE_4__["INJECTOR_KEY"]);
        let injectedLocale;
        if (localeDataInjector) {
            const injectLocaleData = localeDataInjector.get();
            if (injectLocaleData) {
                injectedLocale = injectLocaleData.locale;
            }
        }
        if (next.locale && current.locale !== next.locale) {
            const result = Object(_i18n_i18n__WEBPACK_IMPORTED_MODULE_0__["setLocale"])({ locale: next.locale, local: true });
            if (Object(_shim_Promise__WEBPACK_IMPORTED_MODULE_3__["isThenable"])(result)) {
                result.then(() => {
                    invalidator();
                });
                return current.locale || injectedLocale || Object(_i18n_i18n__WEBPACK_IMPORTED_MODULE_0__["getCurrentLocale"])();
            }
        }
        if (current.locale !== next.locale) {
            invalidator();
        }
        return next.locale || injectedLocale || Object(_i18n_i18n__WEBPACK_IMPORTED_MODULE_0__["getCurrentLocale"])();
    });
    injector.subscribe(_I18nInjector__WEBPACK_IMPORTED_MODULE_4__["INJECTOR_KEY"]);
    return {
        localize(bundle) {
            let { locale, i18nBundle } = properties();
            if (i18nBundle) {
                if (i18nBundle instanceof Map) {
                    bundle = i18nBundle.get(bundle) || bundle;
                }
                else {
                    bundle = i18nBundle;
                }
            }
            return Object(_i18n_i18n__WEBPACK_IMPORTED_MODULE_0__["localizeBundle"])(bundle, { locale, invalidator });
        },
        set(localeData = {}) {
            const localeDataInjector = injector.get(_I18nInjector__WEBPACK_IMPORTED_MODULE_4__["INJECTOR_KEY"]);
            if (localeDataInjector) {
                localeDataInjector.set(localeData);
            }
        },
        get() {
            const localeDataInjector = injector.get(_I18nInjector__WEBPACK_IMPORTED_MODULE_4__["INJECTOR_KEY"]);
            if (localeDataInjector) {
                return localeDataInjector.get();
            }
        }
    };
});
/* harmony default export */ __webpack_exports__["default"] = (i18n);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/middleware/icache.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@dojo/framework/core/middleware/icache.mjs ***!
  \*****************************************************************/
/*! exports provided: createICacheMiddleware, icache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createICacheMiddleware", function() { return createICacheMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icache", function() { return icache; });
/* harmony import */ var _shim_Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shim/Map */ "./node_modules/@dojo/framework/shim/Map.mjs");
/* harmony import */ var _vdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* tslint:disable:interface-name */


const factory = Object(_vdom__WEBPACK_IMPORTED_MODULE_1__["create"])({ invalidator: _vdom__WEBPACK_IMPORTED_MODULE_1__["invalidator"], destroy: _vdom__WEBPACK_IMPORTED_MODULE_1__["destroy"] });
function createICacheMiddleware() {
    const icache = factory(({ middleware: { invalidator, destroy } }) => {
        const cacheMap = new _shim_Map__WEBPACK_IMPORTED_MODULE_0__["default"]();
        destroy(() => {
            cacheMap.clear();
        });
        const api = {
            get: (key) => {
                const cachedValue = cacheMap.get(key);
                if (!cachedValue || cachedValue.status === 'pending') {
                    return undefined;
                }
                return cachedValue.value;
            }
        };
        api.set = (key, value, invalidate = true) => {
            const current = api.get(key);
            if (typeof value === 'function') {
                value = value(current);
                if (value && typeof value.then === 'function') {
                    cacheMap.set(key, {
                        status: 'pending',
                        value
                    });
                    value.then((result) => {
                        const cachedValue = cacheMap.get(key);
                        if (cachedValue && cachedValue.value === value) {
                            cacheMap.set(key, {
                                status: 'resolved',
                                value: result
                            });
                            invalidate && invalidator();
                        }
                    });
                    return undefined;
                }
            }
            cacheMap.set(key, {
                status: 'resolved',
                value
            });
            invalidate && invalidator();
            return value;
        };
        api.has = (key) => {
            return cacheMap.has(key);
        };
        api.delete = (key, invalidate = true) => {
            cacheMap.delete(key);
            invalidate && invalidator();
        };
        api.clear = (invalidate = true) => {
            cacheMap.clear();
            invalidate && invalidator();
        };
        api.getOrSet = (key, value, invalidate = true) => {
            let cachedValue = cacheMap.get(key);
            if (!cachedValue) {
                api.set(key, value, invalidate);
            }
            cachedValue = cacheMap.get(key);
            if (!cachedValue || cachedValue.status === 'pending') {
                return undefined;
            }
            return cachedValue.value;
        };
        return api;
    });
    return icache;
}
const icache = createICacheMiddleware();
/* harmony default export */ __webpack_exports__["default"] = (icache);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/middleware/injector.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@dojo/framework/core/middleware/injector.mjs ***!
  \*******************************************************************/
/*! exports provided: injector, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return injector; });
/* harmony import */ var _vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");

const injectorFactory = Object(_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({ getRegistry: _vdom__WEBPACK_IMPORTED_MODULE_0__["getRegistry"], invalidator: _vdom__WEBPACK_IMPORTED_MODULE_0__["invalidator"], destroy: _vdom__WEBPACK_IMPORTED_MODULE_0__["destroy"] });
const injector = injectorFactory(({ middleware: { getRegistry, invalidator, destroy } }) => {
    const handles = [];
    destroy(() => {
        let handle;
        while ((handle = handles.pop())) {
            handle.destroy();
        }
    });
    const registry = getRegistry();
    return {
        subscribe(label, callback = invalidator) {
            if (registry) {
                const item = registry.getInjector(label);
                if (item) {
                    const handle = item.invalidator.on('invalidate', () => {
                        callback();
                    });
                    handles.push(handle);
                    return () => {
                        const index = handles.indexOf(handle);
                        if (index !== -1) {
                            handles.splice(index, 1);
                            handle.destroy();
                        }
                    };
                }
            }
        },
        get(label) {
            if (registry) {
                const item = registry.getInjector(label);
                if (item) {
                    return item.injector();
                }
            }
            return null;
        }
    };
});
/* harmony default export */ __webpack_exports__["default"] = (injector);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/middleware/theme.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@dojo/framework/core/middleware/theme.mjs ***!
  \****************************************************************/
/*! exports provided: THEME_KEY, INJECTED_THEME_KEY, theme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_KEY", function() { return THEME_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECTED_THEME_KEY", function() { return INJECTED_THEME_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _icache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icache */ "./node_modules/@dojo/framework/core/middleware/icache.mjs");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injector */ "./node_modules/@dojo/framework/core/middleware/injector.mjs");
/* harmony import */ var _shim_Set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shim/Set */ "./node_modules/@dojo/framework/shim/Set.mjs");
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../diff */ "./node_modules/@dojo/framework/core/diff.mjs");
/* harmony import */ var _ThemeInjector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ThemeInjector */ "./node_modules/@dojo/framework/core/ThemeInjector.mjs");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};






const THEME_KEY = ' _key';
const INJECTED_THEME_KEY = '__theme_injector';
function registerThemeInjector(theme, themeRegistry) {
    const themeInjector = new _ThemeInjector__WEBPACK_IMPORTED_MODULE_5__["ThemeInjector"](theme);
    themeRegistry.defineInjector(INJECTED_THEME_KEY, (invalidator) => {
        themeInjector.setInvalidator(invalidator);
        return () => themeInjector;
    });
    return themeInjector;
}
const factory = Object(_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({ invalidator: _vdom__WEBPACK_IMPORTED_MODULE_0__["invalidator"], icache: _icache__WEBPACK_IMPORTED_MODULE_1__["default"], diffProperty: _vdom__WEBPACK_IMPORTED_MODULE_0__["diffProperty"], injector: _injector__WEBPACK_IMPORTED_MODULE_2__["default"], getRegistry: _vdom__WEBPACK_IMPORTED_MODULE_0__["getRegistry"] }).properties();
const theme = factory(({ middleware: { invalidator, icache, diffProperty, injector, getRegistry }, properties }) => {
    let themeKeys = new _shim_Set__WEBPACK_IMPORTED_MODULE_3__["default"]();
    diffProperty('theme', properties, (current, next) => {
        const { changed } = Object(_diff__WEBPACK_IMPORTED_MODULE_4__["auto"])(current.theme, next.theme, 3);
        if (changed) {
            icache.clear();
            invalidator();
        }
    });
    diffProperty('classes', (current, next) => {
        let result = false;
        if ((current.classes && !next.classes) || (!current.classes && next.classes)) {
            result = true;
        }
        else if (current.classes && next.classes) {
            const keys = [...themeKeys.values()];
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                result = Object(_diff__WEBPACK_IMPORTED_MODULE_4__["auto"])(current.classes[key], next.classes[key], 2).changed;
                if (result) {
                    break;
                }
            }
        }
        if (result) {
            icache.clear();
            invalidator();
        }
    });
    function getTheme() {
        const { theme } = properties();
        if (theme) {
            return theme;
        }
        const themeInjector = injector.get(INJECTED_THEME_KEY);
        if (themeInjector) {
            const themePayload = themeInjector.get();
            if (Object(_ThemeInjector__WEBPACK_IMPORTED_MODULE_5__["isThemeInjectorPayloadWithVariant"])(themePayload)) {
                return { theme: themePayload.theme, variant: themePayload.variant };
            }
            else if (themePayload) {
                return themePayload.theme;
            }
        }
    }
    const themeInjector = injector.get(INJECTED_THEME_KEY);
    if (!themeInjector) {
        const registry = getRegistry();
        if (registry) {
            registerThemeInjector(undefined, registry.base);
        }
    }
    injector.subscribe(INJECTED_THEME_KEY, () => {
        icache.clear();
        invalidator();
    });
    function set(theme, variant) {
        const currentTheme = injector.get(INJECTED_THEME_KEY);
        if (currentTheme) {
            if (Object(_ThemeInjector__WEBPACK_IMPORTED_MODULE_5__["isThemeWithVariants"])(theme)) {
                currentTheme.set(theme, variant);
            }
            else {
                currentTheme.set(theme);
            }
        }
    }
    return {
        classes(css) {
            const cachedTheme = icache.get(css);
            if (cachedTheme) {
                return cachedTheme;
            }
            const _a = THEME_KEY, key = css[_a], classes = __rest(css, [typeof _a === "symbol" ? _a : _a + ""]);
            themeKeys.add(key);
            let theme = classes;
            let { classes: currentClasses } = properties();
            let currentTheme = getTheme();
            if (currentTheme && Object(_ThemeInjector__WEBPACK_IMPORTED_MODULE_5__["isThemeWithVariant"])(currentTheme)) {
                currentTheme = Object(_ThemeInjector__WEBPACK_IMPORTED_MODULE_5__["isThemeWithVariants"])(currentTheme.theme)
                    ? currentTheme.theme.theme
                    : currentTheme.theme;
            }
            if (currentTheme && currentTheme[key]) {
                theme = Object.assign({}, theme, currentTheme[key]);
            }
            if (currentClasses && currentClasses[key]) {
                const classKeys = Object.keys(currentClasses[key]);
                for (let i = 0; i < classKeys.length; i++) {
                    const classKey = classKeys[i];
                    if (theme[classKey]) {
                        theme[classKey] = `${theme[classKey]} ${currentClasses[key][classKey].join(' ')}`;
                    }
                }
            }
            icache.set(css, theme, false);
            return theme;
        },
        variant() {
            const theme = getTheme();
            if (theme && Object(_ThemeInjector__WEBPACK_IMPORTED_MODULE_5__["isThemeWithVariant"])(theme)) {
                return theme.variant.value.root;
            }
        },
        set,
        get() {
            const currentTheme = injector.get(INJECTED_THEME_KEY);
            if (currentTheme) {
                return currentTheme.get();
            }
        }
    };
});
/* harmony default export */ __webpack_exports__["default"] = (theme);


/***/ }),

/***/ "./node_modules/@dojo/framework/core/mixins/I18n.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@dojo/framework/core/mixins/I18n.mjs ***!
  \***********************************************************/
/*! exports provided: INJECTOR_KEY, registerI18nInjector, I18nMixin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nMixin", function() { return I18nMixin; });
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../i18n/i18n */ "./node_modules/@dojo/framework/i18n/i18n.mjs");
/* harmony import */ var _vdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _decorators_afterRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../decorators/afterRender */ "./node_modules/@dojo/framework/core/decorators/afterRender.mjs");
/* harmony import */ var _decorators_inject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../decorators/inject */ "./node_modules/@dojo/framework/core/decorators/inject.mjs");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "./node_modules/@dojo/framework/core/util.mjs");
/* harmony import */ var _shim_Promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shim/Promise */ "./node_modules/@dojo/framework/shim/Promise.mjs");
/* harmony import */ var _decorators_beforeProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators/beforeProperties */ "./node_modules/@dojo/framework/core/decorators/beforeProperties.mjs");
/* harmony import */ var _I18nInjector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../I18nInjector */ "./node_modules/@dojo/framework/core/I18nInjector.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INJECTOR_KEY", function() { return _I18nInjector__WEBPACK_IMPORTED_MODULE_7__["INJECTOR_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerI18nInjector", function() { return _I18nInjector__WEBPACK_IMPORTED_MODULE_7__["registerI18nInjector"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable:interface-name */









const previousLocaleMap = new WeakMap();
function I18nMixin(Base) {
    let I18n = class I18n extends Base {
        localizeBundle(baseBundle) {
            let { locale, i18nBundle } = this.properties;
            if (i18nBundle) {
                if (i18nBundle instanceof Map) {
                    baseBundle = i18nBundle.get(baseBundle) || baseBundle;
                }
                else {
                    baseBundle = i18nBundle;
                }
            }
            return Object(_i18n_i18n__WEBPACK_IMPORTED_MODULE_0__["localizeBundle"])(baseBundle, {
                locale,
                invalidator: () => {
                    this.invalidate();
                }
            });
        }
        renderDecorator(result) {
            Object(_util__WEBPACK_IMPORTED_MODULE_4__["decorate"])(result, {
                modifier: (node, breaker) => {
                    const { locale, rtl } = this.properties;
                    const properties = {};
                    if (typeof rtl === 'boolean') {
                        properties['dir'] = rtl ? 'rtl' : 'ltr';
                    }
                    if (locale) {
                        properties['lang'] = locale;
                    }
                    node.properties = Object.assign({}, node.properties, properties);
                    breaker();
                },
                predicate: _vdom__WEBPACK_IMPORTED_MODULE_1__["isVNode"]
            });
            return result;
        }
    };
    __decorate([
        Object(_decorators_afterRender__WEBPACK_IMPORTED_MODULE_2__["afterRender"])()
    ], I18n.prototype, "renderDecorator", null);
    I18n = __decorate([
        Object(_decorators_beforeProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(function (properties) {
            const injector = Object(_decorators_inject__WEBPACK_IMPORTED_MODULE_3__["getInjector"])(this, _I18nInjector__WEBPACK_IMPORTED_MODULE_7__["INJECTOR_KEY"]);
            let injectedLocale;
            let injectedRtl;
            if (injector) {
                const injectLocaleData = injector();
                if (injectLocaleData) {
                    const injectedLocaleData = injectLocaleData.get();
                    if (injectedLocaleData) {
                        injectedLocale = injectedLocaleData.locale;
                        injectedRtl = injectedLocaleData.rtl;
                    }
                }
            }
            const previousLocale = previousLocaleMap.get(this);
            previousLocaleMap.set(this, properties.locale);
            if (properties.locale && previousLocale !== properties.locale) {
                const result = Object(_i18n_i18n__WEBPACK_IMPORTED_MODULE_0__["setLocale"])({ locale: properties.locale, local: true });
                if (Object(_shim_Promise__WEBPACK_IMPORTED_MODULE_5__["isThenable"])(result)) {
                    result.then(() => {
                        this.invalidate();
                    });
                    return {
                        locale: previousLocale || injectedLocale || Object(_i18n_i18n__WEBPACK_IMPORTED_MODULE_0__["getCurrentLocale"])(),
                        rtl: properties.rtl !== undefined ? properties.rtl : injectedRtl
                    };
                }
            }
            return {
                locale: properties.locale || injectedLocale || Object(_i18n_i18n__WEBPACK_IMPORTED_MODULE_0__["getCurrentLocale"])(),
                rtl: properties.rtl !== undefined ? properties.rtl : injectedRtl
            };
        })
    ], I18n);
    return I18n;
}
/* harmony default export */ __webpack_exports__["default"] = (I18nMixin);


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

/***/ "./node_modules/@dojo/framework/core/vdom.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@dojo/framework/core/vdom.mjs ***!
  \****************************************************/
/*! exports provided: setRendering, incrementBlockCount, decrementBlockCount, isTextNode, isWNode, isVNode, isDomVNode, isElementNode, w, v, dom, REGISTRY_ITEM, FromRegistry, fromRegistry, tsx, propertiesDiff, create, widgetInstanceMap, invalidator, node, diffProperty, destroy, getRegistry, defer, renderer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRendering", function() { return setRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementBlockCount", function() { return incrementBlockCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementBlockCount", function() { return decrementBlockCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTextNode", function() { return isTextNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWNode", function() { return isWNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVNode", function() { return isVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDomVNode", function() { return isDomVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementNode", function() { return isElementNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRY_ITEM", function() { return REGISTRY_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromRegistry", function() { return FromRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRegistry", function() { return fromRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsx", function() { return tsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertiesDiff", function() { return propertiesDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widgetInstanceMap", function() { return widgetInstanceMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidator", function() { return invalidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "node", function() { return node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffProperty", function() { return diffProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegistry", function() { return getRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderer", function() { return renderer; });
/* harmony import */ var _shim_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shim/global */ "./node_modules/@dojo/framework/shim/global.mjs");
/* harmony import */ var _core_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has */ "./node_modules/@dojo/framework/core/has.mjs");
/* harmony import */ var _shim_WeakMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shim/WeakMap */ "./node_modules/@dojo/framework/shim/WeakMap.mjs");
/* harmony import */ var _shim_Set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shim/Set */ "./node_modules/@dojo/framework/shim/Set.mjs");
/* harmony import */ var _shim_Map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shim/Map */ "./node_modules/@dojo/framework/shim/Map.mjs");
/* harmony import */ var _shim_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shim/array */ "./node_modules/@dojo/framework/shim/array.mjs");
/* harmony import */ var _Registry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Registry */ "./node_modules/@dojo/framework/core/Registry.mjs");
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./diff */ "./node_modules/@dojo/framework/core/diff.mjs");
/* harmony import */ var _RegistryHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RegistryHandler */ "./node_modules/@dojo/framework/core/RegistryHandler.mjs");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};









const EMPTY_ARRAY = [];
const nodeOperations = ['focus', 'blur', 'scrollIntoView', 'click'];
const NAMESPACE_W3 = 'http://www.w3.org/';
const NAMESPACE_SVG = NAMESPACE_W3 + '2000/svg';
const NAMESPACE_XLINK = NAMESPACE_W3 + '1999/xlink';
const WNODE = '__WNODE_TYPE';
const VNODE = '__VNODE_TYPE';
const DOMVNODE = '__DOMVNODE_TYPE';
// @ts-ignore
const scope =  true ? 'apconf2020' : undefined;
if (!_shim_global__WEBPACK_IMPORTED_MODULE_0__["default"][scope]) {
    _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"][scope] = {};
}
function setRendering(value) {
    _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"][scope].rendering = value;
}
function incrementBlockCount() {
    const blocksPending = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"][scope].blocksPending || 0;
    _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"][scope].blocksPending = blocksPending + 1;
}
function decrementBlockCount() {
    const blocksPending = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"][scope].blocksPending || 0;
    _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"][scope].blocksPending = blocksPending - 1;
}
function isTextNode(item) {
    return item && item.nodeType === 3;
}
function isLazyDefine(item) {
    return Boolean(item && item.label);
}
function isWNodeWrapper(child) {
    return child && isWNode(child.node);
}
function isVNodeWrapper(child) {
    return !!child && isVNode(child.node);
}
function isVirtualWrapper(child) {
    return isVNodeWrapper(child) && child.node.tag === 'virtual';
}
function isBodyWrapper(wrapper) {
    return isVNodeWrapper(wrapper) && wrapper.node.tag === 'body';
}
function isAttachApplication(value) {
    return !!value.type;
}
function isWNode(child) {
    return Boolean(child && child !== true && typeof child !== 'string' && child.type === WNODE);
}
function isVNode(child) {
    return Boolean(child && child !== true && typeof child !== 'string' && (child.type === VNODE || child.type === DOMVNODE));
}
function isDomVNode(child) {
    return Boolean(child && child !== true && typeof child !== 'string' && child.type === DOMVNODE);
}
function isElementNode(value) {
    return !!value.tagName;
}
function toTextVNode(data) {
    return {
        tag: '',
        properties: {},
        children: undefined,
        text: `${data}`,
        type: VNODE
    };
}
function updateAttributes(domNode, previousAttributes, attributes, namespace) {
    const attrNames = Object.keys(attributes);
    const attrCount = attrNames.length;
    for (let i = 0; i < attrCount; i++) {
        const attrName = attrNames[i];
        const attrValue = attributes[attrName];
        const previousAttrValue = previousAttributes[attrName];
        if (attrValue !== previousAttrValue) {
            updateAttribute(domNode, attrName, attrValue, namespace);
        }
    }
}
function w(widgetConstructorOrNode, properties, children) {
    if (properties.__children__) {
        delete properties.__children__;
    }
    if (Object(_Registry__WEBPACK_IMPORTED_MODULE_6__["isWNodeFactory"])(widgetConstructorOrNode)) {
        return widgetConstructorOrNode(properties, children);
    }
    if (isWNode(widgetConstructorOrNode)) {
        properties = Object.assign({}, widgetConstructorOrNode.properties, properties);
        children = children ? children : widgetConstructorOrNode.children;
        widgetConstructorOrNode = widgetConstructorOrNode.widgetConstructor;
    }
    return {
        children: children || [],
        widgetConstructor: widgetConstructorOrNode,
        properties,
        type: WNODE
    };
}
function v(tag, propertiesOrChildren = {}, children = undefined) {
    let properties = propertiesOrChildren;
    let deferredPropertiesCallback;
    if (typeof tag.tag === 'function') {
        return tag.tag(properties, children);
    }
    if (Array.isArray(propertiesOrChildren)) {
        children = propertiesOrChildren;
        properties = {};
    }
    if (typeof properties === 'function') {
        deferredPropertiesCallback = properties;
        properties = {};
    }
    if (isVNode(tag)) {
        let { classes = [], styles = {} } = properties, newProperties = __rest(properties, ["classes", "styles"]);
        let _a = tag.properties, { classes: nodeClasses = [], styles: nodeStyles = {} } = _a, nodeProperties = __rest(_a, ["classes", "styles"]);
        nodeClasses = Array.isArray(nodeClasses) ? nodeClasses : [nodeClasses];
        classes = Array.isArray(classes) ? classes : [classes];
        styles = Object.assign({}, nodeStyles, styles);
        properties = Object.assign({}, nodeProperties, newProperties, { classes: [...nodeClasses, ...classes], styles });
        children = children ? children : tag.children;
        tag = tag.tag;
    }
    return {
        tag,
        deferredPropertiesCallback,
        children,
        properties,
        type: VNODE
    };
}
/**
 * Create a VNode for an existing DOM Node.
 */
function dom({ node, attrs = {}, props = {}, on = {}, diffType = 'none', onAttach }, children) {
    return {
        tag: isElementNode(node) ? node.tagName.toLowerCase() : '',
        properties: props,
        attributes: attrs,
        events: on,
        children,
        type: DOMVNODE,
        domNode: node,
        text: isElementNode(node) ? undefined : node.data,
        diffType,
        onAttach
    };
}
const REGISTRY_ITEM = '__registry_item';
class FromRegistry {
    constructor() {
        /* tslint:disable-next-line:variable-name */
        this.__properties__ = {};
    }
}
FromRegistry.type = REGISTRY_ITEM;
function fromRegistry(tag) {
    var _a;
    return _a = class extends FromRegistry {
            constructor() {
                super(...arguments);
                this.properties = {};
                this.name = tag;
            }
        },
        _a.type = REGISTRY_ITEM,
        _a;
}
function tsx(tag, properties = {}, ...children) {
    children = Object(_shim_array__WEBPACK_IMPORTED_MODULE_5__["flat"])(children, Infinity);
    properties = properties === null ? {} : properties;
    if (typeof tag === 'string') {
        return v(tag, properties, children);
    }
    else if (tag.type === 'registry' && properties.__autoRegistryItem) {
        const name = properties.__autoRegistryItem;
        delete properties.__autoRegistryItem;
        return w(name, properties, children);
    }
    else if (tag.type === REGISTRY_ITEM) {
        const registryItem = new tag();
        return w(registryItem.name, properties, children);
    }
    else {
        return w(tag, properties, children);
    }
}
function propertiesDiff(current, next, invalidator, ignoreProperties) {
    const propertyNames = [...Object.keys(current), ...Object.keys(next)];
    for (let i = 0; i < propertyNames.length; i++) {
        if (ignoreProperties.indexOf(propertyNames[i]) > -1) {
            continue;
        }
        const result = Object(_diff__WEBPACK_IMPORTED_MODULE_7__["auto"])(current[propertyNames[i]], next[propertyNames[i]]);
        if (result.changed) {
            invalidator();
            break;
        }
        ignoreProperties.push(propertyNames[i]);
    }
}
function buildPreviousProperties(domNode, current) {
    const { node: { diffType, properties, attributes } } = current;
    if (!diffType || diffType === 'vdom') {
        return {
            properties: current.deferredProperties
                ? Object.assign({}, current.deferredProperties, current.node.properties) : current.node.properties,
            attributes: current.node.attributes,
            events: current.node.events
        };
    }
    else if (diffType === 'none') {
        return {
            properties: {},
            attributes: current.node.attributes ? {} : undefined,
            events: current.node.events
        };
    }
    let newProperties = {
        properties: {}
    };
    if (attributes) {
        newProperties.attributes = {};
        newProperties.events = current.node.events;
        Object.keys(properties).forEach((propName) => {
            newProperties.properties[propName] = domNode[propName];
        });
        Object.keys(attributes).forEach((attrName) => {
            newProperties.attributes[attrName] = domNode.getAttribute(attrName);
        });
        return newProperties;
    }
    newProperties.properties = Object.keys(properties).reduce((props, property) => {
        props[property] = domNode.getAttribute(property) || domNode[property];
        return props;
    }, {});
    return newProperties;
}
function checkDistinguishable(wrappers, index, parentWNodeWrapper) {
    const wrapperToCheck = wrappers[index];
    if (isVNodeWrapper(wrapperToCheck) && !wrapperToCheck.node.tag) {
        return;
    }
    const { key } = wrapperToCheck.node.properties;
    let parentName = 'unknown';
    if (parentWNodeWrapper) {
        const { node: { widgetConstructor } } = parentWNodeWrapper;
        parentName = widgetConstructor.name || 'unknown';
    }
    if (key === undefined || key === null) {
        for (let i = 0; i < wrappers.length; i++) {
            if (i !== index) {
                const wrapper = wrappers[i];
                if (same(wrapper, wrapperToCheck)) {
                    let nodeIdentifier;
                    if (isWNodeWrapper(wrapper)) {
                        nodeIdentifier = wrapper.node.widgetConstructor.name || 'unknown';
                    }
                    else {
                        nodeIdentifier = wrapper.node.tag;
                    }
                    console.warn(`A widget (${parentName}) has had a child added or removed, but they were not able to uniquely identified. It is recommended to provide a unique 'key' property when using the same widget or element (${nodeIdentifier}) multiple times as siblings`);
                    break;
                }
            }
        }
    }
}
function same(dnode1, dnode2) {
    if (isVNodeWrapper(dnode1) && isVNodeWrapper(dnode2)) {
        if (isDomVNode(dnode1.node) && isDomVNode(dnode2.node)) {
            if (dnode1.node.domNode !== dnode2.node.domNode) {
                return false;
            }
        }
        if (dnode1.node.tag !== dnode2.node.tag) {
            return false;
        }
        if (dnode1.node.properties.key !== dnode2.node.properties.key) {
            return false;
        }
        return true;
    }
    else if (isWNodeWrapper(dnode1) && isWNodeWrapper(dnode2)) {
        const widgetConstructor1 = dnode1.registryItem || dnode1.node.widgetConstructor;
        const widgetConstructor2 = dnode2.registryItem || dnode2.node.widgetConstructor;
        const { node: { properties: props1 } } = dnode1;
        const { node: { properties: props2 } } = dnode2;
        if (dnode1.instance === undefined && typeof widgetConstructor2 === 'string') {
            return false;
        }
        if (widgetConstructor1 !== widgetConstructor2) {
            return false;
        }
        if (props1.key !== props2.key) {
            return false;
        }
        if (!(widgetConstructor1.keys || []).every((key) => props1[key] === props2[key])) {
            return false;
        }
        return true;
    }
    return false;
}
function findIndexOfChild(children, sameAs, start) {
    for (let i = start; i < children.length; i++) {
        if (same(children[i], sameAs)) {
            return i;
        }
    }
    return -1;
}
function createClassPropValue(classes = []) {
    let classNames = '';
    if (Array.isArray(classes)) {
        for (let i = 0; i < classes.length; i++) {
            let className = classes[i];
            if (className && className !== true) {
                classNames = classNames ? `${classNames} ${className}` : className;
            }
        }
        return classNames;
    }
    if (classes && classes !== true) {
        classNames = classes;
    }
    return classNames;
}
function updateAttribute(domNode, attrName, attrValue, namespace) {
    if (namespace === NAMESPACE_SVG && attrName === 'href' && attrValue) {
        domNode.setAttributeNS(NAMESPACE_XLINK, attrName, attrValue);
    }
    else if ((attrName === 'role' && attrValue === '') || attrValue === undefined) {
        domNode.removeAttribute(attrName);
    }
    else {
        domNode.setAttribute(attrName, attrValue);
    }
}
function arrayFrom(arr) {
    return Array.prototype.slice.call(arr);
}
function createFactory(callback, middlewares, key) {
    const factory = (properties, children) => {
        if (properties) {
            const result = w(callback, properties, children);
            callback.isWidget = true;
            callback.middlewares = middlewares;
            return result;
        }
        return {
            middlewares,
            callback
        };
    };
    const keys = Object.keys(middlewares).reduce((keys, middlewareName) => {
        const middleware = middlewares[middlewareName];
        if (middleware.keys) {
            keys = [...keys, ...middleware.keys];
        }
        return keys;
    }, key ? [key] : []);
    callback.keys = keys;
    factory.keys = keys;
    factory.isFactory = true;
    return factory;
}
function create(middlewares = {}) {
    function properties() {
        function returns(callback) {
            return createFactory(callback, middlewares);
        }
        function key(key) {
            function returns(callback) {
                return createFactory(callback, middlewares, key);
            }
            return returns;
        }
        function children() {
            function returns(callback) {
                return createFactory(callback, middlewares);
            }
            function key(key) {
                function returns(callback) {
                    return createFactory(callback, middlewares, key);
                }
                return returns;
            }
            returns.key = key;
            return returns;
        }
        returns.children = children;
        returns.key = key;
        return returns;
    }
    function children() {
        function properties() {
            function returns(callback) {
                return createFactory(callback, middlewares);
            }
            function key(key) {
                function returns(callback) {
                    return createFactory(callback, middlewares, key);
                }
                return returns;
            }
            returns.key = key;
            return returns;
        }
        function returns(callback) {
            return createFactory(callback, middlewares);
        }
        returns.properties = properties;
        return returns;
    }
    function returns(callback) {
        return createFactory(callback, middlewares);
    }
    returns.children = children;
    returns.properties = properties;
    return returns;
}
const factory = create();
function wrapNodes(renderer) {
    const result = renderer();
    const isWNodeWrapper = isWNode(result);
    const callback = () => {
        return result;
    };
    callback.isWNodeWrapper = isWNodeWrapper;
    return factory(callback);
}
const widgetInstanceMap = new _shim_WeakMap__WEBPACK_IMPORTED_MODULE_2__["default"]();
const widgetMetaMap = new _shim_Map__WEBPACK_IMPORTED_MODULE_4__["default"]();
const requestedDomNodes = new _shim_Set__WEBPACK_IMPORTED_MODULE_3__["default"]();
let wrapperId = 0;
let metaId = 0;
function addNodeToMap(id, key, node) {
    const widgetMeta = widgetMetaMap.get(id);
    if (widgetMeta) {
        widgetMeta.nodeMap = widgetMeta.nodeMap || new _shim_Map__WEBPACK_IMPORTED_MODULE_4__["default"]();
        widgetMeta.nodeMap.set(key, node);
        if (requestedDomNodes.has(`${id}-${key}`)) {
            widgetMeta.invalidator();
            requestedDomNodes.delete(`${id}-${key}`);
        }
    }
}
function destroyHandles(meta) {
    const { destroyMap, middlewareIds } = meta;
    if (!destroyMap) {
        return;
    }
    for (let i = 0; i < middlewareIds.length; i++) {
        const id = middlewareIds[i];
        const destroy = destroyMap.get(id);
        destroy && destroy();
        destroyMap.delete(id);
        if (destroyMap.size === 0) {
            break;
        }
    }
    destroyMap.clear();
}
function runDiffs(meta, current, next) {
    let customProperties = {};
    meta.customDiffMap = meta.customDiffMap || new _shim_Map__WEBPACK_IMPORTED_MODULE_4__["default"]();
    if (meta.customDiffMap.size) {
        meta.customDiffMap.forEach((diffMap) => {
            diffMap.forEach((diff, propertyName) => {
                const result = diff(Object.assign({}, current), Object.assign({}, next));
                if (result) {
                    customProperties[propertyName] = result;
                }
            });
        });
    }
    return customProperties;
}
const invalidator = factory(({ id }) => {
    const [widgetId] = id.split('-');
    return () => {
        const widgetMeta = widgetMetaMap.get(widgetId);
        if (widgetMeta) {
            return widgetMeta.invalidator();
        }
    };
});
const node = factory(({ id }) => {
    return {
        get(key) {
            const [widgetId] = id.split('-');
            const widgetMeta = widgetMetaMap.get(widgetId);
            if (widgetMeta) {
                widgetMeta.nodeMap = widgetMeta.nodeMap || new _shim_Map__WEBPACK_IMPORTED_MODULE_4__["default"]();
                const mountNode = widgetMeta.mountNode;
                const node = widgetMeta.nodeMap.get(key);
                if (node &&
                    (mountNode.contains(node) ||
                        (_shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].document.body !== mountNode && _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].document.body.contains(node)))) {
                    return node;
                }
                requestedDomNodes.add(`${widgetId}-${key}`);
            }
            return null;
        }
    };
});
const diffProperty = factory(({ id }) => {
    function callback(propertyName, propertiesOrDiff, diff) {
        const [widgetId] = id.split('-');
        const widgetMeta = widgetMetaMap.get(widgetId);
        if (!diff) {
            diff = propertiesOrDiff;
        }
        if (widgetMeta) {
            widgetMeta.customDiffMap = widgetMeta.customDiffMap || new _shim_Map__WEBPACK_IMPORTED_MODULE_4__["default"]();
            widgetMeta.customDiffProperties = widgetMeta.customDiffProperties || new _shim_Set__WEBPACK_IMPORTED_MODULE_3__["default"]();
            const propertyDiffMap = widgetMeta.customDiffMap.get(id) || new _shim_Map__WEBPACK_IMPORTED_MODULE_4__["default"]();
            if (!propertyDiffMap.has(propertyName)) {
                const result = diff({}, widgetMeta.originalProperties);
                if (result !== undefined) {
                    if (true) {
                        if (widgetMeta.propertiesCalled) {
                            console.warn(`Calling "propertyDiff" middleware after accessing properties in "${widgetMeta.widgetName}", can result in referencing stale properties.`);
                        }
                    }
                    widgetMeta.properties = Object.assign({}, widgetMeta.properties, { [propertyName]: result });
                }
                propertyDiffMap.set(propertyName, diff);
                widgetMeta.customDiffProperties.add(propertyName);
            }
            widgetMeta.customDiffMap.set(id, propertyDiffMap);
        }
    }
    return callback;
});
const destroy = factory(({ id }) => {
    return (destroyFunction) => {
        const [widgetId] = id.split('-');
        const widgetMeta = widgetMetaMap.get(widgetId);
        if (widgetMeta) {
            widgetMeta.destroyMap = widgetMeta.destroyMap || new _shim_Map__WEBPACK_IMPORTED_MODULE_4__["default"]();
            if (!widgetMeta.destroyMap.has(id)) {
                widgetMeta.destroyMap.set(id, destroyFunction);
            }
        }
    };
});
const getRegistry = factory(({ id }) => {
    const [widgetId] = id.split('-');
    return () => {
        const widgetMeta = widgetMetaMap.get(widgetId);
        if (widgetMeta) {
            if (!widgetMeta.registryHandler) {
                widgetMeta.registryHandler = new _RegistryHandler__WEBPACK_IMPORTED_MODULE_8__["default"]();
                widgetMeta.registryHandler.base = widgetMeta.registry;
                widgetMeta.registryHandler.on('invalidate', widgetMeta.invalidator);
            }
            widgetMeta.registryHandler = widgetMeta.registryHandler || new _RegistryHandler__WEBPACK_IMPORTED_MODULE_8__["default"]();
            return widgetMeta.registryHandler;
        }
        return null;
    };
});
const defer = factory(({ id }) => {
    const [widgetId] = id.split('-');
    let isDeferred = false;
    return {
        pause() {
            const widgetMeta = widgetMetaMap.get(widgetId);
            if (!isDeferred && widgetMeta) {
                widgetMeta.deferRefs = widgetMeta.deferRefs + 1;
                isDeferred = true;
            }
        },
        resume() {
            const widgetMeta = widgetMetaMap.get(widgetId);
            if (isDeferred && widgetMeta) {
                widgetMeta.deferRefs = widgetMeta.deferRefs - 1;
                isDeferred = false;
            }
        }
    };
});
function wrapFunctionProperties(id, properties) {
    const props = {};
    const propertyNames = Object.keys(properties);
    for (let i = 0; i < propertyNames.length; i++) {
        const propertyName = propertyNames[i];
        if (typeof properties[propertyName] === 'function') {
            props[propertyName] = function WrappedProperty(...args) {
                const widgetMeta = widgetMetaMap.get(id);
                if (widgetMeta) {
                    return widgetMeta.originalProperties[propertyName](...args);
                }
                return properties[propertyName](...args);
            };
            props[propertyName].unwrap = () => {
                const widgetMeta = widgetMetaMap.get(id);
                if (widgetMeta) {
                    return widgetMeta.originalProperties[propertyName];
                }
                return properties[propertyName];
            };
        }
        else {
            props[propertyName] = properties[propertyName];
        }
    }
    return props;
}
function renderer(renderer) {
    let _mountOptions = {
        sync: false,
        merge: true,
        transition: undefined,
        domNode: _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].document.body,
        registry: new _Registry__WEBPACK_IMPORTED_MODULE_6__["Registry"]()
    };
    let _invalidationQueue = [];
    let _processQueue = [];
    let _deferredProcessQueue = [];
    let _applicationQueue = [];
    let _eventMap = new _shim_WeakMap__WEBPACK_IMPORTED_MODULE_2__["default"]();
    let _idToWrapperMap = new _shim_Map__WEBPACK_IMPORTED_MODULE_4__["default"]();
    let _wrapperSiblingMap = new _shim_WeakMap__WEBPACK_IMPORTED_MODULE_2__["default"]();
    let _idToChildrenWrappers = new _shim_Map__WEBPACK_IMPORTED_MODULE_4__["default"]();
    let _insertBeforeMap = new _shim_WeakMap__WEBPACK_IMPORTED_MODULE_2__["default"]();
    let _nodeToWrapperMap = new _shim_WeakMap__WEBPACK_IMPORTED_MODULE_2__["default"]();
    let _renderScheduled;
    let _deferredRenderCallbacks = [];
    let parentInvalidate;
    let _allMergedNodes = [];
    let _appWrapperId;
    let _deferredProcessIds = new _shim_Map__WEBPACK_IMPORTED_MODULE_4__["default"]();
    function nodeOperation(propName, propValue, previousValue, domNode) {
        let result = propValue && !previousValue;
        if (typeof propValue === 'function') {
            result = propValue();
        }
        if (result === true) {
            _deferredRenderCallbacks.push(() => {
                domNode[propName]();
            });
        }
    }
    function updateEvent(domNode, eventName, currentValue, previousValue) {
        if (previousValue) {
            const previousEvent = _eventMap.get(previousValue);
            previousEvent && domNode.removeEventListener(eventName, previousEvent);
        }
        let callback = currentValue;
        if (eventName === 'input') {
            callback = function (evt) {
                currentValue.call(this, evt);
                evt.target['oninput-value'] = evt.target.value;
            };
        }
        domNode.addEventListener(eventName, callback);
        _eventMap.set(currentValue, callback);
    }
    function removeOrphanedEvents(domNode, previousProperties, properties, onlyEvents = false) {
        Object.keys(previousProperties).forEach((propName) => {
            const isEvent = propName.substr(0, 2) === 'on' || onlyEvents;
            const eventName = onlyEvents ? propName : propName.substr(2);
            if (isEvent && !properties[propName]) {
                const eventCallback = _eventMap.get(previousProperties[propName]);
                if (eventCallback) {
                    domNode.removeEventListener(eventName, eventCallback);
                }
            }
        });
    }
    function resolveRegistryItem(wrapper, instance, id) {
        if (!Object(_Registry__WEBPACK_IMPORTED_MODULE_6__["isWidget"])(wrapper.node.widgetConstructor)) {
            const owningNode = _nodeToWrapperMap.get(wrapper.node);
            if (owningNode) {
                if (owningNode.instance) {
                    instance = owningNode.instance;
                }
                else {
                    id = owningNode.id;
                }
            }
            let registry;
            if (instance) {
                const instanceData = widgetInstanceMap.get(instance);
                if (instanceData) {
                    registry = instanceData.registry;
                }
            }
            else if (id !== undefined) {
                const widgetMeta = widgetMetaMap.get(id);
                if (widgetMeta) {
                    if (!widgetMeta.registryHandler) {
                        widgetMeta.registryHandler = new _RegistryHandler__WEBPACK_IMPORTED_MODULE_8__["default"]();
                        widgetMeta.registryHandler.base = widgetMeta.registry;
                        widgetMeta.registryHandler.on('invalidate', widgetMeta.invalidator);
                    }
                    registry = widgetMeta.registryHandler;
                }
            }
            if (registry) {
                let registryLabel;
                if (isLazyDefine(wrapper.node.widgetConstructor)) {
                    const { label, registryItem } = wrapper.node.widgetConstructor;
                    if (!registry.has(label)) {
                        registry.define(label, registryItem);
                    }
                    registryLabel = label;
                }
                else {
                    registryLabel = wrapper.node.widgetConstructor;
                }
                let item = registry.get(registryLabel);
                if (Object(_Registry__WEBPACK_IMPORTED_MODULE_6__["isWNodeFactory"])(item)) {
                    const node = item(wrapper.node.properties, wrapper.node.children);
                    if (Object(_Registry__WEBPACK_IMPORTED_MODULE_6__["isWidgetFunction"])(node.widgetConstructor)) {
                        wrapper.registryItem = node.widgetConstructor;
                    }
                }
                else {
                    wrapper.registryItem = item;
                }
            }
        }
    }
    function mapNodeToInstance(nodes, wrapper) {
        while (nodes.length) {
            let node = nodes.pop();
            if (isWNode(node) || isVNode(node)) {
                if (!_nodeToWrapperMap.has(node)) {
                    _nodeToWrapperMap.set(node, wrapper);
                    if (node.children && node.children.length) {
                        nodes = [...nodes, ...node.children];
                    }
                }
            }
        }
    }
    function renderedToWrapper(rendered, parent, currentParent) {
        const { requiresInsertBefore, hasPreviousSiblings, namespace, depth } = parent;
        const wrappedRendered = [];
        const hasParentWNode = isWNodeWrapper(parent);
        const hasVirtualParentNode = isVirtualWrapper(parent);
        const currentParentChildren = (isVNodeWrapper(currentParent) && _idToChildrenWrappers.get(currentParent.id)) || [];
        const hasCurrentParentChildren = currentParentChildren.length > 0;
        const insertBefore = ((requiresInsertBefore || hasPreviousSiblings !== false) && (hasParentWNode || hasVirtualParentNode)) ||
            (hasCurrentParentChildren && rendered.length > 1);
        let previousItem;
        if (isWNodeWrapper(parent) && rendered.length) {
            mapNodeToInstance([...rendered], parent);
        }
        for (let i = 0; i < rendered.length; i++) {
            let renderedItem = rendered[i];
            if (!renderedItem || renderedItem === true) {
                continue;
            }
            if (typeof renderedItem === 'string') {
                renderedItem = toTextVNode(renderedItem);
            }
            const owningNode = _nodeToWrapperMap.get(renderedItem);
            const wrapper = {
                node: renderedItem,
                depth: depth + 1,
                order: i,
                parentId: parent.id,
                requiresInsertBefore: insertBefore,
                hasParentWNode,
                namespace: namespace
            };
            if (isVNode(renderedItem)) {
                if (renderedItem.deferredPropertiesCallback) {
                    wrapper.deferredProperties = renderedItem.deferredPropertiesCallback(false);
                }
                if (renderedItem.properties.exitAnimation) {
                    parent.hasAnimations = true;
                    let nextParent = _idToWrapperMap.get(parent.parentId);
                    while (nextParent) {
                        if (nextParent.hasAnimations) {
                            break;
                        }
                        nextParent.hasAnimations = true;
                        nextParent = _idToWrapperMap.get(nextParent.parentId);
                    }
                }
            }
            if (owningNode) {
                wrapper.owningId = owningNode.id;
            }
            if (isWNode(renderedItem)) {
                resolveRegistryItem(wrapper, parent.instance, parent.id);
            }
            if (previousItem) {
                _wrapperSiblingMap.set(previousItem, wrapper);
            }
            wrappedRendered.push(wrapper);
            previousItem = wrapper;
        }
        return wrappedRendered;
    }
    function findParentDomNode(currentNode) {
        let parentDomNode;
        let parentWrapper = _idToWrapperMap.get(currentNode.parentId);
        while (!parentDomNode && parentWrapper) {
            if (!parentDomNode &&
                isVNodeWrapper(parentWrapper) &&
                !isVirtualWrapper(parentWrapper) &&
                parentWrapper.domNode) {
                parentDomNode = parentWrapper.domNode;
            }
            parentWrapper = _idToWrapperMap.get(parentWrapper.parentId);
        }
        return parentDomNode;
    }
    function runDeferredProperties(next) {
        const { deferredPropertiesCallback } = next.node;
        if (deferredPropertiesCallback) {
            const properties = next.node.properties;
            _deferredRenderCallbacks.push(() => {
                if (_idToWrapperMap.has(next.owningId)) {
                    const deferredProperties = next.deferredProperties;
                    next.deferredProperties = deferredPropertiesCallback(true);
                    processProperties(next, {
                        properties: Object.assign({}, deferredProperties, properties)
                    });
                }
            });
        }
    }
    function findInsertBefore(next) {
        let insertBefore = null;
        let searchNode = next;
        while (!insertBefore) {
            const nextSibling = _wrapperSiblingMap.get(searchNode);
            if (nextSibling) {
                let domNode = nextSibling.domNode;
                if (isWNodeWrapper(nextSibling) || isVirtualWrapper(nextSibling)) {
                    if (!nextSibling.childDomWrapperId) {
                        nextSibling.childDomWrapperId = findDomNodeOnParentWrapper(nextSibling.id);
                    }
                    if (nextSibling.childDomWrapperId) {
                        const childWrapper = _idToWrapperMap.get(nextSibling.childDomWrapperId);
                        if (childWrapper && !isBodyWrapper(childWrapper)) {
                            domNode = childWrapper.domNode;
                        }
                    }
                }
                if (domNode && domNode.parentNode) {
                    insertBefore = domNode;
                    break;
                }
                searchNode = nextSibling;
                continue;
            }
            searchNode = searchNode && _idToWrapperMap.get(searchNode.parentId);
            if (!searchNode || (isVNodeWrapper(searchNode) && !isVirtualWrapper(searchNode))) {
                break;
            }
        }
        return insertBefore;
    }
    function setValue(domNode, propValue, previousValue) {
        const domValue = domNode.value;
        const onInputValue = domNode['oninput-value'];
        const onSelectValue = domNode['select-value'];
        if (onSelectValue && domValue !== onSelectValue) {
            domNode.value = onSelectValue;
            if (domNode.value === onSelectValue) {
                domNode['select-value'] = undefined;
            }
        }
        else if ((onInputValue && domValue === onInputValue) || propValue !== previousValue) {
            domNode.value = propValue;
            domNode['oninput-value'] = undefined;
        }
    }
    function setProperties(domNode, currentProperties = {}, nextWrapper, includesEventsAndAttributes = true) {
        const properties = nextWrapper.deferredProperties
            ? Object.assign({}, nextWrapper.deferredProperties, nextWrapper.node.properties) : nextWrapper.node.properties;
        const propNames = Object.keys(properties);
        const propCount = propNames.length;
        if (propNames.indexOf('classes') === -1 && currentProperties.classes) {
            domNode.removeAttribute('class');
        }
        includesEventsAndAttributes && removeOrphanedEvents(domNode, currentProperties, properties);
        for (let i = 0; i < propCount; i++) {
            const propName = propNames[i];
            let propValue = properties[propName];
            const previousValue = currentProperties[propName];
            if (propName === 'classes') {
                const previousClassString = createClassPropValue(previousValue);
                let currentClassString = createClassPropValue(propValue);
                if (previousClassString !== currentClassString) {
                    if (currentClassString) {
                        if (nextWrapper.merged) {
                            const domClasses = (domNode.getAttribute('class') || '').split(' ');
                            for (let i = 0; i < domClasses.length; i++) {
                                if (currentClassString.indexOf(domClasses[i]) === -1) {
                                    currentClassString = `${domClasses[i]} ${currentClassString}`;
                                }
                            }
                        }
                        domNode.setAttribute('class', currentClassString);
                    }
                    else {
                        domNode.removeAttribute('class');
                    }
                }
            }
            else if (nodeOperations.indexOf(propName) !== -1) {
                nodeOperation(propName, propValue, previousValue, domNode);
            }
            else if (propName === 'styles') {
                const styleNames = Object.keys(propValue);
                const styleCount = styleNames.length;
                for (let j = 0; j < styleCount; j++) {
                    const styleName = styleNames[j];
                    const newStyleValue = propValue[styleName];
                    const oldStyleValue = previousValue && previousValue[styleName];
                    if (newStyleValue === oldStyleValue) {
                        continue;
                    }
                    domNode.style[styleName] = newStyleValue || '';
                }
            }
            else {
                if (!propValue && typeof previousValue === 'string') {
                    propValue = '';
                }
                if (propName === 'value') {
                    if (domNode.tagName === 'SELECT') {
                        domNode['select-value'] = propValue;
                    }
                    setValue(domNode, propValue, previousValue);
                }
                else if (propName !== 'key' && propValue !== previousValue) {
                    const type = typeof propValue;
                    if (type === 'function' && propName.lastIndexOf('on', 0) === 0 && includesEventsAndAttributes) {
                        updateEvent(domNode, propName.substr(2), propValue, previousValue);
                    }
                    else if (type === 'string' && propName !== 'innerHTML' && includesEventsAndAttributes) {
                        updateAttribute(domNode, propName, propValue, nextWrapper.namespace);
                    }
                    else if (propName === 'scrollLeft' || propName === 'scrollTop') {
                        if (domNode[propName] !== propValue) {
                            domNode[propName] = propValue;
                        }
                    }
                    else {
                        domNode[propName] = propValue;
                    }
                }
            }
        }
    }
    function _createDeferredRenderCallback() {
        const callbacks = _deferredRenderCallbacks;
        _deferredRenderCallbacks = [];
        if (callbacks.length) {
            return () => {
                let callback;
                while ((callback = callbacks.shift())) {
                    callback();
                }
            };
        }
    }
    function _scheduleDeferredRenderCallbacks() {
        const { sync } = _mountOptions;
        const run = _createDeferredRenderCallback();
        if (run) {
            if (sync) {
                run();
            }
            else {
                let id;
                id = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].requestAnimationFrame(() => {
                    _deferredProcessIds.delete(id);
                    run();
                });
                _deferredProcessIds.set(id, run);
            }
        }
    }
    function processProperties(next, previousProperties) {
        if (next.node.attributes && next.node.events) {
            updateAttributes(next.domNode, previousProperties.attributes || {}, next.node.attributes, next.namespace);
            setProperties(next.domNode, previousProperties.properties, next, false);
            const events = next.node.events || {};
            if (previousProperties.events) {
                removeOrphanedEvents(next.domNode, previousProperties.events || {}, next.node.events, true);
            }
            previousProperties.events = previousProperties.events || {};
            Object.keys(events).forEach((event) => {
                updateEvent(next.domNode, event, events[event], previousProperties.events[event]);
            });
        }
        else {
            setProperties(next.domNode, previousProperties.properties, next);
        }
    }
    function unmount() {
        _processQueue.push({
            current: [_idToWrapperMap.get(_appWrapperId)],
            next: [],
            meta: {}
        });
        if (_renderScheduled) {
            _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].cancelAnimationFrame(_renderScheduled);
        }
        _runProcessQueue();
        _runDomInstructionQueue();
        _deferredProcessIds.forEach((callback, id) => {
            _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].cancelAnimationFrame(id);
            callback();
        });
        const run = _createDeferredRenderCallback();
        run && run();
        _invalidationQueue = [];
        _processQueue = [];
        _deferredProcessQueue = [];
        _applicationQueue = [];
        _deferredRenderCallbacks = [];
        _allMergedNodes = [];
        _eventMap = new _shim_WeakMap__WEBPACK_IMPORTED_MODULE_2__["default"]();
        _idToWrapperMap.clear();
        _idToChildrenWrappers.clear();
        _wrapperSiblingMap = new _shim_WeakMap__WEBPACK_IMPORTED_MODULE_2__["default"]();
        _nodeToWrapperMap = new _shim_WeakMap__WEBPACK_IMPORTED_MODULE_2__["default"]();
        _insertBeforeMap = undefined;
    }
    function mount(mountOptions = {}) {
        let domNode = mountOptions.domNode;
        if (!domNode) {
            if ( true && domNode === null) {
                console.warn('Unable to find node to mount the application, defaulting to the document body.');
            }
            domNode = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].document.body;
        }
        _mountOptions = Object.assign({}, _mountOptions, mountOptions, { domNode });
        const renderResult = wrapNodes(renderer)({}, []);
        _appWrapperId = `${wrapperId++}`;
        const nextWrapper = {
            id: _appWrapperId,
            node: renderResult,
            order: 0,
            depth: 1,
            owningId: '-1',
            parentId: '-1',
            siblingId: '-1',
            properties: {}
        };
        _idToWrapperMap.set('-1', {
            id: `-1`,
            depth: 0,
            order: 0,
            owningId: '',
            domNode,
            node: v('fake'),
            parentId: '-1'
        });
        _processQueue.push({
            current: [],
            next: [nextWrapper],
            meta: { mergeNodes: arrayFrom(domNode.childNodes) }
        });
        _runProcessQueue();
        _runDomInstructionQueue();
        _cleanUpMergedNodes();
        _insertBeforeMap = undefined;
        _scheduleDeferredRenderCallbacks();
        if (!_renderScheduled) {
            setRendering(false);
        }
    }
    function invalidate() {
        parentInvalidate && parentInvalidate();
    }
    function _schedule() {
        const { sync } = _mountOptions;
        if (sync) {
            _runInvalidationQueue();
        }
        else if (!_renderScheduled) {
            setRendering(true);
            _renderScheduled = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].requestAnimationFrame(() => {
                _runInvalidationQueue();
            });
        }
    }
    function getWNodeWrapper(id) {
        const wrapper = _idToWrapperMap.get(id);
        if (wrapper && isWNodeWrapper(wrapper)) {
            return wrapper;
        }
    }
    function _runInvalidationQueue() {
        _renderScheduled = undefined;
        let invalidationQueue = [..._invalidationQueue];
        const previouslyRendered = [];
        _invalidationQueue = [];
        invalidationQueue.sort((a, b) => {
            let result = b.depth - a.depth;
            if (result === 0) {
                result = b.order - a.order;
            }
            return result;
        });
        if (_deferredProcessQueue.length) {
            _processQueue = [..._deferredProcessQueue];
            _deferredProcessQueue = [];
            _runProcessQueue();
            if (_deferredProcessQueue.length) {
                _invalidationQueue = [...invalidationQueue];
                invalidationQueue = [];
            }
        }
        let item;
        while ((item = invalidationQueue.pop())) {
            let { id } = item;
            const current = getWNodeWrapper(id);
            if (!current || previouslyRendered.indexOf(id) !== -1 || !_idToWrapperMap.has(current.parentId)) {
                continue;
            }
            previouslyRendered.push(id);
            const sibling = _wrapperSiblingMap.get(current);
            const next = {
                node: {
                    type: WNODE,
                    widgetConstructor: current.node.widgetConstructor,
                    properties: current.properties || {},
                    children: current.node.children || []
                },
                instance: current.instance,
                id: current.id,
                properties: current.properties,
                depth: current.depth,
                order: current.order,
                owningId: current.owningId,
                parentId: current.parentId,
                registryItem: current.registryItem
            };
            sibling && _wrapperSiblingMap.set(next, sibling);
            const result = _updateWidget({ current, next });
            if (result && result.item) {
                _processQueue.push(result.item);
                _idToWrapperMap.set(id, next);
                _runProcessQueue();
            }
        }
        _runDomInstructionQueue();
        _cleanUpMergedNodes();
        _scheduleDeferredRenderCallbacks();
        if (!_renderScheduled) {
            setRendering(false);
        }
    }
    function _cleanUpMergedNodes() {
        if (_deferredProcessQueue.length === 0) {
            let mergedNode;
            while ((mergedNode = _allMergedNodes.pop())) {
                mergedNode.parentNode && mergedNode.parentNode.removeChild(mergedNode);
            }
            _mountOptions.merge = false;
        }
    }
    function _runProcessQueue() {
        let item;
        while ((item = _processQueue.pop())) {
            if (isAttachApplication(item)) {
                item.instance && _applicationQueue.push(item);
            }
            else {
                const { current, next, meta } = item;
                _process(current || EMPTY_ARRAY, next || EMPTY_ARRAY, meta);
            }
        }
    }
    function _runDomInstructionQueue() {
        _applicationQueue.reverse();
        let item;
        while ((item = _applicationQueue.pop())) {
            if (item.type === 'create') {
                const { parentDomNode, next, next: { domNode, merged, requiresInsertBefore, node } } = item;
                processProperties(next, { properties: {} });
                runDeferredProperties(next);
                if (!merged) {
                    let insertBefore;
                    if (requiresInsertBefore) {
                        insertBefore = findInsertBefore(next);
                    }
                    else if (_insertBeforeMap) {
                        insertBefore = _insertBeforeMap.get(next);
                    }
                    parentDomNode.insertBefore(domNode, insertBefore);
                    if (isDomVNode(next.node) && next.node.onAttach) {
                        next.node.onAttach();
                    }
                }
                if (domNode.tagName === 'OPTION' && domNode.parentElement) {
                    setValue(domNode.parentElement);
                }
                const { enterAnimation, enterAnimationActive } = node.properties;
                if (_mountOptions.transition && enterAnimation && enterAnimation !== true) {
                    _mountOptions.transition.enter(domNode, enterAnimation, enterAnimationActive);
                }
                const owningWrapper = _nodeToWrapperMap.get(next.node);
                if (owningWrapper && node.properties.key != null) {
                    if (owningWrapper.instance) {
                        const instanceData = widgetInstanceMap.get(owningWrapper.instance);
                        instanceData && instanceData.nodeHandler.add(domNode, `${node.properties.key}`);
                    }
                    else {
                        addNodeToMap(owningWrapper.id, node.properties.key, domNode);
                    }
                }
                item.next.inserted = true;
            }
            else if (item.type === 'update') {
                const { next, next: { domNode }, current, current: { domNode: currentDomNode } } = item;
                if (isTextNode(domNode) && isTextNode(currentDomNode) && domNode !== currentDomNode) {
                    currentDomNode.parentNode && currentDomNode.parentNode.replaceChild(domNode, currentDomNode);
                }
                else {
                    const previousProperties = buildPreviousProperties(domNode, current);
                    processProperties(next, previousProperties);
                    runDeferredProperties(next);
                }
            }
            else if (item.type === 'delete') {
                const { current } = item;
                const { exitAnimation, exitAnimationActive } = current.node.properties;
                if (_mountOptions.transition && exitAnimation && exitAnimation !== true) {
                    _mountOptions.transition.exit(current.domNode, exitAnimation, exitAnimationActive);
                }
                else {
                    current.domNode.parentNode.removeChild(current.domNode);
                }
            }
            else if (item.type === 'attach') {
                const { instance, attached } = item;
                const instanceData = widgetInstanceMap.get(instance);
                if (instanceData) {
                    instanceData.nodeHandler.addRoot();
                    attached && instanceData.onAttach();
                }
            }
            else if (item.type === 'detach') {
                if (item.current.instance) {
                    const instanceData = widgetInstanceMap.get(item.current.instance);
                    instanceData && instanceData.onDetach();
                }
                item.current.instance = undefined;
            }
        }
        if (_deferredProcessQueue.length === 0) {
            _nodeToWrapperMap = new _shim_WeakMap__WEBPACK_IMPORTED_MODULE_2__["default"]();
        }
    }
    function _processMergeNodes(next, mergeNodes) {
        const { merge } = _mountOptions;
        if (merge && mergeNodes.length) {
            if (isVNodeWrapper(next)) {
                let { node: { tag } } = next;
                for (let i = 0; i < mergeNodes.length; i++) {
                    const domElement = mergeNodes[i];
                    const tagName = domElement.tagName || '';
                    if (tag.toUpperCase() === tagName.toUpperCase()) {
                        const mergeNodeIndex = _allMergedNodes.indexOf(domElement);
                        if (mergeNodeIndex !== -1) {
                            _allMergedNodes.splice(mergeNodeIndex, 1);
                        }
                        mergeNodes.splice(i, 1);
                        next.domNode = domElement;
                        break;
                    }
                }
            }
            else {
                next.mergeNodes = mergeNodes;
            }
        }
    }
    function distinguishableCheck(childNodes, index) {
        const parentWNodeWrapper = getWNodeWrapper(childNodes[index].owningId);
        checkDistinguishable(childNodes, index, parentWNodeWrapper);
    }
    function createKeyMap(wrappers) {
        const keys = [];
        for (let i = 0; i < wrappers.length; i++) {
            const wrapper = wrappers[i];
            if (wrapper.node.properties.key != null) {
                keys.push(wrapper.node.properties.key);
            }
            else {
                return false;
            }
        }
        return keys;
    }
    function _process(current, next, meta = {}) {
        let { mergeNodes = [], oldIndex = 0, newIndex = 0 } = meta;
        const currentLength = current.length;
        const nextLength = next.length;
        const hasPreviousSiblings = currentLength > 1 || (currentLength > 0 && currentLength < nextLength);
        let instructions = [];
        let replace = false;
        if (oldIndex === 0 && newIndex === 0 && currentLength) {
            const currentKeys = createKeyMap(current);
            if (currentKeys) {
                const nextKeys = createKeyMap(next);
                if (nextKeys) {
                    for (let i = 0; i < currentKeys.length; i++) {
                        if (nextKeys.indexOf(currentKeys[i]) !== -1) {
                            instructions = [];
                            replace = false;
                            break;
                        }
                        replace = true;
                        instructions.push({ current: current[i], next: undefined });
                    }
                }
            }
        }
        if (replace || (currentLength === 0 && !_mountOptions.merge)) {
            for (let i = 0; i < next.length; i++) {
                instructions.push({ current: undefined, next: next[i] });
            }
        }
        else {
            if (newIndex < nextLength) {
                let currentWrapper = oldIndex < currentLength ? current[oldIndex] : undefined;
                const nextWrapper = next[newIndex];
                nextWrapper.hasPreviousSiblings = hasPreviousSiblings;
                _processMergeNodes(nextWrapper, mergeNodes);
                if (currentWrapper && same(currentWrapper, nextWrapper)) {
                    oldIndex++;
                    newIndex++;
                    if (isVNodeWrapper(currentWrapper) && isVNodeWrapper(nextWrapper)) {
                        nextWrapper.inserted = currentWrapper.inserted;
                    }
                    instructions.push({ current: currentWrapper, next: nextWrapper });
                }
                else if (!currentWrapper || findIndexOfChild(current, nextWrapper, oldIndex + 1) === -1) {
                     true && current.length && distinguishableCheck(next, newIndex);
                    instructions.push({ current: undefined, next: nextWrapper });
                    newIndex++;
                }
                else if (findIndexOfChild(next, currentWrapper, newIndex + 1) === -1) {
                     true && distinguishableCheck(current, oldIndex);
                    instructions.push({ current: currentWrapper, next: undefined });
                    oldIndex++;
                }
                else {
                     true && distinguishableCheck(next, newIndex);
                     true && distinguishableCheck(current, oldIndex);
                    instructions.push({ current: currentWrapper, next: undefined });
                    instructions.push({ current: undefined, next: nextWrapper });
                    oldIndex++;
                    newIndex++;
                }
            }
            if (newIndex < nextLength) {
                _processQueue.push({ current, next, meta: { mergeNodes, oldIndex, newIndex } });
            }
            if (currentLength > oldIndex && newIndex >= nextLength) {
                for (let i = oldIndex; i < currentLength; i++) {
                     true && distinguishableCheck(current, i);
                    instructions.push({ current: current[i], next: undefined });
                }
            }
        }
        for (let i = 0; i < instructions.length; i++) {
            const result = _processOne(instructions[i]);
            if (result === false) {
                if (_mountOptions.merge && mergeNodes.length) {
                    if (newIndex < nextLength) {
                        _processQueue.pop();
                    }
                    _processQueue.push({ next, current, meta });
                    _deferredProcessQueue = _processQueue;
                    _processQueue = [];
                    break;
                }
                continue;
            }
            const { widget, item, dom } = result;
            widget && _processQueue.push(widget);
            item && _processQueue.push(item);
            dom && _applicationQueue.push(dom);
        }
    }
    function _processOne({ current, next }) {
        if (current !== next) {
            if (!current && next) {
                if (isVNodeWrapper(next)) {
                    return _createDom({ next });
                }
                else {
                    return _createWidget({ next });
                }
            }
            else if (current && next) {
                if (isVNodeWrapper(current) && isVNodeWrapper(next)) {
                    return _updateDom({ current, next });
                }
                else if (isWNodeWrapper(current) && isWNodeWrapper(next)) {
                    return _updateWidget({ current, next });
                }
            }
            else if (current && !next) {
                if (isVNodeWrapper(current)) {
                    return _removeDom({ current });
                }
                else if (isWNodeWrapper(current)) {
                    return _removeWidget({ current });
                }
            }
        }
        return {};
    }
    function createWidgetOptions(id, widgetId, middleware) {
        return {
            id,
            properties: () => {
                const widgetMeta = widgetMetaMap.get(widgetId);
                if (widgetMeta) {
                    widgetMeta.propertiesCalled = true;
                    return Object.assign({}, widgetMeta.properties);
                }
                return {};
            },
            children: () => {
                const widgetMeta = widgetMetaMap.get(widgetId);
                if (widgetMeta) {
                    return widgetMeta.children;
                }
                return [];
            },
            middleware
        };
    }
    function resolveMiddleware(middlewares, id, middlewareIds = []) {
        const keys = Object.keys(middlewares);
        const results = {};
        const uniqueId = `${id}-${metaId++}`;
        for (let i = 0; i < keys.length; i++) {
            const middleware = middlewares[keys[i]]();
            const payload = createWidgetOptions(uniqueId, id);
            if (middleware.middlewares) {
                const { middlewares: resolvedMiddleware } = resolveMiddleware(middleware.middlewares, id, middlewareIds);
                payload.middleware = resolvedMiddleware;
                results[keys[i]] = middleware.callback(payload);
            }
            else {
                results[keys[i]] = middleware.callback(payload);
            }
        }
        middlewareIds.push(uniqueId);
        return { middlewares: results, ids: middlewareIds };
    }
    function _createWidget({ next }) {
        let { node: { widgetConstructor } } = next;
        let { registry } = _mountOptions;
        let Constructor = next.registryItem || widgetConstructor;
        if (!Object(_Registry__WEBPACK_IMPORTED_MODULE_6__["isWidget"])(Constructor)) {
            resolveRegistryItem(next);
            if (!next.registryItem) {
                return false;
            }
            Constructor = next.registryItem;
        }
        let rendered;
        let invalidate;
        next.properties = Object.assign({}, next.node.properties);
        next.id = next.id || `${wrapperId++}`;
        _idToWrapperMap.set(next.id, next);
        const { id, depth, order } = next;
        if (!Object(_Registry__WEBPACK_IMPORTED_MODULE_6__["isWidgetBaseConstructor"])(Constructor)) {
            let widgetMeta = widgetMetaMap.get(id);
            if (!widgetMeta) {
                invalidate = () => {
                    const widgetMeta = widgetMetaMap.get(id);
                    if (widgetMeta) {
                        widgetMeta.dirty = true;
                        if (!widgetMeta.rendering && _idToWrapperMap.has(id)) {
                            _invalidationQueue.push({ id, depth, order });
                            _schedule();
                        }
                    }
                };
                widgetMeta = {
                    widgetName: Constructor.name || 'unknown',
                    mountNode: _mountOptions.domNode,
                    dirty: false,
                    invalidator: invalidate,
                    properties: wrapFunctionProperties(id, next.node.properties),
                    originalProperties: Object.assign({}, next.node.properties),
                    children: next.node.children,
                    deferRefs: 0,
                    rendering: true,
                    middleware: {},
                    middlewareIds: [],
                    registry: _mountOptions.registry,
                    propertiesCalled: false
                };
                widgetMetaMap.set(next.id, widgetMeta);
                if (Constructor.middlewares && Object.keys(Constructor.middlewares).length) {
                    const { middlewares, ids } = resolveMiddleware(Constructor.middlewares, id);
                    widgetMeta.middleware = middlewares;
                    widgetMeta.middlewareIds = ids;
                }
            }
            else {
                invalidate = widgetMeta.invalidator;
            }
            rendered = Constructor(createWidgetOptions(id, id, widgetMeta.middleware));
            widgetMeta.rendering = false;
            widgetMeta.propertiesCalled = false;
            if (widgetMeta.deferRefs > 0) {
                return false;
            }
        }
        else {
            let instance = new Constructor();
            instance.registry.base = registry;
            const instanceData = widgetInstanceMap.get(instance);
            invalidate = () => {
                instanceData.dirty = true;
                if (!instanceData.rendering && _idToWrapperMap.has(id)) {
                    _invalidationQueue.push({ id, depth, order });
                    _schedule();
                }
            };
            instanceData.invalidate = invalidate;
            instanceData.rendering = true;
            instance.__setProperties__(next.node.properties);
            instance.__setChildren__(next.node.children);
            next.instance = instance;
            rendered = instance.__render__();
            instanceData.rendering = false;
        }
        let children;
        if (rendered) {
            rendered = Array.isArray(rendered) ? rendered : [rendered];
            children = renderedToWrapper(rendered, next, null);
            _idToChildrenWrappers.set(id, children);
        }
        if (!parentInvalidate && !Constructor.isWNodeWrapper) {
            parentInvalidate = invalidate;
        }
        return {
            item: {
                next: children,
                meta: { mergeNodes: next.mergeNodes }
            },
            widget: { type: 'attach', instance: next.instance, id, attached: true }
        };
    }
    function _updateWidget({ current, next }) {
        current = getWNodeWrapper(current.id) || current;
        const { instance, domNode, hasAnimations, id } = current;
        let { node: { widgetConstructor } } = next;
        const Constructor = next.registryItem || widgetConstructor;
        if (!Object(_Registry__WEBPACK_IMPORTED_MODULE_6__["isWidget"])(Constructor)) {
            return {};
        }
        let rendered;
        let processResult = {};
        let didRender = false;
        let currentChildren = _idToChildrenWrappers.get(current.id);
        next.hasAnimations = hasAnimations;
        next.id = id;
        next.properties = Object.assign({}, next.node.properties);
        _wrapperSiblingMap.delete(current);
        if (domNode && domNode.parentNode) {
            next.domNode = domNode;
        }
        if (!Object(_Registry__WEBPACK_IMPORTED_MODULE_6__["isWidgetBaseConstructor"])(Constructor)) {
            const widgetMeta = widgetMetaMap.get(id);
            if (widgetMeta) {
                widgetMeta.originalProperties = Object.assign({}, next.properties);
                widgetMeta.properties = wrapFunctionProperties(id, widgetMeta.originalProperties);
                widgetMeta.children = next.node.children;
                widgetMeta.rendering = true;
                const customProperties = runDiffs(widgetMeta, current.properties, widgetMeta.originalProperties);
                widgetMeta.properties = Object.assign({}, widgetMeta.properties, customProperties);
                if (current.node.children.length > 0 || next.node.children.length > 0) {
                    widgetMeta.dirty = true;
                }
                if (!widgetMeta.dirty) {
                    propertiesDiff(current.properties, next.properties, () => {
                        widgetMeta.dirty = true;
                    }, widgetMeta.customDiffProperties ? [...widgetMeta.customDiffProperties.values()] : []);
                }
                if (widgetMeta.dirty) {
                    _idToChildrenWrappers.delete(id);
                    didRender = true;
                    rendered = Constructor(createWidgetOptions(id, id, widgetMeta.middleware));
                    widgetMeta.dirty = false;
                    if (widgetMeta.deferRefs > 0) {
                        rendered = null;
                    }
                }
                widgetMeta.rendering = false;
                widgetMeta.propertiesCalled = false;
            }
        }
        else {
            const instanceData = widgetInstanceMap.get(instance);
            next.instance = instance;
            instanceData.rendering = true;
            instance.__setProperties__(next.node.properties);
            instance.__setChildren__(next.node.children);
            if (instanceData.dirty) {
                didRender = true;
                _idToChildrenWrappers.delete(id);
                rendered = instance.__render__();
            }
            instanceData.rendering = false;
        }
        _idToWrapperMap.set(next.id, next);
        processResult.widget = { type: 'attach', instance, id, attached: false };
        let children;
        if (rendered) {
            rendered = Array.isArray(rendered) ? rendered : [rendered];
            children = renderedToWrapper(rendered, next, current);
            _idToChildrenWrappers.set(id, children);
        }
        if (didRender) {
            processResult.item = {
                current: currentChildren,
                next: children,
                meta: {}
            };
        }
        return processResult;
    }
    function _removeWidget({ current }) {
        current = getWNodeWrapper(current.id) || current;
        _idToWrapperMap.delete(current.id);
        const meta = widgetMetaMap.get(current.id);
        let currentChildren = _idToChildrenWrappers.get(current.id);
        _idToChildrenWrappers.delete(current.id);
        _wrapperSiblingMap.delete(current);
        let processResult = {
            item: {
                current: currentChildren,
                meta: {}
            }
        };
        if (meta) {
            meta.registryHandler && meta.registryHandler.destroy();
            destroyHandles(meta);
            widgetMetaMap.delete(current.id);
        }
        else {
            processResult.widget = { type: 'detach', current, instance: current.instance };
        }
        return processResult;
    }
    function findDomNodeOnParentWrapper(id) {
        const children = _idToChildrenWrappers.get(id) || [];
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child.domNode) {
                return child.id;
            }
            const childId = findDomNodeOnParentWrapper(child.id);
            if (childId) {
                return childId;
            }
        }
    }
    function _createDom({ next }) {
        const parentDomNode = findParentDomNode(next);
        const isVirtual = isVirtualWrapper(next);
        const isBody = isBodyWrapper(next);
        let mergeNodes = [];
        next.id = `${wrapperId++}`;
        _idToWrapperMap.set(next.id, next);
        if (!next.domNode) {
            if (next.node.domNode) {
                next.domNode = next.node.domNode;
            }
            else {
                if (next.node.tag === 'svg') {
                    next.namespace = NAMESPACE_SVG;
                }
                if (isBody) {
                    next.domNode = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].document.body;
                }
                else if (next.node.tag && !isVirtual) {
                    if (next.namespace) {
                        next.domNode = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].document.createElementNS(next.namespace, next.node.tag);
                    }
                    else {
                        next.domNode = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].document.createElement(next.node.tag);
                    }
                }
                else if (next.node.text != null) {
                    next.domNode = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].document.createTextNode(next.node.text);
                }
            }
            if (_insertBeforeMap && _allMergedNodes.length) {
                if (parentDomNode === _allMergedNodes[0].parentNode) {
                    _insertBeforeMap.set(next, _allMergedNodes[0]);
                }
            }
        }
        else if (_mountOptions.merge) {
            next.merged = true;
            if (isTextNode(next.domNode)) {
                if (next.domNode.data !== next.node.text) {
                    _allMergedNodes = [next.domNode, ..._allMergedNodes];
                    next.domNode = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].document.createTextNode(next.node.text);
                    next.merged = false;
                }
            }
            else {
                mergeNodes = arrayFrom(next.domNode.childNodes);
                _allMergedNodes = [..._allMergedNodes, ...mergeNodes];
            }
        }
        let children;
        if (next.domNode || isVirtual) {
            if (next.node.children && next.node.children.length) {
                children = renderedToWrapper(next.node.children, next, null);
                _idToChildrenWrappers.set(next.id, children);
            }
        }
        const dom = isVirtual || isBody
            ? undefined
            : {
                next: next,
                parentDomNode: parentDomNode,
                type: 'create'
            };
        if (children) {
            return {
                item: {
                    current: [],
                    next: children,
                    meta: { mergeNodes }
                },
                dom,
                widget: isVirtual ? { type: 'attach', id: next.id, attached: false } : undefined
            };
        }
        return { dom };
    }
    function _updateDom({ current, next }) {
        next.domNode = current.domNode;
        next.namespace = current.namespace;
        next.id = current.id;
        next.childDomWrapperId = current.childDomWrapperId;
        let children;
        let currentChildren = _idToChildrenWrappers.get(next.id);
        if (next.node.text != null && next.node.text !== current.node.text) {
            next.domNode = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].document.createTextNode(next.node.text);
        }
        else if (next.node.children) {
            children = renderedToWrapper(next.node.children, next, current);
            _idToChildrenWrappers.set(next.id, children);
        }
        _wrapperSiblingMap.delete(current);
        _idToWrapperMap.set(next.id, next);
        return {
            item: {
                current: currentChildren,
                next: children,
                meta: {}
            },
            dom: { type: 'update', next, current }
        };
    }
    function _removeDom({ current }) {
        const isVirtual = isVirtualWrapper(current);
        const isBody = isBodyWrapper(current);
        const children = _idToChildrenWrappers.get(current.id);
        _idToChildrenWrappers.delete(current.id);
        _idToWrapperMap.delete(current.id);
        _wrapperSiblingMap.delete(current);
        if (current.node.properties.key) {
            const widgetMeta = widgetMetaMap.get(current.owningId);
            const parentWrapper = getWNodeWrapper(current.owningId);
            if (widgetMeta) {
                widgetMeta.nodeMap && widgetMeta.nodeMap.delete(current.node.properties.key);
            }
            else if (parentWrapper && parentWrapper.instance) {
                const instanceData = widgetInstanceMap.get(parentWrapper.instance);
                instanceData && instanceData.nodeHandler.remove(current.node.properties.key);
            }
        }
        if (current.hasAnimations || isVirtual || isBody) {
            return {
                item: { current: children, meta: {} },
                dom: isVirtual || isBody ? undefined : { type: 'delete', current }
            };
        }
        if (children) {
            _deferredRenderCallbacks.push(() => {
                let wrappers = children || [];
                let wrapper;
                let bodyIds = [];
                while ((wrapper = wrappers.pop())) {
                    if (isWNodeWrapper(wrapper)) {
                        wrapper = getWNodeWrapper(wrapper.id) || wrapper;
                        if (wrapper.instance) {
                            const instanceData = widgetInstanceMap.get(wrapper.instance);
                            instanceData && instanceData.onDetach();
                            wrapper.instance = undefined;
                        }
                        else {
                            const meta = widgetMetaMap.get(wrapper.id);
                            if (meta) {
                                meta.registryHandler && meta.registryHandler.destroy();
                                destroyHandles(meta);
                                widgetMetaMap.delete(wrapper.id);
                            }
                        }
                    }
                    let wrapperChildren = _idToChildrenWrappers.get(wrapper.id);
                    if (wrapperChildren) {
                        wrappers.push(...wrapperChildren);
                    }
                    if (isBodyWrapper(wrapper)) {
                        bodyIds.push(wrapper.id);
                    }
                    else if (bodyIds.indexOf(wrapper.parentId) !== -1) {
                        if (isWNodeWrapper(wrapper) || isVirtualWrapper(wrapper)) {
                            bodyIds.push(wrapper.id);
                        }
                        else if (wrapper.domNode && wrapper.domNode.parentNode) {
                            wrapper.domNode.parentNode.removeChild(wrapper.domNode);
                        }
                    }
                    _idToChildrenWrappers.delete(wrapper.id);
                    _idToWrapperMap.delete(wrapper.id);
                }
            });
        }
        return {
            dom: { type: 'delete', current }
        };
    }
    return {
        mount,
        unmount,
        invalidate
    };
}
/* harmony default export */ __webpack_exports__["default"] = (renderer);


/***/ }),

/***/ "./node_modules/@dojo/framework/i18n/i18n.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@dojo/framework/i18n/i18n.mjs ***!
  \****************************************************/
/*! exports provided: setSupportedLocales, setDefaultLocale, getComputedLocale, getCurrentLocale, setCldrLoaders, getMatchedSupportedLocale, setLocale, localizeBundle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSupportedLocales", function() { return setSupportedLocales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultLocale", function() { return setDefaultLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedLocale", function() { return getComputedLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentLocale", function() { return getCurrentLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCldrLoaders", function() { return setCldrLoaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatchedSupportedLocale", function() { return getMatchedSupportedLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocale", function() { return setLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeBundle", function() { return localizeBundle; });
/* harmony import */ var _shim_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shim/global */ "./node_modules/@dojo/framework/shim/global.mjs");
/* harmony import */ var _shim_WeakMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shim/WeakMap */ "./node_modules/@dojo/framework/shim/WeakMap.mjs");
/* harmony import */ var globalize_dist_globalize_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! globalize/dist/globalize/message */ "./node_modules/globalize/dist/globalize/message.js");
/* harmony import */ var globalize_dist_globalize_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(globalize_dist_globalize_message__WEBPACK_IMPORTED_MODULE_2__);



const Cldr = __webpack_require__(/*! cldrjs/dist/cldr */ "./node_modules/cldrjs/dist/cldr.js");
// !has('cldr-elide')
// elided: import './util/cldr'
let cldrResolved = Cldr._resolved;
Object.defineProperty(Cldr, '_resolved', {
    get() {
        return Object.assign({}, cldrResolved);
    },
    set(value) {
        cldrResolved = Object.assign({}, value);
    }
});
const TOKEN_PATTERN = /\{([a-z0-9_]+)\}/gi;
const bundleIdMap = new _shim_WeakMap__WEBPACK_IMPORTED_MODULE_1__["default"]();
const bundleLoaderMap = new _shim_WeakMap__WEBPACK_IMPORTED_MODULE_1__["default"]();
const idToBundleLoaderMap = new Map();
const globalizeInstanceMap = new Map();
const MESSAGE_BUNDLE_PATH = 'globalize-messages/{bundle}';
const DOJO_PATH = 'dojo/{bundle}/lookup';
let supportedLocales = [];
let defaultLocale = '';
let computedLocale = 'unknown';
let currentLocale;
let cldrLoaders = {};
let bundleId = 0;
const cldr = new Cldr('');
function setSupportedLocales(locales) {
    supportedLocales = locales;
}
function setDefaultLocale(locale) {
    defaultLocale = locale;
}
function getComputedLocale() {
    return computedLocale;
}
function getCurrentLocale() {
    return currentLocale;
}
function setCldrLoaders(loaders) {
    cldrLoaders = Object.assign({}, loaders);
}
function getMatchedSupportedLocale(locale) {
    let partialLocale = locale.replace(/^([a-z]{2}).*/i, '$1');
    let matchedLocale;
    for (let i = 0; i < supportedLocales.length; i++) {
        const supportedLocale = supportedLocales[i];
        if (locale === supportedLocale) {
            matchedLocale = locale;
            break;
        }
        if (partialLocale === supportedLocale) {
            matchedLocale = partialLocale;
        }
    }
    return matchedLocale;
}
function shouldLoadFallbackCldr(locale) {
    return !getMatchedSupportedLocale(locale) && cldrLoaders.fallback && cldrLoaders.fallback !== true;
}
function setI18nLocales(locale, isDefault, local) {
    if (isDefault) {
        globalize_dist_globalize_message__WEBPACK_IMPORTED_MODULE_2__["locale"](locale);
        computedLocale = locale;
        currentLocale = locale;
    }
    else if (!local) {
        currentLocale = locale;
    }
}
async function loadCldrData(loaderPromises, userLocale, requestedLocale, calculatedLocale, isDefault, isLocal, invalidator) {
    return Promise.all(loaderPromises).then((loaderData) => {
        cldrLoaders[userLocale] = true;
        cldrLoaders.supplemental = true;
        loaderData.forEach((results) => {
            results.forEach((result) => {
                globalize_dist_globalize_message__WEBPACK_IMPORTED_MODULE_2__["load"](result.default);
            });
        });
        if (shouldLoadFallbackCldr(requestedLocale)) {
            cldrLoaders.fallback = true;
            const data = cldr.get('dojo') || {};
            const locales = Object.keys(data);
            for (let i = 0; i < locales.length; i++) {
                const locale = locales[i];
                if (data[locale].bundles) {
                    globalize_dist_globalize_message__WEBPACK_IMPORTED_MODULE_2__["loadMessages"]({ [locale]: data[locale].bundles });
                }
            }
            if (requestedLocale && locales.indexOf(requestedLocale) === -1) {
                globalize_dist_globalize_message__WEBPACK_IMPORTED_MODULE_2__["loadMessages"]({ [requestedLocale]: {} });
            }
        }
        setI18nLocales(calculatedLocale, isDefault, isLocal);
        invalidator && invalidator();
        return calculatedLocale;
    });
}
function setLocale(options = {}) {
    const { local: isLocal = false, default: isDefault = false, locale: requestedLocale = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].navigator.language || _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].navigator.userLanguage, invalidator } = options;
    const matchedLocale = getMatchedSupportedLocale(requestedLocale);
    const userLocale = matchedLocale || defaultLocale;
    const calculatedLocale = matchedLocale ? requestedLocale : defaultLocale;
    const loaderPromises = [];
    const supplementalLoader = cldrLoaders.supplemental;
    const fallbackLoader = cldrLoaders.fallback;
    if (supplementalLoader && supplementalLoader !== true) {
        loaderPromises.push(supplementalLoader());
    }
    const localeCldrLoader = cldrLoaders[userLocale];
    if (localeCldrLoader && localeCldrLoader !== true) {
        loaderPromises.push(localeCldrLoader());
    }
    const loadFallback = !matchedLocale && fallbackLoader && fallbackLoader !== true;
    if (loadFallback && fallbackLoader && fallbackLoader !== true) {
        loaderPromises.push(fallbackLoader());
    }
    if (loaderPromises.length) {
        return loadCldrData(loaderPromises, userLocale, requestedLocale, calculatedLocale, isDefault, isLocal, invalidator);
    }
    else if (!matchedLocale) {
        globalize_dist_globalize_message__WEBPACK_IMPORTED_MODULE_2__["loadMessages"]({ [requestedLocale]: {} });
    }
    setI18nLocales(calculatedLocale, isDefault, isLocal);
    return calculatedLocale;
}
function getPlaceholderBundle(bundle) {
    return {
        messages: Object.keys(bundle.messages).reduce((messages, key) => {
            messages[key] = '';
            return messages;
        }, {}),
        isPlaceholder: true,
        format: () => ''
    };
}
function getBundleId() {
    return `id-${++bundleId}`;
}
function markBundleAsLoaded(locale, bundleId) {
    Cldr.load({
        dojo: {
            [locale]: {
                lookup: {
                    [bundleId]: {
                        locale: undefined,
                        id: undefined,
                        loading: undefined
                    }
                }
            }
        }
    });
}
function registerBundle(bundle) {
    const { locales: localeBundleLoaders = {} } = bundle;
    const locales = Object.keys(localeBundleLoaders);
    let bundleId = bundleIdMap.get(bundle);
    if (!bundleId) {
        bundleId = getBundleId();
        bundleIdMap.set(bundle, bundleId);
        const messageBundles = {};
        const lookup = {};
        for (let i = 0; i < locales.length; i++) {
            const locale = locales[i];
            const isSupportedLocale = !!getMatchedSupportedLocale(locale);
            const bundleLoader = localeBundleLoaders[locale];
            let messages = {};
            if (typeof bundleLoader === 'function') {
                const id = getBundleId();
                bundleLoaderMap.set(bundleLoader, id);
                idToBundleLoaderMap.set(id, bundleLoader);
                lookup[locale] = { lookup: { [bundleId]: { locale, id } } };
            }
            else {
                messages = bundleLoader;
            }
            if (isSupportedLocale) {
                messageBundles[locale] = {
                    [bundleId]: messages
                };
            }
            else if (lookup[locale]) {
                lookup[locale].bundles = { [bundleId]: messages };
            }
            else {
                lookup[locale] = {
                    bundles: { [bundleId]: messages }
                };
            }
        }
        globalize_dist_globalize_message__WEBPACK_IMPORTED_MODULE_2__["loadMessages"](Object.assign({ root: { [bundleId]: bundle.messages }, [computedLocale]: { [bundleId]: bundle.messages }, [defaultLocale]: { [bundleId]: bundle.messages } }, messageBundles));
        Cldr.load({ dojo: lookup });
    }
    return bundleId;
}
const cachedBundleMap = new _shim_WeakMap__WEBPACK_IMPORTED_MODULE_1__["default"]();
function localizeBundle(bundle, options) {
    let { locale = computedLocale, invalidator } = options;
    if (computedLocale === 'unknown') {
        return {
            messages: bundle.messages,
            isPlaceholder: false,
            format: (key, options) => {
                return bundle.messages[key].replace(TOKEN_PATTERN, (token, property) => {
                    const value = options[property];
                    if (typeof value === 'undefined') {
                        return token;
                    }
                    return value;
                });
            }
        };
    }
    if (shouldLoadFallbackCldr(locale)) {
        setLocale({ default: false, local: true, locale, invalidator });
        return getPlaceholderBundle(bundle);
    }
    const bundleId = registerBundle(bundle);
    const globalize = globalizeInstanceMap.get(locale) || new globalize_dist_globalize_message__WEBPACK_IMPORTED_MODULE_2__(new Cldr(locale));
    globalizeInstanceMap.set(locale, globalize);
    const lookupId = globalize.cldr.get(`${DOJO_PATH}/${bundleId}/id`);
    const lookupLocale = globalize.cldr.get(`${DOJO_PATH}/${bundleId}/locale`);
    if (lookupId && lookupLocale) {
        let bundleLoader = idToBundleLoaderMap.get(lookupId);
        if (bundleLoader) {
            Cldr.load({
                dojo: {
                    [lookupLocale]: { lookup: { [bundleId]: { loading: true } } }
                }
            });
            const loaderPromise = bundleLoader();
            loaderPromise.then((messages) => {
                markBundleAsLoaded(lookupLocale, bundleId);
                globalize_dist_globalize_message__WEBPACK_IMPORTED_MODULE_2__["loadMessages"]({ [lookupLocale]: { [bundleId]: messages.default } });
                invalidator();
            });
        }
    }
    const lookupLoading = globalize.cldr.get(`${DOJO_PATH}/${bundleId}/loading`);
    if (lookupLoading) {
        return getPlaceholderBundle(bundle);
    }
    const cachedLocaleMessagesMap = cachedBundleMap.get(bundle) || new Map();
    let localizedBundleMessages = cachedLocaleMessagesMap.get(locale);
    if (!localizedBundleMessages) {
        localizedBundleMessages = {
            messages: Object.keys(bundle.messages).reduce((messages, key) => {
                const message = globalize.cldr.get(`${MESSAGE_BUNDLE_PATH}/${bundleId}/${key}`);
                messages[key] = message;
                return messages;
            }, {}),
            isPlaceholder: false,
            format: (key, options) => {
                return globalize.formatMessage(`${bundleId}/${key}`, options);
            }
        };
        cachedLocaleMessagesMap.set(locale, localizedBundleMessages);
        cachedBundleMap.set(bundle, cachedLocaleMessagesMap);
    }
    return localizedBundleMessages;
}


/***/ }),

/***/ "./node_modules/@dojo/framework/routing/Link.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@dojo/framework/routing/Link.mjs ***!
  \*******************************************************/
/*! exports provided: Link, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var _core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _core_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has */ "./node_modules/@dojo/framework/core/has.mjs");
/* harmony import */ var _core_middleware_injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/middleware/injector */ "./node_modules/@dojo/framework/core/middleware/injector.mjs");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};



const factory = Object(_core_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({ injector: _core_middleware_injector__WEBPACK_IMPORTED_MODULE_2__["default"] }).properties();
const Link = factory(function Link({ middleware: { injector }, properties, children }) {
    let _a = properties(), { routerKey = 'router', to, isOutlet = true, target, params = {}, onClick } = _a, props = __rest(_a, ["routerKey", "to", "isOutlet", "target", "params", "onClick"]);
    const router = injector.get(routerKey);
    let href = to;
    let linkProps;
    if (router) {
        if (isOutlet) {
            href = router.link(href, params);
        }
        const onclick = (event) => {
            onClick && onClick(event);
            if (!event.defaultPrevented && event.button === 0 && !event.metaKey && !event.ctrlKey && !target) {
                if (!Object(_core_has__WEBPACK_IMPORTED_MODULE_1__["default"])('build-serve') || !false) {
                    event.preventDefault();
                    href !== undefined && router.setPath(href);
                }
            }
        };
        linkProps = Object.assign({}, props, { onclick, href });
    }
    else {
        linkProps = Object.assign({}, props, { href });
    }
    return Object(_core_vdom__WEBPACK_IMPORTED_MODULE_0__["v"])('a', linkProps, children());
});
/* harmony default export */ __webpack_exports__["default"] = (Link);


/***/ }),

/***/ "./node_modules/@dojo/framework/routing/Route.mjs":
/*!********************************************************!*\
  !*** ./node_modules/@dojo/framework/routing/Route.mjs ***!
  \********************************************************/
/*! exports provided: Route, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony import */ var _core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _core_middleware_injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/middleware/injector */ "./node_modules/@dojo/framework/core/middleware/injector.mjs");
/* harmony import */ var _core_middleware_icache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/middleware/icache */ "./node_modules/@dojo/framework/core/middleware/icache.mjs");



const factory = Object(_core_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({ icache: _core_middleware_icache__WEBPACK_IMPORTED_MODULE_2__["default"], injector: _core_middleware_injector__WEBPACK_IMPORTED_MODULE_1__["default"], diffProperty: _core_vdom__WEBPACK_IMPORTED_MODULE_0__["diffProperty"], invalidator: _core_vdom__WEBPACK_IMPORTED_MODULE_0__["invalidator"] }).properties();
const Route = factory(function Route({ middleware: { icache, injector, diffProperty, invalidator }, properties }) {
    const { renderer, id, routerKey = 'router' } = properties();
    const currentHandle = icache.get('handle');
    if (!currentHandle) {
        const handle = injector.subscribe(routerKey);
        if (handle) {
            icache.set('handle', () => handle);
        }
    }
    diffProperty('routerKey', (current, next) => {
        const { routerKey: currentRouterKey = 'router' } = current;
        const { routerKey = 'router' } = next;
        if (routerKey !== currentRouterKey) {
            const currentHandle = icache.get('handle');
            if (currentHandle) {
                currentHandle();
            }
            const handle = injector.subscribe(routerKey);
            if (handle) {
                icache.set('handle', () => handle);
            }
        }
        invalidator();
    });
    const router = injector.get(routerKey);
    if (router) {
        const routeContext = router.getRoute(id);
        if (routeContext) {
            const { queryParams, params, type, isError, isExact } = routeContext;
            const result = renderer({ queryParams, params, type, isError, isExact, router });
            if (result) {
                return result;
            }
        }
    }
    return null;
});
/* harmony default export */ __webpack_exports__["default"] = (Route);


/***/ }),

/***/ "./node_modules/@dojo/framework/routing/Router.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/@dojo/framework/routing/Router.mjs ***!
  \*********************************************************/
/*! exports provided: Router, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _shim_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shim/global */ "./node_modules/@dojo/framework/shim/global.mjs");
/* harmony import */ var _core_Evented__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Evented */ "./node_modules/@dojo/framework/core/Evented.mjs");
/* harmony import */ var _history_HashHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history/HashHistory */ "./node_modules/@dojo/framework/routing/history/HashHistory.mjs");



const PARAM = '__PARAM__';
const paramRegExp = new RegExp(/^{.+}$/);
const ROUTE_SEGMENT_SCORE = 7;
const DYNAMIC_SEGMENT_PENALTY = 2;
function matchingParams({ params: previousParams }, { params }) {
    const matching = Object.keys(previousParams).every((key) => previousParams[key] === params[key]);
    if (!matching) {
        return false;
    }
    return Object.keys(params).every((key) => previousParams[key] === params[key]);
}
class Router extends _core_Evented__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(config, options = {}) {
        super();
        this._routes = [];
        this._routeMap = Object.create(null);
        this._matchedRoutes = Object.create(null);
        this._matchedOutletMap = new Map();
        this._currentParams = {};
        this._currentQueryParams = {};
        /**
         * Called on change of the route by the the registered history manager. Matches the path against
         * the registered outlets.
         *
         * @param requestedPath The path of the requested route
         */
        this._onChange = (requestedPath) => {
            requestedPath = this._stripLeadingSlash(requestedPath);
            const previousMatchedRoutes = this._matchedRoutes;
            this._matchedRoutes = Object.create(null);
            this._matchedOutletMap.clear();
            const [path, queryParamString] = requestedPath.split('?');
            this._currentQueryParams = this._getQueryParams(queryParamString);
            const segments = path.split('/');
            let routeConfigs = this._routes.map((route) => ({
                route,
                segments: [...segments],
                parent: undefined,
                params: {},
                type: 'index'
            }));
            let routeConfig;
            let matchedRoutes = [];
            while ((routeConfig = routeConfigs.pop())) {
                const { route, parent, segments, params } = routeConfig;
                let segmentIndex = 0;
                let type = 'index';
                let paramIndex = 0;
                let routeMatch = true;
                if (segments.length < route.segments.length) {
                    routeMatch = false;
                }
                else {
                    while (segments.length > 0) {
                        if (route.segments[segmentIndex] === undefined) {
                            type = 'partial';
                            break;
                        }
                        const segment = segments.shift();
                        if (route.segments[segmentIndex] === PARAM) {
                            params[route.params[paramIndex++]] = segment;
                            this._currentParams = Object.assign({}, this._currentParams, params);
                        }
                        else if (route.segments[segmentIndex] !== segment) {
                            routeMatch = false;
                            break;
                        }
                        segmentIndex++;
                    }
                }
                if (routeMatch) {
                    routeConfig.type = type;
                    matchedRoutes.push({ route, parent, type, params, segments: [] });
                    if (segments.length) {
                        routeConfigs = [
                            ...routeConfigs,
                            ...route.children.map((childRoute) => ({
                                route: childRoute,
                                segments: [...segments],
                                parent: routeConfig,
                                type,
                                params: Object.assign({}, params)
                            }))
                        ];
                    }
                }
            }
            let matchedRouteId = undefined;
            let matchedRoute = matchedRoutes.shift();
            while (matchedRoute && matchedRoutes.length) {
                let currentMatch = matchedRoutes.shift();
                if (currentMatch && currentMatch.route.score > matchedRoute.route.score) {
                    matchedRoute = currentMatch;
                }
            }
            if (matchedRoute) {
                if (matchedRoute.type === 'partial') {
                    matchedRoute.type = 'error';
                }
                matchedRouteId = matchedRoute.route.id;
                const title = this._options.setDocumentTitle
                    ? this._options.setDocumentTitle({
                        id: matchedRouteId,
                        title: matchedRoute.route.title,
                        params: matchedRoute.params,
                        queryParams: this._currentQueryParams
                    })
                    : matchedRoute.route.title;
                if (title) {
                    _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].document.title = title;
                }
                while (matchedRoute) {
                    let { type, params, route } = matchedRoute;
                    let parent = matchedRoute.parent;
                    const matchedRouteContext = {
                        id: route.id,
                        outlet: route.outlet,
                        queryParams: this._currentQueryParams,
                        params,
                        type,
                        isError: () => type === 'error',
                        isExact: () => type === 'index'
                    };
                    const previousMatchedOutlet = previousMatchedRoutes[route.id];
                    const routeMap = this._matchedOutletMap.get(route.outlet) || new Map();
                    routeMap.set(route.id, matchedRouteContext);
                    this._matchedOutletMap.set(route.outlet, routeMap);
                    this._matchedRoutes[route.id] = matchedRouteContext;
                    if (!previousMatchedOutlet || !matchingParams(previousMatchedOutlet, matchedRouteContext)) {
                        this.emit({ type: 'route', route: matchedRouteContext, action: 'enter' });
                        this.emit({ type: 'outlet', outlet: matchedRouteContext, action: 'enter' });
                    }
                    matchedRoute = parent;
                }
            }
            else {
                this._matchedRoutes.errorRoute = {
                    id: 'errorRoute',
                    outlet: 'errorRoute',
                    queryParams: {},
                    params: {},
                    isError: () => true,
                    isExact: () => false,
                    type: 'error'
                };
            }
            const previousMatchedOutletKeys = Object.keys(previousMatchedRoutes);
            for (let i = 0; i < previousMatchedOutletKeys.length; i++) {
                const key = previousMatchedOutletKeys[i];
                const matchedRoute = this._matchedRoutes[key];
                if (!matchedRoute || !matchingParams(previousMatchedRoutes[key], matchedRoute)) {
                    this.emit({ type: 'route', route: previousMatchedRoutes[key], action: 'exit' });
                    this.emit({ type: 'outlet', outlet: previousMatchedRoutes[key], action: 'exit' });
                }
            }
            this._currentMatchedRoute = matchedRouteId ? this._matchedRoutes[matchedRouteId] : undefined;
            this.emit({
                type: 'nav',
                outlet: matchedRouteId,
                context: this._currentMatchedRoute
            });
            if (this._options.resetScroll) {
                const { window = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].window } = this._options;
                try {
                    window.scroll(0, 0);
                }
                catch (e) {
                    // Catch errors if we're in an environment without window.scroll
                }
            }
        };
        this._options = options;
        this._register(config);
        const autostart = options.autostart === undefined ? true : options.autostart;
        if (autostart) {
            this.start();
        }
    }
    /**
     * Sets the path against the registered history manager
     *
     * @param path The path to set on the history manager
     */
    setPath(path) {
        this._history.set(path);
    }
    start() {
        const { HistoryManager = _history_HashHistory__WEBPACK_IMPORTED_MODULE_2__["HashHistory"], base, window } = this._options;
        this._history = new HistoryManager({ onChange: this._onChange, base, window });
        if (this._matchedRoutes.errorRoute && this._defaultRoute) {
            const path = this.link(this._defaultRoute);
            if (path) {
                this.setPath(path);
            }
        }
    }
    /**
     * Generate a link for a given outlet identifier and optional params.
     *
     * @param outlet The outlet to generate a link for
     * @param params Optional Params for the generated link
     */
    link(outlet, params = {}) {
        let route = this._routeMap[outlet];
        if (route === undefined) {
            return;
        }
        let linkPath = route.fullPath;
        if (route.fullQueryParams.length > 0) {
            let queryString = route.fullQueryParams.reduce((queryParamString, param, index) => {
                if (index > 0) {
                    return `${queryParamString}&${param}={${param}}`;
                }
                return `?${param}={${param}}`;
            }, '');
            linkPath = `${linkPath}${queryString}`;
        }
        params = Object.assign({}, route.defaultParams, this._currentQueryParams, this._currentParams, params);
        if (Object.keys(params).length === 0 && route.fullParams.length > 0) {
            return undefined;
        }
        const fullParams = [...route.fullParams, ...route.fullQueryParams];
        for (let i = 0; i < fullParams.length; i++) {
            const param = fullParams[i];
            if (params[param]) {
                linkPath = linkPath.replace(`{${param}}`, params[param]);
            }
            else {
                return undefined;
            }
        }
        return this._history.prefix(linkPath);
    }
    /**
     * Returns the route context for the route identifier if one has been matched
     *
     * @param routeId The route identifer
     */
    getRoute(routeId) {
        return this._matchedRoutes[routeId];
    }
    getOutlet(outletId) {
        return this._matchedOutletMap.get(outletId);
    }
    getMatchedRoute() {
        return this._currentMatchedRoute;
    }
    /**
     * Returns all the params for the current matched outlets
     */
    get currentParams() {
        return this._currentParams;
    }
    /**
     * Strips the leading slash on a path if one exists
     *
     * @param path The path to strip a leading slash
     */
    _stripLeadingSlash(path) {
        if (path[0] === '/') {
            return path.slice(1);
        }
        return path;
    }
    /**
     * Registers the routing configuration
     *
     * @param config The configuration
     * @param routes The routes
     * @param parentRoute The parent route
     */
    _register(config, routes, parentRoute) {
        routes = routes ? routes : this._routes;
        for (let i = 0; i < config.length; i++) {
            let { path, outlet, children, defaultRoute = false, defaultParams = {}, id, title } = config[i];
            let [parsedPath, queryParamString] = path.split('?');
            let queryParams = [];
            parsedPath = this._stripLeadingSlash(parsedPath);
            const segments = parsedPath.split('/');
            const route = {
                params: [],
                id,
                outlet,
                title,
                path: parsedPath,
                segments,
                defaultParams: parentRoute ? Object.assign({}, parentRoute.defaultParams, defaultParams) : defaultParams,
                children: [],
                fullPath: parentRoute ? `${parentRoute.fullPath}/${parsedPath}` : parsedPath,
                fullParams: [],
                fullQueryParams: [],
                score: parentRoute ? parentRoute.score : 0
            };
            if (defaultRoute) {
                this._defaultRoute = id;
            }
            for (let i = 0; i < segments.length; i++) {
                const segment = segments[i];
                route.score += ROUTE_SEGMENT_SCORE;
                if (paramRegExp.test(segment)) {
                    route.score -= DYNAMIC_SEGMENT_PENALTY;
                    route.params.push(segment.replace('{', '').replace('}', ''));
                    segments[i] = PARAM;
                }
            }
            if (queryParamString) {
                queryParams = queryParamString.split('&').map((queryParam) => {
                    return queryParam.replace('{', '').replace('}', '');
                });
            }
            route.fullQueryParams = parentRoute ? [...parentRoute.fullQueryParams, ...queryParams] : queryParams;
            route.fullParams = parentRoute ? [...parentRoute.fullParams, ...route.params] : route.params;
            if (children && children.length > 0) {
                this._register(children, route.children, route);
            }
            this._routeMap[id] = route;
            routes.push(route);
        }
    }
    /**
     * Returns an object of query params
     *
     * @param queryParamString The string of query params, e.g `paramOne=one&paramTwo=two`
     */
    _getQueryParams(queryParamString) {
        const queryParams = {};
        if (queryParamString) {
            const queryParameters = queryParamString.split('&');
            for (let i = 0; i < queryParameters.length; i++) {
                const [key, value] = queryParameters[i].split('=');
                queryParams[key] = value;
            }
        }
        return queryParams;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Router);


/***/ }),

/***/ "./node_modules/@dojo/framework/routing/RouterInjector.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@dojo/framework/routing/RouterInjector.mjs ***!
  \*****************************************************************/
/*! exports provided: registerRouterInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRouterInjector", function() { return registerRouterInjector; });
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router */ "./node_modules/@dojo/framework/routing/Router.mjs");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};

/**
 * Creates a router instance for a specific History manager (default is `HashHistory`) and registers
 * the route configuration.
 *
 * @param config The route config to register for the router
 * @param registry An optional registry that defaults to the global registry
 * @param options The router injector options
 */
function registerRouterInjector(config, registry, options = {}) {
    const { key = 'router' } = options, routerOptions = __rest(options, ["key"]);
    if (registry.hasInjector(key)) {
        throw new Error('Router has already been defined');
    }
    const router = new _Router__WEBPACK_IMPORTED_MODULE_0__["Router"](config, routerOptions);
    registry.defineInjector(key, (invalidator) => {
        router.on('nav', () => invalidator());
        return () => router;
    });
    return router;
}


/***/ }),

/***/ "./node_modules/@dojo/framework/routing/history/HashHistory.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/@dojo/framework/routing/history/HashHistory.mjs ***!
  \**********************************************************************/
/*! exports provided: HashHistory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashHistory", function() { return HashHistory; });
/* harmony import */ var _shim_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shim/global */ "./node_modules/@dojo/framework/shim/global.mjs");

class HashHistory {
    constructor({ window = _shim_global__WEBPACK_IMPORTED_MODULE_0__["default"].window, onChange }) {
        this._onChange = () => {
            const path = this.normalizePath(this._window.location.hash);
            if (path !== this._current) {
                this._current = path;
                this._onChangeFunction(this._current);
            }
        };
        this._onChangeFunction = onChange;
        this._window = window;
        this._window.addEventListener('hashchange', this._onChange, false);
        this._current = this.normalizePath(this._window.location.hash);
        this._onChangeFunction(this._current);
    }
    normalizePath(path) {
        return path.replace('#', '');
    }
    prefix(path) {
        if (path[0] !== '#') {
            return `#${path}`;
        }
        return path;
    }
    set(path) {
        this._window.location.hash = this.prefix(path);
        this._onChange();
    }
    get current() {
        return this._current;
    }
    destroy() {
        this._window.removeEventListener('hashchange', this._onChange);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (HashHistory);


/***/ }),

/***/ "./node_modules/@dojo/framework/shim/Map.mjs":
/*!***************************************************!*\
  !*** ./node_modules/@dojo/framework/shim/Map.mjs ***!
  \***************************************************/
/*! exports provided: Map, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./node_modules/@dojo/framework/shim/global.mjs");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ "./node_modules/@dojo/framework/shim/object.mjs");
/* harmony import */ var _core_has__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/has */ "./node_modules/@dojo/framework/core/has.mjs");
var _a;
var isArrayLike = undefined, ShimIterator = undefined;
// !has('es6-iterator')
// elided: import './iterator'



// !has('es6-symbol')
// elided: import './Symbol'
let Map = _global__WEBPACK_IMPORTED_MODULE_0__["default"].Map;
if (false) {}
/* harmony default export */ __webpack_exports__["default"] = (Map);


/***/ }),

/***/ "./node_modules/@dojo/framework/shim/Set.mjs":
/*!***************************************************!*\
  !*** ./node_modules/@dojo/framework/shim/Set.mjs ***!
  \***************************************************/
/*! exports provided: Set, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return Set; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./node_modules/@dojo/framework/shim/global.mjs");
/* harmony import */ var _core_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has */ "./node_modules/@dojo/framework/core/has.mjs");
var _a;

var isArrayLike = undefined, ShimIterator = undefined;
// !has('es6-iterator')
// elided: import './iterator'

// !has('es6-symbol')
// elided: import './Symbol'
let Set = _global__WEBPACK_IMPORTED_MODULE_0__["default"].Set;
if (false) {}
/* harmony default export */ __webpack_exports__["default"] = (Set);


/***/ }),

/***/ "./node_modules/@dojo/framework/shim/WeakMap.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@dojo/framework/shim/WeakMap.mjs ***!
  \*******************************************************/
/*! exports provided: WeakMap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeakMap", function() { return WeakMap; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./node_modules/@dojo/framework/shim/global.mjs");
/* harmony import */ var _core_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has */ "./node_modules/@dojo/framework/core/has.mjs");

var isArrayLike = undefined;
// !has('es6-iterator')
// elided: import './iterator'

// !has('es6-symbol')
// elided: import './Symbol'
let WeakMap = _global__WEBPACK_IMPORTED_MODULE_0__["default"].WeakMap;
if (false) {}
/* harmony default export */ __webpack_exports__["default"] = (WeakMap);


/***/ }),

/***/ "./node_modules/@dojo/framework/shim/array.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/@dojo/framework/shim/array.mjs ***!
  \*****************************************************/
/*! exports provided: from, of, copyWithin, fill, find, findIndex, includes, flat, flatMap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "of", function() { return of; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyWithin", function() { return copyWithin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return includes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flat", function() { return flat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatMap", function() { return flatMap; });
/* harmony import */ var _core_has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/has */ "./node_modules/@dojo/framework/core/has.mjs");
/* harmony import */ var _support_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support/util */ "./node_modules/@dojo/framework/shim/support/util.mjs");
var isArrayLike = undefined, isIterable = undefined;
// !has('es6-iterator')
// elided: import './iterator'


let from;
let of;
let copyWithin;
let fill;
let find;
let findIndex;
let includes;
let flat;
let flatMap;
let toLength;
let toInteger;
let normalizeOffset;
if (false) {}
if (false) {}
if (false) {}
if (false) {}
if (false) {}
from = Array.from;
of = Array.of;
copyWithin = Object(_support_util__WEBPACK_IMPORTED_MODULE_1__["wrapNative"])(Array.prototype.copyWithin);
fill = Object(_support_util__WEBPACK_IMPORTED_MODULE_1__["wrapNative"])(Array.prototype.fill);
find = Object(_support_util__WEBPACK_IMPORTED_MODULE_1__["wrapNative"])(Array.prototype.find);
flat = Object(_support_util__WEBPACK_IMPORTED_MODULE_1__["wrapNative"])(Array.prototype.flat);
flatMap = Object(_support_util__WEBPACK_IMPORTED_MODULE_1__["wrapNative"])(Array.prototype.flatMap);
findIndex = Object(_support_util__WEBPACK_IMPORTED_MODULE_1__["wrapNative"])(Array.prototype.findIndex);
includes = Object(_support_util__WEBPACK_IMPORTED_MODULE_1__["wrapNative"])(Array.prototype.includes);
/* harmony default export */ __webpack_exports__["default"] = (Array);


/***/ }),

/***/ "./node_modules/@dojo/framework/shim/cssVariables.mjs":
/*!************************************************************!*\
  !*** ./node_modules/@dojo/framework/shim/cssVariables.mjs ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cssVars = undefined;
// !has('dom-css-variables')
// elided: import 'css-vars-ponyfill'
/* harmony default export */ __webpack_exports__["default"] = (typeof cssVars !== 'undefined' && typeof cssVars.default === 'function' ? cssVars.default : () => { });


/***/ }),

/***/ "./node_modules/@dojo/framework/shim/object.mjs":
/*!******************************************************!*\
  !*** ./node_modules/@dojo/framework/shim/object.mjs ***!
  \******************************************************/
/*! exports provided: assign, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, is, keys, getOwnPropertyDescriptors, entries, values, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertyDescriptor", function() { return getOwnPropertyDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertyNames", function() { return getOwnPropertyNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertySymbols", function() { return getOwnPropertySymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertyDescriptors", function() { return getOwnPropertyDescriptors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony import */ var _core_has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/has */ "./node_modules/@dojo/framework/core/has.mjs");

let assign;
/**
 * Gets the own property descriptor of the specified object.
 * An own property descriptor is one that is defined directly on the object and is not
 * inherited from the object's prototype.
 * @param o Object that contains the property.
 * @param p Name of the property.
 */
let getOwnPropertyDescriptor;
/**
 * Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
 * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
 * @param o Object that contains the own properties.
 */
let getOwnPropertyNames;
/**
 * Returns an array of all symbol properties found directly on object o.
 * @param o Object to retrieve the symbols from.
 */
let getOwnPropertySymbols;
/**
 * Returns true if the values are the same value, false otherwise.
 * @param value1 The first value.
 * @param value2 The second value.
 */
let is;
/**
 * Returns the names of the enumerable properties and methods of an object.
 * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
 */
let keys;
/* ES7 Object static methods */
let getOwnPropertyDescriptors;
let entries;
let values;
if (false) {}
if (false) {}
assign = Object.assign;
getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
getOwnPropertyNames = Object.getOwnPropertyNames;
getOwnPropertySymbols = Object.getOwnPropertySymbols;
is = Object.is;
keys = Object.keys;
getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors;
entries = Object.entries;
values = Object.values;
/* harmony default export */ __webpack_exports__["default"] = (Object);


/***/ }),

/***/ "./node_modules/@dojo/framework/shim/support/util.mjs":
/*!************************************************************!*\
  !*** ./node_modules/@dojo/framework/shim/support/util.mjs ***!
  \************************************************************/
/*! exports provided: getValueDescriptor, wrapNative */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueDescriptor", function() { return getValueDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapNative", function() { return wrapNative; });
/**
 * Helper function to generate a value property descriptor
 *
 * @param value        The value the property descriptor should be set to
 * @param enumerable   If the property should be enumberable, defaults to false
 * @param writable     If the property should be writable, defaults to true
 * @param configurable If the property should be configurable, defaults to true
 * @return             The property descriptor object
 */
function getValueDescriptor(value, enumerable = false, writable = true, configurable = true) {
    return {
        value: value,
        enumerable: enumerable,
        writable: writable,
        configurable: configurable
    };
}
function wrapNative(nativeFunction) {
    return function (target, ...args) {
        return nativeFunction.apply(target, args);
    };
}


/***/ }),

/***/ "./node_modules/cldrjs/dist/cldr.js":
/*!******************************************!*\
  !*** ./node_modules/cldrjs/dist/cldr.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * CLDR JavaScript Library v0.5.1
 * http://jquery.com/
 *
 * Copyright 2013 Rafael Xavier de Souza
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2019-01-21T13:43Z
 */
/*!
 * CLDR JavaScript Library v0.5.1 2019-01-21T13:43Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */
(function( root, factory ) {

	if ( true ) {
		// AMD.
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}( this, function() {


	var arrayIsArray = Array.isArray || function( obj ) {
		return Object.prototype.toString.call( obj ) === "[object Array]";
	};




	var pathNormalize = function( path, attributes ) {
		if ( arrayIsArray( path ) ) {
			path = path.join( "/" );
		}
		if ( typeof path !== "string" ) {
			throw new Error( "invalid path \"" + path + "\"" );
		}
		// 1: Ignore leading slash `/`
		// 2: Ignore leading `cldr/`
		path = path
			.replace( /^\// , "" ) /* 1 */
			.replace( /^cldr\// , "" ); /* 2 */

		// Replace {attribute}'s
		path = path.replace( /{[a-zA-Z]+}/g, function( name ) {
			name = name.replace( /^{([^}]*)}$/, "$1" );
			return attributes[ name ];
		});

		return path.split( "/" );
	};




	var arraySome = function( array, callback ) {
		var i, length;
		if ( array.some ) {
			return array.some( callback );
		}
		for ( i = 0, length = array.length; i < length; i++ ) {
			if ( callback( array[ i ], i, array ) ) {
				return true;
			}
		}
		return false;
	};




	/**
	 * Return the maximized language id as defined in
	 * http://www.unicode.org/reports/tr35/#Likely_Subtags
	 * 1. Canonicalize.
	 * 1.1 Make sure the input locale is in canonical form: uses the right
	 * separator, and has the right casing.
	 * TODO Right casing? What df? It seems languages are lowercase, scripts are
	 * Capitalized, territory is uppercase. I am leaving this as an exercise to
	 * the user.
	 *
	 * 1.2 Replace any deprecated subtags with their canonical values using the
	 * <alias> data in supplemental metadata. Use the first value in the
	 * replacement list, if it exists. Language tag replacements may have multiple
	 * parts, such as "sh" ➞ "sr_Latn" or mo" ➞ "ro_MD". In such a case, the
	 * original script and/or region are retained if there is one. Thus
	 * "sh_Arab_AQ" ➞ "sr_Arab_AQ", not "sr_Latn_AQ".
	 * TODO What <alias> data?
	 *
	 * 1.3 If the tag is grandfathered (see <variable id="$grandfathered"
	 * type="choice"> in the supplemental data), then return it.
	 * TODO grandfathered?
	 *
	 * 1.4 Remove the script code 'Zzzz' and the region code 'ZZ' if they occur.
	 * 1.5 Get the components of the cleaned-up source tag (languages, scripts,
	 * and regions), plus any variants and extensions.
	 * 2. Lookup. Lookup each of the following in order, and stop on the first
	 * match:
	 * 2.1 languages_scripts_regions
	 * 2.2 languages_regions
	 * 2.3 languages_scripts
	 * 2.4 languages
	 * 2.5 und_scripts
	 * 3. Return
	 * 3.1 If there is no match, either return an error value, or the match for
	 * "und" (in APIs where a valid language tag is required).
	 * 3.2 Otherwise there is a match = languagem_scriptm_regionm
	 * 3.3 Let xr = xs if xs is not empty, and xm otherwise.
	 * 3.4 Return the language tag composed of languager _ scriptr _ regionr +
	 * variants + extensions.
	 *
	 * @subtags [Array] normalized language id subtags tuple (see init.js).
	 */
	var coreLikelySubtags = function( Cldr, cldr, subtags, options ) {
		var match, matchFound,
			language = subtags[ 0 ],
			script = subtags[ 1 ],
			sep = Cldr.localeSep,
			territory = subtags[ 2 ],
			variants = subtags.slice( 3, 4 );
		options = options || {};

		// Skip if (language, script, territory) is not empty [3.3]
		if ( language !== "und" && script !== "Zzzz" && territory !== "ZZ" ) {
			return [ language, script, territory ].concat( variants );
		}

		// Skip if no supplemental likelySubtags data is present
		if ( typeof cldr.get( "supplemental/likelySubtags" ) === "undefined" ) {
			return;
		}

		// [2]
		matchFound = arraySome([
			[ language, script, territory ],
			[ language, territory ],
			[ language, script ],
			[ language ],
			[ "und", script ]
		], function( test ) {
			return match = !(/\b(Zzzz|ZZ)\b/).test( test.join( sep ) ) /* [1.4] */ && cldr.get( [ "supplemental/likelySubtags", test.join( sep ) ] );
		});

		// [3]
		if ( matchFound ) {
			// [3.2 .. 3.4]
			match = match.split( sep );
			return [
				language !== "und" ? language : match[ 0 ],
				script !== "Zzzz" ? script : match[ 1 ],
				territory !== "ZZ" ? territory : match[ 2 ]
			].concat( variants );
		} else if ( options.force ) {
			// [3.1.2]
			return cldr.get( "supplemental/likelySubtags/und" ).split( sep );
		} else {
			// [3.1.1]
			return;
		}
	};



	/**
	 * Given a locale, remove any fields that Add Likely Subtags would add.
	 * http://www.unicode.org/reports/tr35/#Likely_Subtags
	 * 1. First get max = AddLikelySubtags(inputLocale). If an error is signaled,
	 * return it.
	 * 2. Remove the variants from max.
	 * 3. Then for trial in {language, language _ region, language _ script}. If
	 * AddLikelySubtags(trial) = max, then return trial + variants.
	 * 4. If you do not get a match, return max + variants.
	 * 
	 * @maxLanguageId [Array] maxLanguageId tuple (see init.js).
	 */
	var coreRemoveLikelySubtags = function( Cldr, cldr, maxLanguageId ) {
		var match, matchFound,
			language = maxLanguageId[ 0 ],
			script = maxLanguageId[ 1 ],
			territory = maxLanguageId[ 2 ],
			variants = maxLanguageId[ 3 ];

		// [3]
		matchFound = arraySome([
			[ [ language, "Zzzz", "ZZ" ], [ language ] ],
			[ [ language, "Zzzz", territory ], [ language, territory ] ],
			[ [ language, script, "ZZ" ], [ language, script ] ]
		], function( test ) {
			var result = coreLikelySubtags( Cldr, cldr, test[ 0 ] );
			match = test[ 1 ];
			return result && result[ 0 ] === maxLanguageId[ 0 ] &&
				result[ 1 ] === maxLanguageId[ 1 ] &&
				result[ 2 ] === maxLanguageId[ 2 ];
		});

		if ( matchFound ) {
			if ( variants ) {
				match.push( variants );
			}
			return match;
		}

		// [4]
		return maxLanguageId;
	};




	/**
	 * subtags( locale )
	 *
	 * @locale [String]
	 */
	var coreSubtags = function( locale ) {
		var aux, unicodeLanguageId,
			subtags = [];

		locale = locale.replace( /_/, "-" );

		// Unicode locale extensions.
		aux = locale.split( "-u-" );
		if ( aux[ 1 ] ) {
			aux[ 1 ] = aux[ 1 ].split( "-t-" );
			locale = aux[ 0 ] + ( aux[ 1 ][ 1 ] ? "-t-" + aux[ 1 ][ 1 ] : "");
			subtags[ 4 /* unicodeLocaleExtensions */ ] = aux[ 1 ][ 0 ];
		}

		// TODO normalize transformed extensions. Currently, skipped.
		// subtags[ x ] = locale.split( "-t-" )[ 1 ];
		unicodeLanguageId = locale.split( "-t-" )[ 0 ];

		// unicode_language_id = "root"
		//   | unicode_language_subtag         
		//     (sep unicode_script_subtag)? 
		//     (sep unicode_region_subtag)?
		//     (sep unicode_variant_subtag)* ;
		//
		// Although unicode_language_subtag = alpha{2,8}, I'm using alpha{2,3}. Because, there's no language on CLDR lengthier than 3.
		aux = unicodeLanguageId.match( /^(([a-z]{2,3})(-([A-Z][a-z]{3}))?(-([A-Z]{2}|[0-9]{3}))?)((-([a-zA-Z0-9]{5,8}|[0-9][a-zA-Z0-9]{3}))*)$|^(root)$/ );
		if ( aux === null ) {
			return [ "und", "Zzzz", "ZZ" ];
		}
		subtags[ 0 /* language */ ] = aux[ 10 ] /* root */ || aux[ 2 ] || "und";
		subtags[ 1 /* script */ ] = aux[ 4 ] || "Zzzz";
		subtags[ 2 /* territory */ ] = aux[ 6 ] || "ZZ";
		if ( aux[ 7 ] && aux[ 7 ].length ) {
			subtags[ 3 /* variant */ ] = aux[ 7 ].slice( 1 ) /* remove leading "-" */;
		}

		// 0: language
		// 1: script
		// 2: territory (aka region)
		// 3: variant
		// 4: unicodeLocaleExtensions
		return subtags;
	};




	var arrayForEach = function( array, callback ) {
		var i, length;
		if ( array.forEach ) {
			return array.forEach( callback );
		}
		for ( i = 0, length = array.length; i < length; i++ ) {
			callback( array[ i ], i, array );
		}
	};




	/**
	 * bundleLookup( minLanguageId )
	 *
	 * @Cldr [Cldr class]
	 *
	 * @cldr [Cldr instance]
	 *
	 * @minLanguageId [String] requested languageId after applied remove likely subtags.
	 */
	var bundleLookup = function( Cldr, cldr, minLanguageId ) {
		var availableBundleMap = Cldr._availableBundleMap,
			availableBundleMapQueue = Cldr._availableBundleMapQueue;

		if ( availableBundleMapQueue.length ) {
			arrayForEach( availableBundleMapQueue, function( bundle ) {
				var existing, maxBundle, minBundle, subtags;
				subtags = coreSubtags( bundle );
				maxBundle = coreLikelySubtags( Cldr, cldr, subtags );
				minBundle = coreRemoveLikelySubtags( Cldr, cldr, maxBundle );
				minBundle = minBundle.join( Cldr.localeSep );
				existing = availableBundleMap[ minBundle ];
				if ( existing && existing.length < bundle.length ) {
					return;
				}
				availableBundleMap[ minBundle ] = bundle;
			});
			Cldr._availableBundleMapQueue = [];
		}

		return availableBundleMap[ minLanguageId ] || null;
	};




	var objectKeys = function( object ) {
		var i,
			result = [];

		if ( Object.keys ) {
			return Object.keys( object );
		}

		for ( i in object ) {
			result.push( i );
		}

		return result;
	};




	var createError = function( code, attributes ) {
		var error, message;

		message = code + ( attributes && JSON ? ": " + JSON.stringify( attributes ) : "" );
		error = new Error( message );
		error.code = code;

		// extend( error, attributes );
		arrayForEach( objectKeys( attributes ), function( attribute ) {
			error[ attribute ] = attributes[ attribute ];
		});

		return error;
	};




	var validate = function( code, check, attributes ) {
		if ( !check ) {
			throw createError( code, attributes );
		}
	};




	var validatePresence = function( value, name ) {
		validate( "E_MISSING_PARAMETER", typeof value !== "undefined", {
			name: name
		});
	};




	var validateType = function( value, name, check, expected ) {
		validate( "E_INVALID_PAR_TYPE", check, {
			expected: expected,
			name: name,
			value: value
		});
	};




	var validateTypePath = function( value, name ) {
		validateType( value, name, typeof value === "string" || arrayIsArray( value ), "String or Array" );
	};




	/**
	 * Function inspired by jQuery Core, but reduced to our use case.
	 */
	var isPlainObject = function( obj ) {
		return obj !== null && "" + obj === "[object Object]";
	};




	var validateTypePlainObject = function( value, name ) {
		validateType( value, name, typeof value === "undefined" || isPlainObject( value ), "Plain Object" );
	};




	var validateTypeString = function( value, name ) {
		validateType( value, name, typeof value === "string", "a string" );
	};




	// @path: normalized path
	var resourceGet = function( data, path ) {
		var i,
			node = data,
			length = path.length;

		for ( i = 0; i < length - 1; i++ ) {
			node = node[ path[ i ] ];
			if ( !node ) {
				return undefined;
			}
		}
		return node[ path[ i ] ];
	};




	/**
	 * setAvailableBundles( Cldr, json )
	 *
	 * @Cldr [Cldr class]
	 *
	 * @json resolved/unresolved cldr data.
	 *
	 * Set available bundles queue based on passed json CLDR data. Considers a bundle as any String at /main/{bundle}.
	 */
	var coreSetAvailableBundles = function( Cldr, json ) {
		var bundle,
			availableBundleMapQueue = Cldr._availableBundleMapQueue,
			main = resourceGet( json, [ "main" ] );

		if ( main ) {
			for ( bundle in main ) {
				if ( main.hasOwnProperty( bundle ) && bundle !== "root" &&
							availableBundleMapQueue.indexOf( bundle ) === -1 ) {
					availableBundleMapQueue.push( bundle );
				}
			}
		}
	};



	var alwaysArray = function( somethingOrArray ) {
		return arrayIsArray( somethingOrArray ) ?  somethingOrArray : [ somethingOrArray ];
	};


	var jsonMerge = (function() {

	// Returns new deeply merged JSON.
	//
	// Eg.
	// merge( { a: { b: 1, c: 2 } }, { a: { b: 3, d: 4 } } )
	// -> { a: { b: 3, c: 2, d: 4 } }
	//
	// @arguments JSON's
	// 
	var merge = function() {
		var destination = {},
			sources = [].slice.call( arguments, 0 );
		arrayForEach( sources, function( source ) {
			var prop;
			for ( prop in source ) {
				if ( prop in destination && typeof destination[ prop ] === "object" && !arrayIsArray( destination[ prop ] ) ) {

					// Merge Objects
					destination[ prop ] = merge( destination[ prop ], source[ prop ] );

				} else {

					// Set new values
					destination[ prop ] = source[ prop ];

				}
			}
		});
		return destination;
	};

	return merge;

}());


	/**
	 * load( Cldr, source, jsons )
	 *
	 * @Cldr [Cldr class]
	 *
	 * @source [Object]
	 *
	 * @jsons [arguments]
	 */
	var coreLoad = function( Cldr, source, jsons ) {
		var i, j, json;

		validatePresence( jsons[ 0 ], "json" );

		// Support arbitrary parameters, e.g., `Cldr.load({...}, {...})`.
		for ( i = 0; i < jsons.length; i++ ) {

			// Support array parameters, e.g., `Cldr.load([{...}, {...}])`.
			json = alwaysArray( jsons[ i ] );

			for ( j = 0; j < json.length; j++ ) {
				validateTypePlainObject( json[ j ], "json" );
				source = jsonMerge( source, json[ j ] );
				coreSetAvailableBundles( Cldr, json[ j ] );
			}
		}

		return source;
	};



	var itemGetResolved = function( Cldr, path, attributes ) {
		// Resolve path
		var normalizedPath = pathNormalize( path, attributes );

		return resourceGet( Cldr._resolved, normalizedPath );
	};




	/**
	 * new Cldr()
	 */
	var Cldr = function( locale ) {
		this.init( locale );
	};

	// Build optimization hack to avoid duplicating functions across modules.
	Cldr._alwaysArray = alwaysArray;
	Cldr._coreLoad = coreLoad;
	Cldr._createError = createError;
	Cldr._itemGetResolved = itemGetResolved;
	Cldr._jsonMerge = jsonMerge;
	Cldr._pathNormalize = pathNormalize;
	Cldr._resourceGet = resourceGet;
	Cldr._validatePresence = validatePresence;
	Cldr._validateType = validateType;
	Cldr._validateTypePath = validateTypePath;
	Cldr._validateTypePlainObject = validateTypePlainObject;

	Cldr._availableBundleMap = {};
	Cldr._availableBundleMapQueue = [];
	Cldr._resolved = {};

	// Allow user to override locale separator "-" (default) | "_". According to http://www.unicode.org/reports/tr35/#Unicode_language_identifier, both "-" and "_" are valid locale separators (eg. "en_GB", "en-GB"). According to http://unicode.org/cldr/trac/ticket/6786 its usage must be consistent throughout the data set.
	Cldr.localeSep = "-";

	/**
	 * Cldr.load( json [, json, ...] )
	 *
	 * @json [JSON] CLDR data or [Array] Array of @json's.
	 *
	 * Load resolved cldr data.
	 */
	Cldr.load = function() {
		Cldr._resolved = coreLoad( Cldr, Cldr._resolved, arguments );
	};

	/**
	 * .init() automatically run on instantiation/construction.
	 */
	Cldr.prototype.init = function( locale ) {
		var attributes, language, maxLanguageId, minLanguageId, script, subtags, territory, unicodeLocaleExtensions, variant,
			sep = Cldr.localeSep,
			unicodeLocaleExtensionsRaw = "";

		validatePresence( locale, "locale" );
		validateTypeString( locale, "locale" );

		subtags = coreSubtags( locale );

		if ( subtags.length === 5 ) {
			unicodeLocaleExtensions = subtags.pop();
			unicodeLocaleExtensionsRaw = sep + "u" + sep + unicodeLocaleExtensions;
			// Remove trailing null when there is unicodeLocaleExtensions but no variants.
			if ( !subtags[ 3 ] ) {
				subtags.pop();
			}
		}
		variant = subtags[ 3 ];

		// Normalize locale code.
		// Get (or deduce) the "triple subtags": language, territory (also aliased as region), and script subtags.
		// Get the variant subtags (calendar, collation, currency, etc).
		// refs:
		// - http://www.unicode.org/reports/tr35/#Field_Definitions
		// - http://www.unicode.org/reports/tr35/#Language_and_Locale_IDs
		// - http://www.unicode.org/reports/tr35/#Unicode_locale_identifier

		// When a locale id does not specify a language, or territory (region), or script, they are obtained by Likely Subtags.
		maxLanguageId = coreLikelySubtags( Cldr, this, subtags, { force: true } ) || subtags;
		language = maxLanguageId[ 0 ];
		script = maxLanguageId[ 1 ];
		territory = maxLanguageId[ 2 ];

		minLanguageId = coreRemoveLikelySubtags( Cldr, this, maxLanguageId ).join( sep );

		// Set attributes
		this.attributes = attributes = {
			bundle: bundleLookup( Cldr, this, minLanguageId ),

			// Unicode Language Id
			minLanguageId: minLanguageId + unicodeLocaleExtensionsRaw,
			maxLanguageId: maxLanguageId.join( sep ) + unicodeLocaleExtensionsRaw,

			// Unicode Language Id Subtabs
			language: language,
			script: script,
			territory: territory,
			region: territory, /* alias */
			variant: variant
		};

		// Unicode locale extensions.
		unicodeLocaleExtensions && ( "-" + unicodeLocaleExtensions ).replace( /-[a-z]{3,8}|(-[a-z]{2})-([a-z]{3,8})/g, function( attribute, key, type ) {

			if ( key ) {

				// Extension is in the `keyword` form.
				attributes[ "u" + key ] = type;
			} else {

				// Extension is in the `attribute` form.
				attributes[ "u" + attribute ] = true;
			}
		});

		this.locale = locale;
	};

	/**
	 * .get()
	 */
	Cldr.prototype.get = function( path ) {

		validatePresence( path, "path" );
		validateTypePath( path, "path" );

		return itemGetResolved( Cldr, path, this.attributes );
	};

	/**
	 * .main()
	 */
	Cldr.prototype.main = function( path ) {
		validatePresence( path, "path" );
		validateTypePath( path, "path" );

		validate( "E_MISSING_BUNDLE", this.attributes.bundle !== null, {
			locale: this.locale
		});

		path = alwaysArray( path );
		return this.get( [ "main/{bundle}" ].concat( path ) );
	};

	return Cldr;




}));


/***/ }),

/***/ "./node_modules/cldrjs/dist/cldr/event.js":
/*!************************************************!*\
  !*** ./node_modules/cldrjs/dist/cldr/event.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * CLDR JavaScript Library v0.5.1
 * http://jquery.com/
 *
 * Copyright 2013 Rafael Xavier de Souza
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2019-01-21T13:43Z
 */
/*!
 * CLDR JavaScript Library v0.5.1 2019-01-21T13:43Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */
(function( factory ) {

	if ( true ) {
		// AMD.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! ../cldr */ "./node_modules/cldrjs/dist/cldr.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(function( Cldr ) {

	// Build optimization hack to avoid duplicating functions across modules.
	var pathNormalize = Cldr._pathNormalize,
		validatePresence = Cldr._validatePresence,
		validateType = Cldr._validateType;

/*!
 * EventEmitter v4.2.7 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

var EventEmitter;
/* jshint ignore:start */
EventEmitter = (function () {


	/**
	 * Class for managing events.
	 * Can be extended to provide event functionality in other classes.
	 *
	 * @class EventEmitter Manages event registering and emitting.
	 */
	function EventEmitter() {}

	// Shortcuts to improve speed and size
	var proto = EventEmitter.prototype;
	var exports = {};
	

	/**
	 * Finds the index of the listener for the event in it's storage array.
	 *
	 * @param {Function[]} listeners Array of listeners to search through.
	 * @param {Function} listener Method to look for.
	 * @return {Number} Index of the specified listener, -1 if not found
	 * @api private
	 */
	function indexOfListener(listeners, listener) {
		var i = listeners.length;
		while (i--) {
			if (listeners[i].listener === listener) {
				return i;
			}
		}

		return -1;
	}

	/**
	 * Alias a method while keeping the context correct, to allow for overwriting of target method.
	 *
	 * @param {String} name The name of the target method.
	 * @return {Function} The aliased method
	 * @api private
	 */
	function alias(name) {
		return function aliasClosure() {
			return this[name].apply(this, arguments);
		};
	}

	/**
	 * Returns the listener array for the specified event.
	 * Will initialise the event object and listener arrays if required.
	 * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	 * Each property in the object response is an array of listener functions.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Function[]|Object} All listener functions for the event.
	 */
	proto.getListeners = function getListeners(evt) {
		var events = this._getEvents();
		var response;
		var key;

		// Return a concatenated array of all matching events if
		// the selector is a regular expression.
		if (evt instanceof RegExp) {
			response = {};
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					response[key] = events[key];
				}
			}
		}
		else {
			response = events[evt] || (events[evt] = []);
		}

		return response;
	};

	/**
	 * Takes a list of listener objects and flattens it into a list of listener functions.
	 *
	 * @param {Object[]} listeners Raw listener objects.
	 * @return {Function[]} Just the listener functions.
	 */
	proto.flattenListeners = function flattenListeners(listeners) {
		var flatListeners = [];
		var i;

		for (i = 0; i < listeners.length; i += 1) {
			flatListeners.push(listeners[i].listener);
		}

		return flatListeners;
	};

	/**
	 * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Object} All listener functions for an event in an object.
	 */
	proto.getListenersAsObject = function getListenersAsObject(evt) {
		var listeners = this.getListeners(evt);
		var response;

		if (listeners instanceof Array) {
			response = {};
			response[evt] = listeners;
		}

		return response || listeners;
	};

	/**
	 * Adds a listener function to the specified event.
	 * The listener will not be added if it is a duplicate.
	 * If the listener returns true then it will be removed after it is called.
	 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListener = function addListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var listenerIsWrapped = typeof listener === 'object';
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
				listeners[key].push(listenerIsWrapped ? listener : {
					listener: listener,
					once: false
				});
			}
		}

		return this;
	};

	/**
	 * Alias of addListener
	 */
	proto.on = alias('addListener');

	/**
	 * Semi-alias of addListener. It will add a listener that will be
	 * automatically removed after it's first execution.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addOnceListener = function addOnceListener(evt, listener) {
		return this.addListener(evt, {
			listener: listener,
			once: true
		});
	};

	/**
	 * Alias of addOnceListener.
	 */
	proto.once = alias('addOnceListener');

	/**
	 * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	 * You need to tell it what event names should be matched by a regex.
	 *
	 * @param {String} evt Name of the event to create.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvent = function defineEvent(evt) {
		this.getListeners(evt);
		return this;
	};

	/**
	 * Uses defineEvent to define multiple events.
	 *
	 * @param {String[]} evts An array of event names to define.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvents = function defineEvents(evts) {
		for (var i = 0; i < evts.length; i += 1) {
			this.defineEvent(evts[i]);
		}
		return this;
	};

	/**
	 * Removes a listener function from the specified event.
	 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to remove the listener from.
	 * @param {Function} listener Method to remove from the event.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListener = function removeListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var index;
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				index = indexOfListener(listeners[key], listener);

				if (index !== -1) {
					listeners[key].splice(index, 1);
				}
			}
		}

		return this;
	};

	/**
	 * Alias of removeListener
	 */
	proto.off = alias('removeListener');

	/**
	 * Adds listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	 * You can also pass it a regular expression to add the array of listeners to all events that match it.
	 * Yeah, this function does quite a bit. That's probably a bad thing.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListeners = function addListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(false, evt, listeners);
	};

	/**
	 * Removes listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be removed.
	 * You can also pass it a regular expression to remove the listeners from all events that match it.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListeners = function removeListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(true, evt, listeners);
	};

	/**
	 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	 * The first argument will determine if the listeners are removed (true) or added (false).
	 * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be added/removed.
	 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	 *
	 * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
		var i;
		var value;
		var single = remove ? this.removeListener : this.addListener;
		var multiple = remove ? this.removeListeners : this.addListeners;

		// If evt is an object then pass each of it's properties to this method
		if (typeof evt === 'object' && !(evt instanceof RegExp)) {
			for (i in evt) {
				if (evt.hasOwnProperty(i) && (value = evt[i])) {
					// Pass the single listener straight through to the singular method
					if (typeof value === 'function') {
						single.call(this, i, value);
					}
					else {
						// Otherwise pass back to the multiple function
						multiple.call(this, i, value);
					}
				}
			}
		}
		else {
			// So evt must be a string
			// And listeners must be an array of listeners
			// Loop over it and pass each one to the multiple method
			i = listeners.length;
			while (i--) {
				single.call(this, evt, listeners[i]);
			}
		}

		return this;
	};

	/**
	 * Removes all listeners from a specified event.
	 * If you do not specify an event then all listeners will be removed.
	 * That means every event will be emptied.
	 * You can also pass a regex to remove all events that match it.
	 *
	 * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeEvent = function removeEvent(evt) {
		var type = typeof evt;
		var events = this._getEvents();
		var key;

		// Remove different things depending on the state of evt
		if (type === 'string') {
			// Remove all listeners for the specified event
			delete events[evt];
		}
		else if (evt instanceof RegExp) {
			// Remove all events matching the regex.
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					delete events[key];
				}
			}
		}
		else {
			// Remove all listeners in all events
			delete this._events;
		}

		return this;
	};

	/**
	 * Alias of removeEvent.
	 *
	 * Added to mirror the node API.
	 */
	proto.removeAllListeners = alias('removeEvent');

	/**
	 * Emits an event of your choice.
	 * When emitted, every listener attached to that event will be executed.
	 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	 * So they will not arrive within the array on the other side, they will be separate.
	 * You can also pass a regular expression to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {Array} [args] Optional array of arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emitEvent = function emitEvent(evt, args) {
		var listeners = this.getListenersAsObject(evt);
		var listener;
		var i;
		var key;
		var response;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				i = listeners[key].length;

				while (i--) {
					// If the listener returns true then it shall be removed from the event
					// The function is executed either with a basic call or an apply if there is an args array
					listener = listeners[key][i];

					if (listener.once === true) {
						this.removeListener(evt, listener.listener);
					}

					response = listener.listener.apply(this, args || []);

					if (response === this._getOnceReturnValue()) {
						this.removeListener(evt, listener.listener);
					}
				}
			}
		}

		return this;
	};

	/**
	 * Alias of emitEvent
	 */
	proto.trigger = alias('emitEvent');

	/**
	 * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {...*} Optional additional arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emit = function emit(evt) {
		var args = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(evt, args);
	};

	/**
	 * Sets the current value to check against when executing listeners. If a
	 * listeners return value matches the one set here then it will be removed
	 * after execution. This value defaults to true.
	 *
	 * @param {*} value The new value to check for when executing listeners.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.setOnceReturnValue = function setOnceReturnValue(value) {
		this._onceReturnValue = value;
		return this;
	};

	/**
	 * Fetches the current value to check against when executing listeners. If
	 * the listeners return value matches this one then it should be removed
	 * automatically. It will return true by default.
	 *
	 * @return {*|Boolean} The current value to check for or the default, true.
	 * @api private
	 */
	proto._getOnceReturnValue = function _getOnceReturnValue() {
		if (this.hasOwnProperty('_onceReturnValue')) {
			return this._onceReturnValue;
		}
		else {
			return true;
		}
	};

	/**
	 * Fetches the events object and creates one if required.
	 *
	 * @return {Object} The events storage object.
	 * @api private
	 */
	proto._getEvents = function _getEvents() {
		return this._events || (this._events = {});
	};

	/**
	 * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	 *
	 * @return {Function} Non conflicting EventEmitter class.
	 */
	EventEmitter.noConflict = function noConflict() {
		exports.EventEmitter = originalGlobalValue;
		return EventEmitter;
	};

	return EventEmitter;
}());
/* jshint ignore:end */



	var validateTypeFunction = function( value, name ) {
		validateType( value, name, typeof value === "undefined" || typeof value === "function", "Function" );
	};




	var superGet, superInit,
		globalEe = new EventEmitter();

	function validateTypeEvent( value, name ) {
		validateType( value, name, typeof value === "string" || value instanceof RegExp, "String or RegExp" );
	}

	function validateThenCall( method, self ) {
		return function( event, listener ) {
			validatePresence( event, "event" );
			validateTypeEvent( event, "event" );

			validatePresence( listener, "listener" );
			validateTypeFunction( listener, "listener" );

			return self[ method ].apply( self, arguments );
		};
	}

	function off( self ) {
		return validateThenCall( "off", self );
	}

	function on( self ) {
		return validateThenCall( "on", self );
	}

	function once( self ) {
		return validateThenCall( "once", self );
	}

	Cldr.off = off( globalEe );
	Cldr.on = on( globalEe );
	Cldr.once = once( globalEe );

	/**
	 * Overload Cldr.prototype.init().
	 */
	superInit = Cldr.prototype.init;
	Cldr.prototype.init = function() {
		var ee;
		this.ee = ee = new EventEmitter();
		this.off = off( ee );
		this.on = on( ee );
		this.once = once( ee );
		superInit.apply( this, arguments );
	};

	/**
	 * getOverload is encapsulated, because of cldr/unresolved. If it's loaded
	 * after cldr/event (and note it overwrites .get), it can trigger this
	 * overload again.
	 */
	function getOverload() {

		/**
		 * Overload Cldr.prototype.get().
		 */
		superGet = Cldr.prototype.get;
		Cldr.prototype.get = function( path ) {
			var value = superGet.apply( this, arguments );
			path = pathNormalize( path, this.attributes ).join( "/" );
			globalEe.trigger( "get", [ path, value ] );
			this.ee.trigger( "get", [ path, value ] );
			return value;
		};
	}

	Cldr._eventInit = getOverload;
	getOverload();

	return Cldr;




}));


/***/ }),

/***/ "./node_modules/cldrjs/dist/cldr/supplemental.js":
/*!*******************************************************!*\
  !*** ./node_modules/cldrjs/dist/cldr/supplemental.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * CLDR JavaScript Library v0.5.1
 * http://jquery.com/
 *
 * Copyright 2013 Rafael Xavier de Souza
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2019-01-21T13:43Z
 */
/*!
 * CLDR JavaScript Library v0.5.1 2019-01-21T13:43Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */
(function( factory ) {

	if ( true ) {
		// AMD.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! ../cldr */ "./node_modules/cldrjs/dist/cldr.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(function( Cldr ) {

	// Build optimization hack to avoid duplicating functions across modules.
	var alwaysArray = Cldr._alwaysArray;



	var supplementalMain = function( cldr ) {

		var prepend, supplemental;
		
		prepend = function( prepend ) {
			return function( path ) {
				path = alwaysArray( path );
				return cldr.get( [ prepend ].concat( path ) );
			};
		};

		supplemental = prepend( "supplemental" );

		// Week Data
		// http://www.unicode.org/reports/tr35/tr35-dates.html#Week_Data
		supplemental.weekData = prepend( "supplemental/weekData" );

		supplemental.weekData.firstDay = function() {
			return cldr.get( "supplemental/weekData/firstDay/{territory}" ) ||
				cldr.get( "supplemental/weekData/firstDay/001" );
		};

		supplemental.weekData.minDays = function() {
			var minDays = cldr.get( "supplemental/weekData/minDays/{territory}" ) ||
				cldr.get( "supplemental/weekData/minDays/001" );
			return parseInt( minDays, 10 );
		};

		// Time Data
		// http://www.unicode.org/reports/tr35/tr35-dates.html#Time_Data
		supplemental.timeData = prepend( "supplemental/timeData" );

		supplemental.timeData.allowed = function() {
			return cldr.get( "supplemental/timeData/{territory}/_allowed" ) ||
				cldr.get( "supplemental/timeData/001/_allowed" );
		};

		supplemental.timeData.preferred = function() {
			return cldr.get( "supplemental/timeData/{territory}/_preferred" ) ||
				cldr.get( "supplemental/timeData/001/_preferred" );
		};

		return supplemental;

	};




	var initSuper = Cldr.prototype.init;

	/**
	 * .init() automatically ran on construction.
	 *
	 * Overload .init().
	 */
	Cldr.prototype.init = function() {
		initSuper.apply( this, arguments );
		this.supplemental = supplementalMain( this );
	};

	return Cldr;




}));


/***/ }),

/***/ "./node_modules/cldrjs/dist/cldr/unresolved.js":
/*!*****************************************************!*\
  !*** ./node_modules/cldrjs/dist/cldr/unresolved.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * CLDR JavaScript Library v0.5.1
 * http://jquery.com/
 *
 * Copyright 2013 Rafael Xavier de Souza
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2019-01-21T13:43Z
 */
/*!
 * CLDR JavaScript Library v0.5.1 2019-01-21T13:43Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */
(function( factory ) {

	if ( true ) {
		// AMD.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! ../cldr */ "./node_modules/cldrjs/dist/cldr.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(function( Cldr ) {

	// Build optimization hack to avoid duplicating functions across modules.
	var coreLoad = Cldr._coreLoad;
	var jsonMerge = Cldr._jsonMerge;
	var pathNormalize = Cldr._pathNormalize;
	var resourceGet = Cldr._resourceGet;
	var validatePresence = Cldr._validatePresence;
	var validateTypePath = Cldr._validateTypePath;



	var bundleParentLookup = function( Cldr, locale ) {
		var normalizedPath, parent;

		if ( locale === "root" ) {
			return;
		}

		// First, try to find parent on supplemental data.
		normalizedPath = pathNormalize( [ "supplemental/parentLocales/parentLocale", locale ] );
		parent = resourceGet( Cldr._resolved, normalizedPath ) || resourceGet( Cldr._raw, normalizedPath );
		if ( parent ) {
			return parent;
		}

		// Or truncate locale.
		parent = locale.substr( 0, locale.lastIndexOf( Cldr.localeSep ) );
		if ( !parent ) {
			return "root";
		}

		return parent;
	};




	// @path: normalized path
	var resourceSet = function( data, path, value ) {
		var i,
			node = data,
			length = path.length;

		for ( i = 0; i < length - 1; i++ ) {
			if ( !node[ path[ i ] ] ) {
				node[ path[ i ] ] = {};
			}
			node = node[ path[ i ] ];
		}
		node[ path[ i ] ] = value;
	};


	var itemLookup = (function() {

	var lookup;

	lookup = function( Cldr, locale, path, attributes, childLocale ) {
		var normalizedPath, parent, value;

		// 1: Finish recursion
		// 2: Avoid infinite loop
		if ( typeof locale === "undefined" /* 1 */ || locale === childLocale /* 2 */ ) {
			return;
		}

		// Resolve path
		normalizedPath = pathNormalize( path, attributes );

		// Check resolved (cached) data first
		// 1: Due to #16, never use the cached resolved non-leaf nodes. It may not
		//    represent its leafs in its entirety.
		value = resourceGet( Cldr._resolved, normalizedPath );
		if ( value !== undefined && typeof value !== "object" /* 1 */ ) {
			return value;
		}

		// Check raw data
		value = resourceGet( Cldr._raw, normalizedPath );

		if ( value === undefined ) {
			// Or, lookup at parent locale
			parent = bundleParentLookup( Cldr, locale );
			value = lookup( Cldr, parent, path, jsonMerge( attributes, { bundle: parent }), locale );
		}

		if ( value !== undefined ) {
			// Set resolved (cached)
			resourceSet( Cldr._resolved, normalizedPath, value );
		}

		return value;
	};

	return lookup;

}());


	Cldr._raw = {};

	/**
	 * Cldr.load( json [, json, ...] )
	 *
	 * @json [JSON] CLDR data or [Array] Array of @json's.
	 *
	 * Load resolved or unresolved cldr data.
	 * Overwrite Cldr.load().
	 */
	Cldr.load = function() {
		Cldr._raw = coreLoad( Cldr, Cldr._raw, arguments );
	};

	/**
	 * Overwrite Cldr.prototype.get().
	 */
	Cldr.prototype.get = function( path ) {
		validatePresence( path, "path" );
		validateTypePath( path, "path" );

		// 1: use bundle as locale on item lookup for simplification purposes, because no other extended subtag is used anyway on bundle parent lookup.
		// 2: during init(), this method is called, but bundle is yet not defined. Use "" as a workaround in this very specific scenario.
		return itemLookup( Cldr, this.attributes && this.attributes.bundle /* 1 */ || "" /* 2 */, path, this.attributes );
	};

	// In case cldr/unresolved is loaded after cldr/event, we trigger its overloads again. Because, .get is overwritten in here.
	if ( Cldr._eventInit ) {
		Cldr._eventInit();
	}

	return Cldr;




}));


/***/ }),

/***/ "./node_modules/cldrjs/dist/node_main.js":
/*!***********************************************!*\
  !*** ./node_modules/cldrjs/dist/node_main.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * CLDR JavaScript Library v0.5.1
 * http://jquery.com/
 *
 * Copyright 2013 Rafael Xavier de Souza
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2019-01-21T13:43Z
 */
/*!
 * CLDR JavaScript Library v0.5.1 2019-01-21T13:43Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */

// Cldr
module.exports = __webpack_require__( /*! ./cldr */ "./node_modules/cldrjs/dist/cldr.js" );

// Extent Cldr with the following modules
__webpack_require__( /*! ./cldr/event */ "./node_modules/cldrjs/dist/cldr/event.js" );
__webpack_require__( /*! ./cldr/supplemental */ "./node_modules/cldrjs/dist/cldr/supplemental.js" );
__webpack_require__( /*! ./cldr/unresolved */ "./node_modules/cldrjs/dist/cldr/unresolved.js" );


/***/ }),

/***/ "./node_modules/globalize/dist/globalize.js":
/*!**************************************************!*\
  !*** ./node_modules/globalize/dist/globalize.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/**
 * Globalize v1.4.0
 *
 * http://github.com/jquery/globalize
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2018-07-17T20:38Z
 */
/*!
 * Globalize v1.4.0 2018-07-17T20:38Z Released under the MIT license
 * http://git.io/TrdQbw
 */
(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define([
			"cldr",
			"cldr/event"
		], factory );
	} else if ( true ) {

		// Node, CommonJS
		module.exports = factory( __webpack_require__( /*! cldrjs */ "./node_modules/cldrjs/dist/node_main.js" ) );
	} else {}
}( this, function( Cldr ) {


/**
 * A toString method that outputs meaningful values for objects or arrays and
 * still performs as fast as a plain string in case variable is string, or as
 * fast as `"" + number` in case variable is a number.
 * Ref: http://jsperf.com/my-stringify
 */
var toString = function( variable ) {
	return typeof variable === "string" ? variable : ( typeof variable === "number" ? "" +
		variable : JSON.stringify( variable ) );
};




/**
 * formatMessage( message, data )
 *
 * @message [String] A message with optional {vars} to be replaced.
 *
 * @data [Array or JSON] Object with replacing-variables content.
 *
 * Return the formatted message. For example:
 *
 * - formatMessage( "{0} second", [ 1 ] ); // 1 second
 *
 * - formatMessage( "{0}/{1}", ["m", "s"] ); // m/s
 *
 * - formatMessage( "{name} <{email}>", {
 *     name: "Foo",
 *     email: "bar@baz.qux"
 *   }); // Foo <bar@baz.qux>
 */
var formatMessage = function( message, data ) {

	// Replace {attribute}'s
	message = message.replace( /{[0-9a-zA-Z-_. ]+}/g, function( name ) {
		name = name.replace( /^{([^}]*)}$/, "$1" );
		return toString( data[ name ] );
	});

	return message;
};




var objectExtend = function() {
	var destination = arguments[ 0 ],
		sources = [].slice.call( arguments, 1 );

	sources.forEach(function( source ) {
		var prop;
		for ( prop in source ) {
			destination[ prop ] = source[ prop ];
		}
	});

	return destination;
};




var createError = function( code, message, attributes ) {
	var error;

	message = code + ( message ? ": " + formatMessage( message, attributes ) : "" );
	error = new Error( message );
	error.code = code;

	objectExtend( error, attributes );

	return error;
};




var runtimeStringify = function( args ) {
	return JSON.stringify( args, function( key, value ) {
		if ( value && value.runtimeKey ) {
			return value.runtimeKey;
		}
		return value;
	} );
};




// Based on http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
var stringHash = function( str ) {
	return [].reduce.call( str, function( hash, i ) {
		var chr = i.charCodeAt( 0 );
		hash = ( ( hash << 5 ) - hash ) + chr;
		return hash | 0;
	}, 0 );
};




var runtimeKey = function( fnName, locale, args, argsStr ) {
	var hash;
	argsStr = argsStr || runtimeStringify( args );
	hash = stringHash( fnName + locale + argsStr );
	return hash > 0 ? "a" + hash : "b" + Math.abs( hash );
};




var functionName = function( fn ) {
	if ( fn.name !== undefined ) {
		return fn.name;
	}

	// fn.name is not supported by IE.
	var matches = /^function\s+([\w\$]+)\s*\(/.exec( fn.toString() );

	if ( matches && matches.length > 0 ) {
		return matches[ 1 ];
	}
};




var runtimeBind = function( args, cldr, fn, runtimeArgs ) {

	var argsStr = runtimeStringify( args ),
		fnName = functionName( fn ),
		locale = cldr.locale;

	// If name of the function is not available, this is most likely due to uglification,
	// which most likely means we are in production, and runtimeBind here is not necessary.
	if ( !fnName ) {
		return fn;
	}

	fn.runtimeKey = runtimeKey( fnName, locale, null, argsStr );

	fn.generatorString = function() {
		return "Globalize(\"" + locale + "\")." + fnName + "(" + argsStr.slice( 1, -1 ) + ")";
	};

	fn.runtimeArgs = runtimeArgs;

	return fn;
};




var validate = function( code, message, check, attributes ) {
	if ( !check ) {
		throw createError( code, message, attributes );
	}
};




var alwaysArray = function( stringOrArray ) {
	return Array.isArray( stringOrArray ) ? stringOrArray : stringOrArray ? [ stringOrArray ] : [];
};




var validateCldr = function( path, value, options ) {
	var skipBoolean;
	options = options || {};

	skipBoolean = alwaysArray( options.skip ).some(function( pathRe ) {
		return pathRe.test( path );
	});

	validate( "E_MISSING_CLDR", "Missing required CLDR content `{path}`.", value || skipBoolean, {
		path: path
	});
};




var validateDefaultLocale = function( value ) {
	validate( "E_DEFAULT_LOCALE_NOT_DEFINED", "Default locale has not been defined.",
		value !== undefined, {} );
};




var validateParameterPresence = function( value, name ) {
	validate( "E_MISSING_PARAMETER", "Missing required parameter `{name}`.",
		value !== undefined, { name: name });
};




/**
 * range( value, name, minimum, maximum )
 *
 * @value [Number].
 *
 * @name [String] name of variable.
 *
 * @minimum [Number]. The lowest valid value, inclusive.
 *
 * @maximum [Number]. The greatest valid value, inclusive.
 */
var validateParameterRange = function( value, name, minimum, maximum ) {
	validate(
		"E_PAR_OUT_OF_RANGE",
		"Parameter `{name}` has value `{value}` out of range [{minimum}, {maximum}].",
		value === undefined || value >= minimum && value <= maximum,
		{
			maximum: maximum,
			minimum: minimum,
			name: name,
			value: value
		}
	);
};




var validateParameterType = function( value, name, check, expected ) {
	validate(
		"E_INVALID_PAR_TYPE",
		"Invalid `{name}` parameter ({value}). {expected} expected.",
		check,
		{
			expected: expected,
			name: name,
			value: value
		}
	);
};




var validateParameterTypeLocale = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || typeof value === "string" || value instanceof Cldr,
		"String or Cldr instance"
	);
};




/**
 * Function inspired by jQuery Core, but reduced to our use case.
 */
var isPlainObject = function( obj ) {
	return obj !== null && "" + obj === "[object Object]";
};




var validateParameterTypePlainObject = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || isPlainObject( value ),
		"Plain Object"
	);
};




var alwaysCldr = function( localeOrCldr ) {
	return localeOrCldr instanceof Cldr ? localeOrCldr : new Cldr( localeOrCldr );
};




// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FRegular_Expressions
var regexpEscape = function( string ) {
	return string.replace( /([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1" );
};




var stringPad = function( str, count, right ) {
	var length;
	if ( typeof str !== "string" ) {
		str = String( str );
	}
	for ( length = str.length; length < count; length += 1 ) {
		str = ( right ? ( str + "0" ) : ( "0" + str ) );
	}
	return str;
};




function validateLikelySubtags( cldr ) {
	cldr.once( "get", validateCldr );
	cldr.get( "supplemental/likelySubtags" );
}

/**
 * [new] Globalize( locale|cldr )
 *
 * @locale [String]
 *
 * @cldr [Cldr instance]
 *
 * Create a Globalize instance.
 */
function Globalize( locale ) {
	if ( !( this instanceof Globalize ) ) {
		return new Globalize( locale );
	}

	validateParameterPresence( locale, "locale" );
	validateParameterTypeLocale( locale, "locale" );

	this.cldr = alwaysCldr( locale );

	validateLikelySubtags( this.cldr );
}

/**
 * Globalize.load( json, ... )
 *
 * @json [JSON]
 *
 * Load resolved or unresolved cldr data.
 * Somewhat equivalent to previous Globalize.addCultureInfo(...).
 */
Globalize.load = function() {

	// validations are delegated to Cldr.load().
	Cldr.load.apply( Cldr, arguments );
};

/**
 * Globalize.locale( [locale|cldr] )
 *
 * @locale [String]
 *
 * @cldr [Cldr instance]
 *
 * Set default Cldr instance if locale or cldr argument is passed.
 *
 * Return the default Cldr instance.
 */
Globalize.locale = function( locale ) {
	validateParameterTypeLocale( locale, "locale" );

	if ( arguments.length ) {
		this.cldr = alwaysCldr( locale );
		validateLikelySubtags( this.cldr );
	}
	return this.cldr;
};

/**
 * Optimization to avoid duplicating some internal functions across modules.
 */
Globalize._alwaysArray = alwaysArray;
Globalize._createError = createError;
Globalize._formatMessage = formatMessage;
Globalize._isPlainObject = isPlainObject;
Globalize._objectExtend = objectExtend;
Globalize._regexpEscape = regexpEscape;
Globalize._runtimeBind = runtimeBind;
Globalize._stringPad = stringPad;
Globalize._validate = validate;
Globalize._validateCldr = validateCldr;
Globalize._validateDefaultLocale = validateDefaultLocale;
Globalize._validateParameterPresence = validateParameterPresence;
Globalize._validateParameterRange = validateParameterRange;
Globalize._validateParameterTypePlainObject = validateParameterTypePlainObject;
Globalize._validateParameterType = validateParameterType;

return Globalize;




}));



/***/ }),

/***/ "./node_modules/globalize/dist/globalize/message.js":
/*!**********************************************************!*\
  !*** ./node_modules/globalize/dist/globalize/message.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/**
 * Globalize v1.4.0
 *
 * http://github.com/jquery/globalize
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2018-07-17T20:38Z
 */
/*!
 * Globalize v1.4.0 2018-07-17T20:38Z Released under the MIT license
 * http://git.io/TrdQbw
 */
(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define([
			"cldr",
			"../globalize",
			"cldr/event"
		], factory );
	} else if ( true ) {

		// Node, CommonJS
		module.exports = factory( __webpack_require__( /*! cldrjs */ "./node_modules/cldrjs/dist/node_main.js" ), __webpack_require__( /*! ../globalize */ "./node_modules/globalize/dist/globalize.js" ) );
	} else {}
}(this, function( Cldr, Globalize ) {

var alwaysArray = Globalize._alwaysArray,
	createError = Globalize._createError,
	isPlainObject = Globalize._isPlainObject,
	runtimeBind = Globalize._runtimeBind,
	validateDefaultLocale = Globalize._validateDefaultLocale,
	validate = Globalize._validate,
	validateParameterPresence = Globalize._validateParameterPresence,
	validateParameterType = Globalize._validateParameterType,
	validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject;
var MessageFormat;
/* jshint ignore:start */
MessageFormat = (function() {
MessageFormat._parse = (function() {

  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = [],
        peg$c1 = function(st) {
              return { type: 'messageFormatPattern', statements: st };
            },
        peg$c2 = peg$FAILED,
        peg$c3 = "{",
        peg$c4 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c5 = null,
        peg$c6 = ",",
        peg$c7 = { type: "literal", value: ",", description: "\",\"" },
        peg$c8 = "}",
        peg$c9 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c10 = function(argIdx, efmt) {
              var res = {
                type: "messageFormatElement",
                argumentIndex: argIdx
              };
              if (efmt && efmt.length) {
                res.elementFormat = efmt[1];
              } else {
                res.output = true;
              }
              return res;
            },
        peg$c11 = "plural",
        peg$c12 = { type: "literal", value: "plural", description: "\"plural\"" },
        peg$c13 = function(t, s) {
              return { type: "elementFormat", key: t, val: s };
            },
        peg$c14 = "selectordinal",
        peg$c15 = { type: "literal", value: "selectordinal", description: "\"selectordinal\"" },
        peg$c16 = "select",
        peg$c17 = { type: "literal", value: "select", description: "\"select\"" },
        peg$c18 = function(t, p) {
              return { type: "elementFormat", key: t, val: p };
            },
        peg$c19 = function(op, pf) {
              return { type: "pluralFormatPattern", pluralForms: pf, offset: op || 0 };
            },
        peg$c20 = "offset",
        peg$c21 = { type: "literal", value: "offset", description: "\"offset\"" },
        peg$c22 = ":",
        peg$c23 = { type: "literal", value: ":", description: "\":\"" },
        peg$c24 = function(d) { return d; },
        peg$c25 = function(k, mfp) {
              return { key: k, val: mfp };
            },
        peg$c26 = function(i) { return i; },
        peg$c27 = "=",
        peg$c28 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c29 = function(pf) { return { type: "selectFormatPattern", pluralForms: pf }; },
        peg$c30 = function(p) { return p; },
        peg$c31 = "#",
        peg$c32 = { type: "literal", value: "#", description: "\"#\"" },
        peg$c33 = function() { return {type: 'octothorpe'}; },
        peg$c34 = function(s) { return { type: "string", val: s.join('') }; },
        peg$c35 = { type: "other", description: "identifier" },
        peg$c36 = /^[0-9a-zA-Z$_]/,
        peg$c37 = { type: "class", value: "[0-9a-zA-Z$_]", description: "[0-9a-zA-Z$_]" },
        peg$c38 = /^[^ \t\n\r,.+={}]/,
        peg$c39 = { type: "class", value: "[^ \\t\\n\\r,.+={}]", description: "[^ \\t\\n\\r,.+={}]" },
        peg$c40 = function(s) { return s; },
        peg$c41 = function(chars) { return chars.join(''); },
        peg$c42 = /^[^{}#\\\0-\x1F \t\n\r]/,
        peg$c43 = { type: "class", value: "[^{}#\\\\\\0-\\x1F \\t\\n\\r]", description: "[^{}#\\\\\\0-\\x1F \\t\\n\\r]" },
        peg$c44 = function(x) { return x; },
        peg$c45 = "\\\\",
        peg$c46 = { type: "literal", value: "\\\\", description: "\"\\\\\\\\\"" },
        peg$c47 = function() { return "\\"; },
        peg$c48 = "\\#",
        peg$c49 = { type: "literal", value: "\\#", description: "\"\\\\#\"" },
        peg$c50 = function() { return "#"; },
        peg$c51 = "\\{",
        peg$c52 = { type: "literal", value: "\\{", description: "\"\\\\{\"" },
        peg$c53 = function() { return "\u007B"; },
        peg$c54 = "\\}",
        peg$c55 = { type: "literal", value: "\\}", description: "\"\\\\}\"" },
        peg$c56 = function() { return "\u007D"; },
        peg$c57 = "\\u",
        peg$c58 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
        peg$c59 = function(h1, h2, h3, h4) {
              return String.fromCharCode(parseInt("0x" + h1 + h2 + h3 + h4));
            },
        peg$c60 = /^[0-9]/,
        peg$c61 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c62 = function(ds) {
            //the number might start with 0 but must not be interpreted as an octal number
            //Hence, the base is passed to parseInt explicitely
            return parseInt((ds.join('')), 10);
          },
        peg$c63 = /^[0-9a-fA-F]/,
        peg$c64 = { type: "class", value: "[0-9a-fA-F]", description: "[0-9a-fA-F]" },
        peg$c65 = { type: "other", description: "whitespace" },
        peg$c66 = function(w) { return w.join(''); },
        peg$c67 = /^[ \t\n\r]/,
        peg$c68 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parsemessageFormatPattern();

      return s0;
    }

    function peg$parsemessageFormatPattern() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsemessageFormatElement();
      if (s2 === peg$FAILED) {
        s2 = peg$parsestring();
        if (s2 === peg$FAILED) {
          s2 = peg$parseoctothorpe();
        }
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsemessageFormatElement();
        if (s2 === peg$FAILED) {
          s2 = peg$parsestring();
          if (s2 === peg$FAILED) {
            s2 = peg$parseoctothorpe();
          }
        }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c1(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsemessageFormatElement() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c3;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c4); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseid();
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c6;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c7); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseelementFormat();
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$c2;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$c2;
            }
            if (s4 === peg$FAILED) {
              s4 = peg$c5;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 125) {
                  s6 = peg$c8;
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c9); }
                }
                if (s6 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c10(s3, s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseelementFormat() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 6) === peg$c11) {
          s2 = peg$c11;
          peg$currPos += 6;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c12); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s4 = peg$c6;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c7); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsepluralFormatPattern();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c13(s2, s6);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          if (input.substr(peg$currPos, 13) === peg$c14) {
            s2 = peg$c14;
            peg$currPos += 13;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c15); }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parse_();
            if (s3 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s4 = peg$c6;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c7); }
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$parse_();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parsepluralFormatPattern();
                  if (s6 !== peg$FAILED) {
                    s7 = peg$parse_();
                    if (s7 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c13(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parse_();
          if (s1 !== peg$FAILED) {
            if (input.substr(peg$currPos, 6) === peg$c16) {
              s2 = peg$c16;
              peg$currPos += 6;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c17); }
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$parse_();
              if (s3 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 44) {
                  s4 = peg$c6;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c7); }
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parse_();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parseselectFormatPattern();
                    if (s6 !== peg$FAILED) {
                      s7 = peg$parse_();
                      if (s7 !== peg$FAILED) {
                        peg$reportedPos = s0;
                        s1 = peg$c13(s2, s6);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$c2;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parse_();
            if (s1 !== peg$FAILED) {
              s2 = peg$parseid();
              if (s2 !== peg$FAILED) {
                s3 = [];
                s4 = peg$parseargStylePattern();
                while (s4 !== peg$FAILED) {
                  s3.push(s4);
                  s4 = peg$parseargStylePattern();
                }
                if (s3 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c18(s2, s3);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          }
        }
      }

      return s0;
    }

    function peg$parsepluralFormatPattern() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseoffsetPattern();
      if (s1 === peg$FAILED) {
        s1 = peg$c5;
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsepluralForm();
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parsepluralForm();
          }
        } else {
          s2 = peg$c2;
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c19(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseoffsetPattern() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 6) === peg$c20) {
          s2 = peg$c20;
          peg$currPos += 6;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c21); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 58) {
              s4 = peg$c22;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c23); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsedigits();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c24(s6);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parsepluralForm() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsepluralKey();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s4 = peg$c3;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsemessageFormatPattern();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s8 = peg$c8;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c9); }
                    }
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c25(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parsepluralKey() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseid();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c26(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 61) {
          s1 = peg$c27;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c28); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parsedigits();
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c24(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      }

      return s0;
    }

    function peg$parseselectFormatPattern() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseselectForm();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseselectForm();
        }
      } else {
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c29(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseselectForm() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseid();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s4 = peg$c3;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsemessageFormatPattern();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s8 = peg$c8;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c9); }
                    }
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c25(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseargStylePattern() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c6;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c7); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseid();
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c30(s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseoctothorpe() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 35) {
        s1 = peg$c31;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c32); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c33();
      }
      s0 = s1;

      return s0;
    }

    function peg$parsestring() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsechars();
      if (s2 === peg$FAILED) {
        s2 = peg$parsewhitespace();
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsechars();
          if (s2 === peg$FAILED) {
            s2 = peg$parsewhitespace();
          }
        }
      } else {
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c34(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseid() {
      var s0, s1, s2, s3, s4, s5, s6;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$currPos;
        if (peg$c36.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c37); }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          if (peg$c38.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c39); }
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$c38.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c39); }
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$c2;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c2;
        }
        if (s3 !== peg$FAILED) {
          s3 = input.substring(s2, peg$currPos);
        }
        s2 = s3;
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c40(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }

      return s0;
    }

    function peg$parsechars() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsechar();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsechar();
        }
      } else {
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c41(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsechar() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (peg$c42.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c43); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c44(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c45) {
          s1 = peg$c45;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c47();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c48) {
            s1 = peg$c48;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c49); }
          }
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c50();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c51) {
              s1 = peg$c51;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c52); }
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c53();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c54) {
                s1 = peg$c54;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c55); }
              }
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c56();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c57) {
                  s1 = peg$c57;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c58); }
                }
                if (s1 !== peg$FAILED) {
                  s2 = peg$parsehexDigit();
                  if (s2 !== peg$FAILED) {
                    s3 = peg$parsehexDigit();
                    if (s3 !== peg$FAILED) {
                      s4 = peg$parsehexDigit();
                      if (s4 !== peg$FAILED) {
                        s5 = peg$parsehexDigit();
                        if (s5 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c59(s2, s3, s4, s5);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$c2;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$c2;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsedigits() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c60.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c61); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c60.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c61); }
          }
        }
      } else {
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c62(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsehexDigit() {
      var s0;

      if (peg$c63.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c64); }
      }

      return s0;
    }

    function peg$parse_() {
      var s0, s1, s2;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsewhitespace();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsewhitespace();
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c66(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c65); }
      }

      return s0;
    }

    function peg$parsewhitespace() {
      var s0;

      if (peg$c67.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c68); }
      }

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
}()).parse;


/** @file messageformat.js - ICU PluralFormat + SelectFormat for JavaScript
 *  @author Alex Sexton - @SlexAxton
 *  @version 0.3.0-1
 *  @copyright 2012-2015 Alex Sexton, Eemeli Aro, and Contributors
 *  @license To use or fork, MIT. To contribute back, Dojo CLA  */


/** Utility function for quoting an Object's key value iff required
 *  @private  */
function propname(key, obj) {
  if (/^[A-Z_$][0-9A-Z_$]*$/i.test(key)) {
    return obj ? obj + '.' + key : key;
  } else {
    var jkey = JSON.stringify(key);
    return obj ? obj + '[' + jkey + ']' : jkey;
  }
};


/** Create a new message formatter
 *
 *  @class
 *  @global
 *  @param {string|string[]} [locale="en"] - The locale to use, with fallbacks
 *  @param {function} [pluralFunc] - Optional custom pluralization function
 *  @param {function[]} [formatters] - Optional custom formatting functions  */
function MessageFormat(locale, pluralFunc, formatters) {
  this.lc = [locale];  
  this.runtime.pluralFuncs = {};
  this.runtime.pluralFuncs[this.lc[0]] = pluralFunc;
  this.runtime.fmt = {};
  if (formatters) for (var f in formatters) {
    this.runtime.fmt[f] = formatters[f];
  }
}




/** Parse an input string to its AST
 *
 *  Precompiled from `lib/messageformat-parser.pegjs` by
 *  {@link http://pegjs.org/ PEG.js}. Included in MessageFormat object
 *  to enable testing.
 *
 *  @private  */



/** Pluralization functions from
 *  {@link http://github.com/eemeli/make-plural.js make-plural}
 *
 *  @memberof MessageFormat
 *  @type Object.<string,function>  */
MessageFormat.plurals = {};


/** Default number formatting functions in the style of ICU's
 *  {@link http://icu-project.org/apiref/icu4j/com/ibm/icu/text/MessageFormat.html simpleArg syntax}
 *  implemented using the
 *  {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl Intl}
 *  object defined by ECMA-402.
 *
 *  **Note**: Intl is not defined in default Node until 0.11.15 / 0.12.0, so
 *  earlier versions require a {@link https://www.npmjs.com/package/intl polyfill}.
 *  Therefore {@link MessageFormat.withIntlSupport} needs to be true for these
 *  functions to be available for inclusion in the output.
 *
 *  @see MessageFormat#setIntlSupport
 *
 *  @namespace
 *  @memberof MessageFormat
 *  @property {function} number - Represent a number as an integer, percent or currency value
 *  @property {function} date - Represent a date as a full/long/default/short string
 *  @property {function} time - Represent a time as a full/long/default/short string
 *
 *  @example
 *  > var MessageFormat = require('messageformat');
 *  > var mf = (new MessageFormat('en')).setIntlSupport(true);
 *  > mf.currency = 'EUR';
 *  > var mfunc = mf.compile("The total is {V,number,currency}.");
 *  > mfunc({V:5.5})
 *  "The total is €5.50."
 *
 *  @example
 *  > var MessageFormat = require('messageformat');
 *  > var mf = new MessageFormat('en', null, {number: MessageFormat.number});
 *  > mf.currency = 'EUR';
 *  > var mfunc = mf.compile("The total is {V,number,currency}.");
 *  > mfunc({V:5.5})
 *  "The total is €5.50."  */
MessageFormat.formatters = {};

/** Enable or disable support for the default formatters, which require the
 *  `Intl` object. Note that this can't be autodetected, as the environment
 *  in which the formatted text is compiled into Javascript functions is not
 *  necessarily the same environment in which they will get executed.
 *
 *  @see MessageFormat.formatters
 *
 *  @memberof MessageFormat
 *  @param {boolean} [enable=true]
 *  @returns {Object} The MessageFormat instance, to allow for chaining
 *  @example
 *  > var Intl = require('intl');
 *  > var MessageFormat = require('messageformat');
 *  > var mf = (new MessageFormat('en')).setIntlSupport(true);
 *  > mf.currency = 'EUR';
 *  > mf.compile("The total is {V,number,currency}.")({V:5.5});
 *  "The total is €5.50."  */



/** A set of utility functions that are called by the compiled Javascript
 *  functions, these are included locally in the output of {@link
 *  MessageFormat#compile compile()}.
 *
 *  @namespace
 *  @memberof MessageFormat  */
MessageFormat.prototype.runtime = {

  /** Utility function for `#` in plural rules
   *
   *  @param {number} value - The value to operate on
   *  @param {number} [offset=0] - An optional offset, set by the surrounding context  */
  number: function(value, offset) {
    if (isNaN(value)) throw new Error("'" + value + "' isn't a number.");
    return value - (offset || 0);
  },

  /** Utility function for `{N, plural|selectordinal, ...}`
   *
   *  @param {number} value - The key to use to find a pluralization rule
   *  @param {number} offset - An offset to apply to `value`
   *  @param {function} lcfunc - A locale function from `pluralFuncs`
   *  @param {Object.<string,string>} data - The object from which results are looked up
   *  @param {?boolean} isOrdinal - If true, use ordinal rather than cardinal rules
   *  @returns {string} The result of the pluralization  */
  plural: function(value, offset, lcfunc, data, isOrdinal) {
    if ({}.hasOwnProperty.call(data, value)) return data[value]();
    if (offset) value -= offset;
    var key = lcfunc(value, isOrdinal);
    if (key in data) return data[key]();
    return data.other();
  },

  /** Utility function for `{N, select, ...}`
   *
   *  @param {number} value - The key to use to find a selection
   *  @param {Object.<string,string>} data - The object from which results are looked up
   *  @returns {string} The result of the select statement  */
  select: function(value, data) {
    if ({}.hasOwnProperty.call(data, value)) return data[value]();
    return data.other()
  },

  /** Pluralization functions included in compiled output
   *  @instance
   *  @type Object.<string,function>  */
  pluralFuncs: {},

  /** Custom formatting functions called by `{var, fn[, args]*}` syntax
   *
   *  For examples, see {@link MessageFormat.formatters}
   *
   *  @instance
   *  @see MessageFormat.formatters
   *  @type Object.<string,function>  */
  fmt: {},

  /** Custom stringifier to clean up browser inconsistencies
   *  @instance  */
  toString: function () {
    var _stringify = function(o, level) {
      if (typeof o != 'object') {
        var funcStr = o.toString().replace(/^(function )\w*/, '$1');
        var indent = /([ \t]*)\S.*$/.exec(funcStr);
        return indent ? funcStr.replace(new RegExp('^' + indent[1], 'mg'), '') : funcStr;
      }
      var s = [];
      for (var i in o) if (i != 'toString') {
        if (level == 0) s.push('var ' + i + ' = ' + _stringify(o[i], level + 1) + ';\n');
        else s.push(propname(i) + ': ' + _stringify(o[i], level + 1));
      }
      if (level == 0) return s.join('');
      if (s.length == 0) return '{}';
      var indent = '  '; while (--level) indent += '  ';
      return '{\n' + s.join(',\n').replace(/^/gm, indent) + '\n}';
    };
    return _stringify(this, 0);
  }
};


/** Recursively map an AST to its resulting string
 *
 *  @memberof MessageFormat
 *
 *  @param ast - the Ast node for which the JS code should be generated
 *
 *  @private  */
MessageFormat.prototype._precompile = function(ast, data) {
  data = data || { keys: {}, offset: {} };
  var r = [], i, tmp, args = [];

  switch ( ast.type ) {
    case 'messageFormatPattern':
      for ( i = 0; i < ast.statements.length; ++i ) {
        r.push(this._precompile( ast.statements[i], data ));
      }
      tmp = r.join(' + ') || '""';
      return data.pf_count ? tmp : 'function(d) { return ' + tmp + '; }';

    case 'messageFormatElement':
      data.pf_count = data.pf_count || 0;
      if ( ast.output ) {
        return propname(ast.argumentIndex, 'd');
      }
      else {
        data.keys[data.pf_count] = ast.argumentIndex;
        return this._precompile( ast.elementFormat, data );
      }
      return '';

    case 'elementFormat':
      args = [ propname(data.keys[data.pf_count], 'd') ];
      switch (ast.key) {
        case 'select':
          args.push(this._precompile(ast.val, data));
          return 'select(' + args.join(', ') + ')';
        case 'selectordinal':
          args = args.concat([ 0, propname(this.lc[0], 'pluralFuncs'), this._precompile(ast.val, data), 1 ]);
          return 'plural(' + args.join(', ') + ')';
        case 'plural':
          data.offset[data.pf_count || 0] = ast.val.offset || 0;
          args = args.concat([ data.offset[data.pf_count] || 0, propname(this.lc[0], 'pluralFuncs'), this._precompile(ast.val, data) ]);
          return 'plural(' + args.join(', ') + ')';
        default:
          if (this.withIntlSupport && !(ast.key in this.runtime.fmt) && (ast.key in MessageFormat.formatters)) {
            tmp = MessageFormat.formatters[ast.key];
            this.runtime.fmt[ast.key] = (typeof tmp(this) == 'function') ? tmp(this) : tmp;
          }
          args.push(JSON.stringify(this.lc));
          if (ast.val && ast.val.length) args.push(JSON.stringify(ast.val.length == 1 ? ast.val[0] : ast.val));
          return 'fmt.' + ast.key + '(' + args.join(', ') + ')';
      }

    case 'pluralFormatPattern':
    case 'selectFormatPattern':
      data.pf_count = data.pf_count || 0;
      if (ast.type == 'selectFormatPattern') data.offset[data.pf_count] = 0;
      var needOther = true;
      for (i = 0; i < ast.pluralForms.length; ++i) {
        var key = ast.pluralForms[i].key;
        if (key === 'other') needOther = false;
        var data_copy = JSON.parse(JSON.stringify(data));
        data_copy.pf_count++;
        r.push(propname(key) + ': function() { return ' + this._precompile(ast.pluralForms[i].val, data_copy) + ';}');
      }
      if (needOther) throw new Error("No 'other' form found in " + ast.type + " " + data.pf_count);
      return '{ ' + r.join(', ') + ' }';

    case 'string':
      return JSON.stringify(ast.val || "");

    case 'octothorpe':
      if (!data.pf_count) return '"#"';
      args = [ propname(data.keys[data.pf_count-1], 'd') ];
      if (data.offset[data.pf_count-1]) args.push(data.offset[data.pf_count-1]);
      return 'number(' + args.join(', ') + ')';

    default:
      throw new Error( 'Bad AST type: ' + ast.type );
  }
};

/** Compile messages into an executable function with clean string
 *  representation.
 *
 *  If `messages` is a single string including ICU MessageFormat declarations,
 *  `opt` is ignored and the returned function takes a single Object parameter
 *  `d` representing each of the input's defined variables. The returned
 *  function will be defined in a local scope that includes all the required
 *  runtime variables.
 *
 *  If `messages` is a map of keys to strings, or a map of namespace keys to
 *  such key/string maps, the returned function will fill the specified global
 *  with javascript functions matching the structure of the input. In such use,
 *  the output of `compile()` is expected to be serialized using `.toString()`,
 *  and will include definitions of the runtime functions. If `opt.global` is
 *  null, calling the output function will return the object itself.
 *
 *  Together, the input parameters should match the following patterns:
 *  ```js
 *  messages = "string" || { key0: "string0", key1: "string1", ... } || {
 *    ns0: { key0: "string0", key1: "string1", ...  },
 *    ns1: { key0: "string0", key1: "string1", ...  },
 *    ...
 *  }
 *
 *  opt = null || {
 *    locale: null || {
 *      ns0: "lc0" || [ "lc0", ... ],
 *      ns1: "lc1" || [ "lc1", ... ],
 *      ...
 *    },
 *    global: null || "module.exports" || "exports" || "i18n" || ...
 *  }
 *  ```
 *
 *  @memberof MessageFormat
 *  @param {string|Object}
 *      messages - The input message(s) to be compiled, in ICU MessageFormat
 *  @param {Object} [opt={}] - Options controlling output for non-simple intput
 *  @param {Object} [opt.locale] - The locales to use for the messages, with a
 *      structure matching that of `messages`
 *  @param {string} [opt.global=""] - The global variable that the output
 *      function should use, or a null string for none. "exports" and
 *      "module.exports" are recognised as special cases.
 *  @returns {function} The first match found for the given locale(s)
 *
 *  @example
 * > var MessageFormat = require('messageformat'),
 * ...   mf = new MessageFormat('en'),
 * ...   mfunc0 = mf.compile('A {TYPE} example.');
 * > mfunc0({TYPE:'simple'})
 * 'A simple example.'
 * > mfunc0.toString()
 * 'function (d) { return "A " + d.TYPE + " example."; }'
 *
 *  @example
 * > var msgSet = { a: 'A {TYPE} example.',
 * ...              b: 'This has {COUNT, plural, one{one member} other{# members}}.' },
 * ...   mfuncSet = mf.compile(msgSet);
 * > mfuncSet().a({TYPE:'more complex'})
 * 'A more complex example.'
 * > mfuncSet().b({COUNT:2})
 * 'This has 2 members.'
 *
 * > console.log(mfuncSet.toString())
 * function anonymous() {
 * var number = function (value, offset) {
 *   if (isNaN(value)) throw new Error("'" + value + "' isn't a number.");
 *   return value - (offset || 0);
 * };
 * var plural = function (value, offset, lcfunc, data, isOrdinal) {
 *   if ({}.hasOwnProperty.call(data, value)) return data[value]();
 *   if (offset) value -= offset;
 *   var key = lcfunc(value, isOrdinal);
 *   if (key in data) return data[key]();
 *   return data.other();
 * };
 * var select = function (value, data) {
 *   if ({}.hasOwnProperty.call(data, value)) return data[value]();
 *   return data.other()
 * };
 * var pluralFuncs = {
 *   en: function (n, ord) {
 *     var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,
 *         n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
 *     if (ord) return (n10 == 1 && n100 != 11) ? 'one'
 *         : (n10 == 2 && n100 != 12) ? 'two'
 *         : (n10 == 3 && n100 != 13) ? 'few'
 *         : 'other';
 *     return (n == 1 && v0) ? 'one' : 'other';
 *   }
 * };
 * var fmt = {};
 *
 * return {
 *   a: function(d) { return "A " + d.TYPE + " example."; },
 *   b: function(d) { return "This has " + plural(d.COUNT, 0, pluralFuncs.en, { one: function() { return "one member";}, other: function() { return number(d.COUNT)+" members";} }) + "."; }
 * }
 * }
 *
 *  @example
 * > mf.runtime.pluralFuncs.fi = MessageFormat.plurals.fi;
 * > var multiSet = { en: { a: 'A {TYPE} example.',
 * ...                      b: 'This is the {COUNT, selectordinal, one{#st} two{#nd} few{#rd} other{#th}} example.' },
 * ...                fi: { a: '{TYPE} esimerkki.',
 * ...                      b: 'Tämä on {COUNT, selectordinal, other{#.}} esimerkki.' } },
 * ...   multiSetLocales = { en: 'en', fi: 'fi' },
 * ...   mfuncSet = mf.compile(multiSet, { locale: multiSetLocales, global: 'i18n' });
 * > mfuncSet(this);
 * > i18n.en.b({COUNT:3})
 * 'This is the 3rd example.'
 * > i18n.fi.b({COUNT:3})
 * 'Tämä on 3. esimerkki.'  */
MessageFormat.prototype.compile = function ( messages, opt ) {
  var r = {}, lc0 = this.lc,
      compileMsg = function(self, msg) {
        try {
          var ast = MessageFormat._parse(msg);
          return self._precompile(ast);
        } catch (e) {
          throw new Error((ast ? 'Precompiler' : 'Parser') + ' error: ' + e.toString());
        }
      },
      stringify = function(r, level) {
        if (!level) level = 0;
        if (typeof r != 'object') return r;
        var o = [], indent = '';
        for (var i = 0; i < level; ++i) indent += '  ';
        for (var k in r) o.push('\n' + indent + '  ' + propname(k) + ': ' + stringify(r[k], level + 1));
        return '{' + o.join(',') + '\n' + indent + '}';
      };

  if (typeof messages == 'string') {
    var f = new Function(
        'number, plural, select, pluralFuncs, fmt',
        'return ' + compileMsg(this, messages));
    return f(this.runtime.number, this.runtime.plural, this.runtime.select,
        this.runtime.pluralFuncs, this.runtime.fmt);
  }

  opt = opt || {};

  for (var ns in messages) {
    if (opt.locale) this.lc = opt.locale[ns] && [].concat(opt.locale[ns]) || lc0;
    if (typeof messages[ns] == 'string') {
      try { r[ns] = compileMsg(this, messages[ns]); }
      catch (e) { e.message = e.message.replace(':', ' with `' + ns + '`:'); throw e; }
    } else {
      r[ns] = {};
      for (var key in messages[ns]) {
        try { r[ns][key] = compileMsg(this, messages[ns][key]); }
        catch (e) { e.message = e.message.replace(':', ' with `' + key + '` in `' + ns + '`:'); throw e; }
      }
    }
  }

  this.lc = lc0;
  var s = this.runtime.toString() + '\n';
  switch (opt.global || '') {
    case 'exports':
      var o = [];
      for (var k in r) o.push(propname(k, 'exports') + ' = ' + stringify(r[k]));
      return new Function(s + o.join(';\n'));
    case 'module.exports':
      return new Function(s + 'module.exports = ' + stringify(r));
    case '':
      return new Function(s + 'return ' + stringify(r));
    default:
      return new Function('G', s + propname(opt.global, 'G') + ' = ' + stringify(r));
  }
};


return MessageFormat;
}());
/* jshint ignore:end */


var createErrorPluralModulePresence = function() {
	return createError( "E_MISSING_PLURAL_MODULE", "Plural module not loaded." );
};




var validateMessageBundle = function( cldr ) {
	validate(
		"E_MISSING_MESSAGE_BUNDLE",
		"Missing message bundle for locale `{locale}`.",
		cldr.attributes.bundle && cldr.get( "globalize-messages/{bundle}" ) !== undefined,
		{
			locale: cldr.locale
		}
	);
};




var validateMessagePresence = function( path, value ) {
	path = path.join( "/" );
	validate( "E_MISSING_MESSAGE", "Missing required message content `{path}`.",
		value !== undefined, { path: path } );
};




var validateMessageType = function( path, value ) {
	path = path.join( "/" );
	validate(
		"E_INVALID_MESSAGE",
		"Invalid message content `{path}`. {expected} expected.",
		typeof value === "string",
		{
			expected: "a string",
			path: path
		}
	);
};




var validateParameterTypeMessageVariables = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || isPlainObject( value ) || Array.isArray( value ),
		"Array or Plain Object"
	);
};




var messageFormatterFn = function( formatter ) {
	return function messageFormatter( variables ) {
		if ( typeof variables === "number" || typeof variables === "string" ) {
			variables = [].slice.call( arguments, 0 );
		}
		validateParameterTypeMessageVariables( variables, "variables" );
		return formatter( variables );
	};
};




var messageFormatterRuntimeBind = function( cldr, messageformatter ) {
	var locale = cldr.locale,
		origToString = messageformatter.toString;

	messageformatter.toString = function() {
		var argNames, argValues, output,
			args = {};

		// Properly adjust SlexAxton/messageformat.js compiled variables with Globalize variables:
		output = origToString.call( messageformatter );

		if ( /number\(/.test( output ) ) {
			args.number = "messageFormat.number";
		}

		if ( /plural\(/.test( output ) ) {
			args.plural = "messageFormat.plural";
		}

		if ( /select\(/.test( output ) ) {
			args.select = "messageFormat.select";
		}

		output.replace( /pluralFuncs(\[([^\]]+)\]|\.([a-zA-Z]+))/, function( match ) {
			args.pluralFuncs = "{" +
				"\"" + locale + "\": Globalize(\"" + locale + "\").pluralGenerator()" +
				"}";
			return match;
		});

		argNames = Object.keys( args ).join( ", " );
		argValues = Object.keys( args ).map(function( key ) {
			return args[ key ];
		}).join( ", " );

		return "(function( " + argNames + " ) {\n" +
			"  return " + output + "\n" +
			"})(" + argValues + ")";
	};

	return messageformatter;
};




var slice = [].slice;

/**
 * .loadMessages( json )
 *
 * @json [JSON]
 *
 * Load translation data.
 */
Globalize.loadMessages = function( json ) {
	var locale,
		customData = {
			"globalize-messages": json,
			"main": {}
		};

	validateParameterPresence( json, "json" );
	validateParameterTypePlainObject( json, "json" );

	// Set available bundles by populating customData main dataset.
	for ( locale in json ) {
		if ( json.hasOwnProperty( locale ) ) {
			customData.main[ locale ] = {};
		}
	}

	Cldr.load( customData );
};

/**
 * .messageFormatter( path )
 *
 * @path [String or Array]
 *
 * Format a message given its path.
 */
Globalize.messageFormatter =
Globalize.prototype.messageFormatter = function( path ) {
	var cldr, formatter, message, pluralGenerator, returnFn,
		args = slice.call( arguments, 0 );

	validateParameterPresence( path, "path" );
	validateParameterType( path, "path", typeof path === "string" || Array.isArray( path ),
		"a String nor an Array" );

	path = alwaysArray( path );
	cldr = this.cldr;

	validateDefaultLocale( cldr );
	validateMessageBundle( cldr );

	message = cldr.get( [ "globalize-messages/{bundle}" ].concat( path ) );
	validateMessagePresence( path, message );

	// If message is an Array, concatenate it.
	if ( Array.isArray( message ) ) {
		message = message.join( " " );
	}
	validateMessageType( path, message );

	// Is plural module present? Yes, use its generator. Nope, use an error generator.
	pluralGenerator = this.plural !== undefined ?
		this.pluralGenerator() :
		createErrorPluralModulePresence;

	formatter = new MessageFormat( cldr.locale, pluralGenerator ).compile( message );

	returnFn = messageFormatterFn( formatter );

	runtimeBind( args, cldr, returnFn,
		[ messageFormatterRuntimeBind( cldr, formatter ), pluralGenerator ] );

	return returnFn;
};

/**
 * .formatMessage( path [, variables] )
 *
 * @path [String or Array]
 *
 * @variables [Number, String, Array or Object]
 *
 * Format a message given its path.
 */
Globalize.formatMessage =
Globalize.prototype.formatMessage = function( path /* , variables */ ) {
	return this.messageFormatter( path ).apply( {}, slice.call( arguments, 1 ) );
};

return Globalize;




}));



/***/ }),

/***/ "./node_modules/snarkdown/dist/snarkdown.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/snarkdown/dist/snarkdown.es.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TAGS = {
	'' : ['<em>','</em>'],
	_ : ['<strong>','</strong>'],
	'\n' : ['<br />'],
	' ' : ['<br />'],
	'-': ['<hr />']
};

/** Outdent a string based on the first indented line's leading whitespace
 *	@private
 */
function outdent(str) {
	return str.replace(RegExp('^'+(str.match(/^(\t| )+/) || '')[0], 'gm'), '');
}

/** Encode special attribute characters to HTML entities in a String.
 *	@private
 */
function encodeAttr(str) {
	return (str+'').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Parse Markdown into an HTML String. */
function parse(md) {
	var tokenizer = /((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^```(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:\!\[([^\]]*?)\]\(([^\)]+?)\))|(\[)|(\](?:\(([^\)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(\-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,3})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*])/gm,
		context = [],
		out = '',
		last = 0,
		links = {},
		chunk, prev, token, inner, t;

	function tag(token) {
		var desc = TAGS[token.replace(/\*/g,'_')[1] || ''],
			end = context[context.length-1]==token;
		if (!desc) { return token; }
		if (!desc[1]) { return desc[0]; }
		context[end?'pop':'push'](token);
		return desc[end|0];
	}

	function flush() {
		var str = '';
		while (context.length) { str += tag(context[context.length-1]); }
		return str;
	}

	md = md.replace(/^\[(.+?)\]:\s*(.+)$/gm, function (s, name, url) {
		links[name.toLowerCase()] = url;
		return '';
	}).replace(/^\n+|\n+$/g, '');

	while ( (token=tokenizer.exec(md)) ) {
		prev = md.substring(last, token.index);
		last = tokenizer.lastIndex;
		chunk = token[0];
		if (prev.match(/[^\\](\\\\)*\\$/)) {
			// escaped
		}
		// Code/Indent blocks:
		else if (token[3] || token[4]) {
			chunk = '<pre class="code '+(token[4]?'poetry':token[2].toLowerCase())+'">'+outdent(encodeAttr(token[3] || token[4]).replace(/^\n+|\n+$/g, ''))+'</pre>';
		}
		// > Quotes, -* lists:
		else if (token[6]) {
			t = token[6];
			if (t.match(/\./)) {
				token[5] = token[5].replace(/^\d+/gm, '');
			}
			inner = parse(outdent(token[5].replace(/^\s*[>*+.-]/gm, '')));
			if (t==='>') { t = 'blockquote'; }
			else {
				t = t.match(/\./) ? 'ol' : 'ul';
				inner = inner.replace(/^(.*)(\n|$)/gm, '<li>$1</li>');
			}
			chunk = '<'+t+'>' + inner + '</'+t+'>';
		}
		// Images:
		else if (token[8]) {
			chunk = "<img src=\"" + (encodeAttr(token[8])) + "\" alt=\"" + (encodeAttr(token[7])) + "\">";
		}
		// Links:
		else if (token[10]) {
			out = out.replace('<a>', ("<a href=\"" + (encodeAttr(token[11] || links[prev.toLowerCase()])) + "\">"));
			chunk = flush() + '</a>';
		}
		else if (token[9]) {
			chunk = '<a>';
		}
		// Headings:
		else if (token[12] || token[14]) {
			t = 'h' + (token[14] ? token[14].length : (token[13][0]==='='?1:2));
			chunk = '<'+t+'>' + parse(token[12] || token[15]) + '</'+t+'>';
		}
		// `code`:
		else if (token[16]) {
			chunk = '<code>'+encodeAttr(token[16])+'</code>';
		}
		// Inline formatting: *em*, **strong** & friends
		else if (token[17] || token[1]) {
			chunk = tag(token[17] || '--');
		}
		out += prev;
		out += chunk;
	}

	return (out + md.substring(last) + flush()).trim();
}

/* harmony default export */ __webpack_exports__["default"] = (parse);
//# sourceMappingURL=snarkdown.es.js.map


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/App.m.css":
/*!***********************!*\
  !*** ./src/App.m.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/App","root":"App-m__root__ecb8b2LaFAR","hidden":"App-m__hidden__ecb8b23PT0U","lightbulbControl":"App-m__lightbulbControl__ecb8b22Nvsp","control":"App-m__control__ecb8b23LOMB","main":"App-m__main__ecb8b22QTbx","description":"App-m__description__ecb8b2l28Fd","hive":"App-m__hive__ecb8b22wMfM","openRoadmap":"App-m__openRoadmap__ecb8b23aKO7","small":"App-m__small__ecb8b2u1q-Z _ui-m__s__ecb8b21rol0 _typo__s__ecb8b22332p","descriptionMeta":"App-m__descriptionMeta__ecb8b23DhmA","footer":"App-m__footer__ecb8b21Ixgt","menuList":"App-m__menuList__ecb8b21-ErE","menuItem":"App-m__menuItem__ecb8b21pBDQ","menuLink":"App-m__menuLink__ecb8b22nlU6","lightbulb":"App-m__lightbulb__ecb8b21je_u","bulbOff":"App-m__bulbOff__ecb8b21gDnN"};

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _dojo_framework_core_middleware_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dojo/framework/core/middleware/theme */ "./node_modules/@dojo/framework/core/middleware/theme.mjs");
/* harmony import */ var _dojo_framework_core_middleware_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dojo/framework/core/middleware/i18n */ "./node_modules/@dojo/framework/core/middleware/i18n.mjs");
/* harmony import */ var _dojo_framework_core_middleware_icache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dojo/framework/core/middleware/icache */ "./node_modules/@dojo/framework/core/middleware/icache.mjs");
/* harmony import */ var _dojo_framework_routing_Route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dojo/framework/routing/Route */ "./node_modules/@dojo/framework/routing/Route.mjs");
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/Header */ "./src/header/Header.tsx");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/Footer */ "./src/footer/Footer.tsx");
/* harmony import */ var _combs_Combs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./combs/Combs */ "./src/combs/Combs.tsx");
/* harmony import */ var _theme_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/material */ "./src/theme/material/index.ts");
/* harmony import */ var _App_m_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App.m.css */ "./src/App.m.css");
/* harmony import */ var _App_m_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_App_m_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nls_main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_nls/main */ "./src/_nls/main.ts");




// import Router from '@dojo/framework/routing/Router';
// import routes from './routes';







var Loadable__ = { type: "registry" };
var __autoRegistryItems = { Roadmap: () => __webpack_require__.e(/*! import() | src/roadmap/Roadmap */ "src/roadmap/Roadmap").then(__webpack_require__.bind(null, /*! ./roadmap/Roadmap */ "./src/roadmap/Roadmap.tsx")), CFP: () => __webpack_require__.e(/*! import() | src/cfp/CFP */ "src/cfp/CFP").then(__webpack_require__.bind(null, /*! ./cfp/CFP */ "./src/cfp/CFP.tsx")), Privacy: () => __webpack_require__.e(/*! import() | src/privacy/Privacy */ "src/privacy/Privacy").then(__webpack_require__.bind(null, /*! ./privacy/Privacy */ "./src/privacy/Privacy.tsx")), Credits: () => __webpack_require__.e(/*! import() | src/credits/Credits */ "src/credits/Credits").then(__webpack_require__.bind(null, /*! ./credits/Credits */ "./src/credits/Credits.tsx")), Register: () => __webpack_require__.e(/*! import() | src/register/Register */ "src/register/Register").then(__webpack_require__.bind(null, /*! ./register/Register */ "./src/register/Register.tsx")) };
const snarkdown = __webpack_require__(/*! snarkdown */ "./node_modules/snarkdown/dist/snarkdown.es.js").default;
const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({ theme: _dojo_framework_core_middleware_theme__WEBPACK_IMPORTED_MODULE_1__["default"], i18n: _dojo_framework_core_middleware_i18n__WEBPACK_IMPORTED_MODULE_2__["default"], icache: _dojo_framework_core_middleware_icache__WEBPACK_IMPORTED_MODULE_3__["default"] });
/* harmony default export */ __webpack_exports__["default"] = (factory(function App({ middleware: { theme, i18n, icache } }) {
    if (!theme.get()) {
        theme.set(_theme_material__WEBPACK_IMPORTED_MODULE_8__["default"], 'dark');
    }
    /*
      console.log(window.location.href)
      const router = new Router(routes);
      if (window.location.href.indexOf('#') > -1) {
        router.setPath(window.location.href.split('#')[1]);
      }
      */
    /*
      /*
      if (!i18n.get()) {
        i18n.set({ locale: navigator.language || 'en-us', rtl: false });
      }
      console.log(bundle, i18n.get())
      */
    const { messages } = i18n.localize(_nls_main__WEBPACK_IMPORTED_MODULE_10__["default"]);
    const desc = (hidden = false) => Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [_App_m_css__WEBPACK_IMPORTED_MODULE_9__["description"], hidden ? _App_m_css__WEBPACK_IMPORTED_MODULE_9__["hidden"] : null] },
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("time", { classes: [_App_m_css__WEBPACK_IMPORTED_MODULE_9__["small"], _App_m_css__WEBPACK_IMPORTED_MODULE_9__["descriptionMeta"]] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", { class: "dt-start" },
                "October 2",
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("sup", null, "nd")),
            " - ",
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", { class: "dt-end" },
                "October 5",
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("sup", null, "th"),
                " 2020")),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h4", { class: "p-summary" }, messages.description),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("br", null),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h4", { classes: _App_m_css__WEBPACK_IMPORTED_MODULE_9__["descriptionMeta"] },
            messages.tPrefix,
            " ",
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("em", null,
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("address", { class: "location" }, messages.tAddress)),
            " ",
            messages.tSuffix),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { class: "serif", innerHTML: snarkdown(messages.list) }));
    const r = (id, content, hasIcons = false, hasHomeLink = true) => () => {
        const lS = localStorage.getItem('apconf') || '0';
        return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [_App_m_css__WEBPACK_IMPORTED_MODULE_9__["root"]] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("input", { type: "checkbox", id: "lightbulb", checked: !!(lS === '1'), onchange: (e) => localStorage.setItem('apconf', e.target.checked ? '1' : '0'), classes: [_App_m_css__WEBPACK_IMPORTED_MODULE_9__["lightbulbControl"]] }),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], { classes: { 'apconf2020/Header': { lightbulb: [_App_m_css__WEBPACK_IMPORTED_MODULE_9__["lightbulb"]] } } }),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("main", { classes: [_App_m_css__WEBPACK_IMPORTED_MODULE_9__["main"]] },
                !hasHomeLink ?
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [_App_m_css__WEBPACK_IMPORTED_MODULE_9__["hive"]] },
                        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_combs_Combs__WEBPACK_IMPORTED_MODULE_7__["default"], { activeId: id, hasIcons: hasIcons, hasHomeLink: hasHomeLink }),
                        content) :
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_combs_Combs__WEBPACK_IMPORTED_MODULE_7__["default"], { activeId: id, hasIcons: hasIcons, hasHomeLink: hasHomeLink }),
                !hasHomeLink ? null : content,
                !hasHomeLink ? null : desc(true)),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
    };
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("virtual", null,
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_dojo_framework_routing_Route__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "home", renderer: r('home', desc(), true, false) }),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_dojo_framework_routing_Route__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "roadmap", renderer: r('roadmap', Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(Loadable__, { __autoRegistryItem: { label: "__autoRegistryItem_Roadmap", registryItem: __autoRegistryItems.Roadmap } }), false, true) }),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_dojo_framework_routing_Route__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "cfp", renderer: r('cfp', Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(Loadable__, { __autoRegistryItem: { label: "__autoRegistryItem_CFP", registryItem: __autoRegistryItems.CFP } })) }),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_dojo_framework_routing_Route__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "privacy", renderer: r('privacy', Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(Loadable__, { __autoRegistryItem: { label: "__autoRegistryItem_Privacy", registryItem: __autoRegistryItems.Privacy } })) }),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_dojo_framework_routing_Route__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "credits", renderer: r('credits', Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(Loadable__, { __autoRegistryItem: { label: "__autoRegistryItem_Credits", registryItem: __autoRegistryItems.Credits } })) }),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_dojo_framework_routing_Route__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "register", renderer: r('register', Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(Loadable__, { __autoRegistryItem: { label: "__autoRegistryItem_Register", registryItem: __autoRegistryItems.Register } })) }),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_dojo_framework_routing_Route__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "registerSent", renderer: r('registerSent', Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(Loadable__, { state: "sent", __autoRegistryItem: { label: "__autoRegistryItem_Register", registryItem: __autoRegistryItems.Register } })) }),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_dojo_framework_routing_Route__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "registerConfirmed", renderer: r('registerConfirmed', Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(Loadable__, { state: "confirmed", __autoRegistryItem: { label: "__autoRegistryItem_Register", registryItem: __autoRegistryItems.Register } })) }),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_dojo_framework_routing_Route__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "registerError", renderer: r('registerError', Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(Loadable__, { state: "error", __autoRegistryItem: { label: "__autoRegistryItem_Register", registryItem: __autoRegistryItems.Register } })) })));
}));


/***/ }),

/***/ "./src/AppContent.m.css":
/*!******************************!*\
  !*** ./src/AppContent.m.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/AppContent","root":"AppContent-m__root__ecb8b21on36","fullColumn":"AppContent-m__fullColumn__ecb8b2pwDw0","leftColumn":"AppContent-m__leftColumn__ecb8b21FfR6","asideColumn":"AppContent-m__asideColumn__ecb8b211cQ3","asideStart":"AppContent-m__asideStart__ecb8b2GQIkZ","autoColumn":"AppContent-m__autoColumn__ecb8b21dDbp","autoColumnWide":"AppContent-m__autoColumnWide__ecb8b21rP2a","headline":"AppContent-m__headline__ecb8b22wseI _ui-m__ui__ecb8b22kN0R","orange":"AppContent-m__orange__ecb8b22cule","amber":"AppContent-m__amber__ecb8b23Exff","blue":"AppContent-m__blue__ecb8b22Dz-c","purple":"AppContent-m__purple__ecb8b2pe7LM","pink":"AppContent-m__pink__ecb8b21HUDz","green":"AppContent-m__green__ecb8b29bXbT","cyan":"AppContent-m__cyan__ecb8b2aweRI","red":"AppContent-m__red__ecb8b23fOhb","alyssa":"AppContent-m__alyssa__ecb8b23OK27","ben":"AppContent-m__ben__ecb8b21Qm4T","robin":"AppContent-m__robin__ecb8b22demV"};

/***/ }),

/***/ "./src/_nls/main.ts":
/*!**************************!*\
  !*** ./src/_nls/main.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    locales: {
        de: () => __webpack_require__.e(/*! import() | src/_nls/de/main */ "src/_nls/de/main").then(__webpack_require__.bind(null, /*! ./de/main */ "./src/_nls/de/main.ts")),
        fr: () => __webpack_require__.e(/*! import() | src/_nls/fr/main */ "src/_nls/fr/main").then(__webpack_require__.bind(null, /*! ./fr/main */ "./src/_nls/fr/main.ts"))
    },
    messages: {
        headline: 'Conference 2020',
        description: `
	A conference about the present and future of ActivityPub, the world’s leading federated social web standard.`,
        list: `
- pre-recorded talks with live question and answer sessions
- birds of a feather sessions
- lightning round talks
- a hackathon that follows the conference.`,
        tPrefix: 'The 2020',
        tAddress: 'virtual',
        tSuffix: 'conference will include'
    }
});


/***/ }),

/***/ "./src/combs/Combs.m.css":
/*!*******************************!*\
  !*** ./src/combs/Combs.m.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/Combs","combs":"Combs-m__combs__ecb8b21t093","hasHomeLink":"Combs-m__hasHomeLink__ecb8b2Nng_Y","offGrid":"Combs-m__offGrid__ecb8b22_xgV","home":"Combs-m__home__ecb8b21NJrm","scrollControl":"Combs-m__scrollControl__ecb8b22I87V","comb":"Combs-m__comb__ecb8b22kSIr _ui-m__m__ecb8b2jIhQa _typo__m__ecb8b23DnWG","active":"Combs-m__active__ecb8b21A9fj","disabled":"Combs-m__disabled__ecb8b23G89e","open":"Combs-m__open__ecb8b2zdkcL","hasIcons":"Combs-m__hasIcons__ecb8b22BdEj","alyssa":"Combs-m__alyssa__ecb8b23Lam7","ben":"Combs-m__ben__ecb8b2aGsu_","robin":"Combs-m__robin__ecb8b21_fTP"};

/***/ }),

/***/ "./src/combs/Combs.tsx":
/*!*****************************!*\
  !*** ./src/combs/Combs.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _middleware_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/theme */ "./src/middleware/theme.tsx");
/* harmony import */ var _link_ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link/ActiveLink */ "./src/link/ActiveLink.tsx");
/* harmony import */ var _AppContent_m_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AppContent.m.css */ "./src/AppContent.m.css");
/* harmony import */ var _AppContent_m_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AppContent_m_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Combs_m_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Combs.m.css */ "./src/combs/Combs.m.css");
/* harmony import */ var _Combs_m_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Combs_m_css__WEBPACK_IMPORTED_MODULE_4__);
// import { RenderResult } from '@dojo/framework/core/interfaces';





const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({ theme: _middleware_theme__WEBPACK_IMPORTED_MODULE_1__["default"] }).properties();
const menuItems = [
    { label: (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("virtual", null,
            "Call for",
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("br", null),
            "Proposals")), color: 'orange', n: 'cfp' },
    { label: 'Register', color: 'blue', n: 'register' },
    { label: (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("virtual", null,
            "Birds of a",
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("br", null),
            "feather")), color: 'red', n: 'bof', disabled: true },
    { label: 'Live', color: 'pink', n: 'live', disabled: true },
    { label: 'Hackathon', color: 'green', n: 'hackathon', disabled: true },
    { label: 'Talks', color: 'amber', n: 'talks', disabled: true },
];
/* harmony default export */ __webpack_exports__["default"] = (factory(function Combs({ properties, middleware: { theme } }) {
    const themedCss = theme.classes(_Combs_m_css__WEBPACK_IMPORTED_MODULE_4__);
    const { hasIcons = false, hasHomeLink = true, activeId = '' } = properties();
    const CL = [themedCss.comb, themedCss.offGrid];
    const homeClasses = [themedCss.home, ...CL, themedCss.alyssa, !hasHomeLink ? _AppContent_m_css__WEBPACK_IMPORTED_MODULE_3__["alyssa"] : null];
    const activeColor = menuItems.reduce((p, item) => activeId === item.n ? item.color : p, 'gray');
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("nav", { id: "nav", role: "navigation", "aria-label": "Main Menu", classes: [
            themedCss.combs,
            hasIcons ? themedCss.hasIcons : null,
            hasHomeLink ? themedCss.hasHomeLink : null,
            _AppContent_m_css__WEBPACK_IMPORTED_MODULE_3__[activeColor]
        ] },
        menuItems.map((item) => {
            return Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_link_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], { key: item.n, matchParams: {}, params: {}, activeClasses: [], classes: [
                    activeId === item.n ? themedCss.active : null,
                    themedCss.comb,
                    _AppContent_m_css__WEBPACK_IMPORTED_MODULE_3__[item.color],
                    item.disabled ? themedCss.disabled : null
                ], to: item.n }, item.label);
        }),
        (hasHomeLink ?
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_link_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], { key: 'home', matchParams: {}, params: {}, activeClasses: [], classes: homeClasses, to: 'home' }) : Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: homeClasses })),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: CL }),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [...CL, themedCss.ben, !hasHomeLink ? _AppContent_m_css__WEBPACK_IMPORTED_MODULE_3__["ben"] : null] }),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [...CL, themedCss.robin, !hasHomeLink ? _AppContent_m_css__WEBPACK_IMPORTED_MODULE_3__["robin"] : null] }),
        !hasHomeLink ? null : Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("a", { href: activeId ? `${activeId}#nav` : '#nav', classes: [themedCss.scrollControl], onclick: (evt) => { evt.preventDefault(); window.scrollTo(0, 0); } })));
}));


/***/ }),

/***/ "./src/common/util.ts":
/*!****************************!*\
  !*** ./src/common/util.ts ***!
  \****************************/
/*! exports provided: Keys, formatAriaProperties, PointerDevice, Size, Variant, Space, Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAriaProperties", function() { return formatAriaProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerDevice", function() { return PointerDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return Size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variant", function() { return Variant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Space", function() { return Space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
var Keys;
(function (Keys) {
    Keys[Keys["Down"] = 40] = "Down";
    Keys[Keys["End"] = 35] = "End";
    Keys[Keys["Enter"] = 13] = "Enter";
    Keys[Keys["Escape"] = 27] = "Escape";
    Keys[Keys["Home"] = 36] = "Home";
    Keys[Keys["Left"] = 37] = "Left";
    Keys[Keys["PageDown"] = 34] = "PageDown";
    Keys[Keys["PageUp"] = 33] = "PageUp";
    Keys[Keys["Right"] = 39] = "Right";
    Keys[Keys["Space"] = 32] = "Space";
    Keys[Keys["Tab"] = 9] = "Tab";
    Keys[Keys["Up"] = 38] = "Up";
})(Keys || (Keys = {}));
function formatAriaProperties(aria) {
    const formattedAria = Object.keys(aria).reduce((a, key) => {
        a[`aria-${key.toLowerCase()}`] = aria[key];
        return a;
    }, {});
    return formattedAria;
}
var PointerDevice;
(function (PointerDevice) {
    PointerDevice["mouse"] = "mouse";
    PointerDevice["pen"] = "pen";
    PointerDevice["touch"] = "touch";
})(PointerDevice || (PointerDevice = {}));
var Size;
(function (Size) {
    Size["xs"] = "xs";
    Size["s"] = "s";
    Size["m"] = "m";
    Size["l"] = "l";
    Size["xl"] = "xl";
    Size["xxl"] = "xxl";
})(Size || (Size = {}));
var Variant;
(function (Variant) {
    Variant["flat"] = "flat";
    Variant["filled"] = "filled";
    Variant["outlined"] = "outlined";
    Variant["raised"] = "raised";
    Variant["shaped"] = "shaped";
})(Variant || (Variant = {}));
var Space;
(function (Space) {
    Space["left"] = "left";
    Space["right"] = "right";
})(Space || (Space = {}));
var Material;
(function (Material) {
    Material["primary"] = "primary";
    Material["secondary"] = "secondary";
    Material["settings"] = "settings";
    Material["info"] = "info";
    Material["warning"] = "warning";
    Material["error"] = "error";
    Material["success"] = "success";
    Material["neutral"] = "neutral";
    Material["red"] = "red";
    Material["deep_orange"] = "deep_orange";
    Material["orange"] = "orange";
    Material["amber"] = "amber";
    Material["yellow"] = "yellow";
    Material["lime"] = "lime";
    Material["light_green"] = "light_green";
    Material["green"] = "green";
    Material["teal"] = "teal";
    Material["cyan"] = "cyan";
    Material["light_blue"] = "light_blue";
    Material["blue"] = "blue";
    Material["indigo"] = "indigo";
    Material["deep_purple"] = "deep_purple";
    Material["purple"] = "purple";
    Material["pink"] = "pink";
    Material["brown"] = "brown";
    Material["grey"] = "grey";
    Material["blue_grey"] = "blue_grey";
})(Material || (Material = {}));


/***/ }),

/***/ "./src/footer/Footer.tsx":
/*!*******************************!*\
  !*** ./src/footer/Footer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _link_ActiveLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../link/ActiveLink */ "./src/link/ActiveLink.tsx");
/* harmony import */ var _App_m_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App.m.css */ "./src/App.m.css");
/* harmony import */ var _App_m_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_m_css__WEBPACK_IMPORTED_MODULE_2__);



const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({});
/* harmony default export */ __webpack_exports__["default"] = (factory(function Footer({}) {
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("footer", { classes: [_App_m_css__WEBPACK_IMPORTED_MODULE_2__["footer"]] },
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("small", { classes: [_App_m_css__WEBPACK_IMPORTED_MODULE_2__["menuItem"]] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_link_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], { key: 'credits', matchParams: {}, params: {}, activeClasses: [], to: 'credits' }, "Credits & License")),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("small", { classes: [_App_m_css__WEBPACK_IMPORTED_MODULE_2__["menuItem"]] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_link_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], { key: 'privacy', matchParams: {}, params: {}, activeClasses: [], to: 'privacy' }, "Privacy"))));
}));


/***/ }),

/***/ "./src/header/Header.m.css":
/*!*********************************!*\
  !*** ./src/header/Header.m.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/Header","root":"Header-m__root__ecb8b26_vzk _ui-m__m__ecb8b2jIhQa _typo__m__ecb8b23DnWG","logo":"Header-m__logo__ecb8b23V08H","lightbulbControl":"Header-m__lightbulbControl__ecb8b22Vc0K","lightbulb":"Header-m__lightbulb__ecb8b2LPwAU","bulbOff":"Header-m__bulbOff__ecb8b22jz4P","menu":"Header-m__menu__ecb8b2Gd00c","menuList":"Header-m__menuList__ecb8b21W_OD","menuItem":"Header-m__menuItem__ecb8b23t5eY","menuLink":"Header-m__menuLink__ecb8b2Vdkx0","left":"Header-m__left__ecb8b22Cx0n","link":"Header-m__link__ecb8b21Sc0k","homeLink":"Header-m__homeLink__ecb8b23FXbe","selected":"Header-m__selected__ecb8b2QyS1t","leftContainer":"Header-m__leftContainer__ecb8b21qeBa","centerContainer":"Header-m__centerContainer__ecb8b2sN2Gy","srOnly":"Header-m__srOnly__ecb8b232xRC","rightContainer":"Header-m__rightContainer__ecb8b2nmDd4","mainMenuToggle":"Header-m__mainMenuToggle__ecb8b23iOo4","toggleButton":"Header-m__toggleButton__ecb8b215ZDo","toggleBar":"Header-m__toggleBar__ecb8b22Om0l","playgroundMenuItem":"Header-m__playgroundMenuItem__ecb8b23EN9e","iconLink":"Header-m__iconLink__ecb8b23ZmVN"};

/***/ }),

/***/ "./src/header/Header.tsx":
/*!*******************************!*\
  !*** ./src/header/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _dojo_framework_core_middleware_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dojo/framework/core/middleware/theme */ "./node_modules/@dojo/framework/core/middleware/theme.mjs");
/* harmony import */ var _dojo_framework_core_middleware_icache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dojo/framework/core/middleware/icache */ "./node_modules/@dojo/framework/core/middleware/icache.mjs");
/* harmony import */ var _link_ActiveLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../link/ActiveLink */ "./src/link/ActiveLink.tsx");
/* harmony import */ var _Header_m_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.m.css */ "./src/header/Header.m.css");
/* harmony import */ var _Header_m_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_m_css__WEBPACK_IMPORTED_MODULE_4__);

//import i18n from '@dojo/framework/core/middleware/i18n';




const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({ theme: _dojo_framework_core_middleware_theme__WEBPACK_IMPORTED_MODULE_1__["default"], icache: _dojo_framework_core_middleware_icache__WEBPACK_IMPORTED_MODULE_2__["default"] });
/* harmony default export */ __webpack_exports__["default"] = (factory(function Header({ middleware: { theme, icache } }) {
    const themedCss = theme.classes(_Header_m_css__WEBPACK_IMPORTED_MODULE_4__);
    const open = icache.get('open') || false;
    return (Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("header", { key: "root", classes: themedCss.root },
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("input", { id: "mainMenuToggle", onclick: () => {
                icache.set('open', true);
            }, classes: themedCss.mainMenuToggle, type: "checkbox", checked: open }),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: [themedCss.left] },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", { classes: themedCss.leftContainer },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("label", { for: "mainMenuToggle", key: "toggleButton", classes: themedCss.toggleButton },
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", { classes: themedCss.srOnly }, "Menu"),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("div", { classes: themedCss.toggleBar }))),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("a", { href: "/", classes: [themedCss.centerContainer] },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("h2", { classes: [themedCss.logo], alt: "ActivityPub main logo" },
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("b", null, "Activity"),
                    "Pub ",
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("br", null),
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("b", null,
                        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("i", null, "Conference"),
                        " ",
                        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("time", null, "2020")))),
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("span", { classes: [themedCss.rightContainer] })),
        Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("nav", { role: "navigation", classes: [themedCss.menu], "aria-label": "Meta Menu" },
            Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("ul", { classes: themedCss.menuList },
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("li", { classes: [themedCss.menuItem] },
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_link_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], { key: 'roadmap', matchParams: {}, params: {}, activeClasses: [], onClick: () => { icache.set('openRoadmap', true); }, to: 'roadmap' }, "Roadmap")),
                Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("li", { classes: [themedCss.menuItem] },
                    Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])("label", { classes: themedCss.lightbulb, for: "lightbulb" }))))));
}));


/***/ }),

/***/ "./src/link/ActiveLink.tsx":
/*!*********************************!*\
  !*** ./src/link/ActiveLink.tsx ***!
  \*********************************/
/*! exports provided: ActiveLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveLink", function() { return ActiveLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _dojo_framework_core_middleware_injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dojo/framework/core/middleware/injector */ "./node_modules/@dojo/framework/core/middleware/injector.mjs");
/* harmony import */ var _dojo_framework_core_middleware_icache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dojo/framework/core/middleware/icache */ "./node_modules/@dojo/framework/core/middleware/icache.mjs");
/* harmony import */ var _dojo_framework_routing_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dojo/framework/routing/Link */ "./node_modules/@dojo/framework/routing/Link.mjs");





function paramsEqual(linkParams = {}, contextParams) {
    return Object.keys(linkParams).every((key) => linkParams[key] === contextParams[key]);
}
const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_1__["create"])({ injector: _dojo_framework_core_middleware_injector__WEBPACK_IMPORTED_MODULE_2__["default"], diffProperty: _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_1__["diffProperty"], icache: _dojo_framework_core_middleware_icache__WEBPACK_IMPORTED_MODULE_3__["default"], invalidator: _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_1__["invalidator"] }).properties();
const ActiveLink = factory(function ActiveLink({ middleware: { diffProperty, injector, icache, invalidator }, properties, children }) {
    const { to, routerKey = 'router', params, matchParams = params } = properties();
    let _a = properties(), { activeClasses, classes = [] } = _a, props = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["activeClasses", "classes"]);
    diffProperty('to', (current, next) => {
        if (current.to !== next.to) {
            const router = injector.get(routerKey);
            const currentHandle = icache.get('handle');
            if (currentHandle) {
                currentHandle.destroy();
            }
            if (router) {
                const handle = router.on('outlet', ({ outlet }) => {
                    if (outlet.id === to) {
                        invalidator();
                    }
                });
                icache.set('handle', handle);
            }
            invalidator();
        }
    });
    const router = injector.get(routerKey);
    if (router) {
        if (!icache.get('handle')) {
            const handle = router.on('outlet', ({ outlet }) => {
                if (outlet.id === to) {
                    invalidator();
                }
            });
            icache.set('handle', handle);
        }
        const context = router.getRoute(to);
        const isActive = context && paramsEqual(matchParams, context.params);
        classes = Array.isArray(classes) ? classes : [classes];
        if (isActive) {
            classes = [...classes, ...activeClasses];
        }
        props = Object.assign({}, props, { classes });
    }
    return Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_1__["w"])(_dojo_framework_routing_Link__WEBPACK_IMPORTED_MODULE_4__["default"], props, children());
});
/* harmony default export */ __webpack_exports__["default"] = (ActiveLink);


/***/ }),

/***/ "./src/main.tsx":
/*!**********************!*\
  !*** ./src/main.tsx ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _dojo_framework_core_Registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dojo/framework/core/Registry */ "./node_modules/@dojo/framework/core/Registry.mjs");
/* harmony import */ var _dojo_framework_routing_RouterInjector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dojo/framework/routing/RouterInjector */ "./node_modules/@dojo/framework/routing/RouterInjector.mjs");
/* harmony import */ var _dojo_framework_core_mixins_I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dojo/framework/core/mixins/I18n */ "./node_modules/@dojo/framework/core/mixins/I18n.mjs");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./src/routes.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.tsx");







const registry = new _dojo_framework_core_Registry__WEBPACK_IMPORTED_MODULE_1__["default"]();
Object(_dojo_framework_core_mixins_I18n__WEBPACK_IMPORTED_MODULE_3__["registerI18nInjector"])({ locale: 'en', rtl: false }, registry);
Object(_dojo_framework_routing_RouterInjector__WEBPACK_IMPORTED_MODULE_2__["registerRouterInjector"])(_routes__WEBPACK_IMPORTED_MODULE_4__["default"], registry, {
    setDocumentTitle: ({ title, params: {} }) => (title ? title : 'ActivityPub Conference 2020')
});
const r = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["default"])(() => Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["tsx"])(_App__WEBPACK_IMPORTED_MODULE_5__["default"], null));
const domNode = document.getElementById('app');
r.mount({ registry, domNode });


/***/ }),

/***/ "./src/middleware/theme.tsx":
/*!**********************************!*\
  !*** ./src/middleware/theme.tsx ***!
  \**********************************/
/*! exports provided: formatAriaProperties, Keys, THEME_KEY, theme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_KEY", function() { return THEME_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dojo/framework/core/vdom */ "./node_modules/@dojo/framework/core/vdom.mjs");
/* harmony import */ var _dojo_framework_core_middleware_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dojo/framework/core/middleware/theme */ "./node_modules/@dojo/framework/core/middleware/theme.mjs");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util */ "./src/common/util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatAriaProperties", function() { return _common_util__WEBPACK_IMPORTED_MODULE_2__["formatAriaProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return _common_util__WEBPACK_IMPORTED_MODULE_2__["Keys"]; });




const THEME_KEY = ' _key';
function uppercaseFirstChar(value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
function lowercaseFirstChar(value) {
    return `${value.charAt(0).toLowerCase()}${value.slice(1)}`;
}
function isThemeWithVariant(theme) {
    return theme && theme.hasOwnProperty('variant');
}
const factory = Object(_dojo_framework_core_vdom__WEBPACK_IMPORTED_MODULE_0__["create"])({ coreTheme: _dojo_framework_core_middleware_theme__WEBPACK_IMPORTED_MODULE_1__["default"] }).properties();
const theme = factory(function ({ middleware: { coreTheme }, properties }) {
    return Object.assign({ isJS: () => !document.documentElement.classList.contains('no-js'), sized: (uiCss, _default = 'm') => {
            const { size = _default } = properties();
            return uiCss.hasOwnProperty(size) ? uiCss[size] : null;
        }, spaced: (uiCss, _default = true) => {
            const { spaced = _default } = properties();
            const spaceClass = (spaced === false ? null : (spaced === 'left' ? 'spaceLeft' :
                (spaced === 'right' ? 'spaceRight' : 'spaceEqual')));
            return spaceClass && uiCss.hasOwnProperty(spaceClass) ? uiCss[spaceClass] : null;
        }, colored: (colorCss, _default = 'primary') => {
            const { color = _default } = properties();
            return colorCss.hasOwnProperty(color) ? colorCss[color] : null;
        }, animated: (themeCss, _default = true) => {
            const { animated = _default } = properties();
            const animationClass = animated === true ? 'animated' : (!Array.isArray(animated) ?
                null : ((animated.indexOf('mouse') > -1 && window.matchMedia("(hover: hover) and (pointer: fine)").matches) ||
                (animated.indexOf('touch') > -1 && window.matchMedia("(hover: none) and (pointer: coarse)").matches) ?
                'animated' : null));
            return animationClass && themeCss.hasOwnProperty(animationClass) ? themeCss[animationClass] : null;
        }, compose: (baseCss, css, prefix) => {
            const theme = properties().theme || coreTheme.get();
            const baseKey = baseCss[THEME_KEY];
            const variantKey = css[THEME_KEY];
            const virtualCss = Object.keys(baseCss).reduce((virtualCss, key) => {
                if (key === THEME_KEY) {
                    return virtualCss;
                }
                if (prefix && !virtualCss[`${prefix}${uppercaseFirstChar(key)}`]) {
                    virtualCss[`${prefix}${uppercaseFirstChar(key)}`] = ' ';
                }
                if (!css[key]) {
                    virtualCss[key] = ' ';
                }
                return virtualCss;
            }, { [THEME_KEY]: variantKey });
            const virtualTheme = coreTheme.classes(virtualCss);
            const variantTheme = coreTheme.classes(css);
            let baseTheme = coreTheme.classes(baseCss);
            if (prefix) {
                const prefixedCss = Object.keys(Object.assign({}, virtualTheme, variantTheme)).reduce((prefixCss, key) => {
                    if (key.indexOf(prefix) === 0 && key !== prefix) {
                        const classKey = lowercaseFirstChar(key.replace(prefix, ''));
                        if (!variantTheme[key] &&
                            virtualTheme[key] &&
                            virtualTheme[key].trim()) {
                            prefixCss[classKey] = `${baseTheme[classKey]} ${virtualTheme[key].trim()}`;
                        }
                        if (variantTheme[key]) {
                            prefixCss[classKey] = variantTheme[key];
                        }
                    }
                    return prefixCss;
                }, {});
                baseTheme = Object.assign({}, baseTheme, prefixedCss);
                if (isThemeWithVariant(theme)) {
                    return {
                        theme: Object.assign({}, theme.theme, { [baseKey]: baseTheme }),
                        variant: theme.variant
                    };
                }
                return Object.assign({}, theme, { [baseKey]: baseTheme });
            }
            const constructedTheme = Object.keys(baseTheme).reduce((theme, key) => {
                if (key === THEME_KEY) {
                    return theme;
                }
                const variantComposesClass = variantTheme[key] && variantTheme[key].trim();
                if (variantTheme[key]) {
                    theme[key] = variantComposesClass;
                }
                else if (virtualTheme[key] && virtualTheme[key].trim()) {
                    theme[key] = `${theme[key]} ${virtualTheme[key].trim()}`;
                }
                return theme;
            }, Object.assign({}, baseTheme));
            if (isThemeWithVariant(theme)) {
                return {
                    theme: Object.assign({}, theme.theme, { [baseKey]: constructedTheme }),
                    variant: theme.variant
                };
            }
            return Object.assign({}, theme, { [baseKey]: constructedTheme });
        } }, coreTheme);
});
/* harmony default export */ __webpack_exports__["default"] = (theme);


/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    { path: 'home', outlet: 'home', id: 'home', defaultRoute: true },
    { path: 'roadmap', outlet: 'roadmap', id: 'roadmap', title: 'ActivityPub Conf 2020 > Roadmap' },
    { path: 'cfp', outlet: 'cfp', id: 'cfp', title: 'ActivityPub Conf 2020 > CFP' },
    { path: 'register', outlet: 'register', id: 'register', title: 'ActivityPub Conf 2020 > Register' },
    { path: 'register/sent', outlet: 'register', id: 'registerSent', title: 'ActivityPub Conf 2020 > Register' },
    { path: 'register/confirmed', outlet: 'register', id: 'registerConfirmed', title: 'ActivityPub Conf 2020 > Register' },
    { path: 'register/error/{message}', outlet: 'register', id: 'registerError', title: 'ActivityPub Conf 2020 > Register' },
    { path: 'bof', outlet: 'bof', id: 'bof', title: 'ActivityPub Conf 2020 > BOF' },
    { path: 'live', outlet: 'live', id: 'live', title: 'ActivityPub Conf 2020 > Live' },
    { path: 'hackathon', outlet: 'hackathon', id: 'hackathon', title: 'ActivityPub Conf 2020 > Hackathon' },
    { path: 'talks', outlet: 'talks', id: 'talks', title: 'ActivityPub Conf 2020 > Talks' },
    { path: 'privacy', outlet: 'privacy', id: 'privacy', title: 'ActivityPub Conf 2020 > Privacy' },
    { path: 'credits', outlet: 'credits', id: 'credits', title: 'ActivityPub Conf 2020 > CC0' }
]);


/***/ }),

/***/ "./src/theme/material/accordion.m.css":
/*!********************************************!*\
  !*** ./src/theme/material/accordion.m.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/accordion","root":"accordion-m__root__ecb8b21wVz3","paneRoot":"accordion-m__paneRoot__ecb8b23KHOq title-pane-m__root__ecb8b21r02A","paneOpen":"accordion-m__paneOpen__ecb8b22U4m5 title-pane-m__open__ecb8b22nPrX"};

/***/ }),

/***/ "./src/theme/material/avatar.m.css":
/*!*****************************************!*\
  !*** ./src/theme/material/avatar.m.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/avatar","root":"avatar-m__root__ecb8b22mW0Q","circle":"avatar-m__circle__ecb8b23E_eX","square":"avatar-m__square__ecb8b21x2cM","rounded":"avatar-m__rounded__ecb8b21qNt1"};

/***/ }),

/***/ "./src/theme/material/button.m.css":
/*!*****************************************!*\
  !*** ./src/theme/material/button.m.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/button","root":"button-m__root__ecb8b22V7ge _ui-m__ui__ecb8b22kN0R","responsive":"button-m__responsive__ecb8b2hcW6u","disabled":"button-m__disabled__ecb8b23zmsy _ui-m__disabled__ecb8b22OTHF","flat":"button-m__flat__ecb8b23A4S- _ui-m__flat__ecb8b2IbkG-","filled":"button-m__filled__ecb8b219P57 _ui-m__filled__ecb8b21z_MC","raised":"button-m__raised__ecb8b223KBk _ui-m__raised__ecb8b22JCfN","outlined":"button-m__outlined__ecb8b21tBxQ _ui-m__outlined__ecb8b213fa8","shaped":"button-m__shaped__ecb8b21jMut _ui-m__shaped__ecb8b22ua-o","animated":"button-m__animated__ecb8b23z47I","pulse":"button-m__pulse__ecb8b23NK5g","pressed":"button-m__pressed__ecb8b235tJC"};

/***/ }),

/***/ "./src/theme/material/calendar.m.css":
/*!*******************************************!*\
  !*** ./src/theme/material/calendar.m.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/calendar","root":"calendar-m__root__ecb8b2rR6AW","monthTrigger":"calendar-m__monthTrigger__ecb8b23z1-3","yearTrigger":"calendar-m__yearTrigger__ecb8b2qeVv4","previous":"calendar-m__previous__ecb8b2HjRbt","next":"calendar-m__next__ecb8b2wfp6G","datePicker":"calendar-m__datePicker__ecb8b2Kh6hf","topMatter":"calendar-m__topMatter__ecb8b22n9xw","weekday":"calendar-m__weekday__ecb8b21lJlA","date":"calendar-m__date__ecb8b2sE470","monthFields":"calendar-m__monthFields__ecb8b22B59j","yearFields":"calendar-m__yearFields__ecb8b23Shgl","inactiveDate":"calendar-m__inactiveDate__ecb8b22xBkV","abbr":"calendar-m__abbr__ecb8b23zumo","selectedDate":"calendar-m__selectedDate__ecb8b229e-j","todayDate":"calendar-m__todayDate__ecb8b23e6Cl","controls":"calendar-m__controls__ecb8b22CTVc","yearRadio":"calendar-m__yearRadio__ecb8b22WLXJ","monthRadio":"calendar-m__monthRadio__ecb8b2FYQbl","yearRadioChecked":"calendar-m__yearRadioChecked__ecb8b28H9Ub","monthRadioChecked":"calendar-m__monthRadioChecked__ecb8b23wcgr","calendarPagingIcon":"calendar-m__calendarPagingIcon__ecb8b21GFdr icon-m__icon__ecb8b23ceJx","yearRadioLabel":"calendar-m__yearRadioLabel__ecb8b22BAzK","monthRadioLabel":"calendar-m__monthRadioLabel__ecb8b23Qhfg","yearRadioInput":"calendar-m__yearRadioInput__ecb8b22PCor","monthRadioInput":"calendar-m__monthRadioInput__ecb8b23jiVX"};

/***/ }),

/***/ "./src/theme/material/checkbox-group.m.css":
/*!*************************************************!*\
  !*** ./src/theme/material/checkbox-group.m.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/checkbox-group","root":"checkbox-group-m__root__ecb8b22Mtpz","legend":"checkbox-group-m__legend__ecb8b22F-fF"};

/***/ }),

/***/ "./src/theme/material/checkbox.m.css":
/*!*******************************************!*\
  !*** ./src/theme/material/checkbox.m.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/checkbox","root":"checkbox-m__root__ecb8b21eWpp _ui-m__ui__ecb8b22kN0R _ui-m__ui-transition__ecb8b2zd6te","box":"checkbox-m__box__ecb8b22KYOe _ui-m__box__ecb8b22G_3_","input":"checkbox-m__input__ecb8b217f8O _ui-m__input__ecb8b23_jeS","disabled":"checkbox-m__disabled__ecb8b2qkqDD _ui-m__disabled__ecb8b22OTHF","flat":"checkbox-m__flat__ecb8b2ZgmTG _ui-m__flat__ecb8b2IbkG-","filled":"checkbox-m__filled__ecb8b23V8nf _ui-m__filled__ecb8b21z_MC","raised":"checkbox-m__raised__ecb8b21a1WR _ui-m__raised__ecb8b22JCfN","outlined":"checkbox-m__outlined__ecb8b21PJVM _ui-m__outlined__ecb8b213fa8","shaped":"checkbox-m__shaped__ecb8b2217R_ _ui-m__shaped__ecb8b22ua-o","checkmark":"checkbox-m__checkmark__ecb8b23E09R","dot":"checkbox-m__dot__ecb8b22RY_j","animated":"checkbox-m__animated__ecb8b21M4JE","checked":"checkbox-m__checked__ecb8b22HO3W","ripple":"checkbox-m__ripple__ecb8b21QQ71","rippleOff":"checkbox-m__rippleOff__ecb8b210MwH","required":"checkbox-m__required__ecb8b22rCjj","invalid":"checkbox-m__invalid__ecb8b23MQie","inner":"checkbox-m__inner__ecb8b226ayS","valid":"checkbox-m__valid__ecb8b23qIOb","focused":"checkbox-m__focused__ecb8b23_sQ3","readonly":"checkbox-m__readonly__ecb8b21jZ__"};

/***/ }),

/***/ "./src/theme/material/chip.m.css":
/*!***************************************!*\
  !*** ./src/theme/material/chip.m.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/chip","root":"chip-m__root__ecb8b21lrFe","iconWrapper":"chip-m__iconWrapper__ecb8b23D2Wr","closeIconWrapper":"chip-m__closeIconWrapper__ecb8b23ddAt","clickable":"chip-m__clickable__ecb8b21ToMp","label":"chip-m__label__ecb8b2HFfL3","disabled":"chip-m__disabled__ecb8b2FwoPf","icon":"chip-m__icon__ecb8b21Ywfd"};

/***/ }),

/***/ "./src/theme/material/date-input.m.css":
/*!*********************************************!*\
  !*** ./src/theme/material/date-input.m.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/date-input","toggleCalendarButton":"date-input-m__toggleCalendarButton__ecb8b22lk3t undefined","popup":"date-input-m__popup__ecb8b21Fnww"};

/***/ }),

/***/ "./src/theme/material/grid-body.m.css":
/*!********************************************!*\
  !*** ./src/theme/material/grid-body.m.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/grid-body","root":"grid-body-m__root__ecb8b225Suj"};

/***/ }),

/***/ "./src/theme/material/grid-cell.m.css":
/*!********************************************!*\
  !*** ./src/theme/material/grid-cell.m.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/grid-cell","root":"grid-cell-m__root__ecb8b2ESfel"};

/***/ }),

/***/ "./src/theme/material/grid-footer.m.css":
/*!**********************************************!*\
  !*** ./src/theme/material/grid-footer.m.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/grid-footer","root":"grid-footer-m__root__ecb8b21Me__"};

/***/ }),

/***/ "./src/theme/material/grid-header.m.css":
/*!**********************************************!*\
  !*** ./src/theme/material/grid-header.m.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/grid-header","root":"grid-header-m__root__ecb8b22jBVS","cell":"grid-header-m__cell__ecb8b22jyCr","sort":"grid-header-m__sort__ecb8b21uGU5 undefined","sortable":"grid-header-m__sortable__ecb8b218Mle","sorted":"grid-header-m__sorted__ecb8b2MjcFT","filter":"grid-header-m__filter__ecb8b214ZQD","filterNoLabel":"grid-header-m__filterNoLabel__ecb8b23ah3P","filterInput":"grid-header-m__filterInput__ecb8b22oDeb"};

/***/ }),

/***/ "./src/theme/material/grid-paginated-footer.m.css":
/*!********************************************************!*\
  !*** ./src/theme/material/grid-paginated-footer.m.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/grid-paginated-footer","root":"grid-paginated-footer-m__root__ecb8b26q2Qj","details":"grid-paginated-footer-m__details__ecb8b23RLgr","paginationList":"grid-paginated-footer-m__paginationList__ecb8b2323wE","pageNav":"grid-paginated-footer-m__pageNav__ecb8b21okTP","pageNumber":"grid-paginated-footer-m__pageNumber__ecb8b2KBph9","active":"grid-paginated-footer-m__active__ecb8b2CZvyP"};

/***/ }),

/***/ "./src/theme/material/grid-placeholder-row.m.css":
/*!*******************************************************!*\
  !*** ./src/theme/material/grid-placeholder-row.m.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/grid-placeholder-row","root":"grid-placeholder-row-m__root__ecb8b2uhU61 grid-row-m__root__ecb8b22ChCw","loading":"grid-placeholder-row-m__loading__ecb8b22uR8n","spin":"grid-placeholder-row-m__spin__ecb8b27PHtW"};

/***/ }),

/***/ "./src/theme/material/grid-row.m.css":
/*!*******************************************!*\
  !*** ./src/theme/material/grid-row.m.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/grid-row","root":"grid-row-m__root__ecb8b22ChCw","selected":"grid-row-m__selected__ecb8b23PMcJ","selectable":"grid-row-m__selectable__ecb8b21O-yD"};

/***/ }),

/***/ "./src/theme/material/grid.m.css":
/*!***************************************!*\
  !*** ./src/theme/material/grid.m.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/grid","root":"grid-m__root__ecb8b22aK23","header":"grid-m__header__ecb8b2v8iMF","filterGroup":"grid-m__filterGroup__ecb8b21dfAm"};

/***/ }),

/***/ "./src/theme/material/helper-text.m.css":
/*!**********************************************!*\
  !*** ./src/theme/material/helper-text.m.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/helper-text","root":"helper-text-m__root__ecb8b228JOy","text":"helper-text-m__text__ecb8b22hibl _typo__small__ecb8b2yOEd8 _typo__serif__ecb8b22EAdY","valid":"helper-text-m__valid__ecb8b22NNWV","invalid":"helper-text-m__invalid__ecb8b23ipID"};

/***/ }),

/***/ "./src/theme/material/icon.m.css":
/*!***************************************!*\
  !*** ./src/theme/material/icon.m.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/icon","icon":"icon-m__icon__ecb8b23ceJx","clockIcon":"icon-m__clockIcon__ecb8b2inyIP","downIcon":"icon-m__downIcon__ecb8b23ZvmU","leftIcon":"icon-m__leftIcon__ecb8b2D-qeb","rightIcon":"icon-m__rightIcon__ecb8b21MIBe","closeIcon":"icon-m__closeIcon__ecb8b2Y5dl_","plusIcon":"icon-m__plusIcon__ecb8b22Ntr-","minusIcon":"icon-m__minusIcon__ecb8b22lEJ0","checkIcon":"icon-m__checkIcon__ecb8b21dwRn","upIcon":"icon-m__upIcon__ecb8b23FPLu","upAltIcon":"icon-m__upAltIcon__ecb8b23Pq_5","downAltIcon":"icon-m__downAltIcon__ecb8b2LQ460","searchIcon":"icon-m__searchIcon__ecb8b2Zpct1","barsIcon":"icon-m__barsIcon__ecb8b2jJt__","settingsIcon":"icon-m__settingsIcon__ecb8b23RMKZ","alertIcon":"icon-m__alertIcon__ecb8b21TQBs","helpIcon":"icon-m__helpIcon__ecb8b22zybh","infoIcon":"icon-m__infoIcon__ecb8b21aFxP","phoneIcon":"icon-m__phoneIcon__ecb8b22R9Pj","editIcon":"icon-m__editIcon__ecb8b23piR6","dateIcon":"icon-m__dateIcon__ecb8b23HlZY","linkIcon":"icon-m__linkIcon__ecb8b2rvms1","locationIcon":"icon-m__locationIcon__ecb8b2HFbfK","secureIcon":"icon-m__secureIcon__ecb8b21DQQb","mailIcon":"icon-m__mailIcon__ecb8b2L5l2z","eyeIcon":"icon-m__eyeIcon__ecb8b22tY9U","eyeSlashIcon":"icon-m__eyeSlashIcon__ecb8b22_XYh","starIcon":"icon-m__starIcon__ecb8b23CmNS"};

/***/ }),

/***/ "./src/theme/material/index.ts":
/*!*************************************!*\
  !*** ./src/theme/material/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordion_m_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.m.css */ "./src/theme/material/accordion.m.css");
/* harmony import */ var _accordion_m_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_accordion_m_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _avatar_m_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar.m.css */ "./src/theme/material/avatar.m.css");
/* harmony import */ var _avatar_m_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_avatar_m_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_m_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.m.css */ "./src/theme/material/button.m.css");
/* harmony import */ var _button_m_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_m_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _calendar_m_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.m.css */ "./src/theme/material/calendar.m.css");
/* harmony import */ var _calendar_m_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_calendar_m_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _checkbox_group_m_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkbox-group.m.css */ "./src/theme/material/checkbox-group.m.css");
/* harmony import */ var _checkbox_group_m_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_checkbox_group_m_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _checkbox_m_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox.m.css */ "./src/theme/material/checkbox.m.css");
/* harmony import */ var _checkbox_m_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_checkbox_m_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _chip_m_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chip.m.css */ "./src/theme/material/chip.m.css");
/* harmony import */ var _chip_m_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_chip_m_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _date_input_m_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date-input.m.css */ "./src/theme/material/date-input.m.css");
/* harmony import */ var _date_input_m_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_date_input_m_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _grid_body_m_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grid-body.m.css */ "./src/theme/material/grid-body.m.css");
/* harmony import */ var _grid_body_m_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_grid_body_m_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _grid_cell_m_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./grid-cell.m.css */ "./src/theme/material/grid-cell.m.css");
/* harmony import */ var _grid_cell_m_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_grid_cell_m_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _grid_footer_m_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./grid-footer.m.css */ "./src/theme/material/grid-footer.m.css");
/* harmony import */ var _grid_footer_m_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_grid_footer_m_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _grid_header_m_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./grid-header.m.css */ "./src/theme/material/grid-header.m.css");
/* harmony import */ var _grid_header_m_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_grid_header_m_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _grid_paginated_footer_m_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./grid-paginated-footer.m.css */ "./src/theme/material/grid-paginated-footer.m.css");
/* harmony import */ var _grid_paginated_footer_m_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_grid_paginated_footer_m_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _grid_placeholder_row_m_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./grid-placeholder-row.m.css */ "./src/theme/material/grid-placeholder-row.m.css");
/* harmony import */ var _grid_placeholder_row_m_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_grid_placeholder_row_m_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _grid_row_m_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./grid-row.m.css */ "./src/theme/material/grid-row.m.css");
/* harmony import */ var _grid_row_m_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_grid_row_m_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _grid_m_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grid.m.css */ "./src/theme/material/grid.m.css");
/* harmony import */ var _grid_m_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_grid_m_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _helper_text_m_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helper-text.m.css */ "./src/theme/material/helper-text.m.css");
/* harmony import */ var _helper_text_m_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_helper_text_m_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _icon_m_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./icon.m.css */ "./src/theme/material/icon.m.css");
/* harmony import */ var _icon_m_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_icon_m_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _list_item_m_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./list-item.m.css */ "./src/theme/material/list-item.m.css");
/* harmony import */ var _list_item_m_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_list_item_m_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _list_m_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./list.m.css */ "./src/theme/material/list.m.css");
/* harmony import */ var _list_m_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_list_m_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _multi_select_typeahead_m_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./multi-select-typeahead.m.css */ "./src/theme/material/multi-select-typeahead.m.css");
/* harmony import */ var _multi_select_typeahead_m_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_multi_select_typeahead_m_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _pagination_m_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pagination.m.css */ "./src/theme/material/pagination.m.css");
/* harmony import */ var _pagination_m_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_pagination_m_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _password_input_m_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./password-input.m.css */ "./src/theme/material/password-input.m.css");
/* harmony import */ var _password_input_m_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_password_input_m_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _radio_group_m_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./radio-group.m.css */ "./src/theme/material/radio-group.m.css");
/* harmony import */ var _radio_group_m_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_radio_group_m_css__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _radio_m_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./radio.m.css */ "./src/theme/material/radio.m.css");
/* harmony import */ var _radio_m_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_radio_m_css__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _switch_m_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./switch.m.css */ "./src/theme/material/switch.m.css");
/* harmony import */ var _switch_m_css__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_switch_m_css__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _text_area_m_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./text-area.m.css */ "./src/theme/material/text-area.m.css");
/* harmony import */ var _text_area_m_css__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_text_area_m_css__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _text_input_m_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./text-input.m.css */ "./src/theme/material/text-input.m.css");
/* harmony import */ var _text_input_m_css__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_text_input_m_css__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _three_column_layout_m_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./three-column-layout.m.css */ "./src/theme/material/three-column-layout.m.css");
/* harmony import */ var _three_column_layout_m_css__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_three_column_layout_m_css__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _time_picker_m_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./time-picker.m.css */ "./src/theme/material/time-picker.m.css");
/* harmony import */ var _time_picker_m_css__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_time_picker_m_css__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _title_pane_m_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./title-pane.m.css */ "./src/theme/material/title-pane.m.css");
/* harmony import */ var _title_pane_m_css__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_title_pane_m_css__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _tooltip_m_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./tooltip.m.css */ "./src/theme/material/tooltip.m.css");
/* harmony import */ var _tooltip_m_css__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_tooltip_m_css__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _two_column_layout_m_css__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./two-column-layout.m.css */ "./src/theme/material/two-column-layout.m.css");
/* harmony import */ var _two_column_layout_m_css__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_two_column_layout_m_css__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _typeahead_m_css__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./typeahead.m.css */ "./src/theme/material/typeahead.m.css");
/* harmony import */ var _typeahead_m_css__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_typeahead_m_css__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _variants_dark_m_css__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./variants/dark.m.css */ "./src/theme/material/variants/dark.m.css");
/* harmony import */ var _variants_dark_m_css__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_variants_dark_m_css__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _variants_light_m_css__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./variants/light.m.css */ "./src/theme/material/variants/light.m.css");
/* harmony import */ var _variants_light_m_css__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_variants_light_m_css__WEBPACK_IMPORTED_MODULE_35__);


// import * as breadcrumbGroup from './breadcrumb-group.m.css';

// import * as card from './card.m.css';





// import * as dialog from './dialog.m.css';








// import * as headerCard from './header-card.m.css';
// import * as header from './header.m.css';


// import * as label from './label.m.css';

// import * as loadingIndicator from './loading-indicator.m.css';

// import * as menuItem from './menu-item.m.css';

// import * as nativeSelect from './native-select.m.css';
// import * as outlinedButton from './outlined-button.m.css';


// import * as progress from './progress.m.css';


// import * as raisedButton from './raised-button.m.css';
// import * as rangeSlider from './range-slider.m.css';
// import * as select from './select.m.css';
// import * as slidePane from './slide-pane.m.css';
// import * as slider from './slider.m.css';
// import * as snackbar from './snackbar.m.css';

// import * as tabController from './tab-controller.m.css';










/* harmony default export */ __webpack_exports__["default"] = ({
    theme: {
        'apconf2020/accordion': _accordion_m_css__WEBPACK_IMPORTED_MODULE_0__,
        'apconf2020/avatar': _avatar_m_css__WEBPACK_IMPORTED_MODULE_1__,
        'apconf2020/button': _button_m_css__WEBPACK_IMPORTED_MODULE_2__,
        'apconf2020/calendar': _calendar_m_css__WEBPACK_IMPORTED_MODULE_3__,
        'apconf2020/checkbox-group': _checkbox_group_m_css__WEBPACK_IMPORTED_MODULE_4__,
        'apconf2020/checkbox': _checkbox_m_css__WEBPACK_IMPORTED_MODULE_5__,
        'apconf2020/chip': _chip_m_css__WEBPACK_IMPORTED_MODULE_6__,
        'apconf2020/date-input': _date_input_m_css__WEBPACK_IMPORTED_MODULE_7__,
        'apconf2020/grid-body': _grid_body_m_css__WEBPACK_IMPORTED_MODULE_8__,
        'apconf2020/grid-cell': _grid_cell_m_css__WEBPACK_IMPORTED_MODULE_9__,
        'apconf2020/grid-footer': _grid_footer_m_css__WEBPACK_IMPORTED_MODULE_10__,
        'apconf2020/grid-header': _grid_header_m_css__WEBPACK_IMPORTED_MODULE_11__,
        'apconf2020/grid-paginated-footer': _grid_paginated_footer_m_css__WEBPACK_IMPORTED_MODULE_12__,
        'apconf2020/grid-placeholder-row': _grid_placeholder_row_m_css__WEBPACK_IMPORTED_MODULE_13__,
        'apconf2020/grid-row': _grid_row_m_css__WEBPACK_IMPORTED_MODULE_14__,
        'apconf2020/grid': _grid_m_css__WEBPACK_IMPORTED_MODULE_15__,
        'apconf2020/helper-text': _helper_text_m_css__WEBPACK_IMPORTED_MODULE_16__,
        'apconf2020/icon': _icon_m_css__WEBPACK_IMPORTED_MODULE_17__,
        'apconf2020/list-item': _list_item_m_css__WEBPACK_IMPORTED_MODULE_18__,
        'apconf2020/list': _list_m_css__WEBPACK_IMPORTED_MODULE_19__,
        'apconf2020/multi-select-typeahead': _multi_select_typeahead_m_css__WEBPACK_IMPORTED_MODULE_20__,
        'apconf2020/pagination': _pagination_m_css__WEBPACK_IMPORTED_MODULE_21__,
        'apconf2020/password-input': _password_input_m_css__WEBPACK_IMPORTED_MODULE_22__,
        'apconf2020/radio-group': _radio_group_m_css__WEBPACK_IMPORTED_MODULE_23__,
        'apconf2020/radio': _radio_m_css__WEBPACK_IMPORTED_MODULE_24__,
        'apconf2020/switch': _switch_m_css__WEBPACK_IMPORTED_MODULE_25__,
        'apconf2020/text-area': _text_area_m_css__WEBPACK_IMPORTED_MODULE_26__,
        'apconf2020/text-input': _text_input_m_css__WEBPACK_IMPORTED_MODULE_27__,
        'apconf2020/three-column-layout': _three_column_layout_m_css__WEBPACK_IMPORTED_MODULE_28__,
        'apconf2020/time-picker': _time_picker_m_css__WEBPACK_IMPORTED_MODULE_29__,
        'apconf2020/title-pane': _title_pane_m_css__WEBPACK_IMPORTED_MODULE_30__,
        'apconf2020/tooltip': _tooltip_m_css__WEBPACK_IMPORTED_MODULE_31__,
        'apconf2020/two-column-layout': _two_column_layout_m_css__WEBPACK_IMPORTED_MODULE_32__,
        'apconf2020/typeahead': _typeahead_m_css__WEBPACK_IMPORTED_MODULE_33__
    },
    variants: {
        default: _variants_dark_m_css__WEBPACK_IMPORTED_MODULE_34__,
        dark: _variants_dark_m_css__WEBPACK_IMPORTED_MODULE_34__,
        light: _variants_light_m_css__WEBPACK_IMPORTED_MODULE_35__
    }
});


/***/ }),

/***/ "./src/theme/material/list-item.m.css":
/*!********************************************!*\
  !*** ./src/theme/material/list-item.m.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/list-item","wrapper":"list-item-m__wrapper__ecb8b2kEye0","root":"list-item-m__root__ecb8b22Wp8P","animated":"list-item-m__animated__ecb8b210YJv","disabled":"list-item-m__disabled__ecb8b2zuFPw","input":"list-item-m__input__ecb8b22kmHk","selected":"list-item-m__selected__ecb8b22Wx8L","active":"list-item-m__active__ecb8b21O6XQ","flat":"list-item-m__flat__ecb8b21G5Dn","outlined":"list-item-m__outlined__ecb8b21ybd4","filled":"list-item-m__filled__ecb8b22X0j8","raised":"list-item-m__raised__ecb8b23BbKj","shaped":"list-item-m__shaped__ecb8b2mDR-H"};

/***/ }),

/***/ "./src/theme/material/list.m.css":
/*!***************************************!*\
  !*** ./src/theme/material/list.m.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/list","root":"list-m__root__ecb8b2IsS88 _ui-m__ui__ecb8b22kN0R _ui-m__noHover__ecb8b2lk8wn","transformer":"list-m__transformer__ecb8b2qIKIU","disabled":"list-m__disabled__ecb8b2DBlmj _ui-m__disabled__ecb8b22OTHF","flat":"list-m__flat__ecb8b23_d95 _ui-m__flat__ecb8b2IbkG-","filled":"list-m__filled__ecb8b23FB-C _ui-m__filled__ecb8b21z_MC","raised":"list-m__raised__ecb8b21smrh _ui-m__raised__ecb8b22JCfN","outlined":"list-m__outlined__ecb8b21-qlG _ui-m__outlined__ecb8b213fa8","shaped":"list-m__shaped__ecb8b2B4Z3c _ui-m__shaped__ecb8b22ua-o","animated":"list-m__animated__ecb8b22X3ef","above":"list-m__above__ecb8b2Z93fp","item":"list-m__item__ecb8b21hcNX","divider":"list-m__divider__ecb8b21Ff8B"};

/***/ }),

/***/ "./src/theme/material/multi-select-typeahead.m.css":
/*!*********************************************************!*\
  !*** ./src/theme/material/multi-select-typeahead.m.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/multi-select-typeahead","root":"multi-select-typeahead-m__root__ecb8b236chr","focused":"multi-select-typeahead-m__focused__ecb8b23Y5LE","active":"multi-select-typeahead-m__active__ecb8b22zfi4","selectedIcon":"multi-select-typeahead-m__selectedIcon__ecb8b23n9yu","inputWrapper":"multi-select-typeahead-m__inputWrapper__ecb8b22Kitb","input":"multi-select-typeahead-m__input__ecb8b2MLUvO","value":"multi-select-typeahead-m__value__ecb8b238NdO _ui-m__spaceEqual__ecb8b2diem5","valueInline":"multi-select-typeahead-m__valueInline__ecb8b22dt7O","label":"multi-select-typeahead-m__label__ecb8b21QO2z","hasValue":"multi-select-typeahead-m__hasValue__ecb8b22M6Nb","wrapper":"multi-select-typeahead-m__wrapper__ecb8b23zDP4","values":"multi-select-typeahead-m__values__ecb8b2K4322","item":"multi-select-typeahead-m__item__ecb8b22uFgH","selected":"multi-select-typeahead-m__selected__ecb8b2bM1zp"};

/***/ }),

/***/ "./src/theme/material/pagination.m.css":
/*!*********************************************!*\
  !*** ./src/theme/material/pagination.m.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/pagination","root":"pagination-m__root__ecb8b21F8zE","linksWrapper":"pagination-m__linksWrapper__ecb8b22ltdK","prev":"pagination-m__prev__ecb8b2LzfoT","next":"pagination-m__next__ecb8b22_19u","icon":"pagination-m__icon__ecb8b21_UJj","label":"pagination-m__label__ecb8b23nM50","link":"pagination-m__link__ecb8b22mp1S","currentPage":"pagination-m__currentPage__ecb8b21iXcd"};

/***/ }),

/***/ "./src/theme/material/password-input.m.css":
/*!*************************************************!*\
  !*** ./src/theme/material/password-input.m.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/password-input","toggleButton":"password-input-m__toggleButton__ecb8b21j-cn undefined"};

/***/ }),

/***/ "./src/theme/material/radio-group.m.css":
/*!**********************************************!*\
  !*** ./src/theme/material/radio-group.m.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/radio-group","root":"radio-group-m__root__ecb8b23OlYp","legend":"radio-group-m__legend__ecb8b21Ewcn"};

/***/ }),

/***/ "./src/theme/material/radio.m.css":
/*!****************************************!*\
  !*** ./src/theme/material/radio.m.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/radio","box":"radio-m__box__ecb8b23_vpg"};

/***/ }),

/***/ "./src/theme/material/switch.m.css":
/*!*****************************************!*\
  !*** ./src/theme/material/switch.m.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/switch","root":"switch-m__root__ecb8b2YGvQ3 _ui-m__ui__ecb8b22kN0R _ui-m__ui-transition__ecb8b2zd6te","animated":"switch-m__animated__ecb8b21f8Sw checkbox-m__animated__ecb8b21M4JE","disabled":"switch-m__disabled__ecb8b21B9xU checkbox-m__disabled__ecb8b2qkqDD _ui-m__disabled__ecb8b22OTHF","thumb":"switch-m__thumb__ecb8b21CJ5J checkbox-m__box__ecb8b22KYOe _ui-m__box__ecb8b22G_3_","input":"switch-m__input__ecb8b2113gm checkbox-m__input__ecb8b217f8O _ui-m__input__ecb8b23_jeS","track":"switch-m__track__ecb8b21enqC","raised":"switch-m__raised__ecb8b21bmix","shaped":"switch-m__shaped__ecb8b232tgG","outlined":"switch-m__outlined__ecb8b21r0_3","flat":"switch-m__flat__ecb8b22qsKo","filled":"switch-m__filled__ecb8b22IvlM","checked":"switch-m__checked__ecb8b2wKBi5","label":"switch-m__label__ecb8b21G1dY","onLabel":"switch-m__onLabel__ecb8b21MCN4","offLabel":"switch-m__offLabel__ecb8b2-13LD","inputWrapper":"switch-m__inputWrapper__ecb8b23n9ga","invalid":"switch-m__invalid__ecb8b23SASf","valid":"switch-m__valid__ecb8b23HLHj","readonly":"switch-m__readonly__ecb8b21CMbm","required":"switch-m__required__ecb8b23otma","focused":"switch-m__focused__ecb8b23X_2M"};

/***/ }),

/***/ "./src/theme/material/text-area.m.css":
/*!********************************************!*\
  !*** ./src/theme/material/text-area.m.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/text-area","root":"text-area-m__root__ecb8b22MlM7 text-input-m__root__ecb8b2RiYcd _ui-m__ui__ecb8b22kN0R _ui-m__ui-input__ecb8b23qERm _ui-m__ui-transition__ecb8b2zd6te","wrapper":"text-area-m__wrapper__ecb8b21M6Za text-input-m__wrapper__ecb8b21fVPW","inner":"text-area-m__inner__ecb8b2tzsui undefined","input":"text-area-m__input__ecb8b23IoeC text-input-m__input__ecb8b23RQaj _typo__input__ecb8b2toptY","border":"text-area-m__border__ecb8b22E57Y text-input-m__border__ecb8b23Iflq _ui-m__input-box__ecb8b227z_p","responsive":"text-area-m__responsive__ecb8b2Gxjrv text-input-m__responsive__ecb8b22-ivh","enabled":"text-area-m__enabled__ecb8b235Dzj text-input-m__enabled__ecb8b2mam1T","disabled":"text-area-m__disabled__ecb8b21aTSI text-input-m__disabled__ecb8b210szy","valid":"text-area-m__valid__ecb8b23qiIw text-input-m__valid__ecb8b21Sl1g","invalid":"text-area-m__invalid__ecb8b22QU3Q text-input-m__invalid__ecb8b22XPWx","slideLabel":"text-area-m__slideLabel__ecb8b2bnkUt text-input-m__slideLabel__ecb8b23vAEp","staticLabel":"text-area-m__staticLabel__ecb8b26WKV2 text-input-m__staticLabel__ecb8b2NdP2o","shaped":"text-area-m__shaped__ecb8b21zX6K","readonly":"text-area-m__readonly__ecb8b22DdHS","required":"text-area-m__required__ecb8b22JDGc","expand":"text-area-m__expand__ecb8b23zpIF","fixed":"text-area-m__fixed__ecb8b21capW","outlined":"text-area-m__outlined__ecb8b22El4R","bg":"text-area-m__bg__ecb8b23WL_n","filled":"text-area-m__filled__ecb8b2GbDTG","focused":"text-area-m__focused__ecb8b21aGeP"};

/***/ }),

/***/ "./src/theme/material/text-input.m.css":
/*!*********************************************!*\
  !*** ./src/theme/material/text-input.m.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/text-input","root":"text-input-m__root__ecb8b2RiYcd _ui-m__ui__ecb8b22kN0R _ui-m__ui-input__ecb8b23qERm _ui-m__ui-transition__ecb8b2zd6te","raised":"text-input-m__raised__ecb8b21Hic8","shaped":"text-input-m__shaped__ecb8b23chOP","filled":"text-input-m__filled__ecb8b23yFb9","input":"text-input-m__input__ecb8b23RQaj _typo__input__ecb8b2toptY","wrapper":"text-input-m__wrapper__ecb8b21fVPW","responsive":"text-input-m__responsive__ecb8b22-ivh","inputWrapper":"text-input-m__inputWrapper__ecb8b21NpZM","animated":"text-input-m__animated__ecb8b21GcpC","addonFilled":"text-input-m__addonFilled__ecb8b213Y65","border":"text-input-m__border__ecb8b23Iflq _ui-m__input-box__ecb8b227z_p","flat":"text-input-m__flat__ecb8b231kjm","outlined":"text-input-m__outlined__ecb8b23-jFJ","disabled":"text-input-m__disabled__ecb8b210szy","invalid":"text-input-m__invalid__ecb8b22XPWx","focusedContent":"text-input-m__focusedContent__ecb8b21Z5qv","label":"text-input-m__label__ecb8b21GWw2","noLabel":"text-input-m__noLabel__ecb8b215cSJ","slideLabel":"text-input-m__slideLabel__ecb8b23vAEp","staticLabel":"text-input-m__staticLabel__ecb8b2NdP2o","prefix":"text-input-m__prefix__ecb8b22W3_B","suffix":"text-input-m__suffix__ecb8b23eOq0","required":"text-input-m__required__ecb8b21yhS3","enabled":"text-input-m__enabled__ecb8b2mam1T","focused":"text-input-m__focused__ecb8b26ReRD","readonly":"text-input-m__readonly__ecb8b23fX8-","addonRoot":"text-input-m__addonRoot__ecb8b2FdAy8","hasLeading":"text-input-m__hasLeading__ecb8b2dulSU","hasTrailing":"text-input-m__hasTrailing__ecb8b2TOOb3","helperText":"text-input-m__helperText__ecb8b22eY7M","valid":"text-input-m__valid__ecb8b21Sl1g"};

/***/ }),

/***/ "./src/theme/material/three-column-layout.m.css":
/*!******************************************************!*\
  !*** ./src/theme/material/three-column-layout.m.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/three-column-layout","leading":"three-column-layout-m__leading__ecb8b23WPY5","trailing":"three-column-layout-m__trailing__ecb8b2SnL33"};

/***/ }),

/***/ "./src/theme/material/time-picker.m.css":
/*!**********************************************!*\
  !*** ./src/theme/material/time-picker.m.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/time-picker","toggleMenuButton":"time-picker-m__toggleMenuButton__ecb8b22SXBF undefined","popup":"time-picker-m__popup__ecb8b229KxG"};

/***/ }),

/***/ "./src/theme/material/title-pane.m.css":
/*!*********************************************!*\
  !*** ./src/theme/material/title-pane.m.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/title-pane","root":"title-pane-m__root__ecb8b21r02A","titleButton":"title-pane-m__titleButton__ecb8b23ZXHV undefined","arrow":"title-pane-m__arrow__ecb8b228QJI","open":"title-pane-m__open__ecb8b22nPrX","content":"title-pane-m__content__ecb8b21iB3f"};

/***/ }),

/***/ "./src/theme/material/tooltip.m.css":
/*!******************************************!*\
  !*** ./src/theme/material/tooltip.m.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/tooltip","root":"tooltip-m__root__ecb8b22vpLO","content":"tooltip-m__content__ecb8b21UxcH","bottom":"tooltip-m__bottom__ecb8b2yZOGU","top":"tooltip-m__top__ecb8b23084Z","left":"tooltip-m__left__ecb8b216PKh","right":"tooltip-m__right__ecb8b22XoEs"};

/***/ }),

/***/ "./src/theme/material/two-column-layout.m.css":
/*!****************************************************!*\
  !*** ./src/theme/material/two-column-layout.m.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/two-column-layout","small":"two-column-layout-m__small__ecb8b23JtMA"};

/***/ }),

/***/ "./src/theme/material/typeahead.m.css":
/*!********************************************!*\
  !*** ./src/theme/material/typeahead.m.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/typeahead","root":"typeahead-m__root__ecb8b22j2Sq","below":"typeahead-m__below__ecb8b2VD3rS","open":"typeahead-m__open__ecb8b2XtOIu","hasHelperText":"typeahead-m__hasHelperText__ecb8b224GXg","flat":"typeahead-m__flat__ecb8b261hzl","outlined":"typeahead-m__outlined__ecb8b21q755","filled":"typeahead-m__filled__ecb8b21F62H","shaped":"typeahead-m__shaped__ecb8b2fX-Xg","disabled":"typeahead-m__disabled__ecb8b239Icf","valid":"typeahead-m__valid__ecb8b2FeZbq","invalid":"typeahead-m__invalid__ecb8b29CseT","menuWrapper":"typeahead-m__menuWrapper__ecb8b2ETBuU _ui-m__uiVar__ecb8b23z3Ir","js":"typeahead-m__js__ecb8b22TkYn","above":"typeahead-m__above__ecb8b22XhrN","hasValue":"typeahead-m__hasValue__ecb8b23XLXp","animated":"typeahead-m__animated__ecb8b221lus","opening":"typeahead-m__opening__ecb8b22h8Em","menuTransformer":"typeahead-m__menuTransformer__ecb8b2pFBSL","input":"typeahead-m__input__ecb8b22GGcI","focusedWrapper":"typeahead-m__focusedWrapper__ecb8b21R8IB","trigger":"typeahead-m__trigger__ecb8b21aOiH","menu":"typeahead-m__menu__ecb8b2t9tkU","listItem":"typeahead-m__listItem__ecb8b23QptM","flex":"typeahead-m__flex__ecb8b2xKCHT","opacIn":"typeahead-m__opacIn__ecb8b2qZi1y","closing":"typeahead-m__closing__ecb8b2apgnI","close":"typeahead-m__close__ecb8b2eA8VO","first":"typeahead-m__first__ecb8b23ldKF","opened":"typeahead-m__opened__ecb8b21dTv4","closeRoot":"typeahead-m__closeRoot__ecb8b21zxky","label":"typeahead-m__label__ecb8b212bDx"};

/***/ }),

/***/ "./src/theme/material/variants/dark.m.css":
/*!************************************************!*\
  !*** ./src/theme/material/variants/dark.m.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/dark","root":"dark-m__root__ecb8b23sO1y"};

/***/ }),

/***/ "./src/theme/material/variants/light.m.css":
/*!*************************************************!*\
  !*** ./src/theme/material/variants/light.m.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {" _key":"apconf2020/light","root":"light-m__root__ecb8b2141xP","ligh":"light-m__ligh__ecb8b21npIR","primary":"light-m__primary__ecb8b22inzV","light":"light-m__light__ecb8b23ABRb","secondary":"light-m__secondary__ecb8b227iDB","settings":"light-m__settings__ecb8b22FLDw","info":"light-m__info__ecb8b2M_bWd","warning":"light-m__warning__ecb8b21FXIk","error":"light-m__error__ecb8b21dWwI","success":"light-m__success__ecb8b23PwwX","neutral":"light-m__neutral__ecb8b212kNQ"};

/***/ })

}]);
//# sourceMappingURL=main.js.map