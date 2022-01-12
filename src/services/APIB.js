import axios from "axios";

const token = localStorage.getItem("token");
export const apiClientB = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Accept: "Application/json",
    Authorization: `Bearer ` + token,
  },
});
