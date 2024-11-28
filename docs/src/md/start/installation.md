---
title: Installation
description: How to install and set up Centlax UI in your SvelteKit project.
featured: true
component: true
---

## Create your project

Start by creating a new SvelteKit project if you don't have one set up already:

```bash
pnpm create svelte@latest simba
cd simba
```

## Install Centlax UI with Tailwind CSS

Install Centlax UI, tailwindcss, and thier peer dependencies, then tailwind.config.js and postcss.config.js files will be generated.

```bash
pnpm install -D @centlax/ui tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Enable use of PostCSS in style blocks

In your svelte.config.js file, import vitePreprocess to enable processing style blocks as PostCSS.

```js {2} {8}
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: vitePreprocess()
};
export default config;
```

## Configure Tailwind CSS

Update your tailwind.config.js file to include Centlax UI's preset as starting base

```js {1}{4}
import centlax from '@centlax/ui/tailwind';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	presets: [centlax()]
};
```

## Add Tailwind directives

Create a ./src/app.css file and add the @tailwind directives

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Import the CSS file

Create a ./src/routes/+layout.svelte file and import the app.css file.

```svelte
<script lang="ts">
	import '../app.css';
	import { UProvider } from '@centlax/ui';
	let { children } = $props();
</script>

<UProvider>
	{@render children()}
</UProvider>
```

## Start using Centlax UI

Now you can start using Centlax UI components in your project:

```svelte
<script lang="ts">
	import { UButton } from '@centlax/ui';
</script>

<UButton class="bg-red-500">Click me!</UButton>
```

## Start your build process

Run your build process with npm run dev.

```bash
pnpm run dev
```

This setup integrates Centlax UI with Tailwind CSS in your SvelteKit project, allowing you to use Centlax components with custom Tailwind styles.
