$(document).ready(function () {
  console.log("jQuery is loaded");

  const searchBtn = $("#searchBtn");
  const inputEl = $("#search");

  var cityName = "Birmingham"; // remove name after finish with dev
  var eventsList = [];

  function searchDatathistleEventsByLocation(cityName) {
    var headers = new Headers();

    headers.set("Authorization", "Bearer " + DATATHISTLE_API_KEY);

    fetch("https://api.datathistle.com/v1/events?location=" + cityName, {
      headers: headers,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        eventsList = data;
        console.log("🚀 ~ eventsList:", eventsList);
      });
  }

  function searchSeatgeekEventsByVenue(cityName) {
    // https://api.seatgeek.com/2/events?client_id=MYCLIENTID
    // https://api.seatgeek.com/2/venues?city=Birmingham&client_id=Mzk3MTk2ODF8MTcwNjkwNDA0MS41MjMzMDYx
    const url =
      "https://api.seatgeek.com/2/venues?city=" +
      cityName +
      "&client_id" +
      SEATGEEK_API_KEY;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // add to array
        console.log(typeof data);
      });
  }

  // remove after finish with developing. this is just for test
  searchDatathistleEventsByLocation(cityName);
  searchSeatgeekEventsByVenue(cityName);

  searchBtn.click(function () {
    cityName = $(inputEl).val();
    searchDatathistleEventsByLocation(cityName);
    searchSeatgeekEventsByVenue(cityName);
  });
});
