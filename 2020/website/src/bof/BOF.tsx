import { tsx, create } from '@dojo/framework/core/vdom';
import theme from '../middleware/theme';

import * as grid from '../AppContent.m.css';
import * as css from '../talks/Talks.m.css';

const factory = create({ theme }).properties();
const apconf2019_1 = require('../assets/photos/low50_apconf_sl044_hd.jpg');
const apconf2019_2 = require('../assets/photos/low51_apconf_sl045.jpg');
const apconf2019_3 = require('../assets/photos/low54_apconf_sl048.jpg');
const apconf2019_4 = require('../assets/photos/low10_apconf_sl_007_hd.jpg');
const apconf2019_5 = require('../assets/photos/low06_apconf_sl_004_hd.jpg');
export default factory(function Talks({ middleware: { theme } }) {
	const themedCss = theme.classes(css);
		return (
		<div classes={[grid.red, grid.root, themedCss.root]}>
			<div classes={grid.headline}><h1>Birds of a feather</h1></div>
			<div classes={grid.headline}><h4>more to come</h4></div>
			<div classes={[themedCss.talks]}>
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>1</p>
					<div>
					<h2>AP Mashup? How would you like disparate AP services to intermingle?</h2>
					<i classes={[themedCss.byline]}>proposed by Der.hans</i>
					<p class="serif">
Activity Pub passes objects. It’s up to the servers and clients to determine what to do with the objects.<br /><br />
<ul>
	<li>How would you like microblogging services such as Mastodon and Pleroma interact with image sharing services like PixelFed?</li>
	<li>How and where do you want image content, podcasts, videos? How can we integrate AP into other Free Software projects?</li>
</ul>
					</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>2</p>
					<div>
						<h2>ActivityPub Experimentation: Towards AP v2</h2>
						<i classes={[themedCss.byline]}>proposed by CJ</i>
						<p class="serif">
ActivityPub has helped spawn a diverse set of software, while also leaving fertile ground for further improvements in the protocol. It seems like the grassroots community has done an excellent job of identifying problems. A great deal of energy by end-users and developers alike has been spent pointing out problematic patterns of software-enabled harassment, the lack of privacy and security protections, the lack of software tooling for community-building, identifying the line where software doesn’t solve people-problems, and many many others.<br /><br />
Why in 2 years has there been no major momentum towards an ActivityPub evolution? This has already been identified by the community: inherent with the grassroots nature of the community is the simple fact that any Fediverse software’s high user count grants that software’s developer/organization high influence in enacting, or avoiding, change on behalf of the Fediverse community.<br /><br />
There are two concrete problems that the BoF could address. There is the "meta" problem of how to get the community organized just enough to identify a path towards consensus, yet doing so without developing institutions since they stifle voices. Then, there is the "execution" problem where, once the community has a procedure to build consensus on a "yes, let’s adopt this" change, how do they entice software developers to build this out in new or existing applications.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>3</p>
					<div>
						<h2>Intermapping</h2>
						<i classes={[themedCss.byline]}>proposed by natacha</i>
						<p class="serif">
Intermapping proposes to gather people and organizations interested mapping the commons. ActivityPub has been discussed during the session held at FSMET as the pathway for a minimal interoperability between different projects developing cartography of the commons that are discussed on the IN COMMON platform.<br /><br />
This session is to present and discuss the different existing models and see what are the possibilities for implementing event notification, that would support their coordination. Problematics are diverse, including being true to the different views on information, facilitating the actualization of information by the concerned communities or supporting the detection of redundant information.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>4</p>
					<div>
						<h2>Scaling Up Cooperation</h2>
						<i classes={[themedCss.byline]}>proposed by hellekin</i>
						<p class="serif">
We’ve been building step stones for the ActivityPub community to collaborate in good conditions. Now we can have a look back and see what we achieved as a group since last APConf, and think about ways to bring our cooperation capacity to a new level – including caveats.<br /><br />
This BoF proposes to focus on three aspects:<br />
<ul>
<li>What can we do to consolidate community use of the SocialHub?</li>
<li>Achievements and ways to gather more funding to develop AvtivityPub software.</li>
<li>What alliances can we make to facilitate wide scale adoption of federated services?</li>
</ul>
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>5</p>
					<div>
						<h2>Adversarial Interoperability: Building Bridges and Starting Fires</h2>
						<i classes={[themedCss.byline]}>proposed by nightpool</i>
						<p class="serif">
Discussion of how ActivityPub can integrate with existing platforms to provide user-centric and interoperable modes of communication for existing social media networks, building trust and user support for the network. <br /><br />
Includes a presentation of a work-in-progress C2S server and client for tumblr.com and discussions of protocol considerations unique to this usecase.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>6</p>
					<div>
						<h2>Mobilizon, PeerTube: let's talk about Framasoft's federated tools</h2>
						<i classes={[themedCss.byline]}>proposed by pouhiou@framasoft.org</i>
						<p class="serif">
Framasoft is a French non-for-profit that host a Mastodon and a Diaspora* instance.<br />
We also are lead-dev on PeerTube (a federated YouTube alternative) and Mobilizon (a federated facebook-events alternative).<br /><br />
Let's have a chat!
						</p>
					</div>
				</div>
				<hr />
				<br />
				<h4>We review and update proposals frequently - <a href="#register">add yours</a></h4>
				<br /><br /><br /><br /><br />
			</div>
			<div classes={themedCss.bottom} />
			<aside classes={[grid.leftColumn, themedCss.asideColumn]}>
				<figure classes={themedCss.figure}>
					<img classes={[themedCss.img]} src={apconf2019_1} />
					<img classes={[themedCss.img]} src={apconf2019_2} />
					<img classes={[themedCss.img]} src={apconf2019_3} />
					<img classes={[themedCss.img]} src={apconf2019_4} />
					<img classes={[themedCss.img]} src={apconf2019_5} />
					<figcaption>
						Pictures of ActivityPub Conference 2019 by Sebastian
					</figcaption>
				</figure>
			</aside>
		</div>
	);
});
