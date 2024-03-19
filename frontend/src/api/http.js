import axios from "axios";

const serverAddress = import.meta.env.DEV
  ? "http://localhost:4500"
  : window.location.origin;

axios.defaults.baseURL = `${serverAddress}/api`;

const get = axios.get;
const post = axios.post;

export { get, post };
