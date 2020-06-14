"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b2ab = exports.ab2b = exports.b2str = exports.bAppend = exports.b = exports.isByteChar = exports.isDigitByte = exports.isNodeJS = void 0;
const is_1 = require("../is");
exports.isNodeJS = ((typeof process === 'object' && process.versions && process.versions.node && global.Buffer) &&
    process.versions.node) || false;
var Bytes;
(function (Bytes) {
    Bytes[Bytes["("] = 40] = "(";
    Bytes[Bytes[")"] = 41] = ")";
    Bytes[Bytes["["] = 91] = "[";
    Bytes[Bytes["]"] = 93] = "]";
    Bytes[Bytes[":"] = 58] = ":";
})(Bytes || (Bytes = {}));
function isDigitByte(b) {
    return is_1.default(b, 'integer') && b > 47 && b < 58;
}
exports.isDigitByte = isDigitByte;
function isByteChar(view, pos, c) {
    return view.getUint8(pos) === Bytes[c];
}
exports.isByteChar = isByteChar;
function b(s) {
    let l = 0;
    const aB = (ab) => bAppend(b(`${ab.byteLength}:`), ab);
    if (s === '') {
        return new ArrayBuffer(0);
    }
    else if (s instanceof ArrayBuffer) {
        return aB(s);
    }
    else if (s instanceof Buffer) {
        return aB(s.buffer.slice(s.byteOffset, s.byteOffset + s.byteLength));
    }
    else if (Array.isArray(s)) {
        return bAppend(...s.map(b));
    }
    else if (typeof s === 'string' || typeof s === 'number') {
        s = `${s}`;
        l = s.length;
        s = `${l}:${s}`;
        l = s.length;
        let buf = new ArrayBuffer(l);
        let bufView = new Uint8Array(buf);
        for (var i = 0; i < l; i++) {
            bufView[i] = s.charCodeAt(i);
        }
        return buf;
    }
    else {
        throw new Error(`Don't know how to serialize type ${typeof s}`);
    }
}
exports.b = b;
function bAppend(...arraybuffers) {
    if (arraybuffers.length < 2) {
        return arraybuffers.length === 1 ? arraybuffers[0] : new ArrayBuffer(0);
    }
    const isValidArray = (x) => /Int(8|16|32)Array|Uint(8|8Clamped|16|32)Array|Float(32|64)Array|ArrayBuffer/gi
        .test({}.toString.call(x));
    const arrays = [].slice.call(arraybuffers);
    if (arrays.length <= 0 || !isValidArray(arrays[0])) {
        return new Uint8Array(0).buffer;
    }
    const ab = arrays.reduce((cbuf, buf, i) => {
        if (i === 0) {
            return cbuf;
        }
        if (!isValidArray(buf)) {
            return cbuf;
        }
        var tmp = new Uint8Array(cbuf.byteLength + buf.byteLength);
        tmp.set(new Uint8Array(cbuf), 0);
        tmp.set(new Uint8Array(buf), cbuf.byteLength);
        return tmp.buffer;
    }, arrays[0]);
    return ab;
}
exports.bAppend = bAppend;
function b2str(ab) {
    return String.fromCharCode.apply(null, new Uint8Array(ab));
}
exports.b2str = b2str;
function ab2b(ab) {
    if (!exports.isNodeJS) {
        throw new Error('This converts to a nodeJS buffer which is not supported here');
    }
    var buf = Buffer.alloc(ab.byteLength);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        buf[i] = view[i];
    }
    return buf;
}
exports.ab2b = ab2b;
const isArrayBufferSupported = (new Buffer(0)).buffer instanceof ArrayBuffer;
function bufferToArrayBufferSlice(buffer) {
    return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}
function bufferToArrayBufferCycle(buffer) {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }
    return ab;
}
exports.b2ab = isArrayBufferSupported ? bufferToArrayBufferSlice : bufferToArrayBufferCycle;
//# sourceMappingURL=asciiBytes.js.map