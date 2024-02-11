$(document).ready(function () {
  getIPInfoFromLocalStorage();

  getDataFromSeatgeekByCityName();

  serializedSeatgeekDataByUpcomingEvents();

  console.log(events);

  searchBtn.click(function () {
    var selectedCity = $(inputEl).val();
  });
});
