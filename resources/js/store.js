import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        category: []
    },
    getters: {
        getCategory(state) {
            return state.category;
        }
    },
    actions: {
        getCategory(context) {
            axios.get("/getCategory").then(response => {
                // context.commit("categories", response.data.categories);
                context.commit("setCategory", response.data);
            });
        }
    },

    mutations: {
        setCategory(state, data) {
            return (state.category = data);
        }
    }
});

export default store;
