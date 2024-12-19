import fs from 'fs';
import path from 'path';

// Helper function to convert to CamelCase
function toCamelCase(name) {
	return name
		.split('-')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
}

const baseDir = 'ui/src/lib/components'; // Adjust this base directory

// Function to find components dynamically
function findComponents(dir = baseDir) {
	const components = [];

	fs.readdirSync(dir).forEach((item) => {
		const itemPath = path.join(dir, item);

		if (!fs.statSync(itemPath).isDirectory()) {
			return; // Skip non-directories
		}

		console.log(`Checking directory: ${itemPath}`);
		const elementsPath = path.join(itemPath, 'elements');

		if (fs.existsSync(elementsPath) && fs.statSync(elementsPath).isDirectory()) {
			const files = fs.readdirSync(elementsPath);

			if (files.includes('root.svelte')) {
				console.log(`Found root.svelte in: ${itemPath}`);
				const subComponents = files
					.filter((file) => file !== 'root.svelte' && file.endsWith('.svelte'))
					.map((file) => path.basename(file, '.svelte'));

				console.log(`Subcomponents for ${itemPath}: ${subComponents.join(', ')}`);
				components.push({ dir: itemPath, subComponents });
			}
		} else {
			// Recursively scan subdirectories
			components.push(...findComponents(itemPath));
		}
	});

	return components;
}

// Generate the component file dynamically
function generateComponentFile(componentDir, subComponents) {
	const componentName = toCamelCase(path.basename(componentDir));
	const outputFile = path.join(componentDir, `${componentName}.ts`);

	const subComponentImports = subComponents
		.map(
			(subComponent) =>
				`import ${toCamelCase(subComponent)} from './elements/${subComponent}.svelte';`
		)
		.join('\n');

	const subComponentAssignments = subComponents
		.map(
			(subComponent) =>
				`${componentName}.${toCamelCase(subComponent)} = ${toCamelCase(
					subComponent
				)} as ${componentName}Type['${toCamelCase(subComponent)}'];`
		)
		.join('\n');

	const fileContent = `
import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
${subComponentImports}

type ${componentName}Type = typeof Root & {
${subComponents
	.map(
		(subComponent) =>
			`    ${toCamelCase(subComponent)}: SubComponent<typeof ${toCamelCase(subComponent)}>;`
	)
	.join('\n')}
};

const ${componentName} = Root as ${componentName}Type;
${subComponentAssignments}

export default ${componentName};
`.trim();

	fs.writeFileSync(outputFile, fileContent, 'utf-8');
	console.log(`Generated component file: ${outputFile}`);
}

// Main function to orchestrate the process
async function generateComponents() {
	console.log('Starting component generation process...');
	const components = findComponents();

	if (components.length === 0) {
		console.log('No valid components found.');
		return;
	}

	for (const { dir, subComponents } of components) {
		console.log(`Generating component for directory: ${dir}`);
		generateComponentFile(dir, subComponents);
	}

	console.log('Component generation process completed.');
}

// Execute the script
(async () => {
	await generateComponents();
})();
