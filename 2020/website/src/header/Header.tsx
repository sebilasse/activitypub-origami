import { tsx, create } from '@dojo/framework/core/vdom';
import i18n from '@dojo/framework/core/middleware/i18n';
import theme from '@dojo/framework/core/middleware/theme';
import icache from '@dojo/framework/core/middleware/icache';
import Link from '../link/ActiveLink';
import * as css from './Header.m.css';
// import bundle from './Header.nls';

const factory = create({ theme, icache, i18n });

export default factory(function Header({ middleware: { theme, icache, i18n } }) {
	// const { messages } = i18n.localize(bundle);
	const themedCss = theme.classes(css);
	const open = icache.get<boolean>('open') || false;

	return (
		<header key="root" classes={themedCss.root}>
			<input
				id="mainMenuToggle"
				onclick={() => {
					icache.set('open', true);
				}}
				classes={themedCss.mainMenuToggle}
				type="checkbox"
				checked={open}
			/>
			<div classes={[themedCss.left]}>
				<span classes={themedCss.leftContainer}>
					<label for="mainMenuToggle" key="toggleButton" classes={themedCss.toggleButton}>
						<span classes={themedCss.srOnly}>Menu</span>
						<div classes={themedCss.toggleBar} />
					</label>
				</span>
				<a href="/" classes={[themedCss.centerContainer]}>
					<h2 classes={[themedCss.logo]} alt="ActivityPub main logo">
						<b>Activity</b>Pub <br /><b><i>Conference</i> <time>2020</time></b>
					</h2>
				</a>
				<span classes={[themedCss.rightContainer]} />
			</div>

			<nav role="navigation" classes={[themedCss.menu]} aria-label="Meta Menu">
				<ul classes={themedCss.menuList}>
					<li classes={[themedCss.menuItem]}>
						<label classes={themedCss.lightbulb} for="lightbulb"></label>
					</li>
					<li classes={[themedCss.menuItem]}>
			      <Link key='roadmap' matchParams={{}} params={{}} activeClasses={[]}
			        onClick={() => { icache.set('openRoadmap', true) }}
			        to='roadmap'
			      >
			        Roadmap
			      </Link>
					</li>
				</ul>
			</nav>


		</header>
	);
});

/*
	<li classes={[themedCss.menuItem]}>
		<a classes={themedCss.menuLink} href="#de" aria-label={messages.deName}
			hreflang="de" lang="de" onclick={(e) => { e.preventDefault(); i18n.set({ locale: 'de' }) }}
		>
			<abbr title={messages.deName}>{messages.de}</abbr>
		</a>
	</li>
	<li classes={[themedCss.menuItem]}>
		<a classes={themedCss.menuLink} href="#en" aria-label={messages.enName}
			hreflang="en" lang="en" onclick={(e) => { e.preventDefault(); i18n.set({ locale: 'en' }) }}
		>
			<abbr title={messages.enName}>{messages.en}</abbr>
		</a>
	</li>
	<li classes={[themedCss.menuItem]}>
		<a classes={themedCss.menuLink} href="#fr" aria-label={messages.frName}
			hreflang="fr" lang="fr" onclick={(e) => { e.preventDefault(); i18n.set({ locale: 'fr' }) }}>
			<abbr title={messages.frName}>{messages.fr}</abbr>
		</a>
	</li>
*/
