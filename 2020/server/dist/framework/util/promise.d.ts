import Promise from '@dojo/framework/shim/Promise';
interface PromiseObject {
    [key: string]: Promise<any>;
}
declare type PromiseFn = (x: Promise<any>, y: string) => Promise<any>;
export declare function objectPromiseAll(obj: PromiseObject, mapFn?: PromiseFn): any;
export {};
