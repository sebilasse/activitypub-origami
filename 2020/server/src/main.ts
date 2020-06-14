import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
const packageJSON = require('../package.json');
const { port: __p } = packageJSON.redaktor;
const _p = typeof __p === 'number' ? __p :
  (typeof __p === 'string' ? parseInt(__p, 10) : 3000);
const port = _p > 0 && _p <= 65535 ? _p : 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
  console.log('*');
  console.log(`APCONF listens on port ${port} !`);
  fs.writeFileSync('./log.txt', port+' '+AppModule.toString());
}
bootstrap();
