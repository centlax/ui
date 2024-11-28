import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Load the appropriate adapter based on the environment
let adapter;
if (process.env.ADAPTER === 'CDF') {
	const { default: adapterCDF } = await import('@sveltejs/adapter-cloudflare');
	adapter = adapterCDF();
} else {
	const { default: adapterAuto } = await import('@sveltejs/adapter-auto');
	adapter = adapterAuto();
}


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],

	kit: {
		adapter,
		alias: {
			'$md/*': './src/md',
		}
	},

	extensions: ['.svelte', '.svx']
};

export default config;
