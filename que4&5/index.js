const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

function zipFolder(sourceDir, outPath) {
  const output = fs.createWriteStream(outPath);
  const archive = archiver('zip', {
    zlib: { level: 9 } // Compression level (0-9)
  });

  return new Promise((resolve, reject) => {
    output.on('close', () => {
      console.log(`Created zip file (${archive.pointer()} total bytes) at ${outPath}`);
      resolve();
    });

    archive.on('error', (err) => reject(err));

    archive.pipe(output);
    archive.directory(sourceDir, false); // Add source folder contents to zip root
    archive.finalize();
  });
}

// Example usage:
const folderPath = path.join(__dirname, 'myFolder'); // change to your folder
const outputZipPath = path.join(__dirname, 'myFolder.zip');

zipFolder(folderPath, outputZipPath)
  .then(() => console.log('Zipping done!'))
  .catch((err) => console.error('Error:', err));
