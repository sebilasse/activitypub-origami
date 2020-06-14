"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hinted_1 = require("./hinted");
const asciiBytes_1 = require("./asciiBytes");
Number.isFinite = Number.isFinite || function (value) {
    return typeof value === "number" && isFinite(value);
};
class Canonical_S_Expressions {
    static readHint(buf, pos) {
        const hint = asciiBytes_1.b('');
        const view = new DataView(buf);
        while (pos < buf.byteLength) {
            pos += 1;
            if (asciiBytes_1.isByteChar(view, pos, ']')) {
                return [hint, pos];
            }
            else {
                asciiBytes_1.bAppend(hint, asciiBytes_1.b(view.getUint8(pos)));
            }
        }
        return [hint, pos];
    }
    static readList(buf, pos = 0) {
        const out = [];
        const view = new DataView(buf);
        let readAhead = '';
        let newList = null;
        let hint = null;
        while (pos < buf.byteLength) {
            pos += 1;
            if (asciiBytes_1.isByteChar(view, pos, ')')) {
                return [out, pos];
            }
            else if (asciiBytes_1.isByteChar(view, pos, '(')) {
                [newList, pos] = Canonical_S_Expressions.readList(buf, pos);
                out.push(newList);
            }
            else if (asciiBytes_1.isByteChar(view, pos, '[')) {
                [hint, pos] = Canonical_S_Expressions.readHint(buf, pos);
            }
            else if (asciiBytes_1.isByteChar(view, pos, ':')) {
                pos += 1;
                if (!(readAhead)) {
                    throw new Error(`Colon but no read ahead at position ${pos}`);
                }
                readAhead = parseInt(readAhead);
                var raw = view.getUint8(pos);
                if (hint) {
                    out.push(new hinted_1.default(asciiBytes_1.b2str(hint), asciiBytes_1.b(raw)));
                }
                else {
                    out.push(raw);
                }
                pos += readAhead;
                readAhead = '';
                hint = null;
            }
            else {
                const c = view.getUint8(pos);
                if (!asciiBytes_1.isDigitByte(c)) {
                    throw new Error(`Unexpected ${c} at position ${pos}`);
                }
                readAhead += String.fromCharCode(c);
            }
        }
        return [out, pos];
    }
    static loadB(b) {
        return Canonical_S_Expressions.readList(b)[0];
    }
    static dumpB(seq) {
        return asciiBytes_1.bAppend(asciiBytes_1.b('('), asciiBytes_1.b(seq), asciiBytes_1.b(')'));
    }
    static dump(seq, fd) {
        if (asciiBytes_1.isNodeJS) {
            const fs = require('fs');
            return fs.writeSync(fd, asciiBytes_1.ab2b(asciiBytes_1.b(seq)));
        }
        else {
            const blob = new Blob([asciiBytes_1.b(seq)]);
            return window.URL.createObjectURL(blob);
        }
    }
}
exports.default = Canonical_S_Expressions;
//# sourceMappingURL=index.js.map