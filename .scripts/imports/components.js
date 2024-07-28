import fs from 'node:fs';
import path from 'node:path';

const libDir = 'src/lib';
const componentsDir = path.join(libDir, 'components');
const importsFile = path.join(libDir, 'config/imports/components.ts');

const clearAndUpper = (text) => text.replace(/-/, '').toUpperCase();
const toPascalCase = (str) => str.replace(/(^\w|-\w)/g, clearAndUpper);

function generateImports(dirPath, imports = [], level = 0) {
	const files = fs.readdirSync(dirPath);

	for (const file of files) {
		const filePath = path.join(dirPath, file);
		const stats = fs.statSync(filePath);

		if (stats.isDirectory()) {
			if (level === 0) {
				imports.push(`\n/** ${file} */`);
			}
			imports = generateImports(filePath, imports, level + 1);
		} else if (file.endsWith('.svelte')) {
			const componentDir = path.basename(path.dirname(filePath));
			const fileNameWithoutExtension = path.basename(file, '.svelte');
			const pascalCaseDirName = toPascalCase(componentDir);
			let importName = pascalCaseDirName;

			if (fileNameWithoutExtension !== 'index' && fileNameWithoutExtension !== componentDir) {
				const pascalCaseFileName = toPascalCase(fileNameWithoutExtension);
				importName = `${pascalCaseDirName}${pascalCaseFileName}`;
			}

			const importPath = `../../${path.relative(libDir, filePath).replace(/\\/g, '/')}`;
			imports.push(`export { default as U${importName} } from '${importPath}';`);
		}
	}

	return imports;
}

export function importComponents() {
	const imports = generateImports(componentsDir);
	const importsContent = imports.join('\n');
	fs.writeFileSync(importsFile, importsContent);
	console.info(`Components Generated`);
}
