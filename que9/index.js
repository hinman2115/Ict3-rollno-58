const fs = require('fs');
const path = require('path');
const fsPromises = require('fs/promises');

const filePath = path.join(__dirname, 'example.txt');
const newFilePath = path.join(__dirname, 'example-renamed.txt');

async function runFsOperations() {
  try {
    await fsPromises.writeFile(filePath, 'Hello, this is a test file.\n');
    console.log('✅ File written.');

    await fsPromises.appendFile(filePath, 'Appending more text.\n');
    console.log('✅ Content appended.');

    const data = await fsPromises.readFile(filePath, 'utf-8');
    console.log('📄 File contents:\n', data);

    await fsPromises.rename(filePath, newFilePath);
    console.log(`✅ File renamed to ${newFilePath}`);

    fs.access(newFilePath, fs.constants.F_OK, (err) => {
      console.log(err ? '❌ File does not exist.' : '✅ File exists.');
    });


    setTimeout(async () => {
      await fsPromises.unlink(newFilePath);
      console.log('🗑️ File deleted.');
    }, 5000);

  } catch (error) {
    console.error('❌ Error during file operations:', error.message);
  }
}

runFsOperations();
