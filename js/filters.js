import { DISCUSSED_COUNT, Filters } from "./constants.js";
import { renderPhotos } from "./render.js";
import { debounce } from "./util.js";

const imageFilters = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');

let localPhotos;

const debouncedRender = debounce(renderPhotos);

export const initFilters = (pictures) => {
  localPhotos = [...pictures];
  imageFilters.classList.remove('img-filters--inactive');
};

const setActiveButton = (button) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const filterData = {
  [Filters.DEFAULT]: () => localPhotos,
  [Filters.DISCUSSED]: () => [...localPhotos].sort((a, b) => b.comments.length - a.comments.length),
  [Filters.RANDOM]: () => [...localPhotos].sort(() => Math.random() - 0.5).slice(0, DISCUSSED_COUNT)
}

filterForm.addEventListener('click', ({ target }) => {
  const filterButton = target.closest('.img-filters__button');
  if (filterButton) {
    setActiveButton(filterButton);
    const filter = filterButton.id;
    const filteredPhotos = filterData[filter]();
    debouncedRender(filteredPhotos);
  }
})