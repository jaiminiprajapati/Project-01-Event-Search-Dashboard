function renderEventsSection() {
  eventsList.forEach((event) => {
    eventsSectionRowContainer.append(createUpcomingEventCard(event));
  });
}
