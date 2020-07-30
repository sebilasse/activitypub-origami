export default {
	locales: {
		de: () => import('./de/main'),
		fr: () => import('./fr/main')
	},
	messages: {
		headline: 'Waiting List', // 'Register',
		headlineConfirmed: 'Waiting List joined', // 'Registered',
		byline: `Registration closed`,
		bylineSent: `confirm the mail`,
		bylineConfirmed: `OK`,
		headerConfirmed: `Awesome!`,
		textConfirmed: `You joined the waiting list.`, // `You registered successfuly.`,
		registrationMail: `You can also send proposals by eMail`,
		description: `It is important to *confirm the link* in the mail we send you.`,
		mailSent: `
# Final step:
Please read and *confirm* the mail we sent to complete your request.`,
		photocaption: 'Pictures of ActivityPub Conference 2019 Prague',

		iBadgeName: 'Badge Name',
		pBadgeName: 'enter a public identifier',
		iEmail: 'eMail Address',
		pEmail: 'will not be published',
		iBadgeByline: 'Badge Byline',
		iTimezone: 'Timezone',
		tzCaption: `Given the audience of this conf,
we'll try to schedule talks that can be attended by people around the world.
Though we cannot guarantee to accommodate everyone, please help us by selecting
a time-range you're comfortable with`,
		tzClosedCaption1: `The official registration for ActivityPub Conference is closed!`,
		tzClosedCaption2: ` `,
		iName: 'Real Name',
		iOrg: 'Project, Org. or Company',
		iAP: 'ActivityPub Address',
		iWebsite: 'Website',
		iConduct: 'Code of Conduct',
		iAgree: 'I agree',
		offer: 'I can help',
		oVR: 'Recording',
		oVE: 'Video edit',
		oMo: 'Moderation',
		oWE: 'Webdesign',

		add: 'Add a',
		proposal: 'proposal',
		talkCaption: 'Enter the title and a brief summary',
		bofCaption: 'Enter the title and a brief session summary',
	}
};
