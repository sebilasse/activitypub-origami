import { v, w } from '@dojo/framework/widget-core/d';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { I18nMixin } from '@dojo/framework/widget-core/mixins/I18n';
import mastodonBundle from './nls/mastodon';
import Button from '../../widgets/button';
import Combobox from '../../widgets/combobox';
import { keyName } from '../../widgets/common/util';
import { logo, urlRegex } from './assets';
import * as css from './style.m.css';

/* twitter
text	Pre-populated text highlighted in the Tweet composer.	custom share text
url	URL included with the Tweet.	https://dev.twitter.com/web/tweet-button
hashtags	A comma-separated list of hashtags to be appended to default Tweet text.	example,demo
via	Attribute the source of a Tweet to a Twitter username.	twitterdev
related	A comma-separated list of accounts related to the content of the shared URI.	twitterapi,twitter
*/

export interface Instances {
	label: string;
	baseUrl: string;
	rank: number;
}
export interface ShareMastodonProperties {
	text: string;
	name?: string;
	target?: string;
	instances?: Instances[];
}
const ShareMastodonBase = I18nMixin(WidgetBase);

export default class ShareMastodon extends ShareMastodonBase<ShareMastodonProperties> {
	private _instances: [string, number /*rank*/][] = [
		['abdl.link',13],['acg.mn',76],['acg.social',200],['anarchism.space',89],
		['babuu.club',193],['best-friends.chat',118],['bildung.social',201],
		['boardgames.social',203],['bonn.social',202],['botsin.space',40],
		['chaos.social',199],['cybre.space',73],['fandom.ink',69],['floss.social',198],
		['fosstodon.org',32],['framapiaf.org',20],['g0v.social',111],
		['hispagatos.space',197],['eletusk.club',130],['inditoot.com',117],
		['imastodon.net',36],['linuxrocks.online',57],['m.hitorino.moe',151],
		['mamot.fr',12],['mastodon.art',17],['mastodon.at',54],['mastodon.bida.im',51],
		['mastodont.cat',65],['mastodon.cloud',6],['mastodon.eus',97],
		['mastodon.gamedev.place',37],['mastodon.host',24],['mastodon.nl',178],
		['mastodon.social',2],['mastodon.org.uk',167],['mastodon.pirateparty.be',194],
		['mastodon.technology',10],['mastodon.xyz',7],['mastodon.zaclys.com',94],
		['masto.donte.com.br',186],['meow.social',60],['music.pawoo.net',14],
		['mstdn-bike.net',205],['mstdn.io',11],['mstdn.jp',3],['mstdn.tokyocameraclub.com',27],
		['niu.moe',25],['oc.todon.fr',75],['octodon.social',15],['pawoo.net',1],
		['pleroma.site',191],['qiitadon.com',35],['qoto.org',64],['quey.org',33],
		['radical.town',38],['ruby.social',131],['scholar.social',45],['soc.ialis.me',52],
		['social.bau-ha.us',210],['social.librem.one',44],['social.linux.pizza',209],
		['social.privacytools.io',109],['social.targaryen.house',42],['social.tchncs.de',16],
		['social.wiuwiu.de',208],['status.online',211],['todon.nl',30],['toot.cat',120],
		['troet.cafe',212],['vis.social',31],['wandering.shop',106],['weedis.life',139],
		['witches.town',72],['w3c.social',220],['x0r.be',126]
	];
	private instances: Instances[];
	private isActive: boolean = false;
	private baseUrl: string;

	private getLogo(alt: string, classes: string[] = [css.logo]) {
		return v('img', { classes, src: logo, alt })
	}
	private set(v: string = '') {
		this.baseUrl = `${v}`;
		this.invalidate()
	}
	private start() {
		console.log('TOGGLE');
		this.isActive = !this.isActive;
		this.invalidate()
	}
	private share() {
		const { text, target = document.location.href, name = 'toot' } = this.properties;
		this.isActive = false;
		console.log('SHARE');
		window.open(
			`${this.baseUrl}/share?text=${encodeURIComponent(text+' \n'+target)}`,
			encodeURIComponent(name), `noopener noreferrer`
		);
		this.invalidate()
	}

	render() {
		const { isPlaceholder, messages } = this.localizeBundle(mastodonBundle);
		const { alt, placeholder } = messages;
		if (isPlaceholder) { return }
		const { instances: _instances } = this.properties;
		this.instances = _instances ? _instances :
			this._instances.map((a) => ({label:a[0], rank: a[1], baseUrl:`https://${a[0]}`}));
		return v('div', {
			classes: [css.root, css.container],
			onclick: (e:any) => {
				if (urlRegex.test(e.target.textContent)) {
					this.set(`https://${e.target.textContent}`);
					this.share()
				}
			},
		}, [
			w(Button, {
				extraClasses: {root: this.isActive ? css.hidden:css.root, inner:css.btnInner},
				//schema: 'primary', // TODO all button per properties ?
				size: 'default',
				onClick: this.start
			}, [
				this.getLogo(alt), v('b', [messages.toot])
			]),
			w(Combobox, {
				onKeyPress: (event: any) => {
					const pressed = event ? keyName(event) : null;
					pressed === 'Escape' && this.start();
				},
				animated: this.baseUrl === void 0,
				autofocus: !this.baseUrl || this.baseUrl === '',
				extraClasses: {root: this.isActive ? css.root : css.hidden},
				blurOnSelect: true,
				name: 'share-mastodon',
				autocomplete: false,
				schema: 'primary',
				strict: false,
				label: v('div', {classes: css.label}, [
					this.getLogo(alt, this.isActive ? [css.small, css.logo] : [css.hidden]),
					v('b', [messages.label])
				]),
				placeholder,
				required: true,
				scroll: true,
				widgetId: 'share-mastodon-btn',
				results: this.instances,
				getOptionText: (o: any) => typeof o === 'object' && o.label,
				// pattern: urlShort,
				// nonword (URLs ...) :
				tokenSeparator: /\./g,
				onToken: (str: string) =>  str ? str.split(/\.+/) : [],
				onSort: (a: any, b: any) => {
					if (a.score > b.score && a.score - b.score < 0.01) {
						// very close (e.g. 'mastodon.at'/'mastodon.nl'): Sort by rank
						a = this.instances[a.output[0].index];
						b = this.instances[b.output[0].index];
						return a.rank < b.rank ? -1 : 1;
					}
					return a.score < b.score ? -1 : 1
				},
				onResultSelect: (o: any) => this.set(o.baseUrl),
				onChange: (v: string) => urlRegex.test(v) ?
						this.set(v.indexOf('https://') === 0 ? v : `https://${v}`) : this.set()
			}),
			w(Button, {
				extraClasses: {
					root: this.isActive && !!this.baseUrl ? css.ok : css.hidden,
					inner: css.btnInner
				},
				schema: 'primary',
				size: 'default',
				onClick: this.share
			}, [`${messages.toot}!`])
		])
	}
}
