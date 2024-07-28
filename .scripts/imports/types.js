import fs from 'node:fs';
import path from 'node:path';

const composablesDir = 'src/lib/types';
const importsFile = path.join('src/lib/config/imports/types.ts');

function generateImports(dirPath) {
	const files = fs.readdirSync(dirPath);
	const imports = [];

	for (const file of files) {
		const filePath = path.join(dirPath, file);
		const stats = fs.statSync(filePath);

		if (!stats.isDirectory() && file.endsWith('.d.ts')) {
			const fileNameWithoutExtension = path.basename(file, '.d.ts');
			const importPath = `../../types/${fileNameWithoutExtension}.js`;
			imports.push(`export type * from '${importPath}';`);
		}
	}

	return imports;
}

export function importTypes() {
	const imports = generateImports(composablesDir);
	const importsContent = imports.join('\n');
	fs.writeFileSync(importsFile, importsContent);
	console.info(`Typess Generated`);
}
