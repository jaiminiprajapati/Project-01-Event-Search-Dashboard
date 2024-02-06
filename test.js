// const API_KEY = "Mzk3MTk2ODF8MTcwNjkwNDA0MS41MjMzMDYx";

// var cities = [];

// var cityName = "London";

// var QUERY_URL =
//   "https://api.seatgeek.com/2/events?client_id=" +
//   API_KEY +
//   "venues?city=London";

// fetch(QUERY_URL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// var apiKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNmYxYThmY2MtOTY1My00MTUwLWJiNTUtOWQ0NTg5ZjMwMjUyIiwia2V5X2lkIjoiMTBhMzA1OGItMzljOS00YmMzLWEwZjMtNjZiOGY5M2U0NTY5IiwiaWF0IjoxNzA2NzM4MDkzfQ.5pv2xxVdYSLBNg6rLoEKLYHiCpLHXJEIf2TmhyViXHU";

// var headers = new Headers();

// headers.set("Authorization", "Bearer " + apiKey);

// fetch("https://api.datathistle.com/v1/events?location=London", {
//   headers: headers,
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNmYxYThmY2MtOTY1My00MTUwLWJiNTUtOWQ0NTg5ZjMwMjUyIiwia2V5X2lkIjoiMTBhMzA1OGItMzljOS00YmMzLWEwZjMtNjZiOGY5M2U0NTY5IiwiaWF0IjoxNzA2NzM4MDkzfQ.5pv2xxVdYSLBNg6rLoEKLYHiCpLHXJEIf2TmhyViXHU";

let cityName = "Birmingham";

let bearer = "Bearer " + API_KEY;

const headers = { Authorization: bearer }; // auth header with bearer token

var URL = "https://api.datathistle.com/v1/events?location=" + cityName;

fetch(URL, { headers })
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data)));
