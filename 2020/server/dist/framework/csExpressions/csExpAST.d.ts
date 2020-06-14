import { TOF } from '../is';
declare type MapFn = (x: any, i?: number, a?: any[]) => any;
declare class Generic<T> {
    type: TOF;
    value: T;
    constructor(value: T);
    isAtom: boolean;
    isCons: boolean;
    isList: boolean;
    isAlistFn(): boolean;
}
declare class Abstract<T> extends Generic<T> {
    visit(f?: MapFn): void;
    toJS(): void;
}
declare class AbstractAtom<T> extends Abstract<T> {
    isAtom: boolean;
    toJS(): any;
    toString(): any;
}
declare class AbstractCons<T> extends Abstract<T> {
    isCons: boolean;
}
export declare class cNull extends AbstractAtom<null> {
    isList: boolean;
    visit(): void;
    toJS(): any;
    toString(): string;
}
export declare class cSymbol extends AbstractAtom<string> {
}
export declare class cString extends AbstractAtom<string> {
    toString(): string;
}
export declare class cNumber extends AbstractAtom<string> {
    isAtom: boolean;
    toInt(): number;
    toFloat(): number;
    toJS(): number;
}
export declare class cList extends AbstractCons<any[]> {
    isList: boolean;
    getCar(): any;
    getCdr(): cList;
    toStr(): string;
    visit(f: MapFn): void;
    isAlistFn(): boolean;
    toJS(): any[];
    toObject(): any;
}
export declare class cCons extends AbstractCons<any> {
    cdr: any;
    isCons: boolean;
    constructor(value: string, cdr: any);
    getCar(): any;
    getCdr(): any;
    toStr(): string;
    visit(f: MapFn): void;
    toJS(): any[];
}
export declare class cListDot extends AbstractCons<any[]> {
    last: any;
    constructor(value: any[], last: any);
    get car(): any;
    get cdr(): cCons | cListDot;
    toStr(): string;
    visit(f: MapFn): void;
    toJS(): any[];
}
export declare class cQuoted extends Abstract<Abstract<string>> {
    toStr(): string;
    visit(f: any): void;
    toJS(): void[];
}
export default class AST {
    static Abstract(v: any): Abstract<any>;
    static Null(v: any): cNull;
    static Symbol(v: any): cSymbol;
    static String(v: any): cString;
    static Number(v: any): cNumber;
    static List(v: any): cList;
    static ListDot(v: any, last: any): cListDot;
    static Cons(v: any, cdr: any): cCons;
    static Quoted(v: any): cQuoted;
}
export declare class SerializationError extends Error {
    constructor(message: string);
}
export declare class UInt8Array extends Uint8Array {
    __add__(aBytes: any): UInt8Array;
    __mul__(scalar: number): UInt8Array;
    __rmul__(scalar: number): UInt8Array;
}
export declare function bytes(bytable: any): UInt8Array;
export {};
