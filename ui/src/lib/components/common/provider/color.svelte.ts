import type { DefaultConfig } from '$lib/plugins/default.js';

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

function generateShades(key: string, value: string) {
	return `${shades.map((shade) => `--ui-color-${key}-${shade}: var(--ui-color-${value}-${shade});`).join('\n  ')}`;
}
function generateColor(key: string, shade: number) {
	return `--${key}: var(--ui-color-${key}-${shade});`;
}
const tag = 'style';
export const root = $state((colors: DefaultConfig['colors']) => {
	return `
	<${tag} id="ui-colors" type="text/css">
			:root {
				${Object.entries(colors)
					// @ts-ignore
					.map(([key, value]: [string, string]) => generateShades(key, value))
					.join('\n  ')}

				${Object.keys(colors)
					.map((key) => generateColor(key, 500))
					.join('\n  ')}
				}
				.dark {
				${Object.keys(colors)
					.map((key) => generateColor(key, 400))
					.join('\n  ')}
	}
	</${tag}>

	<${tag} id="ui-radius">
		:root { --ui-radius: 0.25rem; }
	</${tag}>
					
		`;
});
