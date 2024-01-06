const fs = require('fs')
const path = require('path')

const typesFolderPath = path.join(__dirname, '..', 'types')

// Read all files in the types folder
const files = fs.readdirSync(typesFolderPath)

// Filter out index.d.ts from the list
const filteredFiles = files.filter((file) => file !== 'index.d.ts')

// Generate the content for index.d.ts
const content = filteredFiles.map((file) => `export * from './${file.replace('.d.ts', '')}'`).join('\n')

// Write the content to index.d.ts
fs.writeFileSync(path.join(typesFolderPath, 'index.d.ts'), content)

console.log('types index.d.ts generated successfully.')
