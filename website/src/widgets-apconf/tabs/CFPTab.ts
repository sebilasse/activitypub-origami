import { v, w } from '@dojo/framework/widget-core/d';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { TabProperties } from '../Tabs';
import Icon from '../../widgets/icon';
import Label from '../../widgets/label';
import * as css from '../../styles/app.m.css';
import * as ui from '../../widgets/themes/redaktor-default/_ui.m.css';
import { Size, Sizes } from '../../widgets/common/util';

export default class CFPTab<P extends TabProperties = TabProperties> extends WidgetBase<P> {
  protected _defaultTypo: Sizes = 'medium';
  protected getSizeClasses(_ui: any = ui, typoSize?: Sizes, uiSize?: Sizes) {
    const { size = 'default' } = this.properties;
    if (!uiSize || !(uiSize in Size)) { uiSize = size; }
    if (size === 'default') {
      typoSize = this._defaultTypo || size;
    } else if (!typoSize || !(typoSize in Size)) {
      typoSize = size;
    }
    return [_ui.ui, _ui[`${uiSize}UI`], _ui[`${typoSize}Typo`]]
  }

	render() {
    const base = `https://redaktor.me/_deliver/apconf/`;
    const { size = 'default' } = this.properties;

		return v('div', { classes: [css.tab] }, [
      v('h2', {classes: [css.tabHeader, css.accent]}, ['Upcoming Program']),
      v('div', {classes: css.hasFlex}, [
        v('div', {classes: css.flex}, [
          v('div', {classes: css.programHeader}, [
            v('img', {
              classes: [css.iconImg],
              src: `${base}APConfProgram_prev.gif`
            }),
            w(Icon, {type: 'downIcon'}),
            w(Label, { size }, [v('a', {
              href: `${base}APConfProgram.pdf`
            }, ['PDF (500KB)'])]),
            v('b', [' | ']),
            w(Label, { size }, [v('a', {
              href: `${base}APConfProgram.odt`
            }, ['ODT (6.7MB)'])])
          ]),

          v('p', {classes: ui.largeP}, [
            `Download the Conference Program`, v('br'), v('br')
          ])
        ]),
        v('div', [
          v('a', {
            classes: css.imgLink,
            href: `${base}APConfProgram.pdf`
          }, [
            v('img', {
              classes: [css.iconImg, css.iconXLarge],
              src: `${base}APConfProgram_prev.gif`
            })
          ])
        ])
      ]),

      v('h2', {classes: [css.tabHeader, css.muted]}, ['Call for Participation']),
      v('div', {classes: css.hasFlex}, [
        v('div', {classes: css.flex}, [
          v('div', {classes: css.programHeader}, [
            v('img', {
              classes: [css.iconImg],
              src: `${base}APConfFlier_prev.gif`
            }),
  					w(Icon, {type: 'downIcon'}),
  					w(Label, { size }, [v('a', {
  						href: `${base}APConfFlier.pdf`
  					}, ['PDF (82KB)'])]),
  					v('b', [' | ']),
  					w(Label, { size }, [v('a', {
  						href: `${base}APConfFlier.odt`
  					}, ['ODT (62KB)'])])
  				]),
    			v('p', {classes: ui.largeP}, [
            `The CFP `, v('span', {classes: css.accent},['closed']),
            ` on 26th July 2019 with`, v('br'), v('br'),
    				v('b', [`• 2 keynotes`]), v('br'),
    				v('b', [`• 9 awesome talks`]), v('br'),
          ]),
          v('h5', [
            v('a', {
              href: 'https://dustycloud.org/blog/activitypub-conf-2019/'
            }, ['read more on dustycloud.org …'])
          ]),
          v('br')
        ]),
        v('div', [
          v('a', {
            classes: css.imgLink,
            href: `${base}APConfFlier.pdf`
          }, [
            v('img', {
              classes: [css.iconImg, css.iconXLarge],
              src: `${base}APConfFlier_prev.gif`
            })
          ])
        ])
      ]),
      v('h2', {classes: [css.tabHeader, css.muted]}, ['Past Events 2019']),
      v('p', {classes: ui.largeP}, [
        v('br'), `January / February`, v('br'), v('br'),
        v('b', [`• The Wizards Tower in Vlissingen`]), v('br'),
        v('b', [`• FOSDEM in Brussels`]), v('br'), v('br'),
        v('h5', {classes: css.muted}, [
          v('a', {
            href: 'https://librelounge.org/episodes/episode-10-fosdem-copyleftconf-and-spritely.html'
          }, ['listen on librelounge.org …']), v('br'), v('br')
        ])
      ])
		]);
	}
}
