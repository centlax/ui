# Centlax UI

Centlax UI is a package that provides a set of Svelte components and composables built with [Tailwind CSS](https://tailwindcss.com/) and [Melt UI](https://melt-ui.com/) to help you build beautiful and accessible user interfaces.

Its goal is to provide everything related to UI when building a SvelteKit app. This includes components, icons, colors, dark mode but also keyboard shortcuts.

## Features

- Built with [Melt UI](https://melt-ui.com) and [Tailwind CSS](https://tailwindcss.com/)
- HMR support through Svelte & Vite
- Dark mode support
- Keyboard shortcuts ( coming soon )
- Bundled icons
- Fully typed

Read more on [ui.centlax.com](https://ui.centlax.com)

## Installation

```bash
pnpm add @centlax/ui
```

## Usage

```svelte
<script lang="ts">
	import { UButton } from '@centlax/ui';
</script>

<UButton>Click me!</UButton>
```

## Guidelines

**Guidelines help define what makes a component effective. By establishing rules and best practices, we can develop rapidly, create lighter, and build more robust UI libraries.**

**Note:** If a guideline is checked, it is a rule. If not checked, it is highly recommended.

### 1. Pre-Development: Requirements for Component Creation

- [x] If no existing component offers similar results.
- [ ] Component involves more than one HTML element.

### 2. Development

- [x] Exported props are 15 or fewer (declared props).
- [x] Nested nodes are 5 or fewer.
- [ ] Level of nodes is 10 or fewer (loops don't count).
- [x] Self-containment: The component shouldn't affect anything outside itself.

### 3. Post-Development

- [x] Component name has a maximum of 20 characters.

## Documentation

Visit https://ui.centlax.com to explore the documentation.

## Credits

- [sveltejs/svelte](https://github.com/sveltejs/svelte)
- [svecosystem/mode-watcher](https://github.com/svecosystem/mode-watcher)
- [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [melt-ui/melt-ui](https://github.com/melt-ui/melt-ui)
- [egoist/tailwindcss-icons](https://github.com/egoist/tailwindcss-icons)

## Contributing

Thank you for considering contributing to Centlax UI. Here are a few ways you can get involved:

- Reporting Bugs: If you come across any bugs or issues, please check out the reporting bugs guide to learn how to submit a bug report.
- Suggestions: Have any thoughts to enhance Centlax UI? We'd love to hear them! Check out the [contribution guide](https://ui.centlax.com/start/contribute) to share your suggestions.

## Local Development

Follow the docs to [Set up your local development environment](https://ui.centlax.com/start/contribute#local-dev-setup) and contribute.

## License

Licensed under the [MIT license](https://github.com/centlax/ui/blob/dev/LICENSE.md).
