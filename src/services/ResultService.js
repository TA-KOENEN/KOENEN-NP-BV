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
  saveDataK(id, payload) {
    const token = localStorage.getItem("token");
    return axios.post(`/saveDataBV_moduleK/${id}`, payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataL(id, payload) {
    const token = localStorage.getItem("token");
    return axios.post(`/saveDataBV_moduleL/${id}`, payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataM(id, payload) {
    const token = localStorage.getItem("token");
    return axios.post(`/saveDataBV_moduleM/${id}`, payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataN(id, payload) {
    const token = localStorage.getItem("token");
    return axios.post(`/saveDataBV_moduleN/${id}`, payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  saveDataReport(id, payload) {
    const token = localStorage.getItem("token");
    return axios.post(`/saveDataBV_Report/${id}`, payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  finishModA(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/finishBV_mod_a/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  finishModB(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/finishBV_mod_b/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  finishModC(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/finishBV_mod_c/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  finishModD(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/finishBV_mod_d/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  finishModE(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/finishBV_mod_e/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  finishModF(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/finishBV_mod_f/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  finishModG(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/finishBV_mod_g/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  finishModH(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/finishBV_mod_h/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  finishModI(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/finishBV_mod_i/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  finishModJ(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/finishBV_mod_j/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  finishModK(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/finishBV_mod_k/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  finishModL(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/finishBV_mod_l/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  finishModM(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/finishBV_mod_m/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  finishModN(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/finishBV_mod_n/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
};
