import { formatAriaProperties, Variants, PointerDevices } from '../common/util';
import { DimensionResults } from '@dojo/framework/core/meta/Dimensions';
import { dimensions } from '@dojo/framework/core/middleware/dimensions';
import { focus } from '@dojo/framework/core/middleware/focus';
import { create, tsx } from '@dojo/framework/core/vdom';
import { theme, ThemeProperties } from '../middleware/theme';
import * as ui from '../theme/material/_ui.m.css';
import * as colors from '../theme/material/_color.m.css';
import * as css from '../theme/material/button.m.css';
/* TODO:
responsive?: boolean;
wide?: boolean;
popup?: { expanded?: boolean; id?: string; type?: string } | boolean;
--> aria-haspopup
*/
export interface ButtonProperties extends ThemeProperties {
	/** Custom aria attributes */
	aria?: { [key: string]: string | null };
	/** The variant for the button: 'flat', 'outlined', 'raised', 'shaped'
	 * 'flat' by default
	 */
	variant?: Variants;
	responsive?: boolean;
	/** Whether the button is disabled or clickable */
	disabled?: boolean;
	/** The name of the button */
	name?: string;
	/** Handler for events triggered by button losing focus */
	onBlur?(): void;
	/** Handler for events triggered by a button click */
	onClick?(): void;
	/** Handler for events triggered by "on down" */
	onDown?(e: PointerEvent): void;
	/** Handler for events triggered by "on focus" */
	onFocus?(): void;
	/** Handler for events triggered by "on out" */
	onOut?(): void;
	/** Handler for events triggered by "on over" */
	onOver?(): void;
	/** Handler for events triggered by "on up" */
	onUp?(): void;
	/** Indicates status of a toggle button */
	pressed?: boolean;
	/** Button type can be "submit", "reset", "button", or "menu" */
	type?: 'submit' | 'reset' | 'button' | 'menu';
	/**  Defines a value for the button submitted with form data */
	value?: string;
	/** `id` set on the root button DOM node */
	widgetId?: string;
}
/* We make sure that the event has offsetX and offsetY
// (some Pointer Events polyfills do not)
evt. set the CSS variables if 'animated'
and return the event */
/* TODO FIXME : set only on root ! */
const devicesAll: PointerDevices = ['mouse','pen','touch'];
function setClickDimensions(e: PointerEvent, devices: string[], dim: DimensionResults) {
	const docStyle = document.documentElement.style;
	const elW = dim.offset.width;
	if (typeof e.offsetX !== 'number') {
		(e as any).offsetX = (e.clientX - dim.position.left)||-1
	}
	if (typeof e.offsetY !== 'number') {
		(e as any).offsetY = (e.clientY - dim.position.top)||-1
	}
	const doSet = devices.indexOf(e.pointerType) > -1;
	if (!!doSet && !!elW && typeof e.offsetX === 'number' && e.offsetX > -1) {
		const btnW = elW / 2 + Math.abs(elW / 2 - e.offsetX);
		docStyle.setProperty('--redaktor-btn-w', `${btnW}px`);
		docStyle.setProperty('--redaktor-btn-x', `${e.offsetX}px`);
		docStyle.setProperty('--redaktor-btn-y', `${e.offsetY}px`);
	}
	return e
}

const factory = create({ dimensions, focus, theme }).properties<ButtonProperties>();

export const Button = factory(function Button({
	children,
	id,
	middleware: { dimensions, focus, theme },
	properties
}) {

	const {
		aria = {},
		animated = true,
		variant = 'flat' as (keyof typeof themedCss),
		responsive = false,
		disabled,
		widgetId,
		name,
		pressed,
		type = 'button',
		value,
		onClick,
		onOut,
		onOver,
		onDown,
		onUp,
		onBlur,
		onFocus
	} = properties();
	const themedCss = theme.classes(css);
	const idBase = widgetId || `button-${id}`;

	return (
		<button
			key="root"
			classes={[
				theme.variant(),
				themedCss.root,
				themedCss[variant],
				theme.sized(ui),
				theme.spaced(ui),
				theme.colored(colors),
				theme.animated(themedCss),
				responsive ? themedCss.responsive : null,
				disabled ? themedCss.disabled : null,
				pressed ? themedCss.pressed : null
			]}
			disabled={disabled}
			id={idBase}
			focus={focus.shouldFocus()}
			name={name}
			type={type}
			value={value}
			onblur={() => onBlur && onBlur()}
			onclick={(event: MouseEvent) => {
				event.stopPropagation();
				onClick && onClick();
			}}
			onfocus={() => onFocus && onFocus()}
			onpointerenter={() => onOver && onOver()}
			onpointerleave={() => onOut && onOut()}
			onpointerdown={(event: PointerEvent) => {
				event.stopPropagation();
				const devs: PointerDevices = !animated ? [] :
					(Array.isArray(animated) ? animated : devicesAll);
				const evt = setClickDimensions(event, devs, dimensions.get('root'));
				return onDown && onDown(evt)
			}}
			onpointerup={() => onUp && onUp()}
			{...formatAriaProperties(aria)}
			onanimationend="this.blur()"
			aria-pressed={typeof pressed === 'boolean' ? pressed.toString() : null}
		>
			{children()}
		</button>
	);
});

export default Button;
