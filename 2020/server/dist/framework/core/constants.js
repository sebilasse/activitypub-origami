"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BREAK = exports.CONTINUE = exports.TypedTypesReg = exports.isUintReg = exports.NAN = exports.MAX_INTEGER = exports.MAX_SAFE_INTEGER = exports.INFINITY = void 0;
exports.INFINITY = 1 / 0;
exports.MAX_SAFE_INTEGER = 9007199254740991;
exports.MAX_INTEGER = 1.7976931348623157e+308;
exports.NAN = 0 / 0;
exports.isUintReg = /^(?:0|[1-9]\d*)$/;
exports.TypedTypesReg = /(Int|Uint|Float)\d/;
exports.CONTINUE = Symbol.for('$redaktor$continue');
exports.BREAK = Symbol.for('$redaktor$break');
//# sourceMappingURL=constants.js.map