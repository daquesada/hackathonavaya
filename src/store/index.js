import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: undefined,
  },
  mutations: {
    getUser(state, data) {
      console.log(data);
      axios
        .post(
          "https://avaya-hackathon-server.herokuapp.com/api/v1/users/login/",
          data
        )
        .then((data) => {
          state.user = data.data;
        })
        .catch((e) => console.log(e));
    },
  },
  actions: {},
  modules: {},
});
