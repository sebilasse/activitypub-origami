import { DNode, v } from '../../widgets/common/Widget';
import * as css from '../../styles/app.m.css';
import * as ui from '../../widgets/themes/redaktor-default/_ui.m.css';

export interface apconfTalk {
	title: DNode;
	byline: DNode;
	details?: DNode[];
	img?: string;
	location?: string;
	isKeynote?: boolean;
	hasButtons?: boolean;
	isFlex?: boolean;
	video?: string;
	download?: string;
	etherpad?: string;
	time?: string;
	license?: string;
	block?: number;
}

interface Talks { [author: string]: apconfTalk; }
export const talks: Talks = {
//v('b', [` `]),
Chris: {
	title: '“ActivityPub: past, present, future”',
	byline: 'Christopher Lemmer Webber',
	details: [
		v('p', {classes: [ui.largeP, css.max]}, [
`This talk gives an overview of ActivityPub: `, v('br'),
`How did we get to this point? Where are we now? Where do we need to go?`,v('br'),v('br'),
`We'll paint a chart from past to a hopeful future with better privacy,
richer interactions, and more security and control for our users.`])
	],
	isKeynote: true,
	img: '_02_Chris',
	location: '#DATAMAZE workshop in Gallery E - first floor'
},
Luc: {
	title: '“Advice to new fediverse administrators and developers”',
	byline: 'Luc Didry',
	details: [
		v('p', {classes: ui.largeP}, [
`Hosting an ActivityPub service is not like hosting another service
and it's the same for developing ActivityPub software.`,v('br'),v('br'),
`Here is some advice based on Framasoft's experience`,v('br'),v('br'),`[we host a Mastodon instance and develop two
ActivityPub software:`,v('br'),`PeerTube and Mobilizon – the last one is not yet out]`,v('br'),v('br'),v('br'),
`Errors and observations.`])
	],
	isFlex: false,
	img: '05_Luc'
},
Maloki: {
	title: '“Is ActivityPub paving the way to web 3.0?”',
	byline: 'Marie Axelsson (Maloki)',
	details: [ v('p', {classes: ui.largeP}, [
`A talk about how we're walking away from Web 2.0 and paving the way to Web 3.0 with ActivityPub development. `,v('br'),
`We'll discuss what this could mean for the future of the web`,v('br'),v('br'),
`We'll look at some of the history of the web, and also consider the social implications moving forward.`])
	],
	img: '06_Maloki'
},
Pukkamustard: {
	title: '“The Semantic Social Network”',
	byline: 'Pukkamustard',
	details: [ v('p', {classes: ui.largeP}, [
`ActivityPub uses JSON-LD as serialization. This means @context field all over the place.
But really there is more behind this:
ActivityPub speaks Linked Data.`,v('br'),v('br'),`In this talk we would like to show what this means and how this
can be used to do cool things.
We might even convince you that the Fediverse is a huge distributed graph that could be queried in very interesting ways -
 that the Fediverse is a Semantic Social Network.`])
	],
	img: '07_Pukkamustard'
},
Serge: {
	title: '“Keeping Unwanted Messages off the Fediverse”',
	byline: 'Serge Wroclawski',
	details: [ v('p', {classes: ui.largeP}, [
`Spam, scams and harassment pose a threat to all social networks, including the Fediverse.`,v('br'),v('br'),
`In this talk, we discuss a multilayered approach to mitigating these threats.`,v('br'),
`We explore spam mitigation techniques of the past as well as new techniques such as OcapPub and Postage.`])
	],
	img: '09_Serge'
},
Schmittlauch: {
	title: '“Decentralised Hashtag Search and Subscription in Federated Social Networks”',
	byline: 'Schmittlauch',
	details: [ v('p', {classes: ui.largeP}, [
`Hashtags have become an important tool for organising topic-related posts in all major social networks,
even having managed to spark social movements like #MeToo. In federated social networks,
unfortunately so far the view on all posts of a hashtag is fragmented between instances.`,v('br'),
`For a student research paper I came up with an architecture for search and subscription of hashtag-posts
in federated social networks.`,v('br'),
`This additional backend for instances augments the Fediverse with a little bit of P2P technology.`,v('br'),v('br'),
`As this architecture is still at a conceptual stage, after presenting my work I'd like to gather ideas and feedback
from various Fediverse stakeholders: What do global hashtags mean for marginalised people and moderation, are they more
a tool of empowerment or of harassment? How can this concept be represented in the ActivityPub protocol?
And what stories do server devs have to tell about common attack scenarios?`])
	],
	img: '08_Schmittlauch'
},
Cristina: {
	title: '“OSS compliance with privacy by default and design”',
	byline: 'Cristina DeLisle',
	details: [ v('p', {classes: ui.largeP}, [
`Privacy is becoming more and more central in shaping the future of tech and the data protection legislation has
contributed significantly to making
this happen. Privacy by default and design are core principles that are fundamental to how software should be envisioned.
The GDPR that came into the spotlight has a strong case to become a standard even outside European borders, influencing
the way we protect personal data. However its impact might be, its implementation is still in its infancy.
OSS has found itself facing the situation and one aspect which is particularly interesting on the tech side is how to
incorporate the principles of privacy by default and design into the software that we build.`,v('br'),v('br'),
`This talk is going to be an overview of how the GDPR has impacted FOSS communities, what do we mean by privacy by default
and by design, how could we envision them applied in our OSS. It will bring examples from which we might find something
interesting to learn from, regardless if we are looking at them as mistakes, best practices or just ways of doing things.`])
	],
	img: '03_Cristina'
},
Caleb: {
	title: '“The case for the unattributed message”',
	byline: 'Caleb James DeLisle',
	details: [
		v('p', {classes: ui.largeP}, [
`Despite it's significant contribution to internet culture, the archetype of the anonymous image board has been largely
ignored by protocol designers. Perhaps the reason for this is because it's all too easy to conflate unattributed speech with
unmoderated speech, which has shown itself to be a dead end.`,v('br'),
`But as we've seen from Twitter and Facebook, putting a name on everything hasn't actually worked that well at improving
the quality of discourse, but what it does do is put already marginalized people at greater risk.`,v('br'),v('br'),
`What I credit as one of the biggest breakthroughs of the fediverse has been the loose federation which allows a person
to choose their moderator, completely side stepping the question of undemocratic censorship vs. toxic free speech.`,
v('br'),v('br'),
`Now I want to start a conversation about how we might marry this powerful moderation system to a forum which divorces the
expression of thought from all forms of identity.`])
	],
	img: '02_Caleb'
},
Matt: {
	title: '“Federated Blogging with WriteFreely”',
	byline: 'Matt Baer',
	details: [ v('p', {classes: ui.largeP}, [
`We're building out one idea of what federated blogging could look like with separate ActivityPub-powered platforms,
WriteFreely and Read.as – one for writing and and one for reading.`,v('br'),v('br'),
`Beyond the software, we're also offering hosting services and helping new instances spring up to make community-building
more accessible, and get ActivityPub-powered software into more hands.`,v('br'),v('br'),
`In this talk I'll go over our approach so far and where we're headed next.`])
	],
	img: '01_Matt'
},
Michael: {
	title: `“I don't know what I'm talking about”`,
	byline: 'Michael Demetriou [qwazix]',
	details: [ v('p', {classes: ui.largeP}, [
`A newbie's introduction to ActivityPub: `, v('br'),
`I have just started my development journey in ActivityPubLand
and I hope to have a first small application ready before ActivityPubConf.`,v('br'),v('br'),
`I was thinking that since I have close to zero experience with ActivityPub development,
I could document my first month of experience, describe the onboarding process and point out useful
resources and common pitfalls. `,v('br'),`In the end I can showcase what I've done during this period.`])
	],
	img: '04_Michael'
},
Mark: {
	title: '“Architectures of Robust Openness”',
	byline: 'Mark S. Miller',
	details: [ v('p', {classes: ui.largeP}, [
		v('p', {classes: [ui.largeP, css.max]}, [
`As social systems grow, we need patterns to allow us to grow social connections while maintaining safety
and trust.`, v('br'),
`Ocaps (object capabilities) fill this void by allowing consensual connections between parties,
and even allows participants to intentionally share those connections with others.`, v('br'),
`But how can we allow for the establishing of new connections without opening us up to runaway abuse?`, v('br'), v('br'),
`This talk discusses Horton, a "whodunnit" layer built on top of object capabilities, allowing us to establish
connections while preserving accountability and the ability to reason about trust with a reduction of fear.`
		]),
		v('br'),
		v('small', [
			`We're very excited about `,
			v('a',{href: 'https://dustycloud.org/blog/mark-miller-at-apconf-2019/'},[`Mark Miller keynoting`]),'.'
		])
	])],
	isKeynote: true,
	img: '_01_Mark',
	location: '#DATAMAZE workshop in Gallery E - first floor'
}

}
