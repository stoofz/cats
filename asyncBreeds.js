const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // if readfile has an error reading breed, undefined to callback
    if (error) {
      callback(undefined);
    } else {
      // else NO error data to callback
      callback(data);
    }
  });
};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed);
};

module.exports = breedDetailsFromFile;

breedDetailsFromFile('Bombay', printOutCatBreed);