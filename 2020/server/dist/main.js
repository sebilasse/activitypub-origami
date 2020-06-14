"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const packageJSON = require('../package.json');
const { port: __p } = packageJSON.redaktor;
const _p = typeof __p === 'number' ? __p :
    (typeof __p === 'string' ? parseInt(__p, 10) : 3000);
const port = _p > 0 && _p <= 65535 ? _p : 3000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(port);
    console.log('*');
    console.log(`APCONF listens on port ${port} !`);
    fs.writeFileSync('./log.txt', port + ' ' + app_module_1.AppModule.toString());
}
bootstrap();
//# sourceMappingURL=main.js.map