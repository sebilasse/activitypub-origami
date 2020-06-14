"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expiration = exports.verifyTimeout = exports.baseUrl = void 0;
exports.baseUrl = 'https://redaktor.circinus.uberspace.de/redaktornode/';
exports.verifyTimeout = 15000;
exports.expiration = {
    mail: (5 * 60 * 1000),
    sms: (4 * 60 * 1000)
};
//# sourceMappingURL=config.js.map