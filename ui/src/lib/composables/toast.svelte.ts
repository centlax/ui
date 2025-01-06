import { helper } from '$lib/components/common/toast/toast.svelte';
export function useToast() {
	return {
		create: helper.addToast,
		update: helper.updateToast,
		remove: helper.removeToast
	};
}
