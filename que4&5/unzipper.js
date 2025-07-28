const fs = require('fs');
const path = require('path');
const unzipper = require('unzipper');

async function extractZip(zipFilePath, outputDir) {
  try {
    await fs.promises.mkdir(outputDir, { recursive: true });

    fs.createReadStream(zipFilePath)
      .pipe(unzipper.Extract({ path: outputDir }))
      .on('close', () => {
        console.log(`Extraction complete to ${outputDir}`);
      })
      .on('error', (err) => {
        console.error('Extraction error:', err);
      });
  } catch (err) {
    console.error('Error:', err);
  }
}

// Example usage:
const zipFile = path.join(__dirname, 'myFolder.zip'); // your zip file path
const extractTo = path.join(__dirname, 'extractedFolder'); // output folder

extractZip(zipFile, extractTo);
