// function createCard(event) {
//   const id = event.eventId;
//   const title = event.eventInfo.title;
//   const buyThicketsURL = event.websiteUrl.buyThicketsUrl; // TODO add button for buy tickets
//   const findThicketsURL = event.websiteUrl.findThicketsUrl;
//   const imgUrl = event.imagesUrls[0]; //TODO take first img if is not there take second if is not there generate random img
//   const altDescription = "TODO: alt text dynamically"; //? how to do dynamically img description
//   const footerText = "Some description, location, etc..."; //? to choose correct props etc

//   var card = `<div id="event-card-${id}" class="col">
//                 <div class="card h-100">
//                   <a href="${findThicketsURL}">
//                     <img src="${imgUrl}" alt="${altDescription} class="card-img-top"/>
//                   </a>
//                   <div class="card-body">
//                     <h5 class="card-title">${title}</h5>
//                   </div>
//                   <div class="card-footer">
//                     <small class="text-body-secondary">${footerText}</small>
//                   </div>
//                   <a href="${buyThicketsURL}">
//                     <button>Tickets</button>
//                   </a>
//                 </div>
//               </div>`;

//   return card;
// }
