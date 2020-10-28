import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        categories: [],
        posts: []
    },
    getters: {
        getCategory(state) {
            return state.categories;
        },

        getPosts(state) {
            return state.posts;
        }
    },
    actions: {
        //category
        getCategory(context) {
            axios.get("/all_category").then(response => {
                context.commit("get_category", response.data);
            });
        },

        //posts
        getAllPost(context) {
            axios.get("/get_posts").then(response => {
                console.log(response.data);
                context.commit("get_all_posts", response.data);
            });
        }
    },

    mutations: {
        get_category(state, data) {
            this.state.categories = data;
        },

        get_all_posts(state, data) {
            this.state.posts = data;
        }
    }
});

export default store;
