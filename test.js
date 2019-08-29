const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=aaaaaa`, (error, response, body) => {
  console.log(body.length)
  console.log(typeof body);
  if ( body.length === 2){
    let s = "yes"
    return s;
  }
});



