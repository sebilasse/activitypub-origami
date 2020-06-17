import { tsx, create } from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';
import i18n from '@dojo/framework/core/middleware/i18n';
import icache from '@dojo/framework/core/middleware/icache';
// import Router from '@dojo/framework/routing/Router';
// import routes from './routes';
import Route from '@dojo/framework/routing/Route';
import Header from './header/Header';
import Footer from './footer/Footer';
import Combs from './combs/Combs';
import CFP from './cfp/CFP';
import Register from './register/Register';
import Roadmap from './roadmap/Roadmap';
import Privacy from './privacy/Privacy';
import Credits from './credits/Credits';

import material from './theme/material';
import * as css from './App.m.css';
import bundle from './_nls/main';
const snarkdown = require('snarkdown').default;

const factory = create({ theme, i18n, icache});

export default factory(function App({ middleware: { theme, i18n, icache } }) {
  if (!theme.get()) { theme.set(material, 'dark') }
/*
  console.log(window.location.href)
  const router = new Router(routes);
  if (window.location.href.indexOf('#') > -1) {
    router.setPath(window.location.href.split('#')[1]);
  }
  */
/*
  /*
  if (!i18n.get()) {
    i18n.set({ locale: navigator.language || 'en-us', rtl: false });
  }
  console.log(bundle, i18n.get())
  */

  const { messages } = i18n.localize(bundle);

	const desc = (hidden = false) =>
		<div classes={[css.description, hidden ? css.hidden : null]}>
			<time classes={[css.small, css.descriptionMeta]}>
				<span class="dt-start">October 2<sup>nd</sup></span> - <span class="dt-end">October 5<sup>th</sup> 2020</span>
			</time>
			<h4 class="p-summary">{messages.description}</h4>
			<br />
			<h4 classes={css.descriptionMeta}>
				{messages.tPrefix} <em><address class="location">{messages.tAddress}</address></em> {messages.tSuffix}
			</h4>
      <div class="serif" innerHTML={snarkdown(messages.list)} />
		</div>

  const r = (id: string, content: any, hasIcons = false, hasHomeLink = true) => () => {
    const lS = localStorage.getItem('apconf')||'0';
    return (
  		<div classes={[css.root]}>
  			<input
          type="checkbox"
          id="lightbulb"
          checked={ !!(lS === '1') }
          onchange={ (e: any) => localStorage.setItem('apconf', e.target.checked ? '1' : '0') }
          classes={[css.lightbulbControl]}
        />
  			<Header classes={{ 'apconf2020/Header': { lightbulb: [css.lightbulb] } }} />
        <main classes={[css.main]}>
          {!hasHomeLink ?
            <div classes={[css.hive]}>
              <Combs activeId={id} hasIcons={hasIcons} hasHomeLink={hasHomeLink} />
              {content}
            </div> :
            <Combs activeId={id} hasIcons={hasIcons} hasHomeLink={hasHomeLink} />
          }
          {!hasHomeLink ? null : content}
          {!hasHomeLink ? null : desc(true)}
        </main>
        <Footer />
      </div>)
  }

	return (
    <virtual>
			<Route id="home" renderer={r('home', desc(), true, false)} />
			<Route id="roadmap" renderer={r('roadmap', <Roadmap />, false, true)} />
      <Route id="cfp" renderer={r('cfp', <CFP />)} />
      <Route id="privacy" renderer={r('privacy', <Privacy />)} />
      <Route id="credits" renderer={r('credits', <Credits />)} />
      <Route id="register" renderer={r('register', <Register />)} />
      <Route id="registerSent" renderer={r('registerSent', <Register state="sent" />)} />
      <Route id="registerConfirmed" renderer={r('registerConfirmed', <Register state="confirmed" />)} />
      <Route id="registerError" renderer={r('registerError', <Register state="error" />)} />
    </virtual>
	);
});
