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
  saveDataG(id, payload) {
    const token = localStorage.getItem("token");
    return axios.post(`/saveDataBV_moduleG/${id}`, payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataH(id, payload) {
    const token = localStorage.getItem("token");
    return axios.post(`/saveDataBV_moduleH/${id}`, payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataI(id, payload) {
    const token = localStorage.getItem("token");
    return axios.post(`/saveDataBV_moduleI/${id}`, payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataJ(id, payload) {
    const token = localStorage.getItem("token");
    return axios.post(`/saveDataBV_moduleJ/${id}`, payload, {
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
  getReportG(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/getReportBV_moduleG/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportH(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/getReportBV_moduleH/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportI(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/getReportBV_moduleI/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getReportJ(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/getReportBV_moduleJ/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
};
