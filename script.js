$(document).ready(function () {
  console.log("jQuery is loaded");

  const searchBtn = $("#searchBtn");
  const inputEl = $("#search");

  var cityName = ""; // remove name after finish with dev
  var eventsList = [];
  var seatGeekData = [];

  function getDatathistleEventsByLocation(cityName) {
    var headers = new Headers();

    headers.set("Authorization", "Bearer " + DATATHISTLE_API_KEY);

    fetch("https://api.datathistle.com/v1/events?location=" + cityName, {
      headers: headers,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data;
      });
  }

  function getSeatgeekEventsByVenue(cityName) {
    const url =
      "https://api.seatgeek.com/2/venues?city=" +
      cityName +
      "&client_id=" +
      SEATGEEK_API_KEY;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        seatGeekData = data;
      });
  }

  function renderEventsCards() {
    var image;
    var date;
    var location;
    var title;
    var ticketsUrl;
    var data = getSeatgeekEventsByVenue(cityName);
  }

  function renderEventCard(eventData) {}

  // remove after finish with developing. this is just for test
  // getDatathistleEventsByLocation(cityName);
  // getSeatgeekEventsByVenue(cityName);

  searchBtn.click(function () {
    cityName = $(inputEl).val();
    /** */
    // getDatathistleEventsByLocation(cityName);// TODO: don't delete
    renderEventsCards();
  });
});
