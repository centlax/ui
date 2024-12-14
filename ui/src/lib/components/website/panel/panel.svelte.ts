import { createTabs, type CreateTabsProps } from '@melt-ui/svelte';
import type { PanelProps } from './panel.js';

const defaults: CreateTabsProps = {
	defaultValue: 'tab-1',
	orientation: 'horizontal',
	activateOnFocus: true,
	loop: true,
	autoSet: true
};

export function createPanel(props: PanelProps) {
	return createTabs({
		defaultValue: props['default-value'] ?? defaults['defaultValue'],
		onValueChange: props['on-value-change'],
		orientation: props['orientation'] ?? defaults['orientation'],
		activateOnFocus: props['activate-on-focus'] ?? defaults['activateOnFocus'],
		loop: props['loop'] ?? defaults['loop'],
		autoSet: props['auto-set'] ?? defaults['autoSet']
	});
}
