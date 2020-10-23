import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        categories: []
    },
    getters: {
        getCategory(state) {
            return state.categories;
        }
    },
    actions: {
        getCategory(context) {
            axios.get("/all_category").then(response => {
                context.commit("get_category", response.data);
            });
        }
    },

    mutations: {
        get_category(state, data) {
            this.state.categories = data;
        }
    }
});

export default store;
