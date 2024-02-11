function renderSearchByCategoryDropdown() {
  categories.forEach((categoryName) => {
    CATEGORIES_SEARCH_DROPDOWN_UL.append(
      createSearchByCategoryLiElement(categoryName)
    );
  });
}
