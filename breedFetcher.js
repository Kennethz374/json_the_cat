
const request = require('request');
const name = process.argv.slice(2).toString();
request(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, (error, response, body) => {
  if (error) {
    console.log(`There is an error with your URL\n`, error);
    return;
  } if (body.length === 2) {
    console.log("The Breed Name Is Not Found");
    return;
  }
  const data = JSON.parse(body);//convert string to object/an array;
  console.log(data[0]['description']);
});


