import { tsx, create } from '@dojo/framework/core/vdom';
import Link from '../link/ActiveLink';
import * as css from '../App.m.css';

const factory = create({});
export default factory(function Footer({ }) {
	return (
		<footer classes={[css.footer]}>
			<small classes={[css.menuItem]}>
				<Link key='credits' matchParams={{}} params={{}} activeClasses={[]} to='credits'>
					Credits & License
				</Link>
			</small>
			<small classes={[css.menuItem]}>
				<Link key='privacy' matchParams={{}} params={{}} activeClasses={[]} to='privacy'>
					Privacy
				</Link>
			</small>
			<small classes={[css.menuItemRight]} style="margin-right:0;">
				<a href='https://redaktor.me/apconf' target="_blank">
					2019
				</a>
			</small>
			<small classes={[css.menuItemRight]}>
				<a href='https://socialhub.activitypub.rocks' target="_blank">
					Forum
				</a>
			</small>
		</footer>
	);
});
