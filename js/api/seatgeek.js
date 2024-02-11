function getDataFromSeatgeekByCityName() {
  var seatGeekData = [];

  fetch(
    URL_ADDRESS.seatgeek +
      selectedLocation.city +
      "&client_id=" +
      CLIENT_ID.seatgeek
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.events.forEach((event) => {
        seatGeekData.push(event);
      });
    });

  return seatGeekData;
}

function serializedSeatgeekDataByUpcomingEvents(data) {
  data.forEach((event) => {
    if (event.venue.has_upcoming_events === true) {
      events.push({
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
