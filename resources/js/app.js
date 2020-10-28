import Vue from "vue";

import router from "./route.js";
import Swal from "sweetalert2";
import store from "./store.js";
require("./bootstrap");

// v_form
import { Form, HasError, AlertError } from "vform";
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
window.Form = Form;

//sweetalert2
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000
});
window.Toast = Toast;
//filter
import filter from "./filter";
//laravue paginaton
Vue.component("pagination", require("laravel-vue-pagination"));
Vue.component("Home", require("./components/frontend/home.vue").default);
//mardown editor
import "v-markdown-editor/dist/v-markdown-editor.css";
import Editor from "v-markdown-editor";
// global register
Vue.use(Editor);

// vue instance
const app = new Vue({
    el: "#app",
    router,
    store
});
