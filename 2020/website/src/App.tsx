import { tsx, create } from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';
import icache from '@dojo/framework/core/middleware/icache';
import Route from '@dojo/framework/routing/Route';
import Header from './header/Header';
// import Footer from './footer/Footer';
import Combs from './combs/Combs';
import CFP from './cfp/CFP';
import Link from './link/ActiveLink';
import Register from './register/Register';
import Roadmap from './roadmap/Roadmap';

import material from './theme/material';
import * as css from './App.m.css';

const factory = create({ theme, icache});
const menuItems = ['Roadmap'];

export default factory(function App({ middleware: { theme, icache } }) {
  if (!theme.get()) { theme.set(material, 'dark') }

	const desc = (hidden = false) =>
		<div classes={[css.description, hidden ? css.hidden : null]}>
			<time classes={[css.small, css.descriptionMeta]}>
				<span class="dt-start">October 2<sup>nd</sup></span> - <span class="dt-end">October 5<sup>th</sup> 2020</span>
			</time>
			<h4 class="p-summary">
			A conference about the present and future of ActivityPub, the world’s leading federated social web standard.
			</h4>
			<br />
			<h4 classes={css.descriptionMeta}>
				The 2020 <em><address class="location">virtual</address></em> conference will include
			</h4>
			<ul class="serif">
				<li>pre-recorded talks with live question and answer sessions</li>
				<li>birds of a feather sessions</li>
				<li>lightning round talks</li>
				<li>a hackathon that follows the conference.</li>
				{menuItems.map((item) => {
					return (
						<li>
							<Link key={item} matchParams={{}} params={{}} activeClasses={[]}
								classes={[icache.get('openRoadmap') ? css.openRoadmap : null]}
								onClick={() => { icache.set('openRoadmap', true) }}
								to={item.toLowerCase()}
							>
								{item}
							</Link>
						</li>
					);
				})}
			</ul>
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
			</main>
      <footer classes={[css.footer]}>
        <small classes={[css.menuItem]}><a classes={[css.menuLink]} href="credits">Credits & License</a></small>
        <small classes={[css.menuItem]}><a classes={[css.menuLink]} href="privacy">Privacy</a></small>
      </footer>
		</div>
	);
});
