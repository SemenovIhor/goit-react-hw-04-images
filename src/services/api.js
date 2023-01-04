import axios from 'axios';

const API_KEY = '24136877-bceaa9033dc460acdc4ccde64';
// const API_KEY = '4451685-60023a6e5a1955e0b5db7381e';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async (query, page) => {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};

export const normalizeImages = images =>
  images.map(({ id, tags, largeImageURL, webformatURL }) => ({
    id,
    tags,
    largeImageURL,
    webformatURL,
  }));
