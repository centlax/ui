import { helper } from '$lib/internal/elements/toast/toast.svelte';
export function useToast() {
	return {
		create: helper.addToast,
		update: helper.updateToast,
		remove: helper.removeToast
	};
}
