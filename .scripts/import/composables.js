import fs from 'node:fs';
import path from 'node:path';

const composablesDir = 'src/lib/composables/use/';
const importsFile = path.join('src/lib/config/import/composables.ts');

function generateImports(dirPath) {
	const files = fs.readdirSync(dirPath);
	const imports = [];

	for (const file of files) {
		const filePath = path.join(dirPath, file);
		const stats = fs.statSync(filePath);

		if (!stats.isDirectory() && file.endsWith('.ts')) {
			const fileNameWithoutExtension = path.basename(file, '.ts');
			const importPath = `../../composables/use/${fileNameWithoutExtension}.js`;
			imports.push(`export * from '${importPath}';`);
		}
	}

	return imports;
}

export function importComposables() {
	const imports = generateImports(composablesDir);
	const importsContent = imports.join('\n');
	fs.writeFileSync(importsFile, importsContent);
	console.info(`Composables Generated`);
}
