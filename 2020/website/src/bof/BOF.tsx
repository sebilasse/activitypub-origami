import { tsx, create } from '@dojo/framework/core/vdom';
import theme from '../middleware/theme';
import Button from '../button';
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
					<br /><a href="https://socialhub.activitypub.rocks/t/ap-mashup-how-would-you-like-disparate-ap-services-to-intermingle/839" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
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
						<br /><a href="https://socialhub.activitypub.rocks/t/activitypub-experimentation-towards-ap-v2/840" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://socialhub.activitypub.rocks/t/getting-extensions-into-the-activitystreams-2-0-namespace/1001" target="_blank"><Button size="l" variant="filled">see also</Button></a>
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
						<br /><a href="https://socialhub.activitypub.rocks/t/intermapping/838" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
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
						<br /><a href="https://socialhub.activitypub.rocks/t/scaling-up-cooperation/837" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<p class="serif">
We’ve been building step stones for the ActivityPub community to collaborate in good conditions. Now we can have a look back and see what we achieved as a group since last APConf, and think about ways to bring our cooperation capacity to a new level – including caveats.<br /><br />
This BoF proposes to focus on three aspects:<br />
<ul>
<li>What can we do to consolidate community use of the SocialHub?</li>
<li>Achievements and ways to gather more funding to develop ActivityPub software.</li>
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
						<br /><a href="https://socialhub.activitypub.rocks/t/adversarial-interoperability-building-bridges-and-starting-fires/841" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
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
						<h2>The fediverse as an educational platform</h2>
						<br /><a href="https://socialhub.activitypub.rocks/t/the-fediverse-as-an-educational-platform/983" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<p class="serif">
							This year’s APconf talks engage with quite a few academic and educational disciplines. Let’s all get together and discuss the ways that the fediverse can be used as an educational tool and what work still needs to be done to make those tools accessible.
						</p>
					</div>
				</div>
				<hr />

			<div classes={[themedCss.talk]}>
				<p classes={[themedCss.number]}>7</p>
				<div>
					<h2>The ActivityPub Test suite</h2>
					<br /><a href="https://socialhub.activitypub.rocks/t/the-activitypub-test-suite/996" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
					<p class="serif">
						In the Hackathon let us heal that <a href="https://socialhub.activitypub.rocks/t/the-activitypub-test-suite/290" target="_blank">Open Wound</a>
						<ul>
							<li>The new (yet unofficial) <a href="https://test.activitypub.dev/" target="_blank">Test Suite</a></li>
							<li>Other approaches</li>
							<li>Questions</li>
						</ul>
					</p>
				</div>
			</div>
			<hr />
			<div classes={[themedCss.talk]}>
				<p classes={[themedCss.number]}>8</p>
				<div>
					<h2>Discovery for Interoperability</h2>
					<br /><a href="https://socialhub.activitypub.rocks/t/discovery-for-interoperability/992" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
					<p class="serif">
						Some of the Talks show the missing opportunity for machine-readable discovery of remote AP supporting type …<br />Let us debate on how to discover …
					</p>
				</div>
			</div>
			<hr />
			<div classes={[themedCss.talk]}>
				<p classes={[themedCss.number]}>9</p>
				<div>
					<h2>“Topics” and Services we can subscribe to</h2>
					<br /><a href="https://socialhub.activitypub.rocks/t/topics-and-services-we-can-subscribe-to/995" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
					<p class="serif">
						In some talks we see the concept of topics -<br />People mostly follow people in ActivityPub. But there are many people with many topics …<br />Let us discover how ActivityPub users can follow their interests.
					</p>
				</div>
			</div>
			<hr />
			<div classes={[themedCss.talk]}>
				<p classes={[themedCss.number]}>10</p>
				<div>
					<h2>How to use Groups</h2>
					<br /><a href="https://socialhub.activitypub.rocks/t/how-to-use-groups/1005" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
					<p class="serif">
						Just see all these Forum posts …
					</p>
				</div>
			</div>
			<hr />
			<div classes={[themedCss.talk]}>
				<p classes={[themedCss.number]}>11</p>
				<div>
					<h2>Events in ActivityPub</h2>
					<br /><a href="https://socialhub.activitypub.rocks/t/events-in-activitypub/999" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
					<p class="serif">
						It’s time to federate events!<br />Let's discover solutions.
					</p>
				</div>
			</div>
			<hr />
			<div classes={[themedCss.talk]}>
				<p classes={[themedCss.number]}>12</p>
				<div>
					<h2>Implementing ActivityPub Client-to-Server</h2>
					<br /><a href="https://socialhub.activitypub.rocks/t/implementing-activitypub-client-to-server/981/12" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
					<p class="serif">
						ActivityPub Client-to-Server (AP C2S) API compared to other APIs allows to have more flexibility and control of the activities/objects, plus proper multi-instance abilities (origin URIs instead of IDs local to the instance).
					</p>
				</div>
			</div>
			<hr />
			<div classes={[themedCss.talk]}>
				<p classes={[themedCss.number]}>13</p>
				<div>
					<h2>Spritely (or ocaps or virtual worlds) BoF?</h2>
					<br /><a href="https://socialhub.activitypub.rocks/t/spritely-or-ocaps-or-virtual-worlds-bof/985/4" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
					<p class="serif">
						Just curious if anyone is interested in one or more BoFs on: Spritely, virtual worlds, or ocaps on the fediverse. Could be one or multiple.
					</p>
				</div>
			</div>
			<hr />
				<br />
				<h4>You can still reply and debate in the forum.</h4>
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
