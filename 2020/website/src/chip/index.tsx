import { create, tsx } from '@dojo/framework/core/vdom';
import { RenderResult } from '@dojo/framework/core/interfaces';
import theme, { ThemeProperties, Keys, Variants } from '../middleware/theme';
import * as ui from '../theme/material/_ui.m.css';
import * as colors from '../theme/material/_color.m.css';
import * as buttonCss from '../theme/material/button.m.css';
import * as css from '../theme/material/chip.m.css';
import Icon from '../icon/index';

export interface ChipProperties extends ThemeProperties {
	/** The variant for the input: 'flat', 'outlined', 'raised', 'shaped'
	 * 'flat' by default
	 */
	variant?: Variants;
	/** A callback when the close icon is clicked, if `closeRenderer` is not provided a default X icon will be used */
	onClose?(): void;
	/** An optional callback for the the widget is clicked */
	onClick?(): void;
	/** Whether the widget is disabled, only affects the widget when `onClick` is provided */
	disabled?: boolean;
	/** Indicates whe "checked" state of the widget, will be passed to the icon renderer */
	checked?: boolean;
}

export interface ChipChildren {
	/** Renders an icon, provided with the value of the checked property */
	icon?(checked?: boolean): RenderResult;
	/** The label to be displayed in the widget */
	label: RenderResult;
	/** Renders a close icon, ignored if `onClose` is not provided */
	closeIcon?: RenderResult;
}

const factory = create({ theme })
	.properties<ChipProperties>()
	.children<ChipChildren>();

export default factory(function Chip({ properties, children, middleware: { theme } }) {
	const {
		onClose, onClick, disabled, checked,
		variant = 'flat' as (keyof typeof buttonCss)
	} = properties();
	const themedCss = theme.classes(css);
	const [{ icon, label, closeIcon }] = children();
	const clickable = !disabled && onClick;
	return (
		<div
			key="root"
			classes={[
				theme.variant(),
				theme.sized(ui),
				theme.spaced(ui),
				theme.colored(colors),
				theme.animated(buttonCss),
				buttonCss.root,
				buttonCss[variant],
				themedCss.root,
				disabled && themedCss.disabled,
				clickable && themedCss.clickable
			]}
			role={clickable ? 'button' : undefined}
			onclick={() => {
				if (clickable && onClick) {
					onClick();
				}
			}}
			tabIndex={clickable ? 0 : undefined}
			onkeydown={(event) => {
				if (
					clickable &&
					onClick &&
					(event.which === Keys.Enter || event.which === Keys.Space)
				) {
					event.preventDefault();
					onClick();
				}
			}}
		>
			{icon && <span classes={themedCss.iconWrapper}>{icon(checked)}</span>}
			{label}
			{onClose && (
				<span
					key="closeButton"
					classes={themedCss.closeIconWrapper}
					tabIndex={0}
					role="button"
					onclick={(event) => {
						event.stopPropagation();
						onClose();
					}}
					onkeydown={(event) => {
						if (event.which === Keys.Enter || event.which === Keys.Space) {
							event.stopPropagation();
							event.preventDefault();
							onClose();
						}
					}}
				>
					{closeIcon || (
						<Icon
							type="closeIcon"
							classes={{ '@dojo/widgets/icon': { icon: [themedCss.icon] } }}
						/>
					)}
				</span>
			)}
		</div>
	);
});
