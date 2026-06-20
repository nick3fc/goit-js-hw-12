// -----------lib connection code----------
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: false,
});
// ----------- ------------------------------ ----------
// ----------- export functions createGallery ----------
// ----------- ------------------------------ ----------

export function createGallery(images) {
  // console.log('handleResponse data2:', images);

  // -----------make-gallery code----------
  const galleryList = document.querySelector('.gallery');
  // console.log(galleryList);

  const newGalleryItems = images
    .map(
      image => `<li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img
          class="gallery-image"
          src="${image.webformatURL}"
        
          alt="${image.tags}"
        />
      </a>
      
      <ul class='gallery-image-infolist'>
        <li class='info-item'>
        <span class="info-title">Likes</span>
        <span class='info-value'>${image.likes}</span>
        </li>
        <li class='info-item'>
        <span class="info-title">Views</span>
        <span class='info-value'>${image.views}</span>
        </li>
        <li class='info-item'>
        <span class="info-title">Comments</span>
        <span class='info-value'>${image.comments}</span>
        </li>
        <li class='info-item'>
        <span class="info-title">Downloads</span>
        <span class='info-value'>${image.downloads}</span>
        </li>
      </ul>
      
    </li>`
    )
    .join('');

  galleryList.insertAdjacentHTML('beforeend', newGalleryItems);

  // -----------gallery-click code----------
  // const lightbox = new SimpleLightbox('.gallery a', {
  //   captionsData: 'alt',
  //   captionDelay: 250,
  //   showCounter: false,
  // });
  lightbox.refresh();
}

// ----------- ------------------------------ ----------
// ----------- export functions clearGallery ----------
// ----------- ------------------------------ ----------

export function clearGallery(images) {
  const galleryList = document.querySelector('.gallery');
  galleryList.innerHTML = '';
  images = [];
  // lightbox.refresh();
}

// ----------- ------------------------------ ----------
// -----------   export function showLoader   ----------
// ----------- ------------------------------ ----------

export function showLoader(arg) {
  const loader = document.querySelector('.loader');
  loader.classList.add('is-active');
}
// ----------- ------------------------------ ----------
// -----------   export function hideLoader   ----------
// ----------- ------------------------------ ----------

export function hideLoader(arg) {
  const loader = document.querySelector('.loader');
  loader.classList.remove('is-active');
}
export function showLoadMoreButton() {
  const loadMoreBTN = document.querySelector('.load-more-btn');
  loadMoreBTN.classList.remove('hidden');
  console.log('showBTN');
}
export function hideLoadMoreButton() {
  const loadMoreBTN = document.querySelector('.load-more-btn');
  loadMoreBTN.classList.add('hidden');
  console.log('hideBTN');
}

// +++++++++++ ++++++++++++++++++++++++++++++ +++++++++++
// ++++++++++++++++++++ Description +++++++++++++++++++++
// +++++++++++ ++++++++++++++++++++++++++++++ +++++++++++

// createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
// showLoadMoreButton(). Ця функція нічого не приймає, повинна додавати клас для відображення кнопки Load more. Нічого не повертає.
// hideLoadMoreButton(). Ця функція нічого не приймає, повинна прибирати клас для відображення кнопки Load more. Нічого не повертає.
