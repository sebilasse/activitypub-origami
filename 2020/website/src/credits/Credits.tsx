import { tsx, create } from '@dojo/framework/core/vdom';
import icache from '@dojo/framework/core/middleware/icache';
import i18n from '@dojo/framework/core/middleware/i18n';
import theme from '../middleware/theme';
// import resize from '@dojo/framework/core/middleware/resize';

import * as grid from '../AppContent.m.css';
import * as css from '../cfp/CFP.m.css';
import bundle from './nls/main';
const snarkdown = require('snarkdown').default;
import { pd } from '../assets/icon';
const privImg = require('../assets/photos/low50_apconf_sl044_hd.jpg');
const factory = create({ icache, theme, i18n/*, resize*/ });

export default factory(function CFP({ middleware: { theme, i18n/*,icache, resize*/ } }) {
	const { messages } = i18n.localize(bundle);
	const themedCss = theme.classes(css);

	return (
		<div classes={[grid.orange, grid.root, themedCss.root, theme.isJS() ? themedCss.js : null]}>
			<div classes={grid.headline}><h1>{messages.headline}</h1></div>
			<div classes={grid.headline}><h4>{messages.deadline}</h4></div>
			<div classes={grid.leftColumn}>
				<figure classes={themedCss.figure}>
					<img key="privImg" classes={[themedCss.img, themedCss.ratio16_7]} src={privImg} />
					<figcaption>
						<small><i>{messages.imgCredit}</i></small>
					</figcaption>
				</figure>
			</div>
			<div classes={[grid.autoColumnWide, themedCss.desc1]}>
				<p class="serif" innerHTML={snarkdown(messages.description)} />
				<p class="serif">
					<em>Page made with <b>❤</b> by <a href="https://mastodon.social/@sl007">Sebastian</a></em><br />
						The page and event is hosted at <a href="https://fosshost.org">fosshost!</a>
				</p>
				<small class="serif">Lightbulb Icons Created by David from Noun Project</small>
			</div>
			<div classes={[grid.autoColumnWide, themedCss.desc2]}>
				<hr />
				<i class="serif" innerHTML={snarkdown(messages.overview)+' '} />
				<img src={pd} alt="Public Domain" />
			</div>
			<div classes={[grid.asideColumn, grid.asideStart]}>
				<p>
					<em>contact: </em>
					<span classes={themedCss.m8l}>
						<span>activitypub </span>
						<span>conf</span>
						<span> @rise </span>
					</span>
					<span>&#117;&#112;&#046;&#110;&#101;&#116;</span>
					<br />
				</p>
			</div>
		</div>
	);
});
