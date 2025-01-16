

export const fetchImages = async (query) => {
  const url = `https://pixabay.com/api/?key=48224339-eb859193739eff8149475b5bf&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  return response.json();
};
