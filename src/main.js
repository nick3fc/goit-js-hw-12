import { getImagesByQuery } from './js/pixabay-api.js';

import { createGallery } from './js/render-functions.js';
import { clearGallery } from './js/render-functions.js';
import { showLoader } from './js/render-functions.js';
import { hideLoader } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import simpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

let imagesArray = [];

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');

  const form = document.querySelector('.form');
  form.addEventListener('submit', event => {
    event.preventDefault();

    clearGallery(imagesArray);

    const searchString = new FormData(event.currentTarget)
      .get('search-text')
      .trim();

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
    const searchResult = getImagesByQuery(searchString)
      .then(data => {
        handleResponse(data);
      })
      .catch(error => {
        handleError(error);
      })
      .finally(() => {
        console.log('HTTP Request successfull');
        hideLoader();
      });
  });
});

function handleResponse(data) {
  //   hideLoader('hiding');

  imagesArray = data.hits;
  //   console.log('handleResponse data1:', imagesArray);

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
