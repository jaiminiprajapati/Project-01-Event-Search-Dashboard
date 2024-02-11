const API_KEY = {
  opencagedata: "e4e6db07aa0b40779b65cefa32c7cbc9",
  datathistle:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNmYxYThmY2MtOTY1My00MTUwLWJiNTUtOWQ0NTg5ZjMwMjUyIiwia2V5X2lkIjoiMTBhMzA1OGItMzljOS00YmMzLWEwZjMtNjZiOGY5M2U0NTY5IiwiaWF0IjoxNzA2NzM4MDkzfQ.5pv2xxVdYSLBNg6rLoEKLYHiCpLHXJEIf2TmhyViXHU",
};

const CLIENT_ID = {
  seatgeek: "Mzk3MTk2ODF8MTcwNzYyNDk5Ni43MTgxNTU5",
};

const TOKEN = {
  ipInfo: "4188a5f1213d7f",
};

const URL_ADDRESS = {
  ipInfo: "https://ipinfo.io/json?token=",
  seatgeek: "https://api.seatgeek.com/2/events?venue.city=",
};

const LOCALE_STORAGE_KEYS = {
  ipAddress: "IP",
};

const DEFAULT_LOCATION = {
  city: "Chicago",
  country: "US",
  loc: "41.881832,-87.623177",
};

const SEARCH_BTN = $("#searchBtn");
const INPUT_EL = $("#search");
const EVENT_SECTION = $("#trending");
const EVENT_SECTION_TITLE = $("#events-section-title");
const EVENTS_SECTION_ROW_CONTAINER = $("#events-row-container");
const CATEGORIES_SEARCH_DROPDOWN_UL = $("#search-by-category-dropdown-ul");
