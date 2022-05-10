import Vuex from "vuex";
import Vue from "vue";

const actions = {};
const mutations = {};
const state = {
  users: [],
};

Vue.use(Vuex);
export default new Vuex.Store({
  actions,
  mutations,
  state,
});
