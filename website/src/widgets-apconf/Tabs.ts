import { v, w, WidgetBase, ThemedMixin, ThemedProperties } from '../widgets/common/Widget';
import { Size, Material } from '../widgets/common/util';
import Tab from '../widgets/tab';
import TabController from '../widgets/tab-controller';
import CFPTab from './tabs/CFPTab';
import ScheduleTab from './tabs/ScheduleTab';
import InfoTab from './tabs/InfoTab';

export interface TabProperties extends ThemedProperties {
  data?: any;
  size?: Size | keyof typeof Size;
  material?: Material | keyof typeof Material;
  activeIndex?: number;
  onRequestTabChange?: (activeIndex: number) => void;
}
export const ThemedBase = ThemedMixin(WidgetBase);
export default class Tabs<P extends TabProperties = TabProperties> extends ThemedBase<P> {


	render() {
    const { material, size, data = {}, onRequestTabChange, activeIndex = 0 } = this.properties;

		return w(TabController, {
      material, activeIndex, onRequestTabChange
		}, [
			w(Tab, {
				key: 'cfp-tab',
				label: v('span', ['program'])
			}, [ w(CFPTab, { data, size }) ]),
			w(Tab, {
				key: 'schedule-tab',
				label: 'schedule'
			}, [ w(ScheduleTab, { data, size }) ]),
			w(Tab, {
				key: 'info-tab',
				label: 'pictures & info'
			}, [ w(InfoTab, { data, size }) ])
		])
	}
}
