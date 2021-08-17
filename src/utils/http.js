import axios from "axios";

export const http = axios.create({
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-Application-Name": "market",
  },
});
http.interceptors.response.use(
  function (response) {
    if (response.data) {
      if (response.data.statusCode === 200 && response.data.message) {
        console.log(response.data);
      }
    }
    return response;
  },
  function (error) {
    const response = error.response;
    const statusCode = response.statusCode;
    if (statusCode === 401) {
      window.location.href = window.location.pathname;
      return new Promise(() => {});
    }
    if (statusCode === 403) {
      return new Promise(() => {});
    }
    if (response.message) {
        console.log(response.message);
      }
      return Promise.reject(error);
    }
);
