const API_KEY = {
  opencagedata: "e4e6db07aa0b40779b65cefa32c7cbc9",
  datathistle:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNmYxYThmY2MtOTY1My00MTUwLWJiNTUtOWQ0NTg5ZjMwMjUyIiwia2V5X2lkIjoiMTBhMzA1OGItMzljOS00YmMzLWEwZjMtNjZiOGY5M2U0NTY5IiwiaWF0IjoxNzA2NzM4MDkzfQ.5pv2xxVdYSLBNg6rLoEKLYHiCpLHXJEIf2TmhyViXHU",
  seatgeek: "Mzk3MTk2ODF8MTcwNjkwNDA0MS41MjMzMDYx",
};

const TOKEN = {
  ipInfo: "4188a5f1213d7f",
};

const URL_ADDRESS = {
  ipInfo: "https://ipinfo.io/json?token=",
};

const LOCALE_STORAGE_KEYS = {
  ipAddress: "IP",
};
// const OPENCAGEDATA_API_KEY = "e4e6db07aa0b40779b65cefa32c7cbc9";

// const DATATHISTLE_API_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNmYxYThmY2MtOTY1My00MTUwLWJiNTUtOWQ0NTg5ZjMwMjUyIiwia2V5X2lkIjoiMTBhMzA1OGItMzljOS00YmMzLWEwZjMtNjZiOGY5M2U0NTY5IiwiaWF0IjoxNzA2NzM4MDkzfQ.5pv2xxVdYSLBNg6rLoEKLYHiCpLHXJEIf2TmhyViXHU";

// const SEATGEEK_API_KEY = "Mzk3MTk2ODF8MTcwNjkwNDA0MS41MjMzMDYx";

const DEFAULT_LOCATION = {
  city: "Chicago",
  country: "US",
  loc: "41.881832,-87.623177",
};

var selectedLocation = {
  city: DEFAULT_LOCATION.city,
  country: DEFAULT_LOCATION.country,
  loc: DEFAULT_LOCATION.loc,
};

// {
//   "ip": "2.27.142.130",
//   "city": "Castle Vale",
//   "region": "England",
//   "country": "GB",
//   "loc": "52.5282,-1.8549",
//   "org": "AS12576 EE Limited",
//   "postal": "B23",
//   "timezone": "Europe/London"
//  }

const SEARCH_BTN = $("#searchBtn");
const INPUT_EL = $("#search");
const EVENT_SECTION = $("#trending");
const EVENT_SECTION_TITLE = $("#events-section-title");
const EVENTS_SECTION_ROW_CONTAINER = $("#events-row-container");
