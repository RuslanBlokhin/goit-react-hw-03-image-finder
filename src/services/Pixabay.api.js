import axios from "axios";

const BASE_URL = "https://pixabay.com/api";
const API_KEY = "21690029-4e3c1e0e912ed1ce10e7f026d";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,
};

const fetchPixabayImgs = async ({ q, page }) => {
  return await axios.get("", { params: { q, page } });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchPixabayImgs };
