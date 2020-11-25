import axios from "axios";

const corsOrigin = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "https://saqsini-api.herokuapp.com";

export const post = axios.create({
  method: "POST",
  baseURL: `${corsOrigin}${baseUrl}`,
});

export const get = axios.create({
  method: "GET",
  baseURL: `${corsOrigin}${baseUrl}`,
});

export const patch = axios.create({
  method: "PATCH",
  baseURL: `${corsOrigin}${baseUrl}`,
});

export const remove = axios.create({
  method: "DELETE",
  baseURL: `${corsOrigin}${baseUrl}`,
});
