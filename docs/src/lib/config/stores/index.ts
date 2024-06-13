import { persisted } from 'svelte-local-storage-store';
import type { Category } from '$lib/config/stores/category';

type Config = {
	category: Category['name'];
};

export const config = persisted<Config>('config', {
	category: 'common'
});
