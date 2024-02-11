function createUpcomingEventCard(event) {
  const id = event.eventId;
  const title = event.info.title;
  const buyThicketsURL = event.websiteUrl.buyThicketsUrl;
  const findThicketsURL = event.websiteUrl.findThicketsUrl;
  const imgUrl = event.imagesUrls[0]; //TODO take first img if is not there take second if is not there generate random img
  const altDescription = "TODO: alt text dynamically"; //? how to do dynamically img description
  const footerText = event.info.description;
  const city = event.location.city;
  const state = event.location.state;
  const address = event.location.address;
  const postCode = event.location.postCode;
  const dateTimeUTC = event.info.dateTimeUTC;

  // TODO add styles to the button
  var card = `<div id="event-card-${id}" class="col">
  <div class="card h-100">
    <a href="${findThicketsURL}">
      <img src="${imgUrl}" alt="${altDescription} class="card-img-top img-fluid upcoming-event-card-img"/>
    </a>
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
    </div>
    <div class="card-footer">
    <div class="footer-item">
        <div class="footer-title">City: ${city}</div>
      </div>
      <div class="footer-item">
        <div class="footer-title">State: ${state}</div>
      </div>
      <div class="footer-item">
        <div class="footer-title">Address: ${address}</div>
      </div>
      <div class="footer-item">
        <div class="footer-title">Post Code: ${postCode}</div>
      </div>
      <div class="footer-item">
        <div class="footer-title">Date & Time: ${dateTimeUTC}</div>
      </div>
      <small class="text-body-secondary">${footerText}</small>
      <a href="${buyThicketsURL}" target="_blank">
        <button>Tickets</button>
      </a>
      <a href="${findThicketsURL}" target="_blank">
        <button>Check time</button>
      </a>
      </div>
  </div>
</div>`;

  return card;
}
