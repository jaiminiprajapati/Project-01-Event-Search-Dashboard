var events = [];

var selectedLocation = {
  city: DEFAULT_LOCATION.city,
  country: DEFAULT_LOCATION.country,
  loc: DEFAULT_LOCATION.loc,
};

$(document).ready(function () {
  getIPInfoFromLocalStorage();

  getDataFromSeatgeekByCityName()
    .then(serializedSeatgeekDataByUpcomingEvents)
    .then(function () {
      //TODO fetch data from thistle
      console.log(events);
    })
    .catch(function (error) {
      console.error(error);
    });

  searchBtn.click(function () {
    var selectedCity = $(inputEl).val();
  });
});
