function createUpcomingEventCard(event) {
  const imgUrl = event.imagesUrls[0]; //TODO take first img if is not there take second if is not there generate random img

  //? how to do dynamically img description
  const altDescription = "poster of the event";

  // TODO add styles to the button
  var card = `<div id="event-card-${event.eventId}" class="col">
  <div class="card h-100">
    <a href="${event.websiteUrl.findTicketsUrl}" target="_blank">
      <img src="${imgUrl}" alt="${altDescription} class="card-img-top img-fluid upcoming-event-card-img"/>
    </a>
    <div class="card-body">
      <h5 class="card-title">${event.info.title}</h5>
    </div>
    <div class="card-footer">
    <div class="footer-item">
        <div class="footer-title">City: ${event.location.city}</div>
      </div>
      <div class="footer-item">
        <div class="footer-title">State: ${event.location.state}</div>
      </div>
      <div class="footer-item">
        <div class="footer-title">Address: ${event.location.address}</div>
      </div>
      <div class="footer-item">
        <div class="footer-title">Post Code: ${event.location.postCode}</div>
      </div>
      <div class="footer-item">
        <div class="footer-title">Date & Time: ${event.info.dateTimeUTC}</div>
      </div>
      <small class="text-body-secondary">${event.info.description}</small>
      <a href="${event.websiteUrl.buyTicketsUrl}" target="_blank">
        <button>Tickets</button>
      </a>
      <a href="${event.websiteUrl.findTicketsUrl}" target="_blank">
        <button>Check time</button>
      </a>
      </div>
  </div>
</div>`;

  return card;
}
