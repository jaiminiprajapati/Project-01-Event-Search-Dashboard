$(document).ready(function () {
  console.log("jQuery is loaded");

  const searchBtn = $("#searchBtn");
  const inputEl = $("#search");
  var eventsSection = $("#trending");

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
      "https://api.seatgeek.com/2/events?venue.city=" +
      cityName +
      "&client_id=" +
      SEATGEEK_API_KEY;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        data.events.forEach((event) => {
          seatGeekData.push(event);
          console.log(seatGeekData);
        });
      });
  }

  function renderEventsSection() {
    // get arr form data and save it in  eventsList
    seatGeekData.forEach((obj) => {
      if (obj.venue.has_upcoming_events === true) {
        // console.log(obj.title);
        // console.log(obj.type);
        // console.log(obj.datetime_utc);
        // console.log(obj.venue.address);
        // console.log(obj.venue.city);
        // console.log(obj.venue.country);
        // console.log(obj.url);
      }
    });

    // populate cards information
    eventsList.forEach((eventData, cardIndex) => {
      populateEventCardData(eventData, cardIndex);
    });
  }

  searchBtn.click(function () {
    cityName = $(inputEl).val();

    // TODO add get user location
    // ? if user have turn off location add default location
    cityName = "Chicago";

    getSeatgeekEventsByVenue(cityName);

    renderEventsSection();
  });
});
