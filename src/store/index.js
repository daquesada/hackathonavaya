import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: undefined,
    loading: false,
  },
  mutations: {
    getUser(state, data) {
      state.user = data.data.user;
      localStorage.setItem("token", data.data.token);
    },
    updateLoading(state, data) {
      state.loading = data;
    },
  },
  actions: {
    getUserRequest({ commit }, data) {
      commit("updateLoading", true);
      axios
        .post(
          "https://avaya-hackathon-server.herokuapp.com/api/v1/users/login/",
          data
        )
        .then((data) => {
          commit("getUser", data);
          commit("updateLoading", false);
        })
        .catch((e) => {
          console.log(e);
          commit("updateLoading", false);
        });
    },
  },
  modules: {},
});
