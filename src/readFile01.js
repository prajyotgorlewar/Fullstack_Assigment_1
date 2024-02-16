
import * as fs from 'fs';
const fileSystem = fs;

function printFileContents(fileName) {

    fileSystem.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File contents:');
    console.log(data);
  });
}

printFileContents('src/poem.txt');
