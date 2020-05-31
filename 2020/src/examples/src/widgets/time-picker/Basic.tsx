import { create, tsx } from '@dojo/framework/core/vdom';
import TimePicker from '@dojo/widgets/time-picker';
import icache from '@dojo/framework/core/middleware/icache';

const factory = create({ icache });

export default factory(function Basic({ middleware: { icache } }) {
	return (
		<virtual>
			<TimePicker step={1800} onValue={(value) => icache.set('value', value)}>
				{{ label: 'Time: ' }}
			</TimePicker>
			<div>The value is {icache.get('value') || 'not set'}</div>
		</virtual>
	);
});
