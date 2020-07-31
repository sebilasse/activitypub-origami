import { tsx, create } from '@dojo/framework/core/vdom';
import theme from '../middleware/theme';

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
			<div classes={grid.headline}><h4></h4></div>
			<div classes={[themedCss.talks]}>
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>1</p>
					<div>
					<h2>The reboot of the indymedia project</h2>
					<i classes={[themedCss.byline]}>Hamish Campbell</i>
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
					<p classes={[themedCss.number]}>2</p>
					<div>
						<h2>NoSQL Databases and ActivityPub</h2>
						<i classes={[themedCss.byline]}>Brad Koehn</i>
						<p class="serif">
Implementing an ActivityPub server can be daunting, but one way to make it easier is by using a NoSQL database.<br /><br />
In this talk, I’ll lay out the way my server uses NoSQL to provide high-performance, highly-scalabale storage for ActivityPub objects.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>3</p>
					<div>
						<h2>Digital public sphere - From gated platforms to the fediverse</h2>
						<i classes={[themedCss.byline]}>Erwin Ernst Steinhammer</i>
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
					<p classes={[themedCss.number]}>4</p>
					<div>
						<h2>The database is the protocol.<br />Reflections on a 20 year tradition of re-inventing the wheel.</h2>
						<i classes={[themedCss.byline]}>Caleb James DeLisle</i>
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
					<p classes={[themedCss.number]}>5</p>
					<div>
						<h2>An analysis of privacy design principles as applied to decentralized systems</h2>
						<i classes={[themedCss.byline]}>Cristina DeLisle</i>
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
					<p classes={[themedCss.number]}>6</p>
					<div>
						<h2>Open-Source Social Applications with Apache Streams</h2>
						<i classes={[themedCss.byline]}>Steve Blackmon</i>
						<p class="serif">
Apache Streams unifies a diverse world of digital profiles and online activities into common formats and vocabularies, and makes these datasets accessible across a variety of databases, devices, and platforms for streaming, browsing, search, sharing, and analytics use-cases.<br /><br />
Apache Streams contains JRE-based modules that developers can use to easily integrate with online data sources and build polyglot indexes of activities, entities, and relationships - all based on public standards such as Activity Streams, or other published organizational standards.
Apache Streams makes it simple to load your data from social networks and similar sources, using API connections or full-archive data portability downloads, into a local database you can build applications on top of.<br />
In this talk, I will give a primer on Apache Streams architecture and capabilities, as well as a demo of an application I built using my social data: Probot.<br /><br />
Profile Bot (aka probot) is an open-source software package you can run to manage your social media accounts programatically, as well as deep-dive into your social network data.<br />
Once your data is loaded, you can browse, filter, search, and sort lists of your friends, followers, posts, shares, direct messages, etc... from the built-in browser, and perform mass actions. For example, delete all tweets where you mentioned a particular hashtag, for reasons.<br />
Probot can also enrich your social data by running it through Apache Streams Processor modules, which can append attributes from open-source libraries and third-party APIs.<br /><br />
Probot runs on a small collection of docker containers (all OSS). All of the data can be queried via SQL or the embedded database http api for external integrations.<br />
Probot is currently a single-user application, though with more engineering could turn it into a hosted SaaS application whose users would not need to create their own twitter application or interact with anything aside from a web browser.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>7</p>
					<div>
						<h2>Go-Fed: Past, Present, and Future</h2>
						<i classes={[themedCss.byline]}>CJ</i>
						<p class="serif">
The Go-Fed suite of libraries implement the ActivityPub protocol in the Go language. It supports developers with different goals, from the polished projects of WriteFreely to scrappy personal blogs and a large swath of unnamed tinkered projects. Its development began in December 2017 and is still ongoing, readily scaling across new vocabularies, like ForgeFed, and is accommodating of complimentary libraries so clients can choose to embrace community-proposed solutions.<br /><br />
Go-Fed takes to heart the philosophy that the ActivityPub specification left opportunities for further evolution of its core ideas. It also embraces the philosophy of "only solving one problem" to provide a concrete platform for experimenting with the protocol itself or experimenting with a complementary idea.<br /><br />
This talk addresses Go-Fed’s unique history of being an early adopter, the challenges of developing in a statically-typed language, and the difficulty of rigorously isolating the "ActivityPub protocol layer" from other layers or an application. It goes over the approach to adopting the suite of libraries in new or existing codebases for interested developers. Finally, the project maintainer will provide his outlook on where Go-Fed can help provide a productive platform for protocol experiments, and where the project will focus efforts into 2021.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>8</p>
					<div>
						<h2>The ActivityPub ecosystem</h2>
						<i classes={[themedCss.byline]}><a href="https://identi.ca/evan" target="_blank" rel="noopener noreferrer">Evan Prodromou</a></i>
						<p class="serif">
We have a big world to build. <br />
In this talk, I’ll discuss some of the cool stuff that’s been built, and cool stuff we still need.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>9</p>
					<div>
						<h2>OAuth 2.1 and ActivityPub</h2>
						<i classes={[themedCss.byline]}>aaronpk</i>
						<p class="serif">
OAuth is the foundation of most of modern online security, used everywhere from signing in to mobile apps to protecting your bank accounts.<br /><br />
This session will cover what’s new in OAuth 2.1 and how ActivityPub can take advantage of some of the newest features of OAuth to better support a wide range of interoperable ActivityPub clients.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>10</p>
					<div>
						<h2>IoT meets SocialWeb using ActivityPub</h2>
						<i classes={[themedCss.byline]}>Philippe Coval (aka RzR)</i>
						<p class="serif">
There is no doubt that the Web became a platform of choice for online social interactions, but it can be also used <a href="https://mastodon.social/@rzr/104445414812540466" target="_blank" rel="noopener noreferrer">in IoT context</a>
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>11</p>
					<div>
						<h2>Using federated instances as discussion communities</h2>
						<i classes={[themedCss.byline]}>Jose Manuel Meza Cano</i>
						<p class="serif">
From the field of psychology, specifically cultural psychology, emphasis is placed on the construction of discussion spaces that have traditionally been seen as the physical classroom, however, since the emergence of social networks, these digital spaces have been used to try to generate communities of discussion and that later lead to learning.<br /><br />
Unfortunately, as it is known, the most used social networks have serious privacy problems, which leads to the voluntary delivery of data to large corporations. It is for this reason that a small project has been started where the use of Mastodon is proposed for the development of online discussions on specific topics with psychology students, which could result in experiences that generate data on what elements to consider for unleash the discussion and how the participants relate in this type of scenario.<br />
Fortunately, Mastodon and its mobile applications favor the development of activities without problems for users, which could be successfully developed by a small community of psychologists.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>12</p>
					<div>
						<h2>SkoHub:<br /> Supporting topic-based content syndication & discovery in a federated environment</h2>
						<i classes={[themedCss.byline]}>Adrian Pohl, literarymachine</i>
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
					<p classes={[themedCss.number]}>13</p>
					<div>
						<h2>Integrating ActivityPub in XWiki: a journey</h2>
						<i classes={[themedCss.byline]}>Simon Urli</i>
						<p class="serif">
XWiki is an open-source wiki platform written in Java with a design emphasis on extensibility. The core feature of XWiki is its capacity to design structured-data documents and applications directly in the wiki. But if XWiki is easily extensible and has a store of more than 900 existing extensions, until recently its social features were limited inside the platform and didn’t allow to interact outside it, in a federated ecosystem.<br /><br />
In this presentation, we’ll see how we developed a new extension in XWiki to support the ActivityPub protocol, what part of the protocol we have integrated so far and how other document-oriented federated services can integrate to us. We also want to spend some time to discuss about the various challenges we encountered, be it on understanding the protocol, testing our implementation, or integrating with other existing implementations.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>14</p>
					<div>
						<h2>Decentralized Social Networks vs. The Trolls</h2>
						<i classes={[themedCss.byline]}>Derek Caelin</i>
						<p class="serif">
In the summer of 2019, the alt-right social network Gab migrated to the decentralized "Fediverse" of social networks after being booted from mainstream financial services and hosting solutions. Almost immediately, Gab was met by a dedicated movement to isolate it. The movement was largely successful; within a year, the Gab CTO announced they would leave the Fediverse. This talk will cover how moderators, activists, and developers in the Fediverse used human moderators, strong moderation tools, representative codes of conduct, and no small amount of organization to promote healthy online spaces.<br /><br />
We’ll review how some of the challenges faced by centralized platforms, which struggle with their own size and scale, have been addressed in networks of smaller, community run, more moderated servers. In the debate over how to make a healthier internet, the open platforms and open protocols in the model of the Fediverse may have some of the best resources to isolate bad actors, including Gab.<br /><br />
Derek Caelin is an Innovation and Data Specialist at Counterpart International (CPI) with experience in open source technology and social media. He has helped activists deploy technology for social good at CPI, PeaceTech Lab, and the United States Institute of Peace. In writing this article, Derek spoke with 80 people, primarily on Mastodon, including 12 interviews of Fediverse administrators and moderators as well as hate speech monitors and experts in dangerous speech. He also conducted a survey of Fediverse users with 670 respondents.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>15</p>
					<div>
						<h2>Building a better GoodReads with ActivityPub</h2>
						<i classes={[themedCss.byline]}>Nilesh Trivedi</i>
						<p class="serif">
I have been building LearnAwesome as an ActivityPub compliant equivalent of GoodReads. It’s both a repository of learning resources (books, but also blogs, courses, podcasts, newsletters, livestreams etc). In this talk, I can walk you through the steps I took to implement ActivityPub source and sink support in this Ruby on Rails based webapp.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>16</p>
					<div>
						<h2>Spritely and Federation Futures</h2>
						<i classes={[themedCss.byline]}>Christopher Lemmer Webber</i>
						<p class="serif">
Spritely is a laboratory-project to incubate tools for the future of the fediverse, working on such things as Datashards (distributed storage), Goblins (distributed programming), improved security for user interface designs, etc.<br /><br />
See live updates and demonstrations from the Spritely project and hear how these incubated technologies could help pave positive futures for the fediverse.
						</p>
					</div>
				</div>
				<hr />
				<div classes={[themedCss.talk]}>
					<p classes={[themedCss.number]}>17</p>
					<div>
						<h2>Running a FOSS virtual conference</h2>
						<i classes={[themedCss.byline]}>Morgan Lemmer-Webber, Thomas Markey and fosshost.org, Sebastian Lasse</i>
						<p class="serif">
Online conferences and live-streamed conferences have been increasingly popular in the face of political and social changes over the past decade. The COVID-19 pandemic has brought this trend from a convenience to a necessity.<br />
In this talk, organizers of APConf will discuss how we threw together a virtual conference using Peertube and a Big Blue Button server hosted by Fosshost.<br /><br />
Fosshost provides cloud compute power to the free and open source software community. Established hosting providers donate infrastructure to the fosshost project, which in turn they manage and share with the open source community. These reciprocated values of sharing, improve, promote and advance the use of free software. Fosshost provides hosting to more than thirty open source projects including Celestia Space, XFCE, GNOME, XIPH, the ActivityPub Conference and many more.<br /><br />
						</p>
					</div>
				</div>
				<hr />
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
