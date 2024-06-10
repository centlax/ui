import fs from 'fs';
import path from 'path';

const composablesDir = 'src/lib/composables/use/';
const importsFile = path.join('src/lib/config/imports/composables.ts');

const generateImports = (dirPath) => {
	const files = fs.readdirSync(dirPath);
	const imports = [];

	for (const file of files) {
		const filePath = path.join(dirPath, file);
		const stats = fs.statSync(filePath);

		if (!stats.isDirectory() && file.endsWith('.ts')) {
			const fileNameWithoutExtension = path.basename(file, '.ts');
			const importPath = `$lib/composables/use/${fileNameWithoutExtension}.js`;
			imports.push(`export * from '${importPath}';`);
		}
	}

	return imports;
};

export function importComposables() {
	let imports = generateImports(composablesDir);
	const importsContent = imports.join('\n');
	fs.writeFileSync(importsFile, importsContent);
	console.log(`Composables imports generated and written to ${importsFile}`);
}
