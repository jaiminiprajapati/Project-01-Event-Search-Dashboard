function renderEventsSection() {
  events.forEach((event) => {
    EVENTS_SECTION_ROW_CONTAINER.append(createUpcomingEventCard(event));
  });
}
