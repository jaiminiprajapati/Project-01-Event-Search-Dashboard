var ipAddress;
var locationInfo;

function getIPFromLocalStorage() {
  ipAddress = JSON.parse(localStorage.getItem("ipAddress"));
  // console.log(ipAddress);
  if (ipAddress === null) {
    getUserLocationByIPAddress();
  }
}

function getUserLocationByIPAddress() {
  fetch(URL_ADDRESS.ipInfo + TOKEN.ipInfo)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      locationInfo = data;
      localStorage.setItem("ipAddress", JSON.stringify(data));
    })
    .catch(() => {
      console.log("Unable to retrieve data");
      cityName = "London";
    });
}

// Example for event listener
// $("#test-button").on("click", getIPFromLocalStorage);
