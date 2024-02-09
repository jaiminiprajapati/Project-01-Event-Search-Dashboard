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
            category: obj.type,
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

  function createCard(eventData) {
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
        category: obj.type,
        dateTimeUTC: obj.datetime_utc,
        description: obj.description,
      },
      imagesUrls: [obj.performers[0].image, obj.performers[0].images.huge],
      websiteUrl: {
        buyThicketsUrl: obj.url,
        findThicketsUrl: obj.venue.url,
      },
    });

    var websiteUrl = eventData.websiteUrl;
    var imgUrl = eventData.imagesUrls;
    var altDescription = "TODO: alt text dynamically"; //? how to do dynamically img description
    var eventTitle = eventData.eventInfo.title;
    var footerText = "Some description, location, etc..."; //? to choose correct props etc

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
    eventsList.forEach((eventData) => {
      // createCard()
    });
  }

  searchBtn.click(function () {
    cityName = $(inputEl).val();

    // TODO add get user location before clicking the button
    // ? if user have turn off location add default location
    cityName = "Chicago";

    getSeatgeekEventsByVenue(cityName);

    // TODO get data from thistle

    serializedSeatgeekData(true);

    // TODO create function serializedThistleData() that transfer objects to objects like seatgeek

    renderEventsSection();
  });
});
