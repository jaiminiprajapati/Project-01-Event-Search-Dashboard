$(document).ready(function () {
  var cityName = "";

  var eventsList = [];

  var seatGeekData = [];
  var thistleData = [];

  function serializedSeatgeekUpcomingEvents() {
    seatGeekData.forEach((event) => {
      if (event.venue.has_upcoming_events === true) {
        eventsList.push({
          eventId: event.id,
          location: {
            country: event.venue.country,
            city: event.venue.city,
            state: event.venue.state,
            address: event.venue.address,
            postCode: event.venue.postal_code,
            lat: event.venue.location.lat,
            lon: event.venue.location.lon,
          },
          eventInfo: {
            title: event.title,
            category: event.type,
            dateTimeUTC: event.datetime_utc,
            description: event.description,
          },
          imagesUrls: [
            event.performers[0].image,
            event.performers[0].images.huge,
          ],
          websiteUrl: {
            buyThicketsUrl: event.url,
            findThicketsUrl: event.venue.url,
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
        // make sure that the serialization is called only when data is received
        serializedSeatgeekUpcomingEvents();
      });
  }

  function createCard(event) {
    const id = event.eventId;
    const title = event.eventInfo.title;
    const buyThicketsURL = event.websiteUrl.buyThicketsUrl; // TODO add button for buy tickets
    const findThicketsURL = event.websiteUrl.findThicketsUrl;
    const imgUrl = event.imagesUrls[0]; //TODO take first img if is not there take second if is not there generate random img
    const altDescription = "TODO: alt text dynamically"; //? how to do dynamically img description
    const footerText = "Some description, location, etc..."; //? to choose correct props etc

    var card = `<div id="event-card-${id}" class="col">
                  <div class="card h-100">
                    <a href="${findThicketsURL}">
                      <img src="${imgUrl}" alt="${altDescription} class="card-img-top"/>
                    </a>
                    <div class="card-body">
                      <h5 class="card-title">${title}</h5>
                    </div>
                    <div class="card-footer">
                      <small class="text-body-secondary">${footerText}</small>
                    </div>
                    <a href="${buyThicketsURL}">
                      <button>Tickets</button>
                    </a>
                  </div>
                </div>`;

    return card;
  }

  function renderEventsSection() {
    eventsList.forEach((event) => {
      eventsSectionRowContainer.append(createCard(event));
    });
  }

  searchBtn.click(function () {
    cityName = $(inputEl).val();

    // TODO add get user location before clicking the button
    // ? if user have turn off location add default location
    cityName = "Chicago";

    // TODO get data from thistle
    // TODO create function serializedThistleData() in the fetch(to be sure that data is received) that transfer objects to objects like seatgeek

    getSeatgeekEventsByVenue(cityName);

    renderEventsSection();
  });
});
