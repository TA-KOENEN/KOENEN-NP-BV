import axios from "axios";

export default {
  getReport(payload) {
    return axios.post("/landingA", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
};
