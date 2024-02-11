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
      renderSearchByCategoryDropdown(categories);
    })
    .catch(function (error) {
      console.error(error);
    });

  SEARCH_BTN.click(function () {
    selectedCity = $(INPUT_EL).val();
    //TODO add logic
    getDataFromSeatgeekByCityName(selectedCity)
      .then(serializedSeatgeekDataByUpcomingEvents)
      .then(serializedEventCategoriesFromSeatgeek)
      .then(function () {
        renderEventsSection();
        renderSearchByCategoryDropdown(categories);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  CATEGORIES_SEARCH_DROPDOWN_UL.onchange = function () {
    console.log(this.value);
  };
});
