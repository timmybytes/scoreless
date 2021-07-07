const fetch = require('node-fetch');

fetch(
  'https://football-pro.p.rapidapi.com/api/v2.0/livescores?tz=PST&include=localTeam%2CvisitorTeam',
  {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'football-pro.p.rapidapi.com',
    },
  }
)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
