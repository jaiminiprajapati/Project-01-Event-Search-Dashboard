const OPENCAGEDATA_API_KEY = "e4e6db07aa0b40779b65cefa32c7cbc9";

var cities = ["Birmingham",  "London", "Edinburgh"];

var selectedCity = "";

$(function () {
  $("#search").autocomplete({
    source: cities,
  });
});

$("#search").bind("change paste keyup", function () {
  var cityName = $(this).val();

  getAutocompleteData(cityName);
});

function getAutocompleteData(cityName) {
  var QUERY_URL =
    "https://api.opencagedata.com/geocode/v1/json?q=" +
    cityName +
    "&key=" +
    OPENCAGEDATA_API_KEY;

  fetch(QUERY_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.results.forEach((element) => {
        cities.push(element.formatted);
      });
    });
}

function getEventsData(cityName) {
  const datathistleApiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNmYxYThmY2MtOTY1My00MTUwLWJiNTUtOWQ0NTg5ZjMwMjUyIiwia2V5X2lkIjoiMTBhMzA1OGItMzljOS00YmMzLWEwZjMtNjZiOGY5M2U0NTY5IiwiaWF0IjoxNzA2NzM4MDkzfQ.5pv2xxVdYSLBNg6rLoEKLYHiCpLHXJEIf2TmhyViXHU";

  let cityName = "Birmingham";

  let bearer = "Bearer " + datathistleApiKey;

  const headers = { Authorization: bearer }; // auth header with bearer token

  var URL = "https://api.datathistle.com/v1/events?location=" + cityName;

  fetch(URL, { headers })
    .then((response) => response.json())
    .then((data) => console.log(JSON.stringify(data)));
}

$("#searchBtn").on("click", data, function () {
  // add fetching from events api
});


function searchEvents(searchText) {
  var headers = new Headers();
  headers.set("Authorization", "Bearer " + datathistleApiKey);
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
  $(searchBtn).click(function () {
    searchedCity = $(inputEl).val();
    searchEvents(searchedCity);
  });
});
document.querySelector("#searchBtn").addEventListener("click", searchEvents);
