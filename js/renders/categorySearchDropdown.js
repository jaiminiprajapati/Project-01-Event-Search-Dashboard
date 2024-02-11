function renderSearchByCategoryDropdown(categoriesList) {
  categoriesList.forEach((categoryName) => {
    CATEGORIES_SEARCH_DROPDOWN_UL.append(
      createSearchByCategoryLiElement(categoryName)
    );
  });
}
