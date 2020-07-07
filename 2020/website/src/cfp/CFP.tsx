import { tsx, create } from '@dojo/framework/core/vdom';
import icache from '@dojo/framework/core/middleware/icache';
import i18n from '@dojo/framework/core/middleware/i18n';
import theme from '../middleware/theme';
// import resize from '@dojo/framework/core/middleware/resize';

import * as grid from '../AppContent.m.css';
import * as css from './CFP.m.css';
import bundle from './nls/main';
const snarkdown = require('snarkdown').default;
const hamilton = require('../assets/photos/margaret-hamilton-web.jpg');
const byron = require('../assets/photos/ada-byron.png');
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
					<img key="hamilton" classes={[themedCss.img, themedCss.ratio16_7]} src={hamilton} />

					<figcaption title={messages.hamiltonSpecialInstructions}>
						<p classes={themedCss.responsiveCaption} innerHTML={snarkdown(messages.hamiltonCaption)}></p>
						<small><i>{messages.hamiltonCredit}</i></small>
					</figcaption>
				</figure>
			</div>
			<div classes={[grid.autoColumn, themedCss.desc1]}>
				<p class="serif" innerHTML={snarkdown(messages.description)} />
				<p class="serif" innerHTML={snarkdown(messages.cfp)} />
				<span innerHTML={snarkdown(messages.cfpList)} />
			</div>
			<div classes={[grid.autoColumn, themedCss.desc2]}>
				<p class="serif" innerHTML={snarkdown(messages.registration)} />
				<p>
					{messages.codeOfConduct}<br />
					<a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct" target="_blank">
						https://www.contributor-covenant.org
					</a>
				</p>
			</div>
			<div classes={grid.asideColumn}>
				<blockquote>
					Let's keep things fun
					<footer>Christopher</footer>
				</blockquote>
				<figure classes={[themedCss.figure, themedCss.portrait, themedCss.bottom]}>
					<img key="byron" classes={[themedCss.img]} src={byron} />
					<figcaption title={messages.byronSpecialInstructions}>
						<p classes={themedCss.responsiveCaption} innerHTML={snarkdown(messages.byronCaption)}></p>
						<small>{messages.byronCredit}</small>
					</figcaption>
				</figure>
			</div>
		</div>
	);
});
