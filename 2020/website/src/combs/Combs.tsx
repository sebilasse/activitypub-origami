// import { RenderResult } from '@dojo/framework/core/interfaces';
import { tsx, create } from '@dojo/framework/core/vdom';
import theme from '../middleware/theme';
import Link from '../link/ActiveLink';
import * as appCss from '../AppContent.m.css';
import * as css from './Combs.m.css';

export interface CombsProperties {
	hasIcons?: boolean;
	hasHomeLink?: boolean;
	activeId?: string;
}

const factory = create({ theme }).properties<CombsProperties>();
const menuItems = [
	{label: (<virtual>Call for<br />Proposals</virtual>), color: 'orange', n: 'cfp'},
	{label: 'Register', color: 'blue', n: 'register'},

	{label: (<virtual>Birds of a<br />feather</virtual>), color: 'red', n: 'bof', disabled: true},
	{label: 'Live', color: 'pink', n: 'live', disabled: true},
	{label: 'Hackathon', color: 'green', n: 'hackathon', disabled: true},
	{label: 'Talks', color: 'amber', n: 'talks', disabled: true},
];

export default factory(function Combs({ properties, middleware: { theme } }) {
	const themedCss = theme.classes(css);
	const { hasIcons = false, hasHomeLink = true, activeId = '' } = properties();
	const homeClasses = [themedCss.comb, themedCss.offGrid, themedCss.alyssa, appCss.alyssa, themedCss.home];
	const activeColor = menuItems.reduce((p, item) => activeId === item.n ? item.color : p, 'gray');
	return (
		<nav
			id="nav"
			role="navigation"
			aria-label="Main Menu"
			classes={[
				themedCss.combs,
				hasIcons ? themedCss.hasIcons : null,
				hasHomeLink ? themedCss.hasHomeLink : null,
				appCss[activeColor as keyof typeof appCss]
			]}
		>

			{menuItems.map((item) => {
				return <Link key={item.n} matchParams={{}} params={{}} activeClasses={[]}
					classes={[
						activeId === item.n ? themedCss.active : null,
						themedCss.comb,
						appCss[item.color as keyof typeof appCss],
						item.disabled ? themedCss.disabled : null
					]}
					to={item.n}
				>
					{item.label}
				</Link>;
			})}
			{(
				hasHomeLink ?
					<Link key='home' matchParams={{}} params={{}} activeClasses={[]}
						classes={homeClasses}
						to='home'
					>
					</Link> : <div classes={homeClasses}></div>
			)}
			<div classes={[themedCss.comb, themedCss.offGrid]}></div>
			<div classes={[themedCss.comb, themedCss.offGrid, themedCss.ben, appCss.ben]}></div>
			<div classes={[themedCss.comb, themedCss.offGrid, themedCss.robin, appCss.robin]}></div>
			{
				!hasHomeLink ? null : <a
					href={activeId ? `${activeId}#nav` : '#nav'}
					classes={[themedCss.scrollControl]}
					onclick={(evt) => {evt.preventDefault(); window.scrollTo(0,0)} }
				>
				</a>
			}
		</nav>
	);
});
