import type { PageServerLoad } from './$types.js';
import { schema } from './schema.js';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(schema));
	console.log(form);
	return {
		form
	};
};
