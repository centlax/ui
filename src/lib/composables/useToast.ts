import type { ToastData, ToastTypes } from '$lib/components/notifications/toast/toast.js';
import {
	addToast,
	updateToast,
	removeToast
} from '$lib/components/notifications/+/notification.svelte';

export function useToast() {
	function add(data: Partial<ToastData>) {
		addToast({
			data: data,
			closeDelay: data?.timeout || 5000,
			type: data?.type || 'foreground'
		});
	}

	function update(id: string, toast: Partial<ToastData>) {
		updateToast(id, toast);
	}

	function remove(id: string) {
		removeToast(id);
	}

	return {
		add,
		update,
		remove
	};
}
