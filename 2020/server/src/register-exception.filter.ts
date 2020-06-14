import { ExceptionFilter, Catch, ArgumentsHost, BadRequestException } from '@nestjs/common';
import { Request, Response } from 'express';
const packageJSON = require('../package.json');

@Catch(BadRequestException)
export class RegisterExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    // const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    
console.log('exception', exception);
    response
      .status(status)
      .redirect(`${packageJSON.redaktor.base||'http://localhost'}/register/error/`)
      /*
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      }); */
  }
}
