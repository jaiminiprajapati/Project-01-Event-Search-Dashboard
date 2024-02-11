var selectedLocation = {
  city: DEFAULT_LOCATION.city,
  country: DEFAULT_LOCATION.country,
  loc: DEFAULT_LOCATION.loc,
};

var selectedCity = selectedLocation.city;

var events = [];

var categories = [];

$(document).ready(function () {
  getIPInfoFromLocalStorage();

  getDataFromSeatgeekByCityName(selectedCity)
    .then(serializedSeatgeekDataByUpcomingEvents)
    .then(serializedEventCategoriesFromSeatgeek)
    .then(function () {
      renderEventsSection();
      renderSearchByCategoryDropdown();
      // console.log(events);
      // console.log(categories);
    })
    .catch(function (error) {
      console.error(error);
    });

  searchBtn.click(function () {
    selectedCity = $(inputEl).val();

    // getDataFromSeatgeekByCityName()
    //   .then(serializedSeatgeekDataByUpcomingEvents)
    //   .then(serializedEventCategoriesFromSeatgeek)
    //   .then(function () {
    //     renderEventsSection();
    //     // console.log(events);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  });
});
