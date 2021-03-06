import axios from "axios";

let baseURL = "http://localhost:4000/api/v1";

let axiosConfig = {
  timeout: 2000,
  headers: {
    "Accept-Language": "ru",
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "http://localhost:4000",
    //"Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
  withCredentials: true,
};

const url = (url) => `${baseURL}${url}`;

export const api = {
  register: url("/register"),
  auth: url("/auth"),
  refresh: url("/refresh"),
  logout: url("/logout"),

  user: url("/user/"),
  post: url("/post"),
  image: url("/image"),
};

const instance = axios.create(axiosConfig);

function getParent() {
  this.get = async function (url, config) {
    return await instance.get(url, config);
  };
}
function GetJSON() {
  getParent.call(this);
}

export function getJSON(url, config) {
  return new GetJSON().get(url, config);
}

export function logOut(url) {
  return new GetJSON().get(url);
}

export const postJSON = async (url, data, config) =>
  await instance.post(url, data ? JSON.stringify(data) : null, config);

export const postFormData = async (url, data, config) =>
  await instance.post(url, data ? data : null, config);

export const postRefreshToken = async (url, data) =>
  await axios.post(url, data ? JSON.stringify(data) : null, {
    withCredentials: true,
  });

export { api as API };
