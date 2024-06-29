import fs from 'fs/promises';
import path from 'path';

const libDir = 'src/content';
const componentsDir = path.join(libDir, 'components');

async function copySvelteToMarkdown() {
	try {
		// Recursive function to process directories
		async function processDirectory(dirPath) {
			const files = await fs.readdir(dirPath, { withFileTypes: true });

			for (const file of files) {
				const filePath = path.join(dirPath, file.name);

				if (file.isDirectory()) {
					await processDirectory(filePath); // Recursively process directories
				} else {
					if (path.extname(file.name) === '.svelte') {
						// Read .svelte file content
						const svelteContent = await fs.readFile(filePath, 'utf-8');

						// Prepare content for .md file
						const markdownContent = `\`\`\`svelte\n${svelteContent}\`\`\`\n`;

						// Create corresponding .md file path
						const mdFilePath = path.join(
							path.dirname(filePath),
							'md',
							`${path.parse(file.name).name}.md`
						);

						// Ensure demos directory exists
						await fs.mkdir(path.dirname(mdFilePath), { recursive: true });

						// Write content to .md file
						await fs.writeFile(mdFilePath, markdownContent);

						console.log(`Created ${mdFilePath}`);
					}
				}
			}
		}

		// Start processing from componentsDir
		await processDirectory(componentsDir);
		console.log('Svelte files copied to Markdown files successfully!');
	} catch (error) {
		console.error('Error copying Svelte files to Markdown:', error);
	}
}

// Run the function
copySvelteToMarkdown();
