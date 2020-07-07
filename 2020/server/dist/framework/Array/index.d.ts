import { eachCB, vCB } from '../core';
import Collection from '../Collection';
export default class ARRAY extends Collection {
    protected _input: any[];
    protected _options: any;
    constructor(_input?: any[], _options?: any);
    chunk: (size: number) => this;
    drop: (n: number) => this;
    dropLast: (n: number) => this;
    take: (n: number) => this;
    takeLast: (n: number) => this;
    zip: (...arrays: any[][]) => this;
    zipWith: (...arrays: any[]) => this;
    unzip: () => this;
    unzipWith: (iteratee: (...group: any[]) => any) => this;
    pullAt: (indexes: number[]) => this;
    slice: (start: number, end: number, step: number) => this;
    without: (...values: any[]) => this;
    difference: (...values: any[]) => this;
    differenceBy: (...values: any[]) => this;
    differenceWith: (...values: any[]) => this;
    intersection: (...values: any[]) => this;
    intersectionBy: (...values: any[]) => this;
    intersectionWith: (...values: any[]) => this;
    union: (...values: any[]) => this;
    unionBy: (...values: any[]) => this;
    unionWith: (...values: any[]) => this;
    xor: (...values: any[]) => this;
    xorBy: (...values: any[]) => this;
    xorWith: (...values: any[]) => this;
    pull: (...values: any[]) => this;
    pullAll: (values: any[]) => this;
    pullAllBy: (values: any[], iteratee: vCB) => this;
    makeUniq: () => this;
    uniqBy: (iteratee: eachCB) => this;
    uniqWith: (comparator: eachCB) => this;
    flatten: () => this;
    flattenDeep: (iteratee: eachCB) => this;
    flattenDepth: (iteratee: eachCB) => this;
    findIndex: (predicate: eachCB, start?: number, end?: number) => this;
    findLastIndex: (predicate: eachCB, start?: number, end?: number) => this;
    dropWhile: (predicate: eachCB, start?: number, end?: number) => this;
    dropLastWhile: (predicate: eachCB, start?: number, end?: number) => this;
    takeWhile: (predicate: eachCB, start?: number, end?: number) => this;
    takeLastWhile: (predicate: eachCB, start?: number, end?: number) => this;
    fromPairs: () => this;
    fill: (value: any, start?: number, end?: number) => this;
    excludeFalsy: (...values: any[]) => this;
    zipObject: (values: any[]) => this;
    remove: (predicate: number | eachCB) => this;
}