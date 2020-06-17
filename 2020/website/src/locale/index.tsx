import { create, tsx } from '@dojo/framework/core/vdom';
import i18n from '@dojo/framework/core/middleware/i18n';

const factory = create({ i18n });

export default factory(function LocaleChanger({ middleware: { i18n } }) {
    return (
        <div>
            <button
                onclick={() => {
                    i18n.set({ locale: 'en', rtl: false });
                }}
            >
                EN
            </button>
            <button
                onclick={() => {
                    i18n.set({ locale: 'de', rtl: false });
                }}
            >
                DE
            </button>
        </div>
    );
});
