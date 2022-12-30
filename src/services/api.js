import axios from 'axios';

const API_KEY = '24136877-bceaa9033dc460acdc4ccde64';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async (query, page) => {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;

  // const params = {
  //   query,
  //   page,
  //   orientation: 'landscape',
  //   per_page: 15,
  // };

  // const { data } = await axios.get('/search', { params });

  // const normalizedImages = data.photos.map(({ id, alt, src }) => ({
  //   id,
  //   alt,
  //   src: src.medium,
  // }));

  // const totalPages = Math.ceil(data.total_results / params.per_page);

  // return {
  //   photos: normalizedImages,
  //   totalPages,
  // };
};

export const normalizeImages = images =>
  images.map(({ id, tags, largeImageURL, webformatURL }) => ({
    id,
    tags,
    largeImageURL,
    webformatURL,
  }));
