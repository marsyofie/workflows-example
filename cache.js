const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://api-mono.sateklopo.com'
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
