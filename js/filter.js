import {renderThumbnails} from './miniature.js';
const NUMBER_OF_PICTURES = 10;

const imgFiltersElement = document.querySelector('.img-filters');
const defaultFilterButton = imgFiltersElement.querySelector('#filter-default');
const randomFilterButton = imgFiltersElement.querySelector('#filter-random');
const discussedFilterButton = imgFiltersElement.querySelector('#filter-discussed');


const setActiveFilter = (button) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const shuffleThumbnails = () => Math.random() - 0.5;

const compareThumbnails = (pictureA, pictureB) => {
  const rankA = pictureA.comments.length;
  const rankB = pictureB.comments.length;
  return rankB - rankA;

};

const initFilterListeners = (picture) => {
  defaultFilterButton.addEventListener('click', (evt) => {
    renderThumbnails(picture);
    setActiveFilter(evt.target);
  });
  randomFilterButton.addEventListener('click', (evt) => {
    renderThumbnails(picture
      .slice()
      .sort(shuffleThumbnails)
      .slice(0, NUMBER_OF_PICTURES)
    );
    setActiveFilter(evt.target);
  });

  discussedFilterButton.addEventListener('click', (evt) => {
    renderThumbnails(picture
      .slice()
      .sort(compareThumbnails));
    setActiveFilter(evt.target);
  });
};

export { initFilterListeners };
