"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyBy = exports.groupBy = exports.countBy = exports.count = void 0;
const to_1 = require("../lang/to");
const each_1 = require("./each");
function _cgk(a, fn, start, end, step, type = 'count') {
    const reduceFn = (o, v) => {
        let k = to_1.toStr(v, fn);
        if (typeof k === 'string') {
            if (type === 'group') {
                if (!Array.isArray(o[k])) {
                    o[k] = [];
                }
                o[k].push(v);
            }
            else {
                o[k] = type === 'key' ? v : ((o[k] || 0) + 1);
            }
        }
        return o;
    };
    return each_1.reduce(a, reduceFn, {}, start, end, step);
}
function count(a, start = 0, end, step) {
    return _cgk(a, void 0, start, end, step);
}
exports.count = count;
const eachFNs = ['countBy', 'groupBy', 'keyBy'];
_a = eachFNs.map((k) => (a, fn, start = 0, end, step) => _cgk(a, fn, start, end, step)), exports.countBy = _a[0], exports.groupBy = _a[1], exports.keyBy = _a[2];
//# sourceMappingURL=cgk.js.map