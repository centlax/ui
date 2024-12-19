import fs from 'node:fs';
import path from 'node:path';

const libDir = 'ui/src/lib';
const componentsDir = path.join(libDir, 'components');
const importsFile = path.join(libDir, 'components/export.ts');

/**
 * Converts a string to PascalCase.
 */
const toPascalCase = (str) =>
	str.replace(/(^\w|-\w)/g, (match) => match.replace(/-/, '').toUpperCase());

/**
 * Constructs the import path relative to the library directory.
 */
const getRelativeImportPath = (filePath) =>
	`$lib/${path.relative(libDir, filePath).replace(/\\/g, '/')}`;

/**
 * Recursively scans directories to generate import statements.
 */
function generateImports(dirPath, imports = [], level = 0) {
	const files = fs.readdirSync(dirPath);

	let hasElementsFolder = false;
	for (const file of files) {
		const filePath = path.join(dirPath, file);
		const stats = fs.statSync(filePath);

		if (stats.isDirectory() && file === 'elements') {
			// Mark if elements folder exists
			hasElementsFolder = true;
		} else if (stats.isDirectory()) {
			// Recursive call for subdirectories
			if (level === 0) {
				imports.push(`\n/** ${file} */`);
			}
			generateImports(filePath, imports, level + 1);
		}
	}

	// Handle export for the parent directory if it contains an `elements` folder
	if (hasElementsFolder) {
		const parentDir = path.basename(dirPath);
		const pascalCaseParent = toPascalCase(parentDir);
		const importPath = getRelativeImportPath(path.join(dirPath, `${parentDir}.js`));
		imports.push(`export { default as U${pascalCaseParent} } from '${importPath}';`);
	} else {
		// Export individual files directly from the folder
		for (const file of files) {
			const filePath = path.join(dirPath, file);
			const stats = fs.statSync(filePath);

			if (stats.isFile() && file.endsWith('.svelte') && !file.startsWith('_')) {
				const componentDir = path.basename(dirPath);
				const fileNameWithoutExtension = path.basename(file, '.svelte');
				const pascalCaseDir = toPascalCase(componentDir);
				let importName = pascalCaseDir;

				if (fileNameWithoutExtension !== 'index' && fileNameWithoutExtension !== componentDir) {
					const pascalCaseFile = toPascalCase(fileNameWithoutExtension);
					importName = `${pascalCaseDir}${pascalCaseFile}`;
				}

				const importPath = getRelativeImportPath(filePath);
				imports.push(`export { default as U${importName} } from '${importPath}';`);
			}
		}
	}

	return imports;
}

/**
 * Main function to generate the `export.ts` file for components.
 */
export function importComponents() {
	const imports = [];
	generateImports(componentsDir, imports);
	const importsContent = imports.join('\n');

	fs.writeFileSync(importsFile, importsContent);
	console.info(`Components export file generated at: ${importsFile}`);
}
