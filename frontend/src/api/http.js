import axios from "axios";

axios.defaults.baseURL = "http://localhost:4500/api";

const get = axios.get;

export { get };
