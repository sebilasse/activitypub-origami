import { Invalidator } from '@dojo/framework/core/interfaces';
export declare type SubscriptionType = 'data' | 'total' | 'loading' | 'failed';
export interface ResourceOptions {
    pageNumber?: number;
    query?: ResourceQuery[];
    pageSize?: number;
}
export declare type ResourceQuery = {
    keys: string[];
    value: string | undefined;
};
export interface Resource<S = any> {
    (data: S[]): {
        resource: Resource<S>;
        data: S[];
    };
    getOrRead(options: ResourceOptions): any;
    get(options: ResourceOptions): any;
    getTotal(options: ResourceOptions): number | undefined;
    isLoading(options: ResourceOptions): boolean;
    isFailed(options: ResourceOptions): boolean;
    subscribe(type: SubscriptionType, options: ResourceOptions, invalidator: Invalidator): void;
    unsubscribe(invalidator: Invalidator): void;
    set(data: S[]): void;
}
export declare type TransformConfig<T, S = void> = {
    [P in keyof T]: (S extends void ? string : keyof S)[];
};
export interface ReadOptions {
    offset?: number;
    size?: number;
    query?: ResourceQuery[];
}
declare type Putter<S> = (start: number, data: S[]) => void;
declare type Getter<S> = (query?: ResourceQuery[]) => S[];
export declare type DataResponse<S> = {
    data: S[];
    total: number;
};
export declare type DataResponsePromise<S> = Promise<{
    data: S[];
    total: number;
}>;
export declare type DataFetcher<S> = (options: ReadOptions, put: Putter<S>, get: Getter<S>) => DataResponse<S> | DataResponsePromise<S>;
export interface DataTemplate<S = {}> {
    read: DataFetcher<S>;
}
export declare function createTransformer<S, T>(template: DataTemplate<S>, transformer: TransformConfig<T, S>): TransformConfig<T, S>;
export declare function defaultFilter(query: ResourceQuery[], item: any): boolean;
export declare function createMemoryTemplate<S = void>({ filter }?: {
    filter?: (query: ResourceQuery[], v: S) => boolean;
}): DataTemplate<S>;
export declare function createResource<S>(config?: DataTemplate<S>): Resource<S>;
export {};
