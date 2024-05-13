import axios from "axios";
// import store from "../../src/Store/Store";

const ApiClient = axios.create({
  baseURL:"http://127.0.0.1:8787",
  // withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": "true",
    // withCredentials: false,
  },
  timeout:20000,
});

ApiClient.interceptors.request.use(
  (config) => {
    // if (
    //   store?.getState()?.authenticationData?.token &&
    //   !["/auth/login", "/auth/register"].includes(config.url)
    // ) {
    //   const token = store?.getState()?.authenticationData?.token;
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

export default ApiClient;