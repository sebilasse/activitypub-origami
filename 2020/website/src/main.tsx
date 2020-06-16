import renderer from '@dojo/framework/core/vdom';
import Registry from '@dojo/framework/core/Registry';
import { tsx } from '@dojo/framework/core/vdom';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';
import { registerI18nInjector } from '@dojo/framework/core/mixins/I18n';
import { StateHistory } from '@dojo/framework/routing/history/StateHistory';
import routes from './routes';
import App from './App';

const registry = new Registry();
registerI18nInjector({ locale: 'de', rtl: false }, registry);
registerRouterInjector(routes, registry, {
	HistoryManager: StateHistory,
	setDocumentTitle: ({ title, params: {} }) =>
    (title ? title : 'ActivityPub Conference 2020')
});

const r = renderer(() => <App />);
const domNode = document.getElementById('app') as HTMLElement;
r.mount({ registry, domNode });
