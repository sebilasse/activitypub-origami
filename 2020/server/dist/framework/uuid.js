"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid4 = void 0;
function uuid4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
exports.uuid4 = uuid4;
function uuid(v5name) {
    return uuid4();
}
exports.default = uuid;
//# sourceMappingURL=uuid.js.map