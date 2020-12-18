export default {
	locales: {
		de: () => import('./de/main'),
		fr: () => import('./fr/main')
	},
	messages: {
		headline: 'Conference 2020',
		description: `
	A conference about the present and future of ActivityPub, the world’s leading federated social web standard.`,
		list: `
- pre-recorded talks with live question and answer sessions
- birds of a feather sessions
- lightning round talks
- a hackathon that follows the conference.`,
		tPrefix: 'This 2020',
		tAddress: 'virtual',
		tSuffix: 'conference site includes'
	}
};
