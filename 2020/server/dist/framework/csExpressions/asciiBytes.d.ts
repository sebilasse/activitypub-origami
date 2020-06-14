/// <reference types="node" />
export declare const isNodeJS: string | false;
export declare type supportedToByte = string | number | Buffer | ArrayBuffer;
declare enum Bytes {
    '(' = 40,
    ')' = 41,
    '[' = 91,
    ']' = 93,
    ':' = 58
}
export declare function isDigitByte(b: number): boolean;
export declare function isByteChar(view: DataView, pos: number, c: keyof typeof Bytes): boolean;
export declare function b(s: supportedToByte | supportedToByte[]): ArrayBuffer;
export declare function bAppend(...arraybuffers: ArrayBuffer[]): ArrayBuffer;
export declare function b2str(ab: ArrayBuffer): string;
export declare function ab2b(ab: ArrayBuffer): Buffer;
declare function bufferToArrayBufferSlice(buffer: Buffer): ArrayBuffer;
export declare const b2ab: typeof bufferToArrayBufferSlice;
export {};
