function renderEventsBySelectedCategory(categoryName) {
  console.log(
    "🚀 ~ renderEventsBySelectedCategory ~ renderEventsBySelectedCategory:",
    renderEventsBySelectedCategory
  );

  // Clear existing events
  EVENTS_SECTION_ROW_CONTAINER.empty();

  events.forEach((event) => {
    var serializedName = event.info.category;

    if (serializedName === categoryName) {
      var eventCard = createUpcomingEventCard(event);

      EVENTS_SECTION_ROW_CONTAINER.append(eventCard);
    }
  });
}
