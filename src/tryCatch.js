import { promises as fsPromises } from 'fs';
import process from 'process';

// Sprint to attach 'exit' and 'unhandledRejection' events
function attachExitAndUnhandledRejectionEvents() {
  process.on('exit', (code) => {
    console.log(`'exit' event called with code: ${code}`);
  });

  process.on('unhandledRejection', (reason, promise) => {
    console.log("'unhandledRejection' event called");
    console.error(reason);
    promise.catch(err => {
      console.error('Unhandled Rejection Error:', err);
      throw err;
    });
  });
}


function readFileAsync(fileName) {
  return fsPromises.readFile(fileName);
}


async function readFileAndHandleError(fileName) {
  try {
    await readFileAsync(fileName)
      .then(data => console.log(data.toString()))
      .catch(error => console.error('Error reading file:', error));
  } catch (error) {
    console.error('Caught error outside promise chain:', error);
  }
}


attachExitAndUnhandledRejectionEvents();

readFileAndHandleError('src/poem1.txt');