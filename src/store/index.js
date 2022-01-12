import Vue from "vue";
import Vuex from "vuex";
import * as auth from "@/store/modules/Auth";
import * as plan from "@/store/modules/Noodplan";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    auth,
    plan,
  },
});
