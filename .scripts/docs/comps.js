import fs from 'fs';
import path from 'path';

const libDir = 'src/content';
const componentsDir = path.join(libDir, 'components');
const importsFile = path.join('src/lib/config/imports/components.ts');

const toKebabCase = (str) =>
	str
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[\s_]+/g, '-')
		.toLowerCase();

const generateImports = (dirPath) => {
	const imports = {};
	const files = fs.readdirSync(dirPath);
	for (const file of files) {
		const filePath = path.join(dirPath, file);
		const stats = fs.statSync(filePath);

		if (stats.isDirectory()) {
			if (file === 'md') continue;
			const nestedImports = generateImports(filePath);
			Object.assign(imports, nestedImports);
		} else if (file.endsWith('.md')) {
			const filePathParts = filePath.split(path.sep);
			const category = filePathParts[filePathParts.indexOf('components') + 1];
			const group = filePathParts[filePathParts.indexOf('components') + 2];
			const fileNameWithoutExtension = path.basename(file, '.md');
			const folderName = path.basename(path.dirname(filePath));
			let importName;

			if (fileNameWithoutExtension === 'index' || fileNameWithoutExtension === folderName) {
				importName = toKebabCase(folderName);
			} else {
				importName = `${toKebabCase(folderName)}-${toKebabCase(fileNameWithoutExtension)}`;
			}

			const importPath = `/src/content/${path.relative(libDir, filePath).replace(/\\/g, '/')}`;
			imports[importName] = {
				path: importPath,
				category: toKebabCase(category),
				group: toKebabCase(group)
			};
		}
	}

	return imports;
};

export function generatedComps() {
	const components = generateImports(componentsDir);

	// Custom stringification to quote keys with hyphens
	const customStringify = (obj, replacer, space) => {
		const jsonString = JSON.stringify(obj, replacer, space);
		return jsonString.replace(/"([a-zA-Z0-9_-]+)":/g, (match, p1) => {
			return p1.includes('-') ? `"${p1}":` : `${p1}:`;
		});
	};

	const importsContent = `export const components = ${customStringify(components, null, 2)};`;
	fs.writeFileSync(importsFile, importsContent);
	console.log(`Components imports generated and written to ${importsFile}`);
}
