var cityName = "";
const searchBtn = $("#searchBtn");
const inputEl = $("#search");

//
// $(function () {
//   $("#search").autocomplete({
//     source: cities,
//   });
// });

// $("#search").bind("change paste keyup", function () {
//   var cityName = $(this).val();

//   getAutocompleteData(cityName);
// });

// function getAutocompleteData(cityName) {
//   var QUERY_URL =
//     "https://api.opencagedata.com/geocode/v1/json?q=" +
//     cityName +
//     "&key=" +
//     OPENCAGEDATA_API_KEY;

//   fetch(QUERY_URL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       data.results.forEach((element) => {
//         cities.push(element.formatted);
//       });
//     });
// }

// $("#searchBtn").on("click", data, function () {
// add fetching from events api
// });

function searchEvents() {
  var searchedCity = $().val();
  var headers = new Headers();
  headers.set("Authorization", "Bearer " + DATATHISTLE_API_KEY);
  fetch("https://api.datathistle.com/v1/search?query=event", {
    headers: headers,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

$(document).ready(function () {
  console.log("jQuery is loaded");
  $(searchBtn).click(function () {
    searchedCity = $(inputEl).val();
    searchEvents(searchedCity);
  });
});

document.querySelector(searchBtn).addEventListener("click", searchEvents);
