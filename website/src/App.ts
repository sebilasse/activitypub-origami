import { w, v } from '@dojo/framework/widget-core/d';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { afterRender } from '@dojo/framework/widget-core/decorators/afterRender';
import { theme } from '@dojo/framework/widget-core/mixins/Themed';
import GlobalEvent from './widgets-apconf/globalEvent';
import Checkbox, { Mode } from './widgets/checkbox';
import Toolbar from './widgets/toolbar';
import Container from './widgets/container';
import SplitPane from './widgets/split-pane';

import Aside from './widgets-apconf/Aside';
import Tabs from './widgets-apconf/Tabs';
import CFPTab from './widgets-apconf/tabs/CFPTab';
import ScheduleTab from './widgets-apconf/tabs/ScheduleTab';
import InfoTab from './widgets-apconf/tabs/InfoTab';

import * as css from './styles/app.m.css';
export interface AppProperties {
	data?: any;
}


@theme(css)
export default class App extends WidgetBase<AppProperties> {
	private _size: any = 'default';
	private _rendered = false;
	private _paneSize = 360;
	private _activeIndex = 1;

	private isDialog = false;
	private isMobile = false;
	private isDark = false;

	private _locationChange() {
		const { hash } = window.document.location;
		if (hash === '#program') {
			this._activeIndex = 0
		} else if (hash === '#schedule' || hash === '#saturday' || hash === '#sunday' || hash === '#sessions') {
			this._activeIndex = 1;
			const { hash } = window.document.location;
			if (hash === '#saturday') {
				window.scrollTo(0, 208);
			} else if (hash === '#sunday' || hash === '#sessions') {
				var scrollMaxY = (document.documentElement.scrollHeight - document.documentElement.clientHeight);
				const sub = hash === '#sessions' ? 80 : 596;
				window.scrollTo(0, scrollMaxY - sub)
			}
		} else if (hash === '#info') {
			this._activeIndex = 2
		} else {
			this.isDialog = true;

		}
	}

	private _requestTabChange(activeIndex: number = this._activeIndex) {
		this.isDialog = false;
		const changed = activeIndex !== this._activeIndex;
		window.document.location.hash = activeIndex === 2 ? '#info' :
			(!activeIndex ? '#program' : '#schedule');
		this._activeIndex = activeIndex;
		changed && this.invalidate();
	}

	private _onMaterialToggle() {
		this.isDark = !this.isDark;
		this.invalidate();
		const bodyColor = this.isDark ? '#1c1c1c' : '#f8f4f2';
		document.documentElement.style.setProperty('--body-bg', bodyColor);
	}

	private _renderMaterials() {
		return w(Checkbox, {
			outlined: true,
			checked: false,
			schema: 'secondary',
			offLabel: v('label', {classes: [css.materialLabel, css.light]}, ['light']),
			label: v('label', {classes: [css.materialLabel, css.dark]}, ['dark']),
			mode: Mode.toggle,
			onChange: this._onMaterialToggle
		})
	}

	private _onResize(invalidate = false) {
		if (document.body.offsetWidth > 800) {
			this._paneSize = (document.body.offsetWidth > 1440) ? 440 : 360;
			this.isMobile = false;
		} else {
			this._paneSize = 320;
		}
		if (invalidate) { setTimeout(() => { this.invalidate(); }) }
	}

	@afterRender()
  myAfterRender(vnode: any) {
		if (this.isDialog) {
			setTimeout(() => {
				const { hash } = window.document.location;
				const p = window.document.getElementById(`${hash.substring(1)}Link`);
				p && p.click();
			})
		}
		return vnode
  }

	render() {
		setTimeout(() => { this._locationChange() }, 400);
		const { data = {} } = this.properties;
		if (!this._rendered) {
			this._rendered = true;
			this._onResize();
		}
		return [
			w(GlobalEvent, { key: 'global', window: { hashchange: () => {
				const blurNode = document.getElementById('blur')
				blurNode && blurNode.focus();
				this._locationChange();
				this.invalidate();
			} } }),
			v('div',{id: 'blur', tabIndex: 0}),
			w(Container, {
				key: 'container',
				onResize: this._onResize,
				material: this.isDark ? 'dark' : 'light'
			}, [
				w(Toolbar, {
					key: 'toolbar',
					extraClasses: {root: css.toolbar, actions: css.toolbarActions},
					collapseWidth: 800,
					heading: ' '
				}, [
					this._renderMaterials()
				]),
				v('div', {
					classes: css.splitPaneHolder
				}, [
					w(SplitPane, {
						size: this._paneSize,
						material: this.isDark ? 'dark' : 'light',
						key: 'split-pane',
						direction: SplitPane.Direction.column,
						collapseWidth: 800,
						onCollapse: () => {
							this.isMobile = true;
							this.invalidate()
						},
						onResize: (size: number) => {
							if (this.isMobile && size > 800) {
								this.isMobile = false;
							}
							this._paneSize = size > 320 ? size : 320;
							this.invalidate()
						}
					}, [
						/* LEFT (or mobile top) */
						w(Aside, {
							activeIndex: this._activeIndex,
							paneSize: this._paneSize,
							onClose: this._requestTabChange
						}),
						/* RIGHT (or mobile bottom) */
						this.isMobile ?
							v('span', [ w(ScheduleTab,{data}), w(CFPTab,{data}), w(InfoTab,{data})]) :
							w(Tabs, {
								activeIndex: this._activeIndex,
								onRequestTabChange: this._requestTabChange,
								data,
								size: this._size
							})
					])
				])
			])
		];
	}
}
