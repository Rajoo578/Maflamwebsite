import axios from "axios";

// const baseApiUrl = "https://prominenttrades.in/maflam";

const baseApiUrl = "https://backend.maflam.com/maflam";

function get(url) {
  return axios.get(baseApiUrl + url);
}

function post(url, body) {
  return axios.post(baseApiUrl + url, body);
  
}

function put(url, body) {
  return axios.put(baseApiUrl + url, body);
}

function deletReq(url) {
  return axios.delete(baseApiUrl + url);
}

export default {
  get,
  post,
  put,
  deletReq,
};
