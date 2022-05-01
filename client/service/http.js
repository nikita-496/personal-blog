import axios from "axios";

let baseURL = "http://localhost:4000/api/v1";

let axiosConfig = {
  timeout: 2000,
  headers: {
    "Accept-Language": "ru",
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "http://localhost:4000",
    "Access-Control-Allow-Credentials": true,
  },
  withCredentials: true,
};

const url = (url) => `${baseURL}${url}`;

export const api = {
  register: url("/register"),
  auth: url("/auth"),
  profile: url("/profile"),
};

const instance = axios.create(axiosConfig);

export const getJSON = async (url) => await instance.get(url);

export const postJSON = async (url, data) =>
  await instance.post(url, data ? JSON.stringify(data) : null);
export { api as API };
