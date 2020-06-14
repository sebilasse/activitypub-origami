export declare class NotImplementedError extends Error {
    constructor(message: string);
}
export default class Shipper {
    private canNot;
    private canNotLoad;
    private canOnly;
    protected store: any;
    constructor(store: any);
    upload(fd: number | File, keyFn?: (length?: number) => any): Promise<string>;
    download(urn: string, fd: number | File): void;
    private generateKey;
    private createIV;
    private createCipherIV;
    private createDecipherIV;
    private encryptShardEntry;
    private decryptShardEntry;
    private encryptShardChunk;
    private decryptShardChunk;
    private createManifest;
    private pad;
    private readManifest;
    private createRawShard;
}
