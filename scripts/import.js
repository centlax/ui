import fs from 'fs';
import path from 'path';

const componentsDir = 'src/lib/components';
const importsFile = path.join(componentsDir, 'imports.ts');

const toPascalCase = (str) => str.replace(/(^\w|-\w)/g, clearAndUpper);

const clearAndUpper = (text) => text.replace(/-/, '').toUpperCase();

// Updated generateImports to only comment for the first subdirectory
// and treat same-name-as-folder files as index.svelte.
const generateImports = (dirPath, imports = [], depth = 0) => {
	const files = fs.readdirSync(dirPath);

	for (const file of files) {
		const filePath = path.join(dirPath, file);
		const stats = fs.statSync(filePath);

		if (stats.isDirectory() && depth === 0) {
			// Only add comment for the first subdirectory
			imports.push(`// ${file}`);
			imports = generateImports(filePath, imports, depth + 1);
		} else if (stats.isDirectory()) {
			imports = generateImports(filePath, imports, depth + 1);
		} else if (file.endsWith('.svelte')) {
			const componentDir = path.basename(path.dirname(filePath));
			const fileNameWithoutExtension = path.basename(file, '.svelte');
			const pascalCaseDirName = toPascalCase(componentDir);
			let importName = pascalCaseDirName;

			// Check if the filename matches the directory name or it's not an index file
			if (fileNameWithoutExtension !== 'index' && fileNameWithoutExtension !== componentDir) {
				const pascalCaseFileName = toPascalCase(fileNameWithoutExtension);
				importName = `${pascalCaseDirName}${pascalCaseFileName}`;
			}

			const importPath = `./${path.relative(componentsDir, filePath).replace(/\\/g, '/')}`;
			imports.push(`export { default as U${importName} } from '${importPath}';`);
		}
	}

	return imports;
};

const imports = generateImports(componentsDir);
const importsContent = imports.join('\n');

fs.writeFileSync(importsFile, importsContent);
console.log(`Imports generated and written to ${importsFile}`);
