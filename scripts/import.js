import fs from 'fs';
import path from 'path';

const libDir = 'src/lib';
const componentsDir = path.join(libDir, 'components');
const blocksDir = path.join(libDir, 'blocks'); // Define your blocks directory
const importsFile = path.join(libDir, 'imports.ts'); // Adjusted path

const toPascalCase = (str) => str.replace(/(^\w|-\w)/g, clearAndUpper);
const clearAndUpper = (text) => text.replace(/-/, '').toUpperCase();

const generateImports = (dirPath, imports = [], depth = 0) => {
	const files = fs.readdirSync(dirPath);

	for (const file of files) {
		const filePath = path.join(dirPath, file);
		const stats = fs.statSync(filePath);

		if (stats.isDirectory() && depth === 0) {
			imports.push(`// ${file}`);
			imports = generateImports(filePath, imports, depth + 1);
		} else if (stats.isDirectory() && depth === 1) {
			// Limit to child directories
			imports = generateImports(filePath, imports, depth + 1);
		} else if (file.endsWith('.svelte')) {
			const componentDir = path.basename(path.dirname(filePath));
			const fileNameWithoutExtension = path.basename(file, '.svelte');
			const pascalCaseDirName = toPascalCase(componentDir);
			let importName;

			// Check if the directory is named 'other'
			if (componentDir === '+') {
				// If it's the 'other' directory, use the file name as the import name
				importName = toPascalCase(fileNameWithoutExtension);
			} else {
				// Otherwise, use the directory name as a prefix
				importName = pascalCaseDirName;

				// Check if the filename matches the directory name or it's not an index file
				if (fileNameWithoutExtension !== 'index' && fileNameWithoutExtension !== componentDir) {
					const pascalCaseFileName = toPascalCase(fileNameWithoutExtension);
					importName = `${pascalCaseDirName}${pascalCaseFileName}`;
				}
			}

			// Adjusted import path generation
			const importPath = dirPath.includes(componentsDir)
				? `./${path.relative(libDir, filePath).replace(/\\/g, '/')}`
				: `./${path.relative(libDir, filePath).replace(/\\/g, '/')}`;
			imports.push(`export { default as U${importName} } from '${importPath}';`);
		}
	}

	return imports;
};

// Generate imports for components directory
let imports = generateImports(componentsDir);

// Generate imports for blocks directory (child directories only)
imports = generateImports(blocksDir, imports);

const importsContent = imports.join('\n');
fs.writeFileSync(importsFile, importsContent);
console.log(`Imports generated and written to ${importsFile}`);
