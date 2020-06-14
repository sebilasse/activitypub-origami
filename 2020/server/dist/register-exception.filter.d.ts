import { ExceptionFilter, ArgumentsHost, BadRequestException } from '@nestjs/common';
export declare class RegisterExceptionFilter implements ExceptionFilter {
    catch(exception: BadRequestException, host: ArgumentsHost): void;
}
