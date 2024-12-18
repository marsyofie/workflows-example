const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://mono.rawonmerah.com/ping'
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
