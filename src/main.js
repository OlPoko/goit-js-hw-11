import { fetchImages } from './js/pixabay-api.js';

import { createGalleryMarkup, renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const showLoader = () => loader.classList.remove('hidden');
const hideLoader = () => loader.classList.add('hidden');

const onSearchSubmit = async (event) => {
  event.preventDefault();
  const query = event.currentTarget.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
      position: 'topRight',
      backgroundColor: '#FF0000',
    });
    return;
  }

  showLoader(); 
  try {
    const data = await fetchImages(query);

    hideLoader();
    if (data.hits.length === 0) {
      gallery.innerHTML = ''; 
      iziToast.info({
        title: 'No Results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#FF0000',
      });
      return;
    }

    const markup = createGalleryMarkup(data.hits);
    renderGallery(gallery, markup);
  } catch (error) {
    hideLoader(); 
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
      backgroundColor: '#FF0000',
    });
  }
};


searchForm.addEventListener('submit', onSearchSubmit);

