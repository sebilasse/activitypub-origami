import { tsx, create } from '@dojo/framework/core/vdom';
import theme from '../middleware/theme';
import Button from '../button';
import * as grid from '../AppContent.m.css';
import * as css from './Live.m.css';

const factory = create({ theme }).properties();
/*
A https://bbb.fosshost.org/b/mor-fee-7b4-2nh
B https://bbb.fosshost.org/b/mor-nhi-rdx-5ag
C https://bbb.fosshost.org/b/mor-6kc-xbg-csu
D https://bbb.fosshost.org/b/mor-czl-akt-nyx
*/

export default factory(function Live({ middleware: { theme } }) {


	const themedCss = theme.classes(css);
		return (
		<div classes={[grid.pink, grid.root, themedCss.root]}>
			<div classes={grid.headline}><h1>Live</h1></div>
			<div classes={grid.headline}><h4>& Replay</h4></div>
			<div classes={[themedCss.talks]}>
				<h3 classes={themedCss.muted}> <a href="#talks">watch all talks</a></h3>
				<hr />

				<h3>Fri October 2nd</h3>
				<div classes={[themedCss.talk]}>
					<time datetime="2020-10-02">
					<a href="https://conf.tube/videos/watch/285e7580-8281-4ae4-842e-81c687237c69">Welcome & Opening Song</a>
					<h4>Questions & Answers, BoF Planning</h4>
					<ul>
						<li>
							<time datetime="2020-10-02T13:30Z">13:30 UTC</time> <em>“Meet and Greet”</em> in the 'Hallway Track' room<br />Test your setup, connect, party.<br />Bring your cat, dog, green elephant, mascot, photos, confetti …
							<br /><a href="https://socialhub.activitypub.rocks/t/rsvp-meet-and-greet/1009" target="_blank"><Button size="l" variant="filled">RSVP</Button></a>
						</li>
						<li>
							<time datetime="2020-10-02T14:30Z">14:30</time> <a href ="https://conf.tube/videos/watch/6289920f-4e35-4141-ab6f-379b357849ec" target="_blank" rel="noopener noreferrer">The ActivityPub Panel</a> Keynote
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/2cabb25c-0979-4ef6-beaf-f3d001ecbc4c" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/the-activitypub-panel/929" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-0215:30Z">15:30</time> <em>Birds of feather planning session</em>
							<br /><a href="https://socialhub.activitypub.rocks/t/birds-of-feather-planning-session/930" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-0216:00Z">16:00</time> <a href ="https://conf.tube/videos/watch/85a7d230-7e75-48fd-b399-d182ddece030" target="_blank" rel="noopener noreferrer">SkoHub</a> Adrian Pohl, literarymachine
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/a29cc101-08ab-4b18-b208-c2258b46c5bd" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/skohub-supporting-topic-based-content-syndication-discovery-in-a-federated-environment/931" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-0216:30Z">16:30</time> <a href ="https://conf.tube/videos/watch/18aa2f92-36cc-4424-9a4f-6f2de946fbd2" target="_blank" rel="noopener noreferrer">Spritely & Federation Futures</a> Chris Lemmer Webber
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/1e9197b1-be7c-40d1-9fc3-7059b45786cb" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/spritely-and-federation-futures/932" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-0217:00Z">17:00</time> <a href ="https://conf.tube/videos/watch/c79457a9-aae5-47dd-8731-617e6b09fe06" target="_blank" rel="noopener noreferrer">The ActivityPub Ecosystem</a> Evan Prodromou
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/20536d77-ba30-45fa-bc47-370e8c0152f2" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/the-activitypub-ecosystem/933" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
					</ul>
					</time>
				</div>

				<hr />

				<h3><span classes={themedCss.byline}>Sat</span> October 3rd</h3>
				<div classes={[themedCss.talk]}>
					<time datetime="2020-10-03">
					<ul>
						<h4>Questions & Answers</h4>
						<li>
							<time datetime="2020-10-03T12:00Z">12:00</time> <a href ="https://conf.tube/videos/watch/4102f53a-3f91-46c1-bb9b-fb954990f023" target="_blank" rel="noopener noreferrer">Come Together</a> Sebastian Lasse
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/296da45b-560c-438e-ab58-7959f951ec6a" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/come-together-right-now/935" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-03T12:30Z">12:30</time> <a href ="https://conf.tube/videos/watch/d66cf9ea-e8bf-452e-bb36-e88a402e3da2" target="_blank" rel="noopener noreferrer">CommonsPub</a> Mayel de Borniol
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/a1097f46-b0db-48bf-be3f-55ac20b2a66f" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/commonspub-and-the-quest-for-a-modular-decentralised-app-ecosystem/938" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-03T13:00Z">13:00</time> <a href ="https://conf.tube/videos/watch/ff168b1a-46d2-40e3-935b-452ee7da3b9f" target="_blank" rel="noopener noreferrer">NoSQL</a> Brad Koehn
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/b6a04bec-45ac-429d-9299-8453552bd0a8" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/nosql-databases-and-activitypub/939" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-03T13:30Z">13:30</time> <a href ="https://conf.tube/videos/watch/d8c8ed69-79f0-4987-bafe-84c01f38f966" target="_blank" rel="noopener noreferrer">Decentralized vs. The Trolls</a> Derek Caelin
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/a5d5675e-3ccb-488b-8759-1dc0420e395f" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/decentralized-social-networks-vs-the-trolls/941" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-03T14:00Z">14:00</time> <a href ="https://conf.tube/videos/watch/953de898-74dc-4665-95fb-313042f66cc6" target="_blank" rel="noopener noreferrer">reboot indymedia</a> Hamish Campbell
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/c694c3ee-bb49-44e0-98a7-960ac176116c" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/the-reboot-of-the-indymedia-project/942" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-03T14:30Z">14:30</time> <a href ="https://conf.tube/videos/watch/2b43c03e-b5d7-420d-b30d-fe16fda7f498" target="_blank" rel="noopener noreferrer">Federated as discussion</a> José Manuel Meza (Mx)
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/cdbccd5f-f7d3-4d1f-a778-e45f9c876f66" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/using-federated-instances-as-discussion-communities/944" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-03T15:00Z">15:00</time> <a href ="https://conf.tube/videos/watch/c28fe948-1308-4669-97a7-3c0e08500116" target="_blank" rel="noopener noreferrer">Digital public sphere</a> Erwin Ernst Steinhammer
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/28bce010-4842-4167-a8fe-b4139757632f" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/digital-public-sphere-from-gated-platforms-to-the-fediverse/945" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-03T15:30Z">15:30</time> <a href ="https://conf.tube/videos/watch/c42604a8-d71d-4bd0-8081-d2c77210f206" target="_blank" rel="noopener noreferrer">LearnAwesome.org</a> Nilesh Trivedi
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/d1a9a1a4-bb10-4405-b4bc-a0d80d5295c9" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/learnawesome-org-building-a-better-goodreads-with-activitypub/946" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-03T16:00Z">16:00</time> <a href ="https://conf.tube/videos/watch/bf1309c1-0f5e-4fa1-9b58-fc240f369684" target="_blank" rel="noopener noreferrer">ActivityPub in XWiki</a> Simon Urli
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/dee609c2-5d0f-4cae-90fd-bd5ea472e6d5" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/integrating-activitypub-in-xwiki-a-journey/947" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-03T16:30Z">16:30</time> <a href ="https://conf.tube/videos/watch/32351956-89d7-4887-b6b0-f1a32f91dc36" target="_blank" rel="noopener noreferrer">OAuth 2.1 and ActivityPub</a> Aaron Parecki
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/f9e0856e-3825-476c-8cad-84f4331c04f5" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/oauth-2-1-and-activitypub/948" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-03T17:00Z">17:00</time> <a href ="https://conf.tube/videos/watch/952f9cef-3b97-45e4-a248-199772a23f62" target="_blank" rel="noopener noreferrer">Go-Fed</a> CJ
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/580ae1ea-9f13-4cd0-8839-41c332a222ab" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/go-fed-past-present-and-future/949" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-03T17:30Z">17:30</time> <a href ="https://conf.tube/videos/watch/ccad21f7-6bc7-489e-886f-ba0fb8d20647" target="_blank" rel="noopener noreferrer">The database is the protocol</a> Caleb James DeLisle
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/852e2b13-27dc-4d02-a03b-28ae8e597385" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/the-database-is-the-protocol-reflections-on-a-20-year-tradition-of-re-inventing-the-wheel/950" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-03T18:00Z">18:00</time> <a href ="https://conf.tube/videos/watch/a0196813-fb0d-4740-a37a-5f2b1fd1e774" target="_blank" rel="noopener noreferrer">Privacy design principles</a> Cristina DeLisle
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/4dba3ced-7f1a-407a-aa3b-22b79467b3b8" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/an-analysis-of-privacy-design-principles-as-applied-to-decentralized-systems/951" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-03T18:30Z">18:30</time> <a href ="https://conf.tube/videos/watch/ec2370d9-899b-4ab2-abcd-d1ff99c036ff" target="_blank" rel="noopener noreferrer">IoT meets SocialWeb</a> Phil Coval aka rzr
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/61f38780-8b73-4d6b-816d-fe9c8f3c8d86" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/iot-meets-socialweb-using-activitypub/952" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
					</ul>
					</time>
				</div>

				<hr />

				<h3><span classes={themedCss.byline}>Sun</span> October 4th</h3>
				<div classes={[themedCss.talk]}>
					<time datetime="2020-10-04">
					<ul>
						<li>
							<time datetime="2020-10-04T12:00Z">10:00 - 16:00</time> <em>Birds of feather sessions</em>
							<br /><a href="#bof"><Button size="l" variant="filled">Overview</Button></a>
							<a href="https://socialhub.activitypub.rocks/tag/bof" target="_blank"><Button size="l" variant="filled">Notes, Discussion</Button></a>
						</li>
						<li>
							<time datetime="2020-10-04T16:00Z">16:00</time> <a href ="https://conf.tube/videos/watch/b8d6c88a-0e73-46dd-9e35-d4645bb12db8" target="_blank" rel="noopener noreferrer">Let's Play and Win Our Own Game</a> Keynote Darius Kazemi
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/ee874639-6f5d-4fbc-a63f-ca9cfebdb1ab" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/lets-play-and-win-our-own-game/953" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-04T17:00Z">17:00</time> <a href ="https://conf.tube/videos/watch/87bc99dd-b1b8-4fc3-b034-dca805388179" target="_blank" rel="noopener noreferrer">AP Conf Organizers session</a> Morgan, Sebastian, Thomas
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/eca574fe-85dc-4285-823b-cd1e1e1ccbe6" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/running-a-foss-virtual-conference/954" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						</li>
						<li>
							<time datetime="2020-10-04T17:30Z">17:30</time> <em>Lightning Round talks</em>
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/4a431c74-b594-4d0f-bef6-f0ee4455bee2" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/tag/lightning-talk" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
							<a href="#" target="_blank"><Button size="l" variant="filled">Recording</Button></a>
						</li>
					</ul>
					</time>
				</div>

				<hr />

				<time datetime="2020-10-05">
					<h3><span classes={themedCss.byline}>Monday</span></h3>
					<div classes={[themedCss.talk]}>
						<ul>
						<li>
							<time datetime="2020-10-05T12:00Z">12:00</time> Hackathon kickstart
							<br /><a href="https://bbb.fosshost.org/b/mor-phk-9a0-6ey" target="_blank"><Button size="l" variant="filled">in Hallway</Button></a>
							<br /><a href="https://socialhub.activitypub.rocks/tag/hackathon" target="_blank"><Button size="l" variant="filled">Overview, Discussion</Button></a>
						</li>
						<li>
							<time datetime="2020-10-11T15:00Z">Sunday, 15:00</time> Hackathon demo session
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/" frameborder="0" allowfullscreen></iframe></div>
							<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/" frameborder="0" allowfullscreen></iframe></div>
							<br /><a href="https://socialhub.activitypub.rocks/t/activitypub-hackathon-2020/956" target="_blank"><Button size="l" variant="filled">Overview</Button></a>
						</li>
						</ul>
					</div>
				</time>
				<p></p><hr /><p></p>
			</div>
			<aside classes={[grid.leftColumn, themedCss.asideColumn]}>
			</aside>
		</div>
	);
});
