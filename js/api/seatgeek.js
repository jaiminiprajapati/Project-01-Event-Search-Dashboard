var seatGeekData = [];

function getDataFromSeatgeekByCityName() {
  return new Promise(function (resolve, reject) {
    fetch(
      URL_ADDRESS.seatgeek +
        selectedLocation.city +
        "&client_id=" +
        CLIENT_ID.seatgeek
    )
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Failed to fetch data from SeatGeek API");
        }
        return response.json();
      })
      .then(function (data) {
        seatGeekData = data.events;
        resolve();
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

function serializedSeatgeekDataByUpcomingEvents() {
  return new Promise(function (resolve, reject) {
    var serializedEvents = [];

    try {
      seatGeekData.forEach((event) => {
        if (event.venue.has_upcoming_events === true) {
          serializedEvents.push({
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
              buyTicketsUrl: event.url,
              findTicketsUrl: event.venue.url,
            },
          });
        }
      });

      events = serializedEvents;
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}
