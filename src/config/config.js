
// export const axios = require("axios");

// axios({
//   method: "POST",
//   url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
//   headers: {
//     "content-type": "application/x-www-form-urlencoded",
//     "x-rapidapi-host": "google-translate1.p.rapidapi.com",
//     "x-rapidapi-key": "05faa36c95msh9faea4e8407bd4dp1088e5jsne078ed1b65ef",
//     "accept-encoding": "application/gzip",
//     useQueryString: true,
//   },
//   data: {
//     source: "en",
//     q: "hi",
//     target: "ar",
//   },
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


import axios from 'axios';

axios({
    "method":"POST",
    "url":"https://google-translate1.p.rapidapi.com/language/translate/v2",
    "headers":{
    "content-type":"application/x-www-form-urlencoded",
    "x-rapidapi-host":"google-translate1.p.rapidapi.com",
    "x-rapidapi-key":"05faa36c95msh9faea4e8407bd4dp1088e5jsne078ed1b65ef",
    "accept-encoding":"application/gzip",
    "useQueryString":true
    },"data":{
    "source":"en",
    "q":"Baraa",
    "target":"ar"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })