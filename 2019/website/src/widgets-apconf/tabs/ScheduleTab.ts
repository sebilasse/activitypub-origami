import { DNode, v, w } from '../../widgets/common/Widget';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
//import { Intersection } from '@dojo/framework/widget-core/meta/Intersection';
import Checkbox, { Mode } from '../../widgets/checkbox';
import Icon from '../../widgets/icon';
import Label from '../../widgets/label';
//import Image from '../../widgets/image';
//import ImageContent from '../../widgets/image/imageContent';
import Card from '../../widgets/card';
import Button, { ButtonProperties } from '../../widgets/button';
import Container from '../../widgets/container';
import { TabProperties } from '../Tabs';
import * as css from '../../styles/app.m.css';
import * as card from '../../widgets/themes/redaktor-default/card.m.css';
import * as ui from '../../widgets/themes/redaktor-default/_ui.m.css';
import * as color from '../../widgets/themes/redaktor-default/_color.m.css';
import { apconfTalk, talks } from './ScheduleData';

const eventType = {
	orga: ['orange', css.event],
	food: ['lime', css.event],
	unconf: ['amber', css.event],
	keynote: ['pink', css.keynote],
	talk: ['deep-purple', css.talk]
}

export default class ScheduleTab<P extends TabProperties = TabProperties> extends WidgetBase<P> {

	private _isCompact = false;

	render() {
    const { size = 'default' } = this.properties;
		//const { isIntersecting } = this.meta(Intersection).get('saturday');

		return v('div', { classes: css.tab }, [
			/* SATURDAY */
			v('div', { classes: css.hasFlex }, [
				v('h2', {
					key: 'saturday',
					classes: [css.flex, css.tabHeader, css.accent]
				}, ['SAT, September 7']),
				v('div', {classes: css.sizeMenu}, [
					w(Checkbox, {
						// size,
						outlined: true,
						checked: false,
						schema: 'secondary',
						offLabel: w(Icon, {type: 'extendIcon', extraClasses:{root:css.strong}}),
						label: w(Icon, {type: 'compactIcon', extraClasses:{root:css.strong}}),
						mode: Mode.toggle,
						onChange: () => {
							this._isCompact = !this._isCompact;
							this.invalidate()
						}
					})
				])
			]),
			v('p', {classes: css.right}, [v('b', ['Conference – ']), '10 a.m. - 6 p. m.']),
			this.eventRow('10', 		true, 'Badges & Come Together', 'orga'),
			this.eventRow('10.30', 	true, 'Introductions', 'orga'),
			this.eventRow('10.45', 	true, 'Opening', 'keynote', true),
			v('div', {classes: [css.hasFlex, css.keynoteRow]}, [
				this.talkCard('Chris'),
				this.talkCard('Luc'),
			]),
			this.eventRow('12.10', 	false, 'Lunch', 'food'),
			this.eventRow('1.10', 	false, 'Talks', 'talk', true),
			v('div', {classes: [css.hasFlex, css.talkRow]}, [
				this.talkCard('Maloki'),
				this.talkCard('Pukkamustard'),
				this.talkBreak(),
				this.talkCard('Serge'),
				this.talkCard('Schmittlauch'),
				this.talkCard('Cristina'),
				this.talkBreak(),
				this.talkCard('Caleb'),
				this.talkCard('Matt'),
				this.talkCard('Michael'),
				v('div')
			]),
			v('br'),

			/* SUNDAY */
			v('h2', {classes: [css.tabHeader, css.accent]}, ['SUN, September 8']),
			v('p', {classes: css.right}, [
				v('b', ['Un']), v('b', {classes: ui.muted}, ['conference – ']), '10 a.m. - 6 p. m.'
			]),
			v('p', {classes: ui.largeP}, [
				this.eventRow('10', 	true, 'Opening', 'keynote', true),
				v('div', {classes: [css.hasFlex, css.keynoteRow, css.keynoteSingle]}, [
					this.talkCard('Mark')
				]),
				v('p', [' ']),
				this.eventRow('11',true, 'Unconf Planning Session', 'orga'),
				this.eventRow('12',true, 'Lunch', 'food'),
				v('div', {
					classes: [css.hasFlex, css.keynoteRow, css.pointerRow],
					onclick: () => { window.document.location.hash = '#floors' }
				}, [
					v('div', {classes: css.flex}, [
						v('p', {classes: [css.strong, css.accent]}, [
							w(Icon, { type: 'locationIcon' }),
							'#Workshop, Gallery E, 1st floor'
						])
					]),
					v('div', {classes: css.flex}, [
						v('p', {classes: [css.strong, css.accent]}, [
							w(Icon, { type: 'locationIcon' }),
							'#Studio, Aside, 1st floor'
						])
					]),
					v('div', [
						v('p', {classes: [css.strong, css.accent]}, [
							w(Icon, { type: 'locationIcon' }),
							'#Lab, ground floor'
						])
					])
				]),

				this.eventRow('1', false, 'Block 1', 'unconf', true),

				this.sessionRow(1),
				this.eventRow('2', false, 'Block 2', 'unconf', true),
				this.sessionRow(2),
				this.eventRow('3', false, 'Block 3', 'unconf', true),
				this.sessionRow(3),
				this.eventRow('4', false, 'Block 4', 'unconf', true),
				this.sessionRow(4),
				this.eventRow('5', false, 'Lightning Talks', 'talk', true),
				this.sessionRow(5),

				this.eventRow('6', false, 'Closing', 'keynote', true),
				v('br'),
				v('div', {classes: css.hasFlex}, [
					v('span', {classes: css.flex}, [
						w(Label, { size }, [v('a', {
							href: 'https://dustycloud.org/blog/activitypub-conf-2019-speakers/'
						}, ['list of speakers'])])
					]),
					v('span', [
						w(Icon, {type: 'downIcon'}),
						w(Label, { size }, [v('a', {
							href: 'https://dustycloud.org/misc/APConfSpeakers.pdf'
						}, ['PDF'])]),
						v('b', [' | ']),
						w(Label, { size }, [v('a', {
							href: 'https://dustycloud.org/misc/APConfSpeakers.odt'
						}, ['ODT'])])
					])
				])
      ]),

			/*v('div', {
				classes: [
					css.scheduleLinks,
					document.documentElement.clientWidth < 880 || isIntersecting ? null : css.visible
				]
			}, [
				v('a', {href: '#saturday'}, ['saturday']), ' • ',
				v('a', {href: '#sunday'}, ['sunday']), ' • ',
				v('a', {href: '#sessions'}, ['sessions']), ' • ',
				v('a', {href: '#floors'}, ['floors'])
			])*/
		])
	}


	private getSessions(i: number) {
		const { data = {sessions:[]} } = this.properties;
		if (!data.sessions || data.sessions.length === 0) {
			return []
		} else {
			return data.sessions.filter((s: apconfTalk) => s.block === i)
				.map((s: apconfTalk) => this.talkCard(s, true))
		}
	}

	private talkBreak() {
		return w(Card, {extraClasses: {root: css.talkBreak}}, [v('b', ['<br>'])])
	}
	private sessionRow(i: number) {
		return v('div', {
			classes: [css.hasFlex, css.talkRow, css.sessionsTalkRow]
		}, this.getSessions(i))
	}
	private eventRow(time: string, isAM: boolean, details: DNode, type: keyof typeof eventType = 'talk', short = false) {
		const a = eventType[type];
		return w(Container, {
			material: (<any>a[0]), extraClasses: {root: short ? css.event : a[1]} }, [
				v('h5', {classes: [color.light_text]}, [
					v('span', {classes: [css.time, isAM ? css.am : css.pm]}, [
						w(Icon, {type: 'dateIcon'}), ' ', time
					]), ' – ', details
				])
			])
	}

	// TODO links or button onClick
	private talkCard(nameOrSession: string | apconfTalk, isSession = false) {
		const { data = {} } = this.properties;
		//console.log(nameOrSession);
		const cardProperties: apconfTalk = isSession ? nameOrSession : {
			...(talks[<string>nameOrSession] || {}),
			...(data.links ? data.links[<string>nameOrSession] : '' || {})
		}

		if (!cardProperties) { return null }
		const actProps: Partial<ButtonProperties> = {size: 'small', depth: 'flat'};
		const {
			title, byline = '', details = [], img = '',
			isKeynote = false, hasButtons = true, isFlex = true,
			video = '', download = '', etherpad = '', time = '', license = 'cc0'
		} = cardProperties;

		let buttons;
		if (!isSession) {
			buttons = v('div', { classes: card.actionButtons }, [

				v('a', {
					classes: [card.actionButton, css.imgLink],
					href: video.replace('/embed', '/watch')||'#',
					target: '_blank',
					rel: 'noopener noreferrer'
				}, [
					w(Button, {
						disabled: !video,
						schema: 'secondary',
						...actProps
					}, [
						'@apconf@conf.tube'
					])
				]),

				!video ? v('div', {classes: css.hasFlex}, [
					v('small', {classes: css.flex}, ['coming soon'])
				]) : null,

				v('a', {
					classes: [card.actionButton, css.imgLink],
					href: download||'#',
					target: '_blank',
					rel: 'noopener noreferrer'
				}, [
					w(Button, {
						disabled: !download,
						schema: 'primary',
						...actProps
					}, [
						'archive.org'
					]),
				]),
				!video ? v('div', [v('span', {classes: [ui.muted, ui.largeP, css.right]}, [])]) : null
			])
		} else {
			const s = nameOrSession;
			buttons = v('div', { classes: card.actionButtons }, [
				v('div', { classes: card.actionButton }, [
					!!etherpad ? w(Icon, {type: 'editIcon'}) :
					v('a', {
						classes: [card.actionButton, css.imgLink],
						href: 'https://pixelfed.social/apconf',
						target: '_blank',
						rel: 'noopener noreferrer'
					}, [
						'watch some photos'
					]),
					//v('p', {classes: css.accent}, ['Etherpad: ']),
					w(Button, {
						disabled: !etherpad,
						schema: 'secondary',
						...actProps,
						onClick: () => {
							!!etherpad && typeof s === 'object' ?
							window.location.href = 'https://redaktor.me/pad/p/' + s.etherpad : ''
						}
					}, [ 'Etherpad' ])
				])
			])
		}

		const base = 'https://redaktor.me/_deliver/apconf/';

		return w(Card, {
			extraClasses: {root: isKeynote || isFlex ? css.flex : css.noflex}
		}, [
			!!video ? v('div', {
				classes: css.videoContainer,
				style: !!img ? `background: url('${base}${img}.svg')` : ''
			}, [
				v('iframe', {
					classes: css.videoIframe,
					sandbox: 'allow-same-origin allow-scripts',
					src: video,
					frameborder: '0',
					allowfullscreen: 'allowfullscreen'
				})
			]) : null,
			v('div', {
				classes: [
					isKeynote ? css.keynote : (isSession ? css.session : css.talk),
					this._isCompact ? css.compact : null, css.flex
				]
			},
			[
				v('i', {classes: [css.accent, css.talkTime]}, [time]),
				isSession ? '' : v('h5', [ title ]),
				...(!img ? [v('br'), title, v('br'), v('p', {classes: [ui.largeP, css.accent]}, [byline])] : details)
			]),

			isSession ? null : v('p', { classes: [ui.largeP, css.accent, (<any>css)[license]] }, [ byline ]),

			!hasButtons ? null : v('div', {
				classes: [css.actionLinks, card.actions, isSession || isKeynote ? css.keynoteActions : null]
			}, [
				buttons,
				/*
				!isKeynote ? null : v('div', { classes: card.actionIcons }, [

						v('div', ['cc ']),
						v('p', {
							classes: [css.strong, css.accent],
							onclick: () => { window.document.location.hash = '#floors' }
						}, [
							byline
						])


				])
*/


			])
		])
	}
}
