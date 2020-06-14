import { tsx, create } from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';
import i18n from '@dojo/framework/core/middleware/i18n';
import icache from '@dojo/framework/core/middleware/icache';
import Route from '@dojo/framework/routing/Route';
import Header from './header/Header';
// import Footer from './footer/Footer';
import Combs from './combs/Combs';
import CFP from './cfp/CFP';
import Link from './link/ActiveLink';
import Register from './register/Register';
import Roadmap from './roadmap/Roadmap';
import Privacy from './privacy/Privacy';
import Credits from './credits/Credits';

import material from './theme/material';
import * as css from './App.m.css';
import bundle from './_nls/App.nls';
const snarkdown = require('snarkdown').default;

const factory = create({ theme, i18n, icache});

export default factory(function App({ middleware: { theme, i18n, icache } }) {
  if (!theme.get()) { theme.set(material, 'dark') }
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
      <Link key='roadmap' matchParams={{}} params={{}} activeClasses={[]}
        classes={[icache.get('openRoadmap') ? css.openRoadmap : null]}
        onClick={() => { icache.set('openRoadmap', true) }}
        to='roadmap'
      >
        Roadmap
      </Link>
		</div>

	const home = () =>
	<div classes={[css.hive]}>
		<Combs hasIcons={true} hasHomeLink={false} />
		{desc()}
	</div>

	const roadmap = () =>
		<div classes={[css.hive]}>
			<Combs hasIcons={true} hasHomeLink={false} />
			<Roadmap />
			{desc(true)}
		</div>;

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
				<Route id="home" renderer={home} />
				<Route id="roadmap" renderer={roadmap} />
				<Route id="cfp" renderer={
					() => <virtual><Combs activeId="cfp" /><CFP />{desc(true)}</virtual>}
				/>
				<Route id="register" renderer={
					() => <virtual><Combs activeId="register" /><Register />{desc(true)}</virtual>}
				/>
				<Route id="registerSent" renderer={
					() => <virtual><Combs activeId="register" /><Register state="sent" /></virtual>}
				/>
				<Route id="registerConfirmed" renderer={
					() => <virtual><Combs activeId="register" /><Register state="confirmed" /></virtual>}
				/>
				<Route id="registerError" renderer={
					() => <virtual><Combs activeId="register" /><Register state="error" /></virtual>}
				/>

				<Route id="privacy" renderer={
					() => <virtual><Combs activeId="privacy" /><Privacy />{desc(true)}</virtual>}
				/>
				<Route id="credits" renderer={
					() => <virtual><Combs activeId="credits" /><Credits />{desc(true)}</virtual>}
				/>
			</main>
      <footer classes={[css.footer]}>
        <small classes={[css.menuItem]}><a classes={[css.menuLink]} href="credits">Credits & License</a></small>
        <small classes={[css.menuItem]}><a classes={[css.menuLink]} href="privacy">Privacy</a></small>
      </footer>
		</div>
	);
});
