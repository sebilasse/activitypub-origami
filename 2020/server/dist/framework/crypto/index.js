"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hmacAlgorithm = exports.HASH_ALGO = exports.HMAC_ALGO = exports.crypto = void 0;
const has_1 = require("@dojo/framework/core/has");
const log_1 = require("../String/tag/log");
const _crypto = require("crypto");
exports.crypto = has_1.default('host-node') ? _crypto : require('crypto-browserify');
exports.HMAC_ALGO = {
    md5: false,
    ripemd160: false,
    sha1: false,
    sha3: false,
    sha224: false,
    sha256: 'HS256',
    sha384: 'HS384',
    sha512: 'HS512'
};
exports.HASH_ALGO = {
    md5: 'MD5',
    sha1: 'SHA1',
    sha2: 'SHA2',
    sha224: 'SHA224',
    sha256: 'SHA256',
    sha384: 'SHA384',
    sha512: 'SHA512'
};
const env = has_1.default('host-node') ? 'node.js' : 'client';
function hmacAlgorithm(algoStr, isJWT = false) {
    const algo = algoStr.toLowerCase();
    const allow = (isJWT) ?
        (typeof algo === 'string' && typeof exports.HMAC_ALGO[algo] === 'string') :
        (typeof algo === 'string' && exports.HMAC_ALGO.hasOwnProperty(algo));
    if (!allow) {
        const suffix = (isJWT) ? 'for JWT.' : '.';
        log_1.warning `[SECURITY] algorithm ${algoStr} not usable in ${env} or to weak ${suffix}.
    Falling back to sha256.`;
        return { method: 'sha256', alg: exports.HMAC_ALGO['sha256'] };
    }
    return { method: algo, alg: exports.HMAC_ALGO[algo] };
}
exports.hmacAlgorithm = hmacAlgorithm;
class Crypto {
    static randomBytes(size = 32) {
        return exports.crypto.randomBytes(size);
    }
    static hash(text, algo = 'sha256', out = 'hex') {
        if (out === 'buffer') {
            out = void 0;
        }
        if (exports.crypto.getHashes().indexOf(algo.toLowerCase()) === -1) {
            log_1.warning `[SECURITY] algorithm ${algo} not usable in ${env} or to weak.
      Falling back to sha256.`;
            algo = 'sha256';
        }
        return exports.crypto.createHash(algo.toLowerCase()).update(text).digest(out);
    }
    static hmac(text, key, out = 'base64', algo = 'sha256') {
        if (out === 'buffer') {
            out = void 0;
        }
        algo = hmacAlgorithm(algo).method;
        return exports.crypto.createHmac(algo, key).update(text).digest(out);
    }
    static sign(text, key, algo = 'RSA-SHA256', out = 'base64') {
        return exports.crypto.createSign(algo).update(text).sign(key, out);
    }
    static verify(text, key, algo = 'sha256', signature = '', out = 'base64') {
        return exports.crypto.createVerify(algo).update(text).verify(key, signature, out);
    }
}
;
exports.default = Crypto;
//# sourceMappingURL=index.js.map