"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const nodemailer = require("nodemailer");
const common_1 = require("@nestjs/common");
const uuid_1 = require("./framework/uuid");
const base64_1 = require("./framework/base64");
const fs = require("fs");
const path = require("path");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const packageJSON = require('../package.json');
const snarkdown = require('snarkdown');
const ap = {
    '@context': 'https://www.w3.org/ns/activitystreams',
    type: 'Create',
    id: 'https://social.example/alyssa/posts/a29a6843-9feb-4c74-a7f7-081b9c9201d3',
    to: ['https://chatty.example/ben/'],
    actor: 'https://social.example/alyssa/',
    object: {
        type: 'Note',
        id: 'https://social.example/alyssa/posts/49e2d03d-b53a-4c4c-a95c-94a6abf45a19',
        attributedTo: 'https://social.example/alyssa/',
        to: ['https://chatty.example/ben/'],
        content: 'Say, did you finish reading that book I lent you?'
    }
};
const v4r = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
const { host = 'http://localhost', port: __p = 587 } = packageJSON.redaktor.smtp;
const _p = typeof __p === 'number' ? __p :
    (typeof __p === 'string' ? parseInt(__p, 10) : 587);
const port = _p > 0 && _p <= 65535 ? _p : 587;
const transporter = nodemailer.createTransport({
    host, port,
    secure: (port === 465),
    auth: {
        type: 'login',
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
});
let AppService = class AppService {
    _getFile(id, isConfirmed = false, ending = 'json') {
        const stateDirectory = isConfirmed ? '_registered' : '_pending';
        return path.join(__dirname, '..', stateDirectory, `${id}.${ending}`);
    }
    getHello() {
        return 'Hello Fediverse!';
    }
    async postRegistration(createUserDto) {
        if (!!createUserDto.confirmed.length) {
            return true;
        }
        const id = uuid_1.default();
        const confirmBase = packageJSON.redaktor.confirmationEndpoint || 'http://localhost/confirm';
        const confirmLink = path.join(confirmBase, base64_1.encode(`apconf--${id}`));
        await writeFile(this._getFile(id), JSON.stringify(Object.assign(Object.assign({}, createUserDto), { status: 'pending' })));
        const text = `
**Hello ${createUserDto.publicBadgeName},**\n
-> a nice text follows.
\n\n
Please confirm your registration by visiting this link:\n
[${confirmLink}](${confirmLink})
\n\n
Thank you,\n
Morgan Lemmer Webber and Sebastian Lasse\n
`;
        const html = snarkdown(text.replace(/\n/g, '<br />'));
        const info = await transporter.sendMail({
            from: `"ActivityPub Conference" <${packageJSON.redaktor.smtp.from}>`,
            to: createUserDto.privateEmail,
            subject: "⬡ Please confirm your registration for ActivityPub Conference 2020",
            text,
            html
        });
        return info.messageId;
    }
    async getConfirm(fileId) {
        try {
            if (typeof fileId !== 'string' || !fileId) {
                throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);
            }
            const [prefix = '', id = ''] = base64_1.decode(fileId).split('--');
            if (prefix !== 'apconf' || id.length !== 36 || !id.match(v4r) ||
                !fs.existsSync(this._getFile(id))) {
                throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);
            }
            const registration = JSON.parse(fs.readFileSync(this._getFile(id), { encoding: 'utf8' }));
            const lanyard = fs.readFileSync(`${path.join(__dirname, '..', 'lanyard.svg')}`, { encoding: 'utf8' })
                .replace('{{name}}', registration.publicBadgeName)
                .replace('{{url}}', registration.website)
                .replace('{{byline}}', registration.publicBadgeByline)
                .replace('{{timezone}}', registration.timezone)
                .replace('{{id}}', `{{${id.substr(0, 8)}}}`);
            registration.status = 'confirmed';
            const data = Object.keys(registration).map((k) => `**${k}:**  \n${registration[k]}`).join('\n\n');
            const text = `
**Hello ${registration.publicBadgeName},**\n
you registered for the virtual ActivityPub Conference 2020,\n
-> nice text.\n
We received this:\n\n
${data}
\n\n
Thank you,\n
Morgan Lemmer Webber and Sebastian Lasse\n
`;
            const html = snarkdown(text.replace(/\n/g, '<br />'));
            await transporter.sendMail({
                from: `"ActivityPub Conference" <${packageJSON.redaktor.smtp.from}>`,
                to: `${registration.privateEmail}`,
                subject: "⬡ Confirmed registration for ActivityPub Conference 2020",
                text,
                html,
                icalEvent: {
                    method: 'PUBLISH',
                    filename: 'apconf.ics',
                    path: `${path.join(__dirname, '..')}/ActivityPub_Conference.ics`
                },
                attachments: [
                    { filename: 'ActivityPubConf2020.svg', content: lanyard }
                ]
            });
            const registrationJSON = JSON.stringify(registration);
            await writeFile(this._getFile(id, true), registrationJSON);
            await writeFile(this._getFile(id, true, 'svg'), lanyard);
            return true;
        }
        catch (e) {
            throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);
        }
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map