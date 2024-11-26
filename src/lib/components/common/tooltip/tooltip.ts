/** Imports */
import type { CreateTooltipProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {};
export const tooltip = styles;

/** Props */
/** todo => we went beyond 10 props rule. */
type Props = HTMLAttributes<HTMLDivElement>;
export interface TooltipProps extends Props {
	children?: Snippet;
	content?: Snippet;
	trigger?: Snippet;
	floaf?: CreateTooltipProps['positioning'];
	'arrow-size'?: CreateTooltipProps['arrowSize'];
	'escape-behavior'?: CreateTooltipProps['escapeBehavior'];
	'force-visible'?: CreateTooltipProps['forceVisible'];
	portal?: CreateTooltipProps['portal'];
	'close-pointer-down'?: CreateTooltipProps['closeOnPointerDown'];
	delay?: { open?: CreateTooltipProps['openDelay']; close?: CreateTooltipProps['closeDelay'] };
	'disable-hover'?: CreateTooltipProps['disableHoverableContent'];
	group?: CreateTooltipProps['group'];
	'default-open'?: CreateTooltipProps['defaultOpen'];
	value?: boolean;
	'trigger-as'?: keyof HTMLElementTagNameMap;
}
