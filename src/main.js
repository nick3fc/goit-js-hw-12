import { getImagesByQuery } from './js/pixabay-api.js';

import { createGallery } from './js/render-functions.js';
import { clearGallery } from './js/render-functions.js';
import { showLoader } from './js/render-functions.js';
import { hideLoader } from './js/render-functions.js';
import { showLoadMoreButton } from './js/render-functions.js';
import { hideLoadMoreButton } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import simpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

let imagesArray = [];
let searchString;
let page;
let totalPages;
const per_page = 15;

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');

  const form = document.querySelector('.form');
  form.addEventListener('submit', async event => {
    event.preventDefault();

    hideLoadMoreButton();

    clearGallery();
    page = 1;

    searchString = new FormData(event.currentTarget).get('search-text').trim();

    if (!searchString) {
      console.log('Поле порожнє або містить лише пробіли');

      iziToast.show({
        balloon: true,
        closeOnEscape: true,
        closeOnClick: true,
        backgroundColor: 'red',
        titleColor: '#fff',
        messageColor: '#fff',
        theme: 'light', // dark
        position: 'topRight',
        title: '❌ Empty string:',
        message: `enter valid text`,
      });
      return;
    }
    form.reset();

    // console.log('searchString:', searchString);
    showLoader('waiting...');

    //
    try {
      const data = await getImagesByQuery(searchString, page, per_page);

      totalPages = Math.ceil(data.total / per_page);
      console.log('totalPages:', totalPages);
      handleResponse(data);
    } catch (error) {
      handleError(error);
    } finally {
      console.log('HTTP Request successfull');
      hideLoader();
    }
  });
});

// handler for Load more button
const loadMoreBTN = document.querySelector('.load-more-btn');
loadMoreBTN.addEventListener('click', event => {
  // console.log('addEventListener click');
  hideLoadMoreButton();
  showLoader();
  page = page + 1;

  const searchResult = getImagesByQuery(searchString, page, per_page)
    .then(data => {
      handleResponse(data);

      scroll(2);
    })
    .catch(error => {
      handleError(error);
    })
    .finally(() => {
      console.log('HTTP Request successfull');
      hideLoader();
    });
});
// **********************************

function handleResponse(data) {
  //   hideLoader('hiding');
  const totalHits = data.total;
  imagesArray = data.hits;
  console.log('totalImages:', totalHits);

  if (imagesArray.length === 0) {
    iziToast.show({
      balloon: true,
      closeOnEscape: true,
      closeOnClick: true,
      backgroundColor: 'yellow',
      // titleColor: '#fff',
      // messageColor: '#fff',
      theme: 'light', // dark
      position: 'topRight',
      message: `Sorry, there are no images matching your search query. Please try again!`,
    });
    return;
  } else {
    iziToast.show({
      balloon: true,
      closeOnEscape: true,
      closeOnClick: true,
      backgroundColor: 'blue',
      titleColor: '#fff',
      messageColor: '#fff',
      theme: 'light', // dark
      position: 'topRight',
      message: `Congratulations! Found ${imagesArray.length} images`,
    });

    // console.log('Rendering gallery...');
    createGallery(imagesArray);

    // showLoadMoreButton();
    if (page < totalPages) {
      // console.log('page < totalPages', page < totalPages);
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.show({
        balloon: true,
        closeOnEscape: true,
        closeOnClick: true,
        backgroundColor: 'blue',
        titleColor: '#fff',
        messageColor: '#fff',
        theme: 'light', // dark
        position: 'topRight',
        message: `We're sorry, but you've reached the end of search results.`,
      });
    }
  }
}

function handleError(error) {
  console.log('handleError data:', error);
  iziToast.show({
    balloon: true,
    closeOnEscape: true,
    closeOnClick: true,
    backgroundColor: 'red',
    titleColor: '#fff',
    messageColor: '#fff',
    theme: 'light', // dark
    position: 'topRight',
    title: '❌ Critical:',
    message: `HTTP-request failed`,
  });
  //   hideLoader('ER');
}
function scroll(scrollKoef) {
  const scrollHeight =
    document.querySelector('.gallery-item').getBoundingClientRect().height *
    scrollKoef;

  window.scrollBy({
    top: scrollHeight,
    behavior: 'smooth',
  });
}
