import { RouteConfig } from '@dojo/framework/routing/interfaces';

export default [
	{	path: '', outlet: 'home', id: 'home', defaultRoute: true },
	{ path: 'roadmap', outlet: 'roadmap', id: 'roadmap', title: 'ActivityPub Conf 2020 > Roadmap' },
	{ path: 'cfp', outlet: 'cfp', id: 'cfp', title: 'ActivityPub Conf 2020 > CFP' },
	{ path: 'register', outlet: 'register', id: 'register', title: 'ActivityPub Conf 2020 > Register' },
	{ path: 'register/sent', outlet: 'register', id: 'registerSent', title: 'ActivityPub Conf 2020 > Register' },
	{ path: 'register/confirmed', outlet: 'register', id: 'registerConfirmed', title: 'ActivityPub Conf 2020 > Register' },
	{ path: 'register/error/{message}', outlet: 'register', id: 'registerError', title: 'ActivityPub Conf 2020 > Register' },
	{ path: 'bof', outlet: 'bof', id: 'bof', title: 'ActivityPub Conf 2020 > BOF' },
	{ path: 'live', outlet: 'live', id: 'live', title: 'ActivityPub Conf 2020 > Live' },
	{ path: 'hackathon', outlet: 'hackathon', id: 'hackathon', title: 'ActivityPub Conf 2020 > Hackathon' },
	{ path: 'talks', outlet: 'talks', id: 'talks', title: 'ActivityPub Conf 2020 > Talks' },
	{ path: 'privacy', outlet: 'privacy', id: 'privacy', title: 'ActivityPub Conf 2020 > Privacy' },
	{ path: 'credits', outlet: 'credits', id: 'credits', title: 'ActivityPub Conf 2020 > CC0' }
] as RouteConfig[];
