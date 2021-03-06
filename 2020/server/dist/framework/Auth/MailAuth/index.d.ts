import AuthBase from '../';
declare class MailAuth extends AuthBase {
    protected email: string | any;
    protected name?: string;
    protected host?: string;
    protected port?: string;
    protected user?: string;
    protected pass?: string;
    protected callbackUrl?: string;
    private clientSecret?;
    protected apiKey?: string;
    protected mailer: any;
    protected xkcdCache: any;
    protected validity: number;
    protected _nonceSize: number;
    protected renderForm: boolean;
    protected iss: string;
    protected info: string;
    protected text: string;
    protected html: string;
    debug: boolean;
    protected _protocol: string;
    protected _version: string;
    protected _type: string;
    protected authOptions: any;
    constructor(email: string | any, name?: string, host?: string, port?: string, user?: string, pass?: string, callbackUrl?: string, clientSecret?: string, apiKey?: string, mailer?: any, xkcdCache?: any, validity?: number, _nonceSize?: number, renderForm?: boolean, iss?: string, info?: string, text?: string, html?: string);
    initMailAuth(): void;
    localOptions(o?: any): any;
    mailgunOptions(o?: any): {};
    options(o?: any): any;
    protected _xkcd(o: any, xkcdData?: any): any;
    protected xkcd(o: any): any;
    protected challenge(o?: any): any;
    protected verify(o?: any): any;
    protected makeMessage(o: any): any;
    protected sendMessage(o: any): any;
    success(o: any, cb?: string): any;
    auth(req?: any, res?: any, kwArgs?: any): Promise<any>;
    access(req: any, res: any): Promise<unknown>;
}
export default MailAuth;
