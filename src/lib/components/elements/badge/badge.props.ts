import type { Size } from '$lib/types/index.js';
import type { ComponentProps } from 'svelte';
import { css } from './badge.styles.js';
import { UAvatar } from '$lib/index.js';
import type { SafelistColors } from '$lib/theme/safelist.js';

export interface BadgeProps {
	icon: string | { leading?: string; trailing?: string; dot?: string; remove?: string };
	border: boolean;
	dot: boolean;
	rounded: boolean;
	remove: boolean;
	size: Size;
	variants: keyof typeof css.variant.mask;
	label: string;
	color: SafelistColors | 'white' | 'gray' | 'black';
	avatar: ComponentProps<UAvatar> | null;
}
