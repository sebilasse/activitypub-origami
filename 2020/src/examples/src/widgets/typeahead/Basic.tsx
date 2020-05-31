import { create, tsx } from '@dojo/framework/core/vdom';
import { defaultTransform } from '@dojo/widgets/select';
import icache from '@dojo/framework/core/middleware/icache';
import { createMemoryResourceWithDataAndFilter } from '../list/memoryTemplate';
import Typeahead from '@dojo/widgets/typeahead';

const factory = create({ icache });
const options = [
	{ value: 'cat', label: 'Cat' },
	{ value: 'dog', label: 'Dog' },
	{ value: 'fish', label: 'Fish' },
	{ value: 'catfish', label: 'Catfish' }
];

const resource = createMemoryResourceWithDataAndFilter(options);

export default factory(function Basic({ middleware: { icache } }) {
	return (
		<virtual>
			<p>Default Filter</p>
			<Typeahead
				resource={resource}
				transform={defaultTransform}
				onValue={(value) => {
					icache.set('value', value);
				}}
			>
				{{
					label: 'Flat Typeahead'
				}}
			</Typeahead>
			<p>Lorem Ipsum</p>
			<Typeahead
				variant='filled'
				resource={resource}
				transform={defaultTransform}
				onValue={(value) => {
					icache.set('value', value);
				}}
			>
				{{
					label: 'Filled Typeahead'
				}}
			</Typeahead>
			<br />
			<Typeahead
				variant='outlined'
				resource={resource}
				transform={defaultTransform}
				onValue={(value) => {
					icache.set('value', value);
				}}
			>
				{{
					label: 'Outlined Typeahead'
				}}
			</Typeahead>
			<br />
			<Typeahead
				variant='raised'
				resource={resource}
				transform={defaultTransform}
				onValue={(value) => {
					icache.set('value', value);
				}}
			>
				{{
					label: 'Raised Typeahead'
				}}
			</Typeahead>
			<br />
			<Typeahead
				variant='shaped'
				resource={resource}
				transform={defaultTransform}
				onValue={(value) => {
					icache.set('value', value);
				}}
			>
				{{
					label: 'Shaped Typeahead'
				}}
			</Typeahead>

			<br />
			<Typeahead
				size='l'
				variant='shaped'
				resource={resource}
				transform={defaultTransform}
				onValue={(value) => {
					icache.set('value', value);
				}}
			>
				{{
					label: 'Basic Typeahead'
				}}
			</Typeahead>

			<br />
			<Typeahead
				size='xl'
				variant='shaped'
				resource={resource}
				transform={defaultTransform}
				onValue={(value) => {
					icache.set('value', value);
				}}
			>
				{{
					label: 'Basic Typeahead'
				}}
			</Typeahead>

			<br /><br />
			<Typeahead
				size='xxl'
				variant='shaped'
				resource={resource}
				transform={defaultTransform}
				onValue={(value) => {
					icache.set('value', value);
				}}
			>
				{{
					label: 'Basic Typeahead'
				}}
			</Typeahead>
			<pre>{icache.getOrSet('value', '')}</pre>
		</virtual>
	);
});
