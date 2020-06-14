import { CreateUserDto } from './app.controller';
export declare class AppService {
    private _getFile;
    getHello(): string;
    postRegistration(createUserDto: CreateUserDto): Promise<any>;
    getConfirm(fileId: string): Promise<boolean>;
}
