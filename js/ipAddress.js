function getUserLocationByIPAddress() {
    const fetch_url = "https://ipinfo.io/json?token=4188a5f1213d7f";
    fetch(fetch_url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
}