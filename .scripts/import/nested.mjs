import fs from 'fs';
import path from 'path';

// Helper function to convert to PascalCase
function toPascalCase(name) {
	return name
		.split('-')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
}

const baseDir = 'ui/src/lib/components'; // Base directory for components

/**
 * Recursively find components with `elements` directories.
 */
function findComponents(dir = baseDir) {
	const components = [];

	fs.readdirSync(dir).forEach((item) => {
		const itemPath = path.join(dir, item);

		if (!fs.statSync(itemPath).isDirectory()) {
			return; // Skip non-directories
		}

		const elementsPath = path.join(itemPath, 'elements');

		if (fs.existsSync(elementsPath) && fs.statSync(elementsPath).isDirectory()) {
			const files = fs.readdirSync(elementsPath).filter((file) => file.endsWith('.svelte'));
			const hasRoot = files.includes('root.svelte');
			const subComponents = files.map((file) => path.basename(file, '.svelte'));

			components.push({ dir: itemPath, subComponents, hasRoot });
		} else {
			// Recursively scan subdirectories
			components.push(...findComponents(itemPath));
		}
	});

	return components;
}

/**
 * Generate `<foldername>.ts` for the component upfront if it doesn't exist.
 */
function ensureFolderFile(componentDir) {
	const folderName = path.basename(componentDir);
	const folderFile = path.join(componentDir, `${folderName}.ts`);

	if (!fs.existsSync(folderFile)) {
		const folderContent = `
export {};
		`.trim();

		fs.writeFileSync(folderFile, folderContent, 'utf-8');
		console.log(`Ensured folder file exists: ${folderFile}`);
	}
}

/**
 * Generate component file for directories with `root.svelte`.
 */
function generateRootComponentFile(componentDir, subComponents) {
	const componentName = toPascalCase(path.basename(componentDir));
	const outputFile = path.join(componentDir, `${componentName}.ts`);

	const subComponentImports = subComponents
		.filter((subComponent) => subComponent !== 'root')
		.map(
			(subComponent) =>
				`import ${toPascalCase(subComponent)} from './elements/${subComponent}.svelte';`
		)
		.join('\n');

	const subComponentAssignments = subComponents
		.filter((subComponent) => subComponent !== 'root')
		.map(
			(subComponent) =>
				`${componentName}.${toPascalCase(subComponent)} = ${toPascalCase(
					subComponent
				)} as ${componentName}Type['${toPascalCase(subComponent)}'];`
		)
		.join('\n');

	const fileContent = `
import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/root.svelte';
${subComponentImports}

type ${componentName}Type = typeof Root & {
${subComponents
	.filter((subComponent) => subComponent !== 'root')
	.map(
		(subComponent) =>
			`    ${toPascalCase(subComponent)}: SubComponent<typeof ${toPascalCase(subComponent)}>;`
	)
	.join('\n')}
};

const ${componentName} = Root as ${componentName}Type;
${subComponentAssignments}

export default ${componentName};
	`.trim();

	fs.writeFileSync(outputFile, fileContent, 'utf-8');
	console.log(`Generated component file with root: ${outputFile}`);
}

/**
 * Generate `export.ts` for components inside `elements`.
 */
function generateExportFile(componentDir, subComponents) {
	const exportFile = path.join(componentDir, 'export.ts');

	const exportContent = subComponents
		.map(
			(subComponent) =>
				`export { default as ${toPascalCase(subComponent)} } from './elements/${subComponent}.svelte';`
		)
		.join('\n');

	fs.writeFileSync(exportFile, exportContent, 'utf-8');
	console.log(`Generated export file: ${exportFile}`);
}

/**
 * Generate `<foldername>.ts` for directories without `root.svelte` that exports everything from `export.ts`.
 */
function generateFolderExportFile(componentDir) {
	const folderName = path.basename(componentDir);
	const folderFile = path.join(componentDir, `${folderName}.ts`);

	const exportFile = path.join(componentDir, 'export.ts');
	const fileContent = `export * as default from './export.js';`.trim();

	fs.writeFileSync(folderFile, fileContent, 'utf-8');
	console.log(`Generated folder export file: ${folderFile}`);
}

/**
 * Main function to generate components.
 */
async function generateComponents() {
	console.log('Starting component generation process...');
	const components = findComponents();

	if (components.length === 0) {
		console.log('No valid components found.');
		return;
	}

	for (const { dir, subComponents, hasRoot } of components) {
		// Ensure `<foldername>.ts` exists upfront
		ensureFolderFile(dir);

		if (hasRoot) {
			// Generate for components with `root.svelte`
			console.log(`Processing directory with root.svelte: ${dir}`);
			generateRootComponentFile(dir, subComponents);
		} else {
			// Generate for components without `root.svelte`
			console.log(`Processing directory without root.svelte: ${dir}`);
			generateExportFile(dir, subComponents);
			generateFolderExportFile(dir); // Ensure `<foldername>.ts` only exports from `export.ts`
		}
	}

	console.log('Component generation process completed.');
}

// Execute the script
(async () => {
	await generateComponents();
})();
