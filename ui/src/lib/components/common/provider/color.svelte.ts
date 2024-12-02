import { useApp } from '$lib/config/index.js';
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const {
	colors: { primary, neutral, success, warning, danger }
} = useApp();

function generateShades(key: string, value: string) {
	return `${shades.map((shade) => `--color-${key}-${shade}: var(--color-${value}-${shade});`).join('\n  ')}`;
}
function generateColor(key: string, shade: number) {
	return `--${key}: var(--color-${key}-${shade});`;
}
const tag = 'style';
export const root = $state(() => {
	const colors = {
		primary,
		neutral,
		success,
		warning,
		danger
	};

	return `
	<${tag} id="ui-colors" type="text/css">
			:root {
				${Object.entries(colors)
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
