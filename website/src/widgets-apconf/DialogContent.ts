import { v } from '@dojo/framework/widget-core/d';
import { cc0 } from './assets';
import { CodeOfConductLink } from './tabs/InfoTab';
import * as css from '../styles/app.m.css';
const base = 'https://redaktor.me/_deliver/apconf/';

export const Privacy = [
	v('h3', {classes: css.accent}, ['1. At the Conference ', v('img', {
		src: `${base}APConfLogo.png`,
		alt: 'ActivityPub Conf',
		classes: [css.iconImg, css.iconXLarge, css.rightImage]
	})]),
	v('h4', {classes: [css.serif, css.accent]}, ['Concerns']),
	`Please raise any concerns over privacy at the conference desk or contact a conf organiser. `,
	`We are happy to help!`,
	v('br'), v('br'),
	v('h4', {classes: [css.serif, css.accent]}, ['Filming and Photography']),
	`The talks for APConf will be recorded.
We will also be taking candid photos throughout the event.
Media will be released on peertube and on other ActivityPub services
(e.g. pixelfed) following the conference.`,
v('br'), v('br'),
	`📸 `, v('b', {classes: css.muted}, [
		`If you are ok being photographed at the conference,`, v('br'), ` choose a `
	]), v('b', [`black lanyard `]),
	v('b', {classes: css.muted}, [
		`to indicate your consent to be photographed.`
	]), v('br'), v('br'),
	v('span', {classes: css.donot}, [`📷`]),
	v('b', {classes: css.muted}, [
		` If you do not wish to be photographed at the conference, please choose a `,
	]),
	v('b', {classes: css.accent}, ['red lanyard']),
	v('b', {classes: css.muted}, [
		` to indicate that you do not consent to be photographed.`
	]), v('br'), v('br'),

	v('hr'),
	v('h3', {classes: css.accent}, ['2. An overview of data protection']),

	v('p', {classes: css.strong}, [
`The following gives a simple overview of what happens to your personal information
when you visit our website. Personal information is any data with which you could be
personally identified. Detailed information on the subject of data protection can be
found in our privacy policy found below.`
	]),
	v('h4', {classes: [css.serif, css.accent]}, ['Data collection on our website']),
	v('b', {classes: [css.strong, css.muted]}, [
		`Who is responsible for the data collection on this website?`, v('br')
	]),
	`The data collected on this website are processed by the website operator.
The operator's contact details can be found in the website's info section.`,

	v('br'),v('br'),
	v('b', {classes: [css.strong, css.muted]}, [
		`How do we collect your data?`, v('br')
	]),
	'We try to do not.', v('br'),
	`Some data might be collected when you provide it to us. This could, for example,
be data you enter on a contact form.
Right now we don't have any contact form or set cookies on our site and we neither will use
any trackers like Google Analytics, Clicky or similar.
Pixels are there just to watch.`, v('br'), v('br'),
`Other data are collected automatically by our IT systems when you visit the website.
These data are primarily technical data such as the browser and operating system you are using
or when you accessed the page. These data are collected automatically as soon as you enter our website.`,
	v('br'),v('br'),
	v('b', {classes: [css.strong, css.muted]}, [
		`What do we use your data for?`, v('br')
	]),
	`Part of the data is collected to ensure the proper functioning of the website.`,
	v('br'),v('br'),
	v('b', {classes: [css.strong, css.muted]}, [
		`What rights do you have regarding your data?`, v('br')
	]),
	`You always have the right to request information about your stored data, its origin,
its recipients, and the purpose of its collection at no charge. You also have the right to request that it
be corrected, blocked, or deleted. You can contact us at any time using the address given in the legal notice
if you have further questions about the issue of privacy and data protection. You may also, of course, file a
complaint with the competent regulatory authorities.`, v('br'), v('br'),

	v('hr'),
	v('h3', {classes: css.accent}, ['3. General information and mandatory information']),

	v('h4', {classes: [css.serif, css.accent]}, ['Data protection']),
	`The operators of this website take the protection of your personal data very seriously.
We treat your personal data as confidential and in accordance with the statutory data protection regulations
and this privacy policy.`, v('br'),
`If you use this website, various pieces of personal data will be collected.
Personal information is any data with which you could be personally identified.
This privacy policy explains what information we collect and what we use it for.
It also explains how and for what purpose this happens.`, v('br'), v('br'),
`Please note that data transmitted via the internet (e.g. via email communication)
may be subject to security breaches. Complete protection of your data from third-party access is not possible.`,
	v('br'),v('br'),
	v('h4', {classes: [css.serif, css.accent]}, ['Notice concerning the party responsible for this website']),
	`The party responsible for processing data on this website is:`, v('br'), v('br'),
	`Sebastian Lasse, Hamburg, Germany`, v('br'),
	`eMail: mail@redaktor.me`, v('br'), v('br'),
	`The responsible party is the natural or legal person who alone or jointly with others
decides on the purposes and means of processing personal data (names, email addresses, etc.).
The redaktor foundation will audit this policy.`,
	v('br'),v('br'),
	v('h4', {classes: [css.serif, css.accent]}, ['SSL or TLS encryption']),
	`This site uses SSL or TLS encryption for security reasons and for the protection of the
transmission of confidential content, such as the inquiries you send to us as the site operator.
You can recognize an encrypted connection in your browser's address line when it changes from "http://" to "https://"
and the lock icon is displayed in your browser's address bar.`, v('br'), v('br'),
`If SSL or TLS encryption is activated, the data you transfer to us currently cannot be read by third parties.`,
	v('br'),v('br'),
	v('h4', {classes: [css.serif, css.accent]}, ['Revocation of your consent to the processing of your data']),
`Many data processing operations are only possible with your express consent. You may revoke your consent
at any time with future effect. An informal email making this request is sufficient. The data processed
before we receive your request may still be legally processed.`,
	v('br'),v('br'),
	v('h4', {classes: [css.serif, css.accent]}, ['Information, blocking, deletion']),
	`As permitted by law, you have the right to be provided at any time with information free of charge
about any of your personal data that is stored as well as its origin, the recipient and the purpose for which
it has been processed. You also have the right to have this data corrected, blocked or deleted. You can contact us
at any time using the address given in our legal notice if you have further questions on the topic of personal data.`,
	v('br'),v('br'),

	v('hr'),
	v('h3', {classes: css.accent}, ['4. Data collection on our website']),

	v('h4', {classes: [css.serif, css.accent]}, ['Server log files']),
	`The website provider automatically collects and stores information that your browser automatically transmits
to us in "server log files". These are:`,
	v('ul', [
		v('li', ['Browser type and browser version']),
		v('li', ['Operating system used']),
		v('li', ['Referrer URL']),
		v('li', ['Host name of the accessing computer']),
		v('li', ['Time of the server request']),
		v('li', ['IP address'])
	]),
	`These data will not be combined with data from other sources.`, v('br'), v('br'),
	`The basis for data processing is Art. 6 (1) (f) GDPR, which allows the processing of data to fulfill a
contract or for measures preliminary to a contract.`,
	v('br'),v('br'),
	v('h4', {classes: [css.serif, css.accent]}, ['Processing of data (customer and contract data)']),
	`We collect, process, and use personal data only insofar as it is necessary to establish, or modify legal
relationships with us (master data). This is done based on Art. 6 (1) (b) GDPR, which allows the processing of data
to fulfill a contract or for measures preliminary to a contract. We collect, process and use your personal data when
accessing our website (usage data) only to the extent required to enable you to access our service or to bill you for
the same.`, v('br'),
`Collected customer data shall be deleted after completion of the order or termination of the business relationship.
Legal retention periods remain unaffected.`,
	v('br'),v('br'),
	v('h4', {classes: [css.serif, css.accent]}, ['Data transferred when signing up for services and digital content']),
	`We transmit personally identifiable data to third parties only to the extent required to fulfill the terms of your
contract with us, for example, to banks entrusted to process your payments.`, v('br'),
`Your data will not be transmitted for any other purpose unless you have given your express permission to do so.
Your data will not be disclosed to third parties for advertising purposes without your express consent.`, v('br'), v('br'),
`The basis for data processing is Art. 6 (1) (b) GDPR, which allows the processing of data to fulfill a contract or for
measures preliminary to a contract.`,
	v('hr'),
	v('h3', {classes: css.accent}, ['5. eMail']),
`If you registered for the event, we require a valid email address as well as information that allows us to verify
that you are the owner of the specified email address and that you agree to receive this newsletter.
No additional data is collected or is only collected on a voluntary basis.
We only use this data to send the requested information and do not pass it on to third parties.`, v('br'), v('br'),
`We will, therefore, process any data you enter onto the contact form only with your consent per Art. 6 (1) (a) GDPR.
You can revoke consent to the storage of your data and email address as well as their use for sending the newsletter
at any time. The data processed before we receive your request may still be legally processed.`, v('br'), v('br'),
`The data provided when registering for the newsletter will be used to distribute the newsletter until you cancel
your subscription when said data will be deleted. Data we have stored for other purposes (e.g. email addresses for
the members area) remain unaffected.`];

export const CodeOfConduct = [
	v('h3', {classes: css.accent}, ['Safety First']),
	v('b', {classes: css.muted}, [
		`By registering and attending the conference, you have agreed`, v('br'),
		`to follow the terms of our Code of Conduct.`,
	]), v('br'),
	`In the interest of fostering an open and welcoming environment: `, v('br'), v('br'),
	CodeOfConductLink('Read the full Code of Conduct !', 'https://www.contributor-covenant.org/version/1/4/code-of-conduct'),
	v('br'), v('br'),  v('br'),
	`Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting
the project team [see info section] at `, v('br'),
v('a', {
	href: 'mailto:activitypubconf@gmail.com',
	rel: 'help noopener noreferrer'
}, [
	v('b', ['activitypubconf@gmail.com'])
]),
v('br'), v('br'),
`We have adopted the `,
v('a', {
	href: 'https://www.contributor-covenant.org/',
	target: '_blank', rel: 'extenal noopener noreferrer'
}, ['Contributor Covenant']),
` (version 1.4) for `,
v('img', {
	src: `${base}APConfLogo.png`,
	alt: 'ActivityPub Conference 2019',
	classes: [css.iconImg, css.iconXLarge]
}), v('br'), v('br'),
`For answers to common questions about this code of conduct, see `,
v('a', {
	href: 'https://www.contributor-covenant.org/',
	target: '_blank', rel: 'extenal noopener noreferrer'
}, ['FAQ'])
];

export const Licensing = [
	v('h3', {classes: css.accent}, ['Creative Commons']),
	`By default APConf media will be released under a CC BY license.`, v('br'), v('br'),
	v('b', {classes: [css.strong, css.muted]}, [
		`Keynotes, talks and presentations`
	]), v('br'),
	`The content of the presentations belongs to the presenters and therefore each talk will be
released as either `,
	v('a', {
		href: 'https://creativecommons.org/publicdomain/zero/1.0/deed',
		target: '_blank', rel: 'extenal noopener noreferrer'
	}, ['CC0']), ', ',
	v('a', {
		href: 'https://creativecommons.org/licenses/by/4.0/',
		target: '_blank', rel: 'extenal noopener noreferrer'
	}, ['CC BY']), ' or ',
	v('a', {
		href: 'https://creativecommons.org/licenses/by-sa/4.0/',
		target: '_blank', rel: 'extenal noopener noreferrer'
	}, ['CC BY-SA']),
	 ` per their wishes.`, v('br'), v('br'),
	 v('b', {classes: [css.strong, css.muted]}, [
 	 `Contributor Covenant`
  ]), v('br'),
	v('a', {
		href: 'https://github.com/ContributorCovenant/contributor_covenant/blob/release/LICENSE.md',
		target: '_blank', rel: 'extenal noopener noreferrer'
	}, ['Creative Commons Attribution 4.0 International Public License']), v('br'), v('br'),
	v('b', {classes: [css.strong, css.muted]}, [
	 `Sourcecode`
 ]), v('br'),
	`The dojo build tool and dojo dependencies are licensed under`, v('br'),
	v('a', {
		href: 'https://github.com/dojo/framework/blob/master/LICENSE',
		target: '_blank', rel: 'extenal noopener noreferrer'
	}, ['The "New" BSD License']),
	v('br'), v('br'),
	v('div', {classes: [css.keynoteRow, css.baselined]}, [
		`The `,
		v('a', {
			href: 'https://github.com/sebilasse/activitypub-origami',
			target: '_blank', rel: 'noopener noreferrer'
		}, ['sourcecode']),
		` of the page is released as `,
		v('img', {src: cc0, classes: css.alignedImage})
	]),
	v('br'), v('br'),
	v('h5', {classes: css.muted}, [
		'Best, Sebastian (page dev.)',
		v('img', {
			src: `${base}APConfLogo.png`,
			alt: 'ActivityPub Conf',
			classes: [css.iconImg, css.iconXLarge, css.rightImage]
		})
	])
];

export const Floors = [
	v('img', {src: `${base}floorplan_dox.png`, classes: css.floorPlan})
];
