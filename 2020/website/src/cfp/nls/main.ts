export default {
	locales: {
		de: () => import('./de/main'),
		fr: () => import('./fr/main')
	},
	messages: {
		headline: 'Info',
		deadline: `Registration closed`,
		description: `
A conference about the present and future of ActivityPub,
the world’s leading federated social web standard.
<br><br>
Following a successful inaugural conference in [2019](/2019/),
we have expanded APConf 2020 to a four day event that will occur entirely on line
via Big Blue Button.
<br>
This year’s conference will include pre- recorded talks with live question and
answer sessions, birds of a feather sessions, lightning round talks, and a hackathon
that follows the conference.`,
		cfp: `
We *invite* proposals for birds of a feather session topics and 30- 60 minute talks
related to ActivityPub. Topics may include, but are not limited to:`,
		cfpList: `
- projects and implementations
- community management and hosting
- and ActivityPub extensions.`,
		registration: `
To *submit* a BoF, please include your title and a brief summary with your [registration](/#register).
<br><br>
Due to bandwidth limitations of video conferencing software, we ask for those
who wish to participate in the Big Blue Button sessions to register.
<br>
Registration happened on a first-come first-serve basis.
<br>
There is *no registration fee*.
<br>
All of the recorded talks will be uploaded to ConfTube and freely available regardless of registration
a week prior to the conference.`,
		codeOfConduct: `By participating, you agree to follow the terms of our Code of Conduct which can be found here:`,
		hamiltonCaption: `Pioneering computer scientist
Margaret Hamilton stands next to the code that she and her team wrote
to guide the Apollo spacecraft to the moon.`,
		hamiltonCredit: `Draper Laboratory`,
		hamiltonSpecialInstructions: `[CC0]
Retouched / restored by Adam Cuerden, modifications:
dust and scratches removed;
curves tweaked to bring out shadows,
approximately 3 pixels cropped from bottom in order to remove a border.`,
		byronCaption: `The world's First Computer Programmer:
<br>
Ada Lovelace aka Augusta Ada Byron
<br>
– 1843 or 1850`,
		byronCredit: `Daguerreotype by Antoine Claudet`,
		byronSpecialInstructions: `[CC0] wikimedia`
	}
};
