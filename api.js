const fetch = require('node-fetch');

// Sports Codes
const SPORTS_IDs = [];

const term = 'all_sports.php';

// Fetch data
// fetch(`https://www.thesportsdb.com/api/v1/json/1/${term}`).then(res =>
//   res.json().then(data => {
//     // Save sport names and associated ids as objects to SPORTS_IDs array
//     data.sports.map(sport => {
//       console.log({ name: sport.strSport, id: sport.idSport });
//     });
//   })
// );

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
