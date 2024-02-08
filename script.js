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
        console.log(data);
      });
  }

  function populateEventCard() {}

  function createEventsCardContainerStructure(cardIndex) {
    // get parent
    var eventRow = $("#events-cards-row");

    var colContainer = $("<div></div>")
      .addClass("col")
      .attr("id", `event-card-col-${cardIndex}`);

    var cardContainer = $("<div></div>").addClass("card h-100");

    var imgContainer = $("<a></a>")
      .attr("href", "")
      .attr("id", `event-img-container-${cardIndex}`);

    var img = $("<img/>")
      .attr("src", "")
      .attr("alt", "")
      .addClass("card-img-top")
      .attr("id", `event-card-img-${cardIndex}`);

    var cardBody = $("<div></div>").addClass("card-body");

    var cardTitle = $("<h5></h5>")
      .addClass("card-title")
      .attr("id", `event-card-title-${cardIndex}`);

    var cardFooterContainer = $("<div></div>").addClass("card-footer");

    var footerText = $("<small></small>")
      .addClass("text-body-secondary")
      .attr("id", `event-card-footer-text-${cardIndex}`);

    // create colum container for card
    eventRow.append(colContainer);

    // create container for card
    colContainer.append(cardContainer);

    // add card structure
    cardContainer
      .append(imgContainer)
      .append(cardBody)
      .append(cardFooterContainer);

    // add img to img container
    imgContainer.append(img);

    // add title to card
    cardBody.append(cardTitle);

    // add footer text
    cardFooterContainer.append(footerText);
  }

  function createEventsRowContainer() {
    // get events container element
    var eventsContainer = $("events-cards-row-container");

    eventsContainer
      .append("<div></div>")
      .attr("id", "events-cards-row")
      .addClass("row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4");
  }

  function createEventsContainer() {
    // create a container
    eventsSection.append("<div></div>").attr("id", "events-container");

    // get events container element
    var eventsContainer = $("events-container");

    // create header text
    var headerText = "Events";

    // add header to container + add header text
    eventsContainer.append("<h4></h4>").text(headerText);
  }

  function renderEventsSection() {
    // get data
    var responseData = getSeatgeekEventsByVenue(cityName);

    // get arr form data and save it in  eventsList

    // create container
    createEventsContainer();

    // create events row
    createEventsRowContainer();

    // create cards containers
    eventsList.forEach((eventData, i) => {
      createEventsCardContainerStructure(i);
    });

    // populate cards information
    eventsList.forEach((eventData, i) => {
      populateEventCard();
    });
  }

  // remove after finish with developing. this is just for test
  // getDatathistleEventsByLocation(cityName);
  // getSeatgeekEventsByVenue(cityName);

  searchBtn.click(function () {
    cityName = $(inputEl).val();
    /** */
    // getDatathistleEventsByLocation(cityName);// TODO: don't delete
    renderEventsSection();
  });
});
