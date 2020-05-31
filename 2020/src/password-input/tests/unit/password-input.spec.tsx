import { createHarness, compareTheme } from '../../../common/tests/support/test-helpers';
import * as textInputCss from '../../../theme/default/text-input.m.css';
import Icon from '../../../icon';
import ConstrainedInput from '../../../constrained-input';
import PasswordInput from '../..';

import { tsx } from '@dojo/framework/core/vdom';
import TextInput from '../../../text-input';

const { describe, it } = intern.getInterface('bdd');
const harness = createHarness([compareTheme]);
const rules = { length: { min: 1 } };

describe('PasswordInput', () => {
	it('renders with default properties', () => {
		const h = harness(() => <PasswordInput rules={rules} />);
		h.expect(() => (
			<ConstrainedInput
				rules={rules}
				key="root"
				type={'password'}
				theme={{ '@dojo/widgets/text-input': textInputCss }}
			>
				{{ trailing: undefined }}
			</ConstrainedInput>
		));
	});

	it('renders a textinput when no rules are passed', () => {
		const h = harness(() => <PasswordInput />);
		h.expect(() => (
			<TextInput
				key="root"
				type={'password'}
				theme={{ '@dojo/widgets/text-input': textInputCss }}
				onValidate={() => undefined}
				valid={undefined}
			>
				{{ trailing: undefined }}
			</TextInput>
		));
	});

	it('handles required validation when no rules are passed', () => {
		const h = harness(() => <PasswordInput required />);
		h.trigger('@root', 'onValidate', false, 'this is required');
		h.expect(() => (
			<TextInput
				key="root"
				type={'password'}
				theme={{ '@dojo/widgets/text-input': textInputCss }}
				onValidate={() => undefined}
				required
				valid={{ valid: false, message: 'this is required' }}
			>
				{{ trailing: undefined }}
			</TextInput>
		));
	});

	it('renders as a text input after click', () => {
		const h = harness(() => <PasswordInput rules={rules} />);
		h.expect(() => (
			<ConstrainedInput
				rules={rules}
				key="root"
				type={'password'}
				theme={{ '@dojo/widgets/text-input': textInputCss }}
			>
				{{
					trailing: (
						<button onclick={() => {}} type="button">
							<Icon type="eyeIcon" />
						</button>
					)
				}}
			</ConstrainedInput>
		));
	});
});
