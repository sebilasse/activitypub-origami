import { create, tsx } from '@dojo/framework/core/vdom';
import { defaultTransform } from '@dojo/widgets/select';
import { createMemoryResourceWithDataAndFilter } from '../list/memoryTemplate';
import MultiSelectTypeahead from '@dojo/widgets/multi-select-typeahead';
import states from '@dojo/widgets/examples/src/widgets/list/states';

const factory = create();

const resource = createMemoryResourceWithDataAndFilter(states);

export default factory(function Basic() {
	return (
		<virtual>
			<MultiSelectTypeahead resource={resource} transform={defaultTransform}>
				{{
					label: 'Select All States That Apply'
				}}
			</MultiSelectTypeahead>
			<br />
			<MultiSelectTypeahead resource={resource} transform={defaultTransform}>
				{{
					label: 'Select All States That Apply'
				}}
			</MultiSelectTypeahead>
		</virtual>
	);
});
