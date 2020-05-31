import { v, w } from '@dojo/framework/widget-core/d';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { TabProperties } from '../Tabs';
import Button from '../../widgets/button';
import ShareTwitter from '../intentButton/twitter';
import ShareMastodon from '../shareToMastodon/index';
import * as css from '../../styles/app.m.css';
import {
	alyssa, ben, user, dojoLogo, uberspaceLogo, fontLogo
} from './assets';

export function CodeOfConductLink(label: string = 'You agree to the Code Of Conduct !', href = '#CodeOfConduct') {
	return v('span', {classes: css.labelAbs}, [
		v('svg', {
			classes: [css.iconImg, css.iconImgAbs, css.raised],
			version: "1.1", x: "0px", y: "0px",
			width: "173.131px", height: "185.607px", viewBox: "0 0 173.131 185.607"
		}, [
			v('path', {
				d: `M86.566,3.89c-46.135,0-83.535,30.385-83.535,67.868c0,21.296,12.084,
	40.304,30.975,52.75c0.229,1.526,0.351,3.089,0.351,4.684c0,11.401-9.7,21.38-20.883,
	26.858v4.393c20.708-0.474,42.13-3.689,60.067-21.634c4.248,0.54,8.594,0.824,13.025,
	0.824c46.134,0,83.533-30.39,83.533-67.875C170.1,34.277,132.7,3.89,86.566,3.89z
	M86.236,118.33C66.204,89.526,36.812,81.884,36.812,52.748c0-14.323,11.625-25.949,
	25.946-25.949c10.393,0,19.332,8.45,23.479,17.277C90.378,35.25,99.32,26.8,109.709,
	26.8c14.322,0,25.946,11.626,25.946,25.949C135.655,80.953,105.172,89.703,86.236,118.33z`
			})
		]),
		v('a', {
			href,
			onclick: (evt: MouseEvent) => {
				if (href === '#codeOfConduct') {
					evt && evt.preventDefault;
					const p = document.getElementById('codeOfConductLink');
					p && p.click();
				}
			},
			rel: 'external noopener noreferrer'
		}, [v('b', [label])])
	]);
}
export default class InfoTab<P extends TabProperties = TabProperties> extends WidgetBase<P> {
	private _easteregg = false;
	private getShareProps(isShort = false) {
		return {
			text: `A conference about the present and future of #ActivityPub – ` +
`the world’s leading federated social web standard.
${!isShort ? 'This two day event includes presentations of p' : 'P'}` +
`repared talks on Saturday followed by a loosely structured unconference on Sunday.

#apconf #Fediverse #Conference`,
			name: 'share to mastodon',
			target: 'https://redaktor.me/apconf/'
		};
	}

	private h5Link(href: string, rel: string, title: string = '', alt: string = '', sub: string = '') {
		const noSub = alt === '' && sub === '';
		return v('div', {classes: css.noflex}, [
			v('a', {href, rel, alt}, [ title ]),
			noSub ? null : v('br'),
			noSub ? null : v('small', {classes: css.inlineTypo}, [sub !== '' ? sub : alt])
		])
	}

	render() {
		const base = 'https://redaktor.me/_deliver/';
		return v('div', { classes: css.tab }, [
			v('span', [
				'The conference followed ',
				v('a', {
					href: 'https://www.weboftrust.info/next-event-page.html',
					target: '_blank', rel: 'external noopener noreferrer'
				}, [
					'#RebootingWebOfTrust'
				])
			]),
			v('h3', {classes: [css.right, css.tabHeader, css.accent]}, [ 'tl;dr – It was awesome' ]),

			v('span', {classes: css.centerflex}, [

				v('span', [
/*
				CodeOfConductLink(),

				v('h5', [
					v('br'),
					`ActivityPub Conf 2019 registration is `, v('span', {classes: css.accent},['closed'])
				]),
				v('p', {classes: css.serif}, [
					'We are looking forward to meet 40 attendees.', v('br'), v('br'),
					v('b', {classes: css.muted}, ['If you have specific accessibility requirements:']), v('br'),
					'Contact us in advance and we make sure that we are able to accommodate you.',
					v('br'), v('br'),
					v('b', {classes: css.muted},['If you look for a lift, can offer one or want to meet in advance:']),
					v('br'), 'Check this event on ',
					v('a', {
						href: 'https://forum.conferencebuddy.io/t/activitypub-conf/587',
						target: '_blank', rel: 'external noopener noreferrer'
					}, [
						'Conference Buddy'
					]), ' or ',
					v('a', {
						href: 'https://socialhub.network/t/activitypubconf-2019-prague/654',
						target: '_blank', rel: 'external noopener noreferrer'
					}, [
						'Social Hub'
					]), ' …'
				]),
*/
				v('h5', {classes: css.accent}, ['Spread the word:']),
				v('p', {classes: [css.hasFlex, css.baselined, css.serif]}, [
					w(ShareMastodon, this.getShareProps()),
					w(ShareTwitter, {...this.getShareProps(true), related: '@dustyweb,@mlemweb,@sl007'})
				]),

				v('div', {
					classes: css.imageContainer
				}, [
					v('iframe', {
						classes: css.imageIframe,
						sandbox: 'allow-same-origin allow-scripts',
						src: 'https://archive.org/details/apconf-pictures',
						frameborder: '0',
						allowfullscreen: 'allowfullscreen',
						scrolling: 'no'
					})
				]),

				v('h5', [
					v('img', {classes: [css.iconImg, css.iconSVG], src: ben, alt: 'Ben Icon'}),
					v('span', {classes: css.muted}, [' Early Check-In: ']),
					v('span', {classes: css.accent}, ['Friday in the evening']),
				]),
				v('p', {classes: css.serif}, [
					`We did an ActivityPub Picnic in Letná Park.`,
					v('br')
				]),
				v('h5', {classes: css.muted}, [
					v('img', {classes: [css.iconImg, css.iconSVG], src: alyssa, alt: 'Alyssa Icon'}),
					' Ask your questions', v('br')
				]),
				v('p', {classes: [css.serif, css.hasFlex, css.talkRow]}, [
					this.h5Link( 'https://octodon.social/@mlemweb', 'me help',
						'Morgan Lemmer-Webber', '@mlemweb@octodon.social'),
					this.h5Link( 'https://mastodon.social/@sl007', 'me author',
						'Sebastian Lasse', '@sl007@mastodon.social' ),
				]),
				v('p', {classes: [css.serif, css.hasFlex, css.talkRow]}, [
					v('div', {classes: css.noflex}, [
						v('small', {classes: css.inlineTypo}, ['or via eMail ']), v('br'),
						this.h5Link( 'mailto:activitypubconf@gmail.com', 'help', 'activitypubconf@gmail.com' ),
					]),
					v('div', {classes: css.noflex}, [
						v('small', {classes: css.inlineTypo}, ['or IRC ']), v('br'),
						this.h5Link( 'irc://freenode/#apconf', 'help', '#apconf' ),
					])
				]), v('br'),
				v('hr'),
				v('p', {classes: css.serif}, [
					//'We will provide videos for the talks and remote participation via Etherpad (sunday).', v('br'),
					'ActivityPub Conf is surrounded by ',
					v('a', {
						href: 'https://www.dox.cz/en/exhibitions/datamaze',
						target: '_blank', rel: 'extenal noopener noreferrer'
					}, ['the extended exhibition #DATAMAZE ']), '–', v('br'),
					`This ongoing examination of how we are actors in our increasingly digital world `, v('br'),
					`has intersecting themes with decentralized social media.`, v('br')
				]),
				v('div', {classes: [css.centerflex, css.floorRow]}, [
					v('img', {src: `${base}apconf/floorplan_dox.png`, classes: css.floorPlan}),
					v('div', {classes: css.floorHint})
				]),
				v('p', {classes: css.serif}, [
					`The primary room for ActivityPub Conference will be `, v('br'),
					v('b', {classes: css.accent}, [`The #DATAMAZE workshop`]), ' ',
					v('b', {classes: css.muted}, [`in Gallery E on the 1st floor.`]),
					v('br'),
					`This is where all of the prepared presentations will be located.`,
					v('br'), v('br'),
					`On Sunday we will be breaking into smaller groups for the unconf and will be using `, v('br'),
					v('b', {classes: css.accent}, [`The Studio`]), ' ',
					v('b', {classes: css.muted}, [`on the 1st floor`]), '. ', v('br'), v('br'),
					v('b', {classes: css.accent}, [`The DOX Lab`]), ', ',
					v('b', {classes: css.muted}, [`a small room on the ground floor`]), v('br'),
					` will also be available as a ‘quiet’ room
for people to work individually.`, v('br'), v('br'),
					v('b', [`We would like to thank `,
						v('a', {
							href: 'https://www.dox.cz/en/',
							target: '_blank', rel: 'extenal noopener noreferrer'
						}, ['DOX']),
						` for providing us a location for our conference! `
					]),
					v('br')
				]),
				v('hr'),
				v('a', {
					href: '#Privacy',
					onclick: () => {
						const p = document.getElementById('privacyLink');
						p && p.click();
					}
				}, [v('b', ['Our Privacy Policy'])]),
				v('p', [
					v('span', {classes: [css.hasFlex, css.baselined]}, [
						!this._easteregg ?
							v('span', {classes: css.flex}, ['This unbusinesslike page is not using cookies.']) :
							v('span', {classes: css.flex}, [`We also don't intend to send you push notifications …`]),
						w(Button, {
							schema: 'secondary',
							size: 'small',
							onClick: () => {
								this._easteregg = !this._easteregg;
								this.invalidate()
							}
						}, [ v('p',['accept']) ])
					])
				]),

				v('p', [
					v('span', {classes: css.accent}, [
						'[', v('b', ['a note by the page editor']),'] '
					]), v('br'),
					'This conf is ',v('span', {classes: css.accent}, ['free']),' for all and runs entirely on a private budget – ',
					'You can show your support:', v('br'),
					v('ul'),
					v('li', [
						'support ',
						v('a', {
							href: 'https://www.patreon.com/cwebber/posts',
							target: '_blank', rel: 'me noopener noreferrer'
						}, [
							'Christopher Lemmer-Webber'
						])
					]),
					v('li', [
						'say thankyou to ',
						v('a', {
							href: 'https://octodon.social/@mlemweb',
							target: '_blank', rel: 'noopener noreferrer'
						}, [
							'Morgan Lemmer-Webber'
						])
					]),
					v('li', [
						'or just listen to ',
						v('a', {
							href: 'https://librelounge.org',
							target: '_blank', rel: 'noopener noreferrer'
						}, [
							'librelounge.org'
						])
					])
				]),
				v('br'),
				v('p', {classes: [css.hasFlex, css.baselined]}, [
					v('div', {classes: css.flex}, [
						v('img', {
							classes: css.iconImg,
							src: fontLogo,
							alt: 'FONTS FOR FREEDOM logo'
						}), ' ',
						v('b', {classes: css.typoAccent}, [' Özgür Gündem']), ' ',
						v('a', {
							href: 'https://fonts-for-freedom.com/en/',
							target: '_blank', rel: 'external noopener noreferrer'
						}, [
							'by FONTS FOR FREEDOM'
						])
					]),
					v('div', [
						v('img', {classes: [css.iconImg, css.iconSVG], src: user, alt: 'User Icon'}),
						' ',
						v('a', {
							href: `${base}activitypubFont.zip`,
							download: 'download',
							rel: 'noopener noreferrer'
						}, [
							'ActivityPub Font available here'
						])
					])
				]), v('br'),
				v('hr'),
				v('p', {
					classes: css.hasFlex,
					style: 'align-items: baseline; padding-top: 0;'
				}, [
					v('span', {classes: css.flex}, [
						'Page made with ',
						v('i', [' ']),
						v('a', {
							href: 'https://dojo.io',
							target: '_blank', rel: 'external noopener noreferrer'
						}, [
							'dojo.io',
							v('i', [' ']),
							v('img', {
								classes: [css.iconImg, css.iconDojo],
								src: dojoLogo
							})
						])
					]),
					v('span', [
						v('a', {
							href: 'https://uberspace.de',
							target: '_blank', rel: 'external noopener noreferrer'
						}, [
							'hosted on asteroids',
							v('i', [' ']),
							v('img', {
								classes: [css.iconImg],
								src: uberspaceLogo
							})
						])
					]),
					v('br'), v('br'), v('br'), v('br')
				])
			])])
		]);
	}
}
