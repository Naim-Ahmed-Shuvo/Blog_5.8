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
//loading components
// Vue.component("admin", require("./components/backend/admin.vue").default);
// Vue.component("dashboard", require("./components/dashboard.vue").default);

// vue instance
const app = new Vue({
    el: "#app",
    router,
    store
});
