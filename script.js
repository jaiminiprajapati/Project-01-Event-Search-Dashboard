$(document).ready(function () {
  console.log("jQuery is loaded");

  const searchBtn = $("#searchBtn");
  const inputEl = $("#search");
  const eventsSection = $("#trending");
  const eventsSectionTitle = $("#events-section-title");
  const eventsSectionRowContainer = $("#events-row-container");

  var cityName = ""; // remove name after finish with dev

  var eventsList = [];

  var seatGeekData = [];
  var thistleData = [];

  function serializedSeatgeekData(hasUpcomingEvents = true) {
    seatGeekData.forEach((obj) => {
      if (obj.venue.has_upcoming_events === hasUpcomingEvents) {
        eventsList.push({
          eventId: obj.id,
          location: {
            country: obj.venue.country,
            city: obj.venue.city,
            state: obj.venue.state,
            address: obj.venue.address,
            postCode: obj.venue.postal_code,
            lat: obj.venue.location.lat,
            lon: obj.venue.location.lon,
          },
          eventIfo: {
            title: obj.title,
            type: obj.type,
            dateTimeUTC: obj.datetime_utc,
            description: obj.description,
          },
          imagesUrls: [obj.performers[0].image, obj.performers[0].images.huge],
          websiteUrl: {
            buyThicketsUrl: obj.url,
            findThicketsUrl: obj.venue.url,
          },
        });
      }
    });
  }

  // TODO finish- combine seatgeek data and thistle Data in eventsList
  function mergeEventsData() {}

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
        thistleData.push(data);
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
        });
      });
    console.log(seatGeekData);
  }

  function createCard(
    cardIndex,
    websiteUrl,
    imgUrl,
    altDescription,
    eventTitle,
    footerText
  ) {
    var card = `<div id="event-card-${cardIndex}" class="col">
                  <div class="card h-100">
                    <a href="${websiteUrl}">
                      <img src="${imgUrl}" alt="${altDescription} class="card-img-top"/>
                    </a>
                    <div class="card-body">
                      <h5 class="card-title">${eventTitle}</h5>
                    </div>
                    <div class="card-footer">
                      <small class="text-body-secondary">${footerText}</small>
                    </div>
                  </div>
                </div>`;
    return card;
  }

  function renderEventsSection() {
    // get arr form data and save it in  eventsList

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

    serializedSeatgeekData(true);

    renderEventsSection();
  });
});
