const fs = require('fs')
const path = require('path')

// Get the "src" directory
const srcDirectory = path.resolve(__dirname, '..', 'src', 'runtime')
const componentsDirectory = path.join(srcDirectory, 'components')
const exportsFilePath = path.join(srcDirectory, 'ui.config', 'exports.ts')

// Function to list folders and files recursively
function listFoldersAndFiles (directory, relativePath = '') {
  // Read the contents of the directory
  const filesAndFolders = fs.readdirSync(directory)

  // Process files
  const exportStatements = filesAndFolders
    .filter(file => {
      const fullPath = path.join(directory, file)
      return (
        fs.statSync(fullPath).isFile() &&
        (file.endsWith('css.js') || file.endsWith('.css.ts'))
      )
    })
    .map(file => {
      const componentName = path.basename(file, '.ts')
      return `export { default as ${componentName} } from '../components/${relativePath}/${componentName}'`
    })

  // Write export statements to exports.ts
  if (exportStatements.length > 0) {
    fs.appendFileSync(exportsFilePath, `// ${relativePath}\n`)
    fs.appendFileSync(exportsFilePath, exportStatements.join('\n') + '\n')
  }

  // Recursively list folders and files
  filesAndFolders.forEach(item => {
    const fullPath = path.join(directory, item)
    if (fs.statSync(fullPath).isDirectory()) {
      const newRelativePath = path.join(relativePath, item)
      listFoldersAndFiles(fullPath, newRelativePath)
    }
  })
}

// Clear contents of existing exports.ts file
fs.writeFileSync(exportsFilePath, '')

// List folders and files in the "src/runtime/components" directory
listFoldersAndFiles(componentsDirectory)

console.log(`Export statements have been written to: ${exportsFilePath}`)
