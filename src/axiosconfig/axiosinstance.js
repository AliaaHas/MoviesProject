import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",

  params:{
  api_key:"06c63b74b68f60f584bf401a77b3865f"
  }
});
export default axiosInstance;
