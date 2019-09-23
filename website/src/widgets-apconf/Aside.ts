import { v, w } from '@dojo/framework/widget-core/d';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { Intersection } from '@dojo/framework/widget-core/meta/Intersection';
import { Resize } from '@dojo/framework/widget-core/meta/Resize';
import GlobalEvent from './globalEvent';
import { mouse, magnifier, kafka, pd } from './assets';
import Icon from '../widgets/icon';
import Dialog from '../widgets/dialog';
import { Privacy, CodeOfConduct, Licensing, Floors } from './DialogContent';
import * as css from '../styles/app.m.css';
import * as uiCss from '../widgets/themes/redaktor-default/_ui.m.css';
const muted = {classes: uiCss.muted};

interface LinkDesc {
	iFrame: string;
	full: string;
}
export interface AsideProperties {
	activeIndex?: number;
	paneSize?: number;
	onClose?: (index?: number) => void;
}

export default class Aside extends WidgetBase<AsideProperties> {
	private _dialogType = 'Privacy';
	private _dialogOpen = false;
	private _mapscroll = false;
	private _mapfullscreen = false;
	private _links = {
		map: {
			iFrame: `https://www.openstreetmap.org/export/embed.html?` +
			`bbox=14.44619804620743%2C50.10613163067161%2C14.448912441730501%2C50.10743730673461&amp;layer=mapnik`,
			full: `https://www.openstreetmap.org/#map=19/50.10678/14.44756`
		},
		metro: {
			iFrame: `https://redaktor.me/_deliver/apconf/mapMetro.pdf`,
			full: `https://redaktor.me/_deliver/apconf/mapMetro.pdf`
		},
		tram: {
			iFrame: `https://redaktor.me/_deliver/apconf/mapTram.pdf`,
			full: `https://redaktor.me/_deliver/apconf/mapTram.pdf`
		}
	}
	private _iFrame = this._links.map.iFrame;
	private _full = this._links.map.full;
	private _buttonClick(type: string) {
		this._dialogType = type;
		this._dialogOpen = true;
		this.invalidate();
	}
	private setIframe = (linkDesc: LinkDesc) => ((evt?: MouseEvent) => {
		evt && evt.preventDefault();
		this._iFrame = linkDesc.iFrame;
		this._full = linkDesc.full;
		this.invalidate();
	})
	private isLarger() {
		if (window.document.body.offsetWidth < 1024 && window.document.body.offsetWidth >= 768) {
			if (this._paneSize !== 320) {
				this._paneSize = 320;
				setTimeout(() => { this.invalidate() })
			}
		}
		return window.document.body.offsetWidth > 800;
	}
	private _boundIsLarger = this.isLarger.bind(this);
	private _paneSize = 360;

	render() {
		const { hash } = window.document.location;
		const { paneSize = 360, activeIndex = 0, onClose } = this.properties;
		const { isIntersecting } = this.meta(Intersection).get('mapbottom');
		const { isIntersecting: tagIsIntersecting } = this.meta(Intersection).get('tags');
		const { isIntersecting: kafkaIsIntersecting } = this.meta(Intersection).get('asideImg', {
			threshold: [0.92]
		});
		const dT = this._dialogType;
		let dialogTitle = dT;
		let dialogContent = Privacy;
		if (dT === 'Licensing') {
			dialogContent = Licensing;
		} else if (dT === 'CodeOfConduct') {
			dialogTitle = 'Code of Conduct';
			dialogContent = CodeOfConduct;
		} else if (dT === 'Floors') {
			dialogContent = Floors;
		}

		if (hash === '#map' || hash === '#metro' || hash === '#tram') {
			this._mapfullscreen = true;
			this.setIframe((<any>this)._links[hash.substring(1)])();
		}
		const { isLarger = false } = this.meta(Resize).get('root', {
			isLarger: this._boundIsLarger
		});
		this._paneSize = isLarger ? paneSize : this._paneSize;

		return v('aside', {classes: css.aside, key: 'root'}, [
			w(GlobalEvent, { key: 'global', window: { blur: () => {
				this._dialogOpen = false;
				this.invalidate();
			} } }),
			v('hgroup', {classes: css.logoHeader}, [
				v(this._paneSize > 350 ? 'h1' : 'h3', [
					v('b', {classes: uiCss.muted}, ['Activity']),
					v('b', {classes: css.accent}, ['Pub']),
					v('br'),'Conference',v('br'),'Prague ',
					v('span',{classes: [uiCss.muted, css.year]},['2019'])
				]),
				v('hr'),
				v('h5', [
					`A conference about the present and future of ActivityPub,
the world’s leading federated social web standard. `,
					v('span', muted, [
`This two day event includes presentations of prepared talks on Saturday
followed by a loosely structured unconference on Sunday.`
					])
				]),

				v('hgroup', {classes: css.hasFlex, key: 'tags'}, [
					v('h5', {classes: [css.flex, css.accent]}, ['#apconf']),
					v('h5', muted, ['#datamaze']),
				]),
				v('hr', muted),
				v('h5', [
					w(Icon, {type: 'dateIcon'}),
					v('span', [' September 7th & 8th 2019'])
				]),
				v('br'),
				v('h5', [
					v('b', {classes: css.accent}, [' DOX ']),
					v('span', muted, ['Centre for Contemporary Art ']),
					v('br'),
					w(Icon, {type: 'locationIcon'}),
					v('b', [
						'Poupetova 1, Prague 7 – ',
						v('a', {
							href: 'https://www.dox.cz/en/',
							target: '_blank', rel: 'extenal noopener noreferrer'
						}, ['dox.cz'])
					])
				]),
				v('p', {classes: css.hasFlex}, [
					v('span', {classes: css.flex}, [
						'Tram: 6, 12', v('br'),
						v('a', {
							onclick: this.setIframe(this._links.tram),
							href: 'https://www.redaktor.me/_deliver/apconf/mapTram.pdf',
							rel: 'noopener noreferrer'
						}, [v('b', ['– Ortenovo náměstí'])])
					]),
					v('span', [
						'Metro: C', v('br'),
						v('a', {
							onclick: this.setIframe(this._links.metro),
							href: 'https://www.redaktor.me/_deliver/apconf/mapMetro.pdf',
							rel: 'noopener noreferrer'
						}, [v('b', ['– Nádraží Holešovice'])])
					])
				]),

				v('div', {
					classes: [
						css.mapContainer,
						this._mapfullscreen ? css.mapContainerFull : null,
						this._iFrame !== this._links.map.iFrame || this._mapscroll || this._mapfullscreen ?
							null : css.noscroll
					]
				}, [
					v('a', {
						onclick: (evt: MouseEvent) => {
							window.location.hash = window.location.hash+'_';
							evt && evt.preventDefault();
							this._mapfullscreen = !this._mapfullscreen;
							if (!this._mapfullscreen) {
								document.body.style.overflowY = 'auto';
								this.setIframe({iFrame: this._iFrame, full: this._full})(evt)
							} else {
								document.body.style.overflowY = 'hidden';
							}
							this.invalidate()
						},
						href: this._full,
						classes: [css.centerflex, css.mapMagnifiy]
					}, [
						this._mapfullscreen ? v('span', {classes: css.donot}, [
							v('img', {classes: css.iconImg, src: magnifier})
						]) :
						v('img', {classes: css.iconImg, src: magnifier})
					]),

					v('a', {
						onclick: (evt: MouseEvent) => {
							evt && evt.preventDefault();
							this._mapscroll = !this._mapscroll;
							this.invalidate()
						},
						href: `#${this._mapscroll ? 'disable' : 'enable'}_scrollwheelAndDrag`,
						style: !this._mapfullscreen ? '' : 'display:none;',
						classes: [css.centerflex, css.mapMouse]
					}, [
						this._mapscroll ? v('span', {classes: css.donot}, [
							v('img', {classes: css.iconImg, src: mouse})
						]) : v('img', {classes: css.iconImg, src: mouse})
					]),

					v('iframe', {
						src: this._iFrame,
						classes: css.map,
						style: this._mapfullscreen ? `height:100%;` : `height:208px;`,
						width: '100%',
						height: this._mapfullscreen ? '100%' : '208px',
						frameborder: '0',
						scrolling: 'no',
						scrollwheel: 'false',
						marginheight: '0',
						marginwidth: '0'
					})
				]),

				v('span', {key: 'mapbottom', classes: css.centerflex}, [
					this._iFrame !== this._links.map.iFrame ? v('p', [
						v('a', {
							onclick: this.setIframe(this._links.map),
							href: this._links.map.full
						}, [v('b', ['reset map'])])
					]) : null
				]),
				v('div', {
					key: 'asideImg',
					classes: !(isIntersecting || tagIsIntersecting || !isLarger) ?
							css.asideImgFixed : css.asideImg
				}, [
					//v('div', {classes: css.sticker}),
					v('img', {src: `data:image/svg+xml;base64,${kafka[activeIndex]}`}),
					v('br'),
					v('small', ['by Franz Kafka ']),
					v('small', {classes: [css.flex, css.muted, css.inlineTypo]}, ['{{PD-US-expired}}']),
					v('p', [v('br'),v('br')])
				])
			]),

			v('div', {
				classes: [css.asideFooter, kafkaIsIntersecting ? css.expandedFooter : null],
				style: `--footerW: ${this._paneSize}px;`
			}, [
				v('div', {classes: [css.inlineTypo, css.strong, css.asideFooterInner]}, [
					v('a', {
						id: 'privacyLink',
						href: '#privacy',
						onclick: () => { this._buttonClick('Privacy') }
					}, ['Privacy']),
					v('a', {
						id: 'codeOfConductLink',
						href: '#codeOfConduct',
						onclick: () => { this._buttonClick('CodeOfConduct') }
					}, ['Code of Conduct']),
					v('span', [
						v('a', {
							id: 'licensingLink',
							href: '#licensing',
							onclick: () => { this._buttonClick('Licensing') }
						}, ['Licensing']),
						v('img', {src: pd, classes: [css.iconImg, css.iconLarge, css.rightImage]}),

						v('a', {
							id: 'floorsLink',
							style: 'display:none;',
							href: '#floors',
							onclick: () => { this._buttonClick('Floors') }
						}, [''])
					])
				])
			]),


			w(Dialog, {
				title: dialogTitle,
				extraClasses: {root: css.dialog},
				open: this._dialogOpen,
				modal: true,
				underlay: true,
				closeable: true,
				onRequestClose: () => {
					this._dialogOpen = false;
					onClose && onClose();
					this.invalidate();
				}
			}, dialogContent)
		])
	}
}
