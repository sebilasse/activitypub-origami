import { tsx, create } from '@dojo/framework/core/vdom';
import i18n from '@dojo/framework/core/middleware/i18n';
import theme from '@dojo/framework/core/middleware/theme';

import bundle from './Footer.nls';
import * as css from './Footer.m.css';

const factory = create({ theme, i18n });

export default factory(function Footer({ middleware: { theme, i18n } }) {
	const { messages } = i18n.localize(bundle);
	const themedCss = theme.classes(css);

	return (
		<footer classes={themedCss.root}>
			<div classes={themedCss.wrapper}>
				<div classes={themedCss.content}>
					<div classes={themedCss.contentRow}>
						Lorem Ipsum i18n: {messages.examples}
					</div>
				</div>
			</div>
		</footer>
	);
});
