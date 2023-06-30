const fs = require('fs');
const path = require('path');
interface fileStructureSpec{
    folder:string;
    files:any[];
    subfolders:fileStructureSpec[];
}
function generateFileStructureJSON(folderPath: string): fileStructureSpec {
  const files = fs.readdirSync(folderPath);

  const fileStructure:fileStructureSpec = {
    folder: path.basename(folderPath),
    files: [],
    subfolders: [],
  };

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const fileStats = fs.statSync(filePath);

    if (fileStats.isDirectory()) {
      const subfolderStructure = generateFileStructureJSON(filePath);
      fileStructure.subfolders.push(subfolderStructure);
    } else {
      fileStructure.files.push(file);
    }
  }

  return fileStructure;
}

const assetsFolderPath = path.join(__dirname, 'src', 'assets');
const fileStructureJSON = generateFileStructureJSON(assetsFolderPath);
const outputFilePath = path.join(__dirname,'src','assets','staticfs.json');

fs.writeFileSync(outputFilePath, JSON.stringify(fileStructureJSON, null, 2));

console.log(`File structure JSON written to: ${outputFilePath}`);
