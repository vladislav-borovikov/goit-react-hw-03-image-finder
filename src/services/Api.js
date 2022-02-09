import axios from "axios";

const API_KEY = "24504393-335e93f8f8ae51e578d8e0bea";
axios.defaults.baseURL = "https://pixabay.com";

export async function Api(filter, page) {
  const response = await axios.get(
    `/api/?q=${filter}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
}
