const fs = require('fs');
const util = require('util');
const path = require('path');

// Promisify fs.unlink
const unlinkAsync = util.promisify(fs.unlink);

// Sample file path to delete
const filePath = path.join(__dirname, 'tempFile.txt');

// Create a sample file first (for demo purposes)
fs.writeFileSync(filePath, 'This is a temporary file.');

async function deleteFile() {
  try {
    console.log(`Attempting to delete file: ${filePath}`);
    await unlinkAsync(filePath);
    console.log('File deleted successfully.');
  } catch (err) {
    console.error('Error deleting file:', err.message);
  }
}

deleteFile();
