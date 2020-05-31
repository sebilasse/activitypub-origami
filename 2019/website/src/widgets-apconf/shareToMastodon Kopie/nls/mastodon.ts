const locales = {
	'ar': () => import ('./ar/mastodon'),
	'bg': () => import ('./bg/mastodon'),
	'cs': () => import ('./cs/mastodon'),
	'de': () => import ('./de/mastodon'),
	'eo': () => import ('./eo/mastodon'),
	'es': () => import ('./es/mastodon'),
	'eu': () => import ('./eu/mastodon'),
	'fa': () => import ('./fa/mastodon'),
	'fi': () => import ('./fi/mastodon'),
	'fr': () => import ('./fr/mastodon'),
	'gl': () => import ('./gl/mastodon'),
	'he': () => import ('./he/mastodon'),
	'hu': () => import ('./hu/mastodon'),
	'hy': () => import ('./hy/mastodon'),
	'io': () => import ('./io/mastodon'),
	'ja': () => import ('./ja/mastodon'),
	'ko': () => import ('./ko/mastodon'),
	'no': () => import ('./no/mastodon'),
	'oc': () => import ('./oc/mastodon'),
	'pl': () => import ('./pl/mastodon'),
	'pt': () => import ('./pt/mastodon'),
	'ru': () => import ('./ru/mastodon'),
	'sr': () => import ('./sr/mastodon'),
	'sr-Latn': () => import ('./sr-Latn/mastodon'),
	'uk': () => import ('./uk/mastodon'),
	'zh-CN': () => import ('./zh-CN/mastodon'),
	'zh-HK': () => import ('./zh-HK/mastodon'),
	'zh-TW': () => import ('./zh-TW/mastodon'),
};

const messages = {
	toot: 'Toot',
	label: 'Mastodon Instance',
	placeholder: 'Your own or e.g. mastodon.social',
	alt: 'mastodon - Share a link with your followers'
};

export default { locales, messages };
