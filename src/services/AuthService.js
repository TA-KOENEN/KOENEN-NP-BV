import * as API from "@/services/API";
import axios from "axios";

export default {
  loginB(payload) {
    return API.apiClient.post("/startBVstepTwo", payload);
  },
  logout(id) {
    const token = localStorage.getItem("token");
    return axios.get(`/logoutBV/${id}`, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
};
