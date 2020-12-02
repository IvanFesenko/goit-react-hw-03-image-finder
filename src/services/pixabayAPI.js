import Axios from 'axios';

const KEY = 'key=18267918-a545f4b922b3d8b59313b99e1';
const BASEURL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';

async function getData(query, page) {
  try {
    const response = await Axios.get(
      `${BASEURL}${query}&page=${page}&per_page=12&${KEY}`,
    );
    const { data } = response;
    return data;
  } catch (error) {
    return { isError: true, description: error };
  }
}

export default getData;
