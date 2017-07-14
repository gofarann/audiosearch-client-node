var Audiosearch = require('../audiosearch-client-node');
require('dotenv').config();


// var db = require('db');
//
// db.connect({
//   app_id: process.env.APP_ID,
//   secret_key: process.env.SECRET_KEY,
// });

var app_id = process.env.APP_ID;
var secret_key = process.env.SECRET_KEY;

console.log(process.env.APP_ID);

var audiosearch = new Audiosearch(app_id, secret_key);

//
// audiosearch.searchEpisodes("title: #1 party school", "filters[show_id]=27").then(function (results) {
//   console.log(results);
//
// });

audiosearch.searchEpisodes("date_created:2017-06-26", {"filters[show_id]":27, "size":1, "from":1}).then(function (results) {
  console.log(results);

});




//
// audiosearch.searchEpisodes("id:18551").then(function (results) {
//   console.log(results.total_results); //this is response length aka number of responses
//   console.log(results.results[0].title); //this is the title of the first result
//   console.log(results.results[0].description); //this is the title of the first result
// });

// THIS WORKS ON CONSOLE
// audiosearch.getShow('27').then(function (results) {
//   console.log(results);
// });

//
// function findEpisodeInKey(episodeNumber, episodeKey){
//   var episodeInfo = {};
//
//   for(var i=0; i < episodeKey.total_results; i++){
//
//
//     if(episodeKey.results[i].title.includes(episodeNumber)){
//
//
//       episodeInfo.title = episodeKey.results[i].title;
//       episodeInfo.description = episodeKey.results[i].description;
//       episodeInfo.id = episodeKey.results[i].id;
//
//       return episodeInfo;
//
//     } else {
//       return false;
//     }
//
//   }
// }
