function createSearchByCategoryLiElement(categoryName) {
  return `
    <li>
      <button class="dropdown-item" type="button">
        ${categoryName}
      </button>
    </li>`;
}
