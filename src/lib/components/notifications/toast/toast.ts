import type { Toast, ToastsElements } from '@melt-ui/svelte';

export interface ToastData {
	title?: string;
	description?: string;
	color?: string;
	timeout?: number;
	type?: 'foreground' | 'background';
}

export interface ToastTypes extends Toast<ToastData> {}
