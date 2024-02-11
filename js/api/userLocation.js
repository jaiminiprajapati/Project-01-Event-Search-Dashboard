function getUserLocationByIPAddress() {
  fetch(URL_ADDRESS.ipInfo + TOKEN.ipInfo)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      selectedLocation.city = data.city;
      selectedLocation.country = data.country;
      selectedLocation.loc = data.loc;

      setLocationInfoInLocaleStorage(data);
    })
    .catch(() => {
      console.log(`Unable to retrieve data from ipInfo.io. 
      Default user location is set to Chicago, US.`);
      selectedLocation.city = DEFAULT_LOCATION.city;
      selectedLocation.country = DEFAULT_LOCATION.country;
      selectedLocation.loc = DEFAULT_LOCATION.loc;
    });
}
