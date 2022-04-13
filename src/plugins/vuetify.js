import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    dark: true,
    themes: {
      light: {
        primary: "#d22630",
        secondary: "#003895",
        accent: "#07C730",
        error: "#d22630",
        info: "#FF0048",
        success: "#003895",
        warning: "#2BA681",
        leftPanel: "#F2F2F2",
        rightPanel: "#ffffff",
        textColor: "#000000",
        textColorLeft: "#000000",
        spec: "#003895",
      },
      dark: {
        primary: "#d22630",
        secondary: "#003895",
        accent: "#07C730",
        error: "#d22630",
        info: "#FF6C00",
        success: "#003895",
        warning: "#2BA681",
        leftPanel: "#607D8B",
        rightPanel: "#000000",
        textColor: "#ffffff",
        textColorLeft: "#ffffff",
        spec: "#FFEA00",
      },
    },
  },
});
