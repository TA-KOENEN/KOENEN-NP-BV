import * as API from "@/services/API";
import axios from "axios";
export default {
  getStart(payload) {
    return API.apiClient.post("/startBV", payload);
  },
  getData(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/getDataBV/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataA(id, payload) {
    const token = localStorage.getItem("token");
    return axios.post(`/saveDataBV_moduleA/${id}`, payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportA(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/getReportBV_moduleA/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
};
