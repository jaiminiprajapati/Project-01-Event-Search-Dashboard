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
