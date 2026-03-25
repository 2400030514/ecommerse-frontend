import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerse-backend-production-8732.up.railway.app/api"
});

export default API;
