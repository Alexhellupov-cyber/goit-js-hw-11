import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImg } from './js/pixabay-api';
import { createGallery, clearGallery } from './js/render-functions';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
loader.hidden = true;

form.addEventListener('submit', searchImg);

function searchImg(event) {
  event.preventDefault();
  const query = event.target.elements.image.value.trim();
  if (!query) {
    iziToast.warning({
      message: 'Warning! The form is empty, please fill searching form.',
      position: 'topRight',
    });
    form.reset();
    return;
  }

  clearGallery();
  form.reset();

  loader.hidden = false;

  fetchImg(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
      let lightbox = new SimpleLightbox('.gallery-link', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        message: 'Error!',
        position: 'topRight',
      });
      console.error(error);
    })
    .finally(() => {
      loader.hidden = true;
    });
}
