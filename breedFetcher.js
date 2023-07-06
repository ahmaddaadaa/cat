const request = require('request');

const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
  } else if(JSON.parse(body).length === 0){
    console.error('Error: no breed is found');
  }
  else {

      const data = JSON.parse(body);
      console.log(data);
      console.log(typeof data);

  }
});