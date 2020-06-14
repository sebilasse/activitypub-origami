import { tsx, create } from '@dojo/framework/core/vdom';
import icache from '@dojo/framework/core/middleware/icache';
import i18n from '@dojo/framework/core/middleware/i18n';
import theme from '../middleware/theme';
// import resize from '@dojo/framework/core/middleware/resize';

import * as grid from '../AppContent.m.css';
import * as css from '../cfp/CFP.m.css';
import bundle from './Privacy.nls';
const snarkdown = require('snarkdown').default;
const privImg = require('../assets/photos/low02_apconf_hellekin_002_hd.jpg');
const privImg2 = require('../assets/photos/low57_apconf_sl051_hd.jpg');
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
				<figure classes={themedCss.figure}>
					<img key="privImg2" classes={[themedCss.img, themedCss.ratio16_7]} src={privImg2} />
					<figcaption>
						<small><i>{messages.imgCredit2}</i></small>
					</figcaption>
				</figure>
				<br /><br />

			</div>
			<div classes={[grid.autoColumnWide, themedCss.desc1]}>
				<p class="serif" innerHTML={snarkdown(messages.description)} />
				<p class="serif" innerHTML={snarkdown(messages.overview)} />
			</div>
			<div classes={[grid.autoColumnWide, themedCss.desc2]}>
				<p class="serif" innerHTML={snarkdown(messages.info)} />
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
