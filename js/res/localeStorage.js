function getIPInfoFromLocalStorage() {
  ipAddress = JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEYS.ipAddress));

  if (ipAddress === null) {
    getUserLocationByIPAddress();
  }
}

function setLocationInfoInLocaleStorage(data) {
  localStorage.setItem(data.ip, JSON.stringify(data));
}
