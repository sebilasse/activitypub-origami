import { supportedToByte } from './asciiBytes';
export default class Canonical_S_Expressions {
    static readHint(buf: ArrayBuffer, pos: number): [ArrayBuffer, number];
    static readList(buf: ArrayBuffer, pos?: number): [any[], number];
    static loadB(b: ArrayBuffer): any[];
    static dumpB(seq: supportedToByte | supportedToByte[]): ArrayBuffer;
    static dump(seq: any[], fd: number): any;
}
