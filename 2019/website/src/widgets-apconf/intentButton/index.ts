import { v, w } from '@dojo/framework/widget-core/d';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { I18nMixin } from '@dojo/framework/widget-core/mixins/I18n';
import intentBundle from './nls/common';
import Button from '../../widgets/button';
import { logo, urlRegex } from './assets';
import * as css from './style.m.css';

export interface IntentButtonProperties {
	text: string;
	name?: string;
	target?: string;
	getUrl?: (properties: IntentButtonProperties) => string;
}

const IntentBase = I18nMixin(WidgetBase);
export default class IntentButton<P extends IntentButtonProperties = IntentButtonProperties>
extends IntentBase<P> {
	private isActive: boolean = false;
	private baseUrl: string = '.';

	protected localize() {
		return this.localizeBundle(intentBundle);
	}
	protected getLogoSrc() {
		return logo
	}
	protected getUrl() {
		const { getUrl, text, target = document.location.href } = this.properties;
		if (getUrl) { return getUrl(this.properties) }
		return `${this.baseUrl}/share?text=${encodeURIComponent(text+' \n'+target)}`
	}
	private set(v: string = '') {
		this.baseUrl = `${v}`;
		this.invalidate()
	}
	private start() {
		this.share()
	}
	private share() {
		const { name = 'toot' } = this.properties;
		this.isActive = false;
		window.open(this.getUrl(), encodeURIComponent(name), `noopener noreferrer`);
		this.invalidate()
	}

	render() {
		const { isPlaceholder, messages } = this.localize();
		if (isPlaceholder) { return }

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
				extraClasses: {root: this.isActive ? css.hidden : css.root, inner: css.btnInner},
				//schema: 'primary', // TODO all button per properties ?
				size: 'default',
				onClick: this.start
			}, [
				v('img', { classes: css.logo, src: this.getLogoSrc(), alt: messages.alt }),
				v('b', [messages.share])
			]),
			...this.children
		])
	}
}
