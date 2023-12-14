const fs = require('fs')
const path = require('path')
const uiConfigPath = path.resolve(__dirname, '..', 'src', 'runtime', 'ui.config')
const componentsPath = path.resolve(__dirname, '..', 'src', 'runtime', 'components')

// Function to copy and rename files
function copyAndRenameFile (srcPath, destPath, newExtension) {
  const fileContent = fs.readFileSync(srcPath, 'utf8')
  const newFilePath = path.join(destPath, path.basename(srcPath, path.extname(srcPath)) + newExtension)
  fs.writeFileSync(newFilePath, fileContent)
}

// Function to copy CSS files from ui.config to components with subfolders
function copyCssFiles () {
  const uiConfigFolders = fs.readdirSync(uiConfigPath)

  uiConfigFolders.forEach(category => {
    const srcCategoryFolder = path.join(uiConfigPath, category)
    const destCategoryFolder = path.join(componentsPath, category)

    // Check if the category folder exists in components
    if (fs.existsSync(destCategoryFolder) && fs.statSync(destCategoryFolder).isDirectory()) {
      const filesInCategory = fs.readdirSync(srcCategoryFolder)

      filesInCategory.forEach(file => {
        const srcFilePath = path.join(srcCategoryFolder, file)

        // Check if the file has the extension '.ts'
        if (file.endsWith('.ts')) {
          // Create subfolder for each component
          const componentName = path.basename(file, '.ts')
          const componentFolder = path.join(destCategoryFolder, componentName)

          // Create the subfolder if it doesn't exist
          if (!fs.existsSync(componentFolder)) {
            fs.mkdirSync(componentFolder)
          }

          // Copy and rename the file with the new extension '.css.ts' inside the subfolder
          copyAndRenameFile(srcFilePath, componentFolder, '.css.ts')
        }
      })
    }
  })
}

// Run the function to copy CSS files with subfolders
copyCssFiles()

console.log('CSS files have been copied and renamed with subfolders.')
