  const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(`There is an error with your URL\n`, error);
      return;
    } if (body.length === 2) {
      callback("The Breed Name Is Not Found", null);
      return;
    }
    const data = JSON.parse(body);//convert string to object/an array;
    callback(null,data[0]['description']);
    
  });
};

module.exports = { fetchBreedDescription };


