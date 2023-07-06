const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
      callback(response.statusCode, null);
    } else if (JSON.parse(body).length === 0) {
      callback('no breed is found', null);
    } else {
      const data = JSON.parse(body);
      const desc = data[0].description;
      callback(null, desc);
    }
  });

};

module.exports = { fetchBreedDescription };