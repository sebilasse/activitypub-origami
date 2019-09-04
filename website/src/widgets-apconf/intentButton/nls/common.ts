const locales = {
	'ar': () => import ('./ar/common'),
	'bg': () => import ('./bg/common'),
	'cs': () => import ('./cs/common'),
	'de': () => import ('./de/common'),
	'eo': () => import ('./eo/common'),
	'es': () => import ('./es/common'),
	'eu': () => import ('./eu/common'),
	'fa': () => import ('./fa/common'),
	'fi': () => import ('./fi/common'),
	'fr': () => import ('./fr/common'),
	'gl': () => import ('./gl/common'),
	'he': () => import ('./he/common'),
	'hu': () => import ('./hu/common'),
	'hy': () => import ('./hy/common'),
	'io': () => import ('./io/common'),
	'ja': () => import ('./ja/common'),
	'ko': () => import ('./ko/common'),
	'no': () => import ('./no/common'),
	'oc': () => import ('./oc/common'),
	'pl': () => import ('./pl/common'),
	'pt': () => import ('./pt/common'),
	'ru': () => import ('./ru/common'),
	'sr': () => import ('./sr/common'),
	'sr-Latn': () => import ('./sr-Latn/common'),
	'uk': () => import ('./uk/common'),
	'zh-CN': () => import ('./zh-CN/common'),
	'zh-HK': () => import ('./zh-HK/common'),
	'zh-TW': () => import ('./zh-TW/common'),
};

const messages = {
	share: 'Share',
	alt: 'Share a link with your followers'
};

export default { locales, messages };
