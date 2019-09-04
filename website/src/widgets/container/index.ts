import {
  DNode, v, w, ThemedBase, ThemedProperties, theme, customElement
} from '../common/Widget';
import { Material, materialClass } from '../common/util';
import * as css from '../themes/redaktor-default/split-pane.m.css';
import { GlobalEvent } from '../global-event/index';
/**
 * @type ContainerProperties
 *
 * Properties that can be set on a Container component
 *
 * @property material
 * @property onResize       Called when the divider is dragged; should be used to update `size`
 */
export interface ContainerProperties extends ThemedProperties {
  material?: Material | keyof typeof Material;
	onResize?(size: boolean): void; /* TODO FIXME (size: number) */
}

@theme(css)
@customElement<ContainerProperties>({
	tag: 'redaktor-container',
	properties: [ 'theme', 'material', 'extraClasses' ],
	events: [ 'onResize' ]
})
export class ContainerBase<P extends ContainerProperties = ContainerProperties> extends ThemedBase<P> {

	private _onResize = () => {
		this.properties.onResize && this.properties.onResize(true); /* TODO FIXME (size: number) */
	}

	protected render(): DNode {
    // console.log('MATERIAL', materialClass(this.properties.material))
		return v('div', {
      classes: [
        ...this.theme([css.root]),
        materialClass(this.properties.material)
      ],
			key: 'root'
		}, [
			w(GlobalEvent, {
				key: 'global',
				window: {
					resize: this._onResize
				}
			}),
			...this.children
		]);
	}
}

export default class Container extends ContainerBase<ContainerProperties> {}
