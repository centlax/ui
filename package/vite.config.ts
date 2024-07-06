import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: resolve('lib')
		}
	},
	server: {
		fs: {
			allow: ['lib']
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
