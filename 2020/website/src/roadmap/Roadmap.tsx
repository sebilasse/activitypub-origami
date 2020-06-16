import { tsx, create } from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';

import Card from '../card/Card';
import CardHeader from '../card/CardHeader';

import * as grid from '../AppContent.m.css';
import * as css from './Roadmap.m.css';

const factory = create({ theme });

export default factory(function Roadmap({ middleware: { theme } }) {
	const themedCss = theme.classes(css);

	const timelineEntries: any = [
		{title: <p>Website</p>, released: true, date: 'June 10'},
		{title: <p>Deadline for CFP Submissions</p>, released: false, date: 'July 6'},
		{title: <p>Approval of Submissions</p>, released: false, date: 'July 15'},
		{title: <p>Detailed Planning</p>, released: false, date: 'August'},
		{title: <p>Planning Meeting</p>, released: false, date: 'September 5'},
		{title: <p>End of pre-recorded talk submission</p>, released: false, date: 'September 11'},
		{title: <p>Deadline for uploads</p>, released: false, date: 'September 25'},
		{title: <p>Conference Meet and Greet</p>, released: false, date: 'October 2'}
	];

	return (
		<div classes={[grid.root, themedCss.root]}>
			<div></div>
			<div classes={[grid.headline, themedCss.header]}><h1>What's coming up</h1></div>
			<div></div>
			<div key="timeline" classes={themedCss.timeline}>
				{timelineEntries.map((entry:any) => (
					<div classes={[themedCss.timelineEntry, entry.released ? themedCss.released : null]}>
						<div classes={themedCss.timelineDate}>{entry.date}</div>
						<div classes={themedCss.timelineDetails}>
							<div classes={themedCss.timelineMarker} />
							<Card
								header={
									<CardHeader
										title={entry.title}
										classes={{ 'apconf2020/CardHeader': { root: [themedCss.cardHeader] } }}
									/>
								}
								classes={{ 'apconf2020/Card': { root: [themedCss.card] } }}
							>
							</Card>
						</div>
					</div>
				))}
			</div>
		</div>
	);
});
