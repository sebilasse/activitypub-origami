"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bytes = exports.UInt8Array = exports.SerializationError = exports.cQuoted = exports.cListDot = exports.cCons = exports.cList = exports.cNumber = exports.cString = exports.cSymbol = exports.cNull = void 0;
const is_1 = require("../is");
class Generic {
    constructor(value) {
        this.isAtom = false;
        this.isCons = false;
        this.isList = false;
        this.type = is_1.default(value);
        this.value = value;
    }
    isAlistFn() { return false; }
}
class Abstract extends Generic {
    visit(f) { throw `Not implemented!`; }
    toJS() { throw `Not implemented!`; }
}
class AbstractAtom extends Abstract {
    constructor() {
        super(...arguments);
        this.isAtom = true;
    }
    toJS() { return this.value; }
    toString() { return `${this.value}`; }
}
class AbstractCons extends Abstract {
    constructor() {
        super(...arguments);
        this.isCons = true;
    }
}
class cNull extends AbstractAtom {
    constructor() {
        super(...arguments);
        this.isList = true;
    }
    visit() { }
    toJS() { return null; }
    toString() { return `nil`; }
}
exports.cNull = cNull;
class cSymbol extends AbstractAtom {
}
exports.cSymbol = cSymbol;
class cString extends AbstractAtom {
    toString() { return JSON.stringify(this.value); }
}
exports.cString = cString;
class cNumber extends AbstractAtom {
    constructor() {
        super(...arguments);
        this.isAtom = true;
    }
    toInt() { return parseInt(this.value, 10); }
    toFloat() { return parseFloat(this.value); }
    toJS() {
        if (this.type === 'integer') {
            return this.toInt();
        }
        else if (this.type === 'number') {
            return this.toFloat();
        }
        throw `Unknown SExpNumber type: ${this.type} for ${this.value}`;
    }
}
exports.cNumber = cNumber;
class cList extends AbstractCons {
    constructor() {
        super(...arguments);
        this.isList = true;
    }
    getCar() { return this.value[0]; }
    ;
    getCdr() {
        if (this.value.length < 2)
            return null;
        return new cList(this.value.slice(1));
    }
    ;
    toStr() {
        if (this.value.length == 0)
            return 'nil';
        return `(${this.value.map((i) => i.toString()).join(' ')})`;
    }
    ;
    visit(f) {
        this.value = this.value.map(f);
    }
    ;
    isAlistFn() {
        let L = this.value.length;
        for (var i = 0; i < L; i++) {
            if (!this.value[i].isCons())
                return false;
        }
        return true;
    }
    ;
    toJS() {
        return this.value.map((i) => i.toJS());
    }
    ;
    toObject() {
        const ret = {};
        this.value.forEach((item) => {
            if (!item.isCons()) {
                throw `"${item.toStr()}" is not alist form in [${this.toStr()}]`;
            }
            ret[item.getCar().toJS()] = item.getCdr().toJS();
        }, this);
        return ret;
    }
}
exports.cList = cList;
class cCons extends AbstractCons {
    constructor(value, cdr) {
        super(value);
        this.isCons = true;
        this.cdr = cdr;
    }
    getCar() { return this.value; }
    getCdr() { return this.cdr; }
    toStr() {
        if (this.cdr.isList() && this.cdr.list.length == 0) {
            return "(" + this.value.toString() + ")";
        }
        if (this.cdr.isList() && this.cdr.list.length > 0) {
            return `(${this.value.toString()} ` +
                `${this.cdr.list.map((i) => i.toString()).join(' ')})`;
        }
        return `(${this.value.toString()} . ${this.cdr.toString()})`;
    }
    visit(f) {
        this.value = f(this.value);
        this.cdr = f(this.cdr);
    }
    toJS() {
        return [this.value.toJS(), this.cdr.toJS()];
    }
}
exports.cCons = cCons;
class cListDot extends AbstractCons {
    constructor(value, last) {
        super(value);
        this.last = last;
    }
    get car() { return this.value[0]; }
    get cdr() {
        const L = this.value.length;
        return L == 2 ?
            new cCons(this.value[1], this.last) :
            new cListDot(this.value.slice(1), this.last);
    }
    toStr() {
        return `(${this.value.map((i) => i.toString()).join(' ')})` +
            ` . ${this.last.toStr()})`;
    }
    ;
    visit(f) {
        this.value = this.value.map(f);
        this.last = f(this.last);
    }
    ;
    toJS() {
        return this.value.map((i) => i.toJS()).concat([this.last.toJS()]);
    }
    ;
}
exports.cListDot = cListDot;
class cQuoted extends Abstract {
    toStr() {
        return `'` + this.value.toString();
    }
    visit(f) {
        this.value.visit(f);
    }
    toJS() {
        return [this.value.toJS()];
    }
}
exports.cQuoted = cQuoted;
class AST {
    static Abstract(v) { return new Abstract(v); }
    static Null(v) { return new cNull(v); }
    static Symbol(v) { return new cSymbol(v); }
    static String(v) { return new cString(v); }
    static Number(v) { return new cNumber(v); }
    static List(v) { return new cList(v); }
    static ListDot(v, last) { return new cListDot(v, last); }
    static Cons(v, cdr) { return new cCons(v, cdr); }
    static Quoted(v) { return new cQuoted(v); }
}
exports.default = AST;
class SerializationError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.SerializationError = SerializationError;
class UInt8Array extends Uint8Array {
    __add__(aBytes) {
        let result = new UInt8Array(this.length + aBytes.length);
        result.set(this);
        result.set(aBytes, this.length);
        return result;
    }
    __mul__(scalar) {
        let result = new UInt8Array(scalar * this.length);
        for (let i = 0; i < scalar; i++) {
            result.set(this, i * this.length);
        }
        return result;
    }
    __rmul__(scalar) { return this.__mul__(scalar); }
}
exports.UInt8Array = UInt8Array;
function bytes(bytable) {
    if (bytable == undefined) {
        return new UInt8Array(0);
    }
    else {
        switch (is_1.default(bytable)) {
            case 'array':
                return new UInt8Array(bytable);
            case 'integer':
                return new UInt8Array(bytable);
            case 'string':
                const L = bytable.length;
                let aBytes = new UInt8Array(L);
                for (let i = 0; i < L; i++) {
                    aBytes[i] = bytable.charCodeAt(i);
                }
                return aBytes;
            default:
                throw new TypeError();
        }
    }
}
exports.bytes = bytes;
//# sourceMappingURL=csExpAST.js.map