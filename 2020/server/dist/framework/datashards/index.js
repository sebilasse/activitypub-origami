"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotImplementedError = void 0;
const csExpressions_1 = require("../csExpressions");
const asciiBytes_1 = require("../csExpressions/asciiBytes");
const base64_1 = require("./base64");
if (asciiBytes_1.isNodeJS) {
    forge = require('node-forge');
}
var Constants;
(function (Constants) {
    Constants[Constants["IV_SIZE"] = 16] = "IV_SIZE";
    Constants[Constants["CHUNK_SIZE"] = 32768] = "CHUNK_SIZE";
    Constants[Constants["MAX_RAW_SIZE"] = 32755] = "MAX_RAW_SIZE";
    Constants[Constants["KEY_SIZE"] = 32] = "KEY_SIZE";
})(Constants || (Constants = {}));
class NotImplementedError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.NotImplementedError = NotImplementedError;
class Shipper {
    constructor(store) {
        this.canNot = `Store doesn't support the method`;
        this.canNotLoad = `Could not load file`;
        this.canOnly = `Shipper can only handle`;
        this.store = {};
        this.store = store;
    }
    async upload(fd, keyFn = this.generateKey) {
        const fs = asciiBytes_1.isNodeJS ? require('fs') : new FileReader();
        if (!this.store.hasOwnProperty('put')) {
            throw new NotImplementedError(`${this.canNot} PUT`);
        }
        if (!asciiBytes_1.isNodeJS && !(fd instanceof File)) {
            throw new NotImplementedError(`Handles only Files. Submit a FileList item.`);
        }
        const { size } = asciiBytes_1.isNodeJS ? fs.fstatSync(fd) : fd.size;
        const key = keyFn();
        const b64Key = base64_1.urlEncode(key.toString('ascii')).replace(/[=]*$/g, '');
        return new Promise((resolve, reject) => {
            if (size <= Constants.MAX_RAW_SIZE) {
                const storeData = (data) => {
                    try {
                        const sExp = this.createRawShard(data);
                        const paddedExp = this.pad(sExp);
                        const encryptedData = this.encryptShardEntry(paddedExp, key);
                        const xtUrn = this.store.put(encryptedData);
                        const xt = xtUrn.split(':')[2];
                        resolve(`idsc:p0.${xt}.${b64Key}`);
                    }
                    catch (e) {
                        reject(e);
                    }
                };
                if (asciiBytes_1.isNodeJS) {
                    fs.fstat(fd, (err, stats) => {
                        if (err) {
                            return reject(err);
                        }
                        const buffer = new Buffer(stats.size);
                        fs.read(fd, buffer, 0, buffer.length, null, (error, bRead, buffer) => {
                            if (error) {
                                return reject(error);
                            }
                            storeData(asciiBytes_1.b2ab(buffer));
                        });
                    });
                }
                else {
                    let fr = new FileReader();
                    fr.onerror = () => {
                        return reject(new Error(this.canNotLoad));
                    };
                    fr.onload = () => {
                        if (!(fr.result instanceof ArrayBuffer)) {
                            return reject(new Error(this.canNotLoad));
                        }
                        storeData(fr.result);
                    };
                    fr.readAsArrayBuffer(fd);
                }
            }
            else {
                return new Promise((resolve, reject) => {
                    const xts = [];
                    let count = 0;
                    let pos = 0;
                    while (pos <= size) {
                        let rawData = new ArrayBuffer(size);
                        fs.readSync(fd, rawData, pos, Constants.CHUNK_SIZE, null);
                        if (rawData.byteLength < Constants.CHUNK_SIZE) {
                            rawData = this.pad(rawData);
                        }
                        const data = this.encryptShardChunk(rawData, key, count);
                        const xtUrn = this.store.put(data);
                        xts.push(xtUrn);
                        count += 1;
                        pos += Constants.CHUNK_SIZE;
                    }
                    const manifest = this.createManifest(xts, size);
                    const paddedManifest = this.pad(manifest);
                    const encryptedManifest = this.encryptShardEntry(paddedManifest, key);
                    const xtUrn = this.store.put(encryptedManifest);
                    const xt = xtUrn.split(':')[2];
                    resolve(`idsc:p0.${xt}.${b64Key}`);
                });
            }
        });
    }
    download(urn, fd) {
        if (!(this.store.hasOwnProperty('get'))) {
            throw new NotImplementedError(`${this.canNot} GET`);
        }
        const [scheme, payload] = urn.split(':');
        if (scheme !== 'idsc') {
            throw new NotImplementedError(`${this.canOnly} IDSCs yet`);
        }
        const [encSuite, xt, b64keyPrepad] = payload.split('.');
        if (encSuite !== 'p0') {
            throw new NotImplementedError(`${this.canOnly} encSuite: 'p0'`);
        }
        const pad = '='.repeat(4 - ((b64keyPrepad.length) % 4));
        const key = base64_1.urlDecode(b64keyPrepad + pad);
        const xtUrn = `urn:sha256d:${xt}`;
        const encryptedData = this.store.get(xtUrn);
        const decryptedData = this.decryptShardEntry(encryptedData, asciiBytes_1.b(key));
        let data = csExpressions_1.default.loadB(decryptedData);
        if (data[0].toString() === 'raw') {
            return;
        }
        else if (data[0].toString() === 'manifest') {
            const manifest = this.readManifest(data);
            const [size, ...chunks] = manifest;
            let i = 0;
            let pos = 0;
            for (let chunk in chunks) {
                const encryptedData = this.store.get(chunk);
                data = this.decryptShardChunk(encryptedData, asciiBytes_1.b(key), i);
                pos += Constants.CHUNK_SIZE;
                if (pos > size) {
                }
                else {
                }
                i += 1;
            }
        }
    }
    generateKey(length = Constants.KEY_SIZE) {
        return forge.random.getBytesSync(length);
    }
    createIV(key, prefix, count = 0) {
        const raw = `${prefix}${count}${key}`;
        return asciiBytes_1.bAppend(asciiBytes_1.b(raw), forge.random.getBytesSync(Constants.KEY_SIZE));
    }
    createCipherIV(key, prefix, count = 0) {
        const cipher = forge.cipher.createCipher('AES-CTR', key);
        cipher.start({ iv: this.createIV(key, prefix, count) });
        return cipher;
    }
    createDecipherIV(key, prefix, count = 0) {
        const decipher = forge.cipher.createDecipher('AES-CTR', key);
        decipher.start({ iv: this.createIV(key, prefix, count) });
        return decipher;
    }
    encryptShardEntry(data, key) {
        const iv = this.createCipherIV(key, 'entry-point');
        iv.update(new forge.util.ByteBuffer(data)) && iv.finish();
        return iv.output;
    }
    decryptShardEntry(data, key) {
        const iv = this.createDecipherIV(key, 'entry-point');
        iv.update(new forge.util.ByteBuffer(data)) && iv.finish();
        return iv.output;
    }
    encryptShardChunk(data, key, count) {
        const iv = this.createCipherIV(key, 'content', count);
        iv.update(new forge.util.ByteBuffer(data)) && iv.finish();
        return iv.output;
    }
    decryptShardChunk(data, key, count) {
        const iv = this.createDecipherIV(key, 'content', count);
        iv.update(new forge.util.ByteBuffer(data)) && iv.finish();
        return iv.output;
    }
    createManifest(xts, size) {
        const manifest = csExpressions_1.default.dumpB(['manifest', size].concat(xts));
        if (manifest.byteLength > Constants.MAX_RAW_SIZE) {
            throw new NotImplementedError('Manifest too large');
        }
        return manifest;
    }
    pad(data, size = Constants.CHUNK_SIZE) {
        return asciiBytes_1.bAppend(data, (new ArrayBuffer(size - data.byteLength)));
    }
    readManifest(mlist) {
        const xts = mlist.slice(2);
        const manifest = [`${mlist[0]}`, parseInt(mlist[1], 10), ...xts];
        return manifest;
    }
    createRawShard(data) {
        return csExpressions_1.default.dumpB(asciiBytes_1.bAppend(asciiBytes_1.b('raw'), data));
    }
}
exports.default = Shipper;
//# sourceMappingURL=index.js.map