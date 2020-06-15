import * as nodemailer from 'nodemailer';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './app.controller';
import uuid from './framework/uuid';
import { encode, decode } from './framework/base64';
import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';
const writeFile = util.promisify(fs.writeFile);
const packageJSON = require('../package.json');
const snarkdown = require('snarkdown');

const v4r = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
// create reusable transporter object using the default SMTP transport
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

@Injectable()
export class AppService {
  private _getFile(id, isConfirmed = false, ending = 'json'): string {
    const stateDirectory = isConfirmed ? '_registered' : '_pending';
    return path.join(__dirname, '..', stateDirectory, `${id}.${ending}`)
  }

  getHello(): string {
    return 'Hello Fediverse!';
  }
  async postRegistration(createUserDto: CreateUserDto) {
    if (!!createUserDto.confirmed.length) {
      // it was a bot
      return true
    }
    const id = uuid();
    const confirmBase = packageJSON.redaktor.confirmationEndpoint||'http://localhost/confirm';
    const confirmLink = path.join(confirmBase, encode(`apconf--${id}`));
    await writeFile(this._getFile(id), JSON.stringify({
      ...createUserDto,
      status: 'pending'
    }));

    const text = `
**Hello ${createUserDto.publicBadgeName},**
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
    // console.log("Message sent: %s", info.messageId);
    // console.log(JSON.stringify(createUserDto));

    return info.messageId
  }

  async getConfirm(fileId: string) {
    try {
      if (typeof fileId !== 'string' || !fileId) {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
      }
      const [prefix = '', id = ''] = decode(fileId).split('--');
      if (prefix !== 'apconf' || id.length !== 36 || !id.match(v4r) ||
        !fs.existsSync(this._getFile(id))) {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
      }
      // console.log('getConfirmation', id);
      const registration = JSON.parse(fs.readFileSync(this._getFile(id), {encoding:'utf8'}));
      const lanyard = fs.readFileSync(`${path.join(__dirname, '..', 'lanyard.svg')}`, {encoding:'utf8'})
        .replace('{{name}}', registration.publicBadgeName)
        .replace('{{url}}', registration.website)
        .replace('{{byline}}', registration.publicBadgeByline)
        .replace('{{timezone}}', registration.timezone)
        .replace('{{id}}', `{{${id.substr(0,8)}}}`)
        ;

      registration.status = 'confirmed';
      const caseR = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
      const data = Object.keys(registration).map((k) =>
        `**${k.replace(caseR, '$1$4 $2$3$5')}:**  \n${registration[k]}`).join('\n\n');

      const text = `
**Hello ${registration.publicBadgeName},**\n\n
Thank you for registering for the ActivityPub Conference 2020.\n
You’re now on the registration list and we look forward to seeing you remotely in October!\n
We will get in touch with further details.\n
Please find your lanyard information below.
\n\n
${data}
\n\n
Thank you,\n
Morgan Lemmer Webber and Sebastian Lasse\n
`;
      const html = snarkdown(text.replace(/\n/g, '<br />'));

      await transporter.sendMail({
        from: `"ActivityPub Conference" <${packageJSON.redaktor.smtp.from}>`,
        to: `${registration.privateEmail}`,
        bcc: packageJSON.redaktor.smtp.bcc,
        // TODO BCC ! */
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
      return true

    } catch (e) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

  }

}
