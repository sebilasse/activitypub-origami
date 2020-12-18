import { tsx, create } from '@dojo/framework/core/vdom';
import theme from '../middleware/theme';
import Button from '../button';
import Icon from '../icon';
import * as grid from '../AppContent.m.css';
import * as css from './Talks.m.css';

const factory = create({ theme }).properties();
const apconf2019_1 = require('../assets/photos/low09_apconf_sl_006_hd.jpg');
const apconf2019_2 = require('../assets/photos/low70_apconf_sl061_hd.jpg');
const apconf2019_3 = require('../assets/photos/low60_apconf_sl054_hd.jpg');
const apconf2019_4 = require('../assets/photos/low26_apconf_sl023_hd.jpg');

export default factory(function Talks({ middleware: { theme } }) {
	const themedCss = theme.classes(css);
		return (
		<div classes={[grid.amber, grid.root, themedCss.root]}>
			<div classes={grid.headline}><h1>Talks</h1></div>
			<div classes={grid.headline}><h4>also <a href="https://conf.tube/video-channels/apconf_channel/videos" target="_blank" rel="noopener noreferrer">@ conf.tube</a></h4></div>
			<div classes={[themedCss.talks]}>
				<h3 classes={themedCss.muted}>Keynotes</h3>
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>K</p>
					<div>
						<h2>The ActivityPub Panel</h2>
						<i classes={[themedCss.byline]}>including Jessica Tallon, Amy Guy, Evan Prodromou, and Erin Shepherd<br /> moderated by Christopher Lemmer-Webber</i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/6289920f-4e35-4141-ab6f-379b357849ec" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/6289920f-4e35-4141-ab6f-379b357849ec" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/the-activitypub-panel/929" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/20536d77-ba30-45fa-bc47-370e8c0152f2" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
<a href ="https://activitypub.rocks" target="_blank">ActivityPub</a> is now a widely adopted <a href="https://www.w3.org/TR/activitypub" target="_blank" rel="noopener noreferrer">standard</a><br />... but how did it become a standard in the first place?<br /><br />
Hear about the process of getting ActivityPub all the way to W3C Recommendation status from the people who made it happen, as well as the history that lead to the decision to try and make ActivityPub a standard in the first place! This will be a panel of editors and authors of the ActivityPub protocol.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>K</p>
					<div>
						<h2>Let's Play and Win Our Own Game</h2>
						<i classes={[themedCss.byline]}>I'm Darius Kazemi, and I'm an independent researcher, programmer, and artist. I'm the maintainer of Hometown, a fork of Mastodon with community-enhancing features, and I added AcitvityPub support to the open source event organizing software Gathio. I was a Mozilla Open Web Fellow in 2018-2019</i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/b8d6c88a-0e73-46dd-9e35-d4645bb12db8" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/b8d6c88a-0e73-46dd-9e35-d4645bb12db8" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/lets-play-and-win-our-own-game/953" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/ee874639-6f5d-4fbc-a63f-ca9cfebdb1ab" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
As creators of federated social software, we have a choice: we can compete with social media giants on their own terms, or we can play our own game, one that's impossible for the giants to play in the first place. If we want to do the latter, we need to identify the fundamental assumptions that constrain the giants and ask ourselves what we can do when we throw those assumptions out entirely.<br /><br />
In this talk, I am going to try and inspire you to make things that would be literally impossible to make on the centralized web. I am going to talk about both the advantages and disadvantages of doing this kind of thing. Expect to hear concrete examples of software that already exists, and also examples of software that could conceivably exist in the very near future.<br />
						</p>
					</div>
				</div>
<br /><br /><hr classes={themedCss.hr} /><br /><br />
				<h3 classes={themedCss.muted}>Pre-recorded Talks</h3>
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>1</p>
					<div>
						<h2>Decentralized Social Networks vs. The Trolls</h2>
						<i classes={[themedCss.byline]}>Derek Caelin</i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/d8c8ed69-79f0-4987-bafe-84c01f38f966" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/d8c8ed69-79f0-4987-bafe-84c01f38f966" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/decentralized-social-networks-vs-the-trolls/941" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/a5d5675e-3ccb-488b-8759-1dc0420e395f" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
In the summer of 2019, the alt-right social network Gab migrated to the decentralized "Fediverse" of social networks after being booted from mainstream financial services and hosting solutions. Almost immediately, Gab was met by a dedicated movement to isolate it. The movement was largely successful; within a year, the Gab CTO announced they would leave the Fediverse. This talk will cover how moderators, activists, and developers in the Fediverse used human moderators, strong moderation tools, representative codes of conduct, and no small amount of organization to promote healthy online spaces.<br /><br />
We’ll review how some of the challenges faced by centralized platforms, which struggle with their own size and scale, have been addressed in networks of smaller, community run, more moderated servers. In the debate over how to make a healthier internet, the open platforms and open protocols in the model of the Fediverse may have some of the best resources to isolate bad actors, including Gab.<br /><br />
Derek Caelin is an Innovation and Data Specialist at Counterpart International (CPI) with experience in open source technology and social media. He has helped activists deploy technology for social good at CPI, PeaceTech Lab, and the United States Institute of Peace. In writing this article, Derek spoke with 80 people, primarily on Mastodon, including 12 interviews of Fediverse administrators and moderators as well as hate speech monitors and experts in dangerous speech. He also conducted a survey of Fediverse users with 670 respondents.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>2</p>
					<div>
						<h2>The ActivityPub Ecosystem</h2>
						<i classes={[themedCss.byline]}><a href="https://identi.ca/evan" target="_blank" rel="noopener noreferrer">Evan Prodromou</a></i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/c79457a9-aae5-47dd-8731-617e6b09fe06" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/c79457a9-aae5-47dd-8731-617e6b09fe06" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/the-activitypub-ecosystem/933" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/20536d77-ba30-45fa-bc47-370e8c0152f2" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
We have a big world to build. <br />
In this talk, I’ll discuss some of the cool stuff that’s been built, and cool stuff we still need.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>3</p>
					<div>
						<h2>OAuth 2.1 and ActivityPub</h2>
						<i classes={[themedCss.byline]}>aaronpk</i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/32351956-89d7-4887-b6b0-f1a32f91dc36" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/32351956-89d7-4887-b6b0-f1a32f91dc36" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/oauth-2-1-and-activitypub/948" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/f9e0856e-3825-476c-8cad-84f4331c04f5" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
OAuth is the foundation of most of modern online security, used everywhere from signing in to mobile apps to protecting your bank accounts.<br /><br />
This session will cover what’s new in OAuth 2.1 and how ActivityPub can take advantage of some of the newest features of OAuth to better support a wide range of interoperable ActivityPub clients.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>4</p>
					<div>
						<h2>Spritely and Federation Futures</h2>
						<i classes={[themedCss.byline]}>Christopher Lemmer Webber</i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/18aa2f92-36cc-4424-9a4f-6f2de946fbd2" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/18aa2f92-36cc-4424-9a4f-6f2de946fbd2" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/spritely-and-federation-futures/932" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/1e9197b1-be7c-40d1-9fc3-7059b45786cb" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
Spritely is a laboratory-project to incubate tools for the future of the fediverse, working on such things as Datashards (distributed storage), Goblins (distributed programming), improved security for user interface designs, etc.<br /><br />
See live updates and demonstrations from the Spritely project and hear how these incubated technologies could help pave positive futures for the fediverse.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>5</p>
					<div>
						<h2>Go-Fed: Past, Present, and Future</h2>
						<i classes={[themedCss.byline]}>CJ</i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/952f9cef-3b97-45e4-a248-199772a23f62" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/952f9cef-3b97-45e4-a248-199772a23f62" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/go-fed-past-present-and-future/949" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/580ae1ea-9f13-4cd0-8839-41c332a222ab" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
The Go-Fed suite of libraries implement the ActivityPub protocol in the Go language. It supports developers with different goals, from the polished projects of WriteFreely to scrappy personal blogs and a large swath of unnamed tinkered projects. Its development began in December 2017 and is still ongoing, readily scaling across new vocabularies, like ForgeFed, and is accommodating of complimentary libraries so clients can choose to embrace community-proposed solutions.<br /><br />
Go-Fed takes to heart the philosophy that the ActivityPub specification left opportunities for further evolution of its core ideas. It also embraces the philosophy of "only solving one problem" to provide a concrete platform for experimenting with the protocol itself or experimenting with a complementary idea.<br /><br />
This talk addresses Go-Fed’s unique history of being an early adopter, the challenges of developing in a statically-typed language, and the difficulty of rigorously isolating the "ActivityPub protocol layer" from other layers or an application. It goes over the approach to adopting the suite of libraries in new or existing codebases for interested developers. Finally, the project maintainer will provide his outlook on where Go-Fed can help provide a productive platform for protocol experiments, and where the project will focus efforts into 2021.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>6</p>
					<div>
						<h2>“Come Together Right Now”<br />A design approach to interoperability</h2>
						<i classes={[themedCss.byline]}><a href="https://mastodon.social/web/accounts/193100" target="_blank" rel="noopener noreferrer">Sebastian Lasse</a></i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/4102f53a-3f91-46c1-bb9b-fb954990f023" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/4102f53a-3f91-46c1-bb9b-fb954990f023" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/come-together-right-now/935" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/296da45b-560c-438e-ab58-7959f951ec6a" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
redaktor becomes inherently-social website building software capable of serving website-building needs of institutions,
journalist organizations, citizen journalism and photo/film documentary.
<br />
We are currently building a generic UI supporting the entirety of the client portion of the client to server protocol.
In a CMS world no information should be hidden by the UI but it must be well-arranged.
Let's talk and about how we can build conformance, generic servers and patterns for diverse clients together!
<br /><br />
This piece will identify repeating problems and misconceptions from socialhub and explore
<ul>
	<li>what the concept of a generic ActivityPub conformant server means</li>
	<li>how the client to server protocol helps us</li>
	<li>what patterns are involved</li>
	<li>how we can design, code and work together in federated harmony</li>
</ul>
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>7</p>
					<div>
						<h2>Using federated instances as discussion communities</h2>
						<i classes={[themedCss.byline]}>Jose Manuel Meza Cano</i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/2b43c03e-b5d7-420d-b30d-fe16fda7f498" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/2b43c03e-b5d7-420d-b30d-fe16fda7f498" target="_blank">on conf.tube</a>
						<br /><a href="https://conf.tube/videos/watch/e2923ad5-afc5-49e7-afa3-613eef44adb6" target="_blank" hreflang="es">🇲🇽 Spanish version <small>“Utilizando instancias federadas como comunidades de discusión”</small></a>
						<br /><a href="https://socialhub.activitypub.rocks/t/using-federated-instances-as-discussion-communities/944" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/cdbccd5f-f7d3-4d1f-a778-e45f9c876f66" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
				From the field of psychology, specifically cultural psychology, emphasis is placed on the construction of discussion spaces that have traditionally been seen as the physical classroom, however, since the emergence of social networks, these digital spaces have been used to try to generate communities of discussion and that later lead to learning.<br /><br />
				Unfortunately, as it is known, the most used social networks have serious privacy problems, which leads to the voluntary delivery of data to large corporations. It is for this reason that a small project has been started where the use of Mastodon is proposed for the development of online discussions on specific topics with psychology students, which could result in experiences that generate data on what elements to consider for unleash the discussion and how the participants relate in this type of scenario.<br />
				Fortunately, Mastodon and its mobile applications favor the development of activities without problems for users, which could be successfully developed by a small community of psychologists.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>8</p>
					<div>
						<h2>Digital public sphere - From gated platforms to the fediverse</h2>
						<i classes={[themedCss.byline]}>Erwin Ernst Steinhammer</i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/c28fe948-1308-4669-97a7-3c0e08500116" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/c28fe948-1308-4669-97a7-3c0e08500116" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/digital-public-sphere-from-gated-platforms-to-the-fediverse/945" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/28bce010-4842-4167-a8fe-b4139757632f" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
New advancements and evolved technologies always affected society. This talk discusses the inquiry to what extent fediverse has an influence on changes in the public sphere. In addition, this lecture will address the question of how the rising fediverse is a transition from antagonism to agonism.<br />
<ul>
<li>Does changing from gated platforms to fediverse support a pluralistic culture?</li>
<li>What is the likelihood that larger instances will represent a coherent implementation in terms of standards such as ActivityPub?</li>
<li>How does blocking (particularly blocks between instances) impact this adjustment in public sphere?</li>
<li>Why do we need a specific measure of blocking and which limits do they confine?</li>
</ul>
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>9</p>
					<div>
						<h2>LearnAwesome.org - Building a better GoodReads with ActivityPub</h2>
						<i classes={[themedCss.byline]}>Nilesh Trivedi</i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/c42604a8-d71d-4bd0-8081-d2c77210f206" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/c42604a8-d71d-4bd0-8081-d2c77210f206" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/learnawesome-org-building-a-better-goodreads-with-activitypub/946" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/d1a9a1a4-bb10-4405-b4bc-a0d80d5295c9" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
I have been building LearnAwesome.org (<a href ="https://learnawesome.org/" target="_blank" rel="noopener noreferrer">Website</a>, <a href ="https://github.com/learn-awesome/learn/" target="_blank" rel="noopener noreferrer">GitHub</a>) as an ActivityPub compliant equivalent of GoodReads for learning. It’s both a repository of learning resources (books, but also blogs, courses, podcasts, newsletters, livestreams etc) and a social network of lifelong learners. It also supports ActivityPub so reviews can be consumed in any ActivityPub client app like Mastodon or Tusky. In this talk, I will give you a demo, walk you through our domain model and the steps I took to implement ActivityPub source and sink support in this Ruby on Rails based webapp. The goal is to spark a few conversations about building a learning MAP for humanity and how to leverage ActivityPub for the same.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>10</p>
					<div>
					<h2>The reboot of the indymedia project</h2>
					<i classes={[themedCss.byline]}>Hamish Campbell</i><br />
					<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/953de898-74dc-4665-95fb-313042f66cc6" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/953de898-74dc-4665-95fb-313042f66cc6" target="_blank">on conf.tube</a>
					<br /><a href="https://socialhub.activitypub.rocks/t/the-reboot-of-the-indymedia-project/942" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
					<a href="https://conf.tube/videos/watch/c694c3ee-bb49-44e0-98a7-960ac176116c" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
					<p class="serif">
	We are a wide affinity group working to reboot the global indymedia network using modern federated protocols such as #activitypub. This reboot will be based on the OMN project code.<br />
	What is the OMN (Open Media Network):<br /> The project is to shift power to the producers and consumers of media. It’s about good UI and simple empowering #KISS tools to move content, by categorising it with a grassroots folksonomy. This simple approach is balanced by shared site level syntax for the complex crew.
	<br /><a href ="https://unite.openworlds.info/explore/organizations" target="_blank" rel="noopener noreferrer">Working Project Site</a>
	<br /><a href="http://hamishcampbell.com/index.php/tag/indymedia/" target="_blank" rel="noopener noreferrer">Background</a>
	<br />In the end it’s about bringing trust back into news.</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>11</p>
					<div>
						<h2>SkoHub:<br /> Supporting topic-based content syndication & discovery <br />in a federated environment</h2>
						<i classes={[themedCss.byline]}>Adrian Pohl, literarymachine</i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/85a7d230-7e75-48fd-b399-d182ddece030" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/85a7d230-7e75-48fd-b399-d182ddece030" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/skohub-supporting-topic-based-content-syndication-discovery-in-a-federated-environment/931" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/a29cc101-08ab-4b18-b208-c2258b46c5bd" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
SkoHub implements an approach to resource discovery in a federated environment that is based on subscription and push notification instead of crawling, indexing and search.<br />
To enable this, it combines ActivityPub with SKOS (Simple Knowledge Organization Systems), a long-lived W3C standard for publishing classifications, thesauri and other controlled vocabularies on the web. The core idea is to make the terms of a Knowledge Organization Systems ActivityPub actors. Thus, people can follow topics and receive notifications about newly published resources via a topic-based channel. The initial SkoHub project has been carried out in 2019/20 by the hbz in cooperation with graphthinking GmbH.<br /><br />
Initially, SkoHub was targeted at educators and learners who want to publish and share Open Educational Resources (OER) on the web. Traditional approaches for resource discovery of open content are usually based on archives containing published documents plus metadata. Complementary to this approach, SkoHub takes into account that educational and scholarly resources can be found all over the web and thus a web-centric approach to resource discovery is pursued.<br /><br />
But SkoHub could also play an important role in the fediverse at large for addressing the problem of finding relevant content in a decentralized infrastructure. For example, PeerTube instances could publish their videos to a shared classification and thus be able to present to users resources from all over the fediverse, even without beforehand knowing all the other instances.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>12</p>
					<div>
						<h2>Integrating ActivityPub in XWiki: a journey</h2>
						<i classes={[themedCss.byline]}>Simon Urli</i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/bf1309c1-0f5e-4fa1-9b58-fc240f369684" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/bf1309c1-0f5e-4fa1-9b58-fc240f369684" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/integrating-activitypub-in-xwiki-a-journey/947" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/dee609c2-5d0f-4cae-90fd-bd5ea472e6d5" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
XWiki is an open-source wiki platform written in Java with a design emphasis on extensibility. The core feature of XWiki is its capacity to design structured-data documents and applications directly in the wiki. But if XWiki is easily extensible and has a store of more than 900 existing extensions, until recently its social features were limited inside the platform and didn’t allow to interact outside it, in a federated ecosystem.<br /><br />
In this presentation, we’ll see how we developed a new extension in XWiki to support the ActivityPub protocol, what part of the protocol we have integrated so far and how other document-oriented federated services can integrate to us. We also want to spend some time to discuss about the various challenges we encountered, be it on understanding the protocol, testing our implementation, or integrating with other existing implementations.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>13</p>
					<div>
						<h2>NoSQL Databases and ActivityPub</h2>
						<i classes={[themedCss.byline]}>Brad Koehn</i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/ff168b1a-46d2-40e3-935b-452ee7da3b9f" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/ff168b1a-46d2-40e3-935b-452ee7da3b9f" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/nosql-databases-and-activitypub/939" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/b6a04bec-45ac-429d-9299-8453552bd0a8" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
Implementing an ActivityPub server can be daunting, but one way to make it easier is by using a NoSQL database.<br /><br />
In this talk, I’ll lay out the way my server uses NoSQL to provide high-performance, highly-scalabale storage for ActivityPub objects.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>14</p>
					<div>
						<h2>The database is the protocol.<br />Reflections on a 20 year tradition of re-inventing the wheel.</h2>
						<i classes={[themedCss.byline]}>Caleb James DeLisle</i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/ccad21f7-6bc7-489e-886f-ba0fb8d20647" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/ccad21f7-6bc7-489e-886f-ba0fb8d20647" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/the-database-is-the-protocol-reflections-on-a-20-year-tradition-of-re-inventing-the-wheel/950" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/852e2b13-27dc-4d02-a03b-28ae8e597385" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
From UseNet to ActivityPub, every protocol solves the same problems over again.<br />
<ul>
<li>How do we discover nodes?</li>
<li>How do we deal with network partitions?</li>
<li>How do we define bad behavior and how do we prevent it?</li>
</ul>
The algorithms which solve these problems are present in almost every decentralized protocol. They are also famous for being very difficult to get right!<br />
In this lecture I will to propose an alternative. Why can’t we let the database do the replication and stick to writing the rules? When a node is a finite state automaton, all we need is an SQL-like language to define the set of all legal state transitions.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>15</p>
					<div>
						<h2>An analysis of privacy design principles as applied to decentralized systems</h2>
						<i classes={[themedCss.byline]}>Cristina DeLisle</i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/a0196813-fb0d-4740-a37a-5f2b1fd1e774" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/a0196813-fb0d-4740-a37a-5f2b1fd1e774" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/an-analysis-of-privacy-design-principles-as-applied-to-decentralized-systems/951" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/4dba3ced-7f1a-407a-aa3b-22b79467b3b8" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
This talk will provide an analysis of privacy design principles in building software. It will consider best practice recommendations and the specific characteristics of decentralized models.<br />
For example, data separation is one of the main privacy design principles. Thus, a decentralized model is preferable as opposed to a centralized one. If we were to imagine a privacy by design future, a social media platform would be decentralized. Unfortunately, data separation alone is not contouring this future.<br />
<ul>
<li>What design principles are there to consider?</li>
<li>What are the particular challenges posed by decentralized systems?</li>
</ul>
This talk will tackle these topics and propose ways in which we can address them.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>16</p>
					<div>
						<h2>IoT meets SocialWeb using ActivityPub</h2>
						<i classes={[themedCss.byline]}>Philippe Coval (aka RzR)</i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/ec2370d9-899b-4ab2-abcd-d1ff99c036ff" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/ec2370d9-899b-4ab2-abcd-d1ff99c036ff" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/iot-meets-socialweb-using-activitypub/952" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/61f38780-8b73-4d6b-816d-fe9c8f3c8d86" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
There is no doubt that the Web became a platform of choice for online social interactions, but it can be also used <a href="https://mastodon.social/@rzr/104445414812540466" target="_blank" rel="noopener noreferrer">in IoT context</a>
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>17</p>
					<div>
						<h2>CommonsPub and the quest for a modular decentralised app ecosystem</h2>
						<i classes={[themedCss.byline]}>Mayel de Borniol, with the participation of the CommonsPub Team & Contributors.</i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/d66cf9ea-e8bf-452e-bb36-e88a402e3da2" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/d66cf9ea-e8bf-452e-bb36-e88a402e3da2" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/commonspub-and-the-quest-for-a-modular-decentralised-app-ecosystem/938" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/a1097f46-b0db-48bf-be3f-55ac20b2a66f" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
							<i>The goal: empower people to create and self-manage social spaces and tools tailored to their needs.</i><br /><br />
ActivityPub gave us interoperability at the data level, and we’d like to do the same on the software level with <a href ="https://commonspub.org/" target="_blank" rel="noopener noreferrer">CommonsPub</a>. Instead of a top-down “product design” approach to building an app or platform, we’d like a world where even non-technical users and communities can do it themselves: being able to piece together custom experiences from an ecosystem of apps and plugins developed by different groups who all contribute to (and benefit from) a pool of interdependent software libraries, while each focusing on different use cases, features and user experiences.
<br /><br />
We have implemented groups (to further decentralise the fediverse by rendering users and communities independent from the instance they’re on), and decoupled the federation and storage of ActivityStreams activities/objects from the app’s relational database, backend logic, APIs and frontend interfaces. This means users can have one fediverse identity and a timeline which shows all types of content and activities in one place, while participating in multiple communities and using specialised apps for different activities.
<br /><br />
After presenting what’s available to be hacked on and deployed, we’ll discuss some of our ongoing projects, such as:
<ol>
	<li><a href ="https://valueflo.ws/" target="_blank" rel="noopener noreferrer">ValueFlows</a> to facilitate and federate mutual aid and circular economies.</li>
	<li><a href ="https://haha.academy/" target="_blank" rel="noopener noreferrer">HAHA Academy</a> to share educational knowledge and encourage lifelong learning.</li>
	<li>Federated taxonomies for topic-based search and disovery across instances.</li>
	<li>Plus one more thing which touches on self-hosting, privacy, portability and network neutrality…</li>
</ol>
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>18</p>
					<div>
						<h2>Running a FOSS virtual conference</h2>
						<i classes={[themedCss.byline]}>Morgan Lemmer-Webber, Thomas Markey and fosshost.org, Sebastian Lasse</i><br />
						<div classes={themedCss.talkFrame}><iframe   width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/87bc99dd-b1b8-4fc3-b034-dca805388179" frameborder="0" allowfullscreen></iframe></div>
						<br /><Icon type="eyeIcon" /> <a href="https://conf.tube/videos/watch/" target="_blank">on conf.tube</a>
						<br /><a href="https://socialhub.activitypub.rocks/t/running-a-foss-virtual-conference/954" target="_blank"><Button size="l" variant="filled">Forum</Button></a>
						<a href="https://conf.tube/videos/watch/eca574fe-85dc-4285-823b-cd1e1e1ccbe6" target="_blank"><Button size="l" variant="filled">Q&A <Icon type="eyeIcon" /></Button></a>
						<p class="serif">
Online conferences and live-streamed conferences have been increasingly popular in the face of political and social changes over the past decade. The COVID-19 pandemic has brought this trend from a convenience to a necessity.<br />
In this talk, organizers of APConf will discuss how we threw together a virtual conference using Peertube and a Big Blue Button server hosted by Fosshost.<br /><br />
Fosshost provides cloud compute power to the free and open source software community. Established hosting providers donate infrastructure to the fosshost project, which in turn they manage and share with the open source community. These reciprocated values of sharing, improve, promote and advance the use of free software. Fosshost provides hosting to more than thirty open source projects including Celestia Space, XFCE, GNOME, XIPH, the ActivityPub Conference and many more.<br /><br />
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<div classes={themedCss.talkFrame}><iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://conf.tube/videos/embed/4a431c74-b594-4d0f-bef6-f0ee4455bee2" frameborder="0" allowfullscreen></iframe></div>
				</div>
			</div>
			<aside classes={[grid.leftColumn, themedCss.asideColumn]}>
				<figure classes={themedCss.figure}>
					<img classes={[themedCss.img]} src={apconf2019_1} />
					<img classes={[themedCss.img]} src={apconf2019_2} />
					<img classes={[themedCss.img]} src={apconf2019_3} />
					<img classes={[themedCss.img]} src={apconf2019_4} />
					<figcaption>
						Pictures of ActivityPub Conference 2019 by Sebastian
					</figcaption>
				</figure>
			</aside>
		</div>
	);
});
