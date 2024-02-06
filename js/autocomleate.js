const OPENCAGEDATA_API_KEY = "e4e6db07aa0b40779b65cefa32c7cbc9";

var cities = [];

var selectedCity = "";

$(function () {
  $("#city").autocomplete({
    source: cities,
  });
});

$("#city").bind("change paste keyup", function () {
  var cityName = $(this).val();

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
});

$("#search-button").on("click", data, function () {
  // Do anything
});
