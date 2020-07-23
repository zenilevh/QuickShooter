import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentName: ''
    },
    mutations: {
        SET_NAME(state, payload) {
            state.currentName = payload
        }
    },
    actions: {},
    modules: {},
});