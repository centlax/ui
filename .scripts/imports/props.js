import fs from 'node:fs';
import path from 'node:path';

const libDir = 'src/lib';
const componentsDir = path.join(libDir, 'components');
const importsFile = path.join(libDir, 'config/imports/props.ts');

const clearAndUpper = (text) => text.replace(/-/, '').toUpperCase();
const toPascalCase = (str) => str.replace(/(^\w|-\w)/g, clearAndUpper);

function generateImports(dirPath, imports = [], level = 0) {
	const files = fs.readdirSync(dirPath);

	for (const file of files) {
		const filePath = path.join(dirPath, file);
		const stats = fs.statSync(filePath);

		if (stats.isDirectory()) {
			if (level === 1) {
				imports.push(`\n// ${file}`);
			}
			imports = generateImports(filePath, imports, level + 1);
		} else if (file.endsWith('.config.ts')) {
			const componentDir = path.basename(path.dirname(filePath));
			const fileNameWithoutExtension = path.basename(file, '.config.ts');
			const pascalCaseDirName = toPascalCase(componentDir);
			let importName;

			if (componentDir === '+') {
				importName = toPascalCase(fileNameWithoutExtension);
			} else {
				importName = pascalCaseDirName;

				if (fileNameWithoutExtension !== 'index' && fileNameWithoutExtension !== componentDir) {
					const pascalCaseFileName = toPascalCase(fileNameWithoutExtension);
					importName = `${pascalCaseDirName}${pascalCaseFileName}`;
				}
			}

			const importPath = `$lib/${path.relative(libDir, filePath).replace(/\.ts$/, '.js')}`;
			imports.push(`export { props as ${importName} } from '${importPath}';`);
		}
	}

	return imports;
}

export function importProps() {
	const imports = generateImports(componentsDir);
	const importsContent = imports.join('\n');
	fs.writeFileSync(importsFile, importsContent);
	console.info(`Props Generated`);
}
