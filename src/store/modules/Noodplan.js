import ResultService from "@/services/ResultService";
import { getError } from "@/utils/helpers";
export const namespaced = true;

export const state = {
  planSingle: [],
  loading: false,
  error: null,
};

export const mutations = {
  SET_PLAN(state, planSingle) {
    state.planSingle = planSingle;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};
export const actions = {
  getPlan({ commit }, UserId) {
    commit("SET_LOADING", true);

    ResultService.getData(UserId)
      .then((response) => {
        commit("SET_PLAN", response.data.data);
      })
      .catch((error) => {
        commit("SET_LOADING", false);
        commit("SET_ERROR", getError(error));
      })
      .finally(() => {
        commit("SET_LOADING", false);
      });
  },
};
export const getters = {
  planSingle: (state) => {
    return state.planSingle;
  },
  loading: (state) => {
    return state.loading;
  },
  error: (state) => {
    return state.error;
  },
};
