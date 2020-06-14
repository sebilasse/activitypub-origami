"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoke = void 0;
const Pointer_1 = require("../JSON/Pointer");
function invoke(o, path, fnName, ...args) {
    const fn = Pointer_1.default(o, path)[fnName];
    return (typeof fn !== 'function') ? void 0 : fn(...args);
}
exports.invoke = invoke;
//# sourceMappingURL=invoke.js.map