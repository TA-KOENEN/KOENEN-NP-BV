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
  saveDataB(id, payload) {
    const token = localStorage.getItem("token");
    return axios.post(`/saveDataBV_moduleB/${id}`, payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataC(id, payload) {
    const token = localStorage.getItem("token");
    return axios.post(`/saveDataBV_moduleC/${id}`, payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataD(id, payload) {
    const token = localStorage.getItem("token");
    return axios.post(`/saveDataBV_moduleD/${id}`, payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataE(id, payload) {
    const token = localStorage.getItem("token");
    return axios.post(`/saveDataBV_moduleE/${id}`, payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataF(id, payload) {
    const token = localStorage.getItem("token");
    return axios.post(`/saveDataBV_moduleF/${id}`, payload, {
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
  getReportB(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/getReportBV_moduleB/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportC(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/getReportBV_moduleC/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportD(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/getReportBV_moduleD/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportE(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/getReportBV_moduleE/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportF(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/getReportBV_moduleF/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
};
