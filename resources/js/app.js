import Vue from "vue";

import router from "./route.js";
import swal from "sweetalert2";
import store from "./store.js";
require("./bootstrap");

// v_form
import { HasError, AlertError } from "vform";
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

//sweet alert

window.swal = swal;

const Toast = swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
});

window.toast = Toast;

//loading components
Vue.component("admin", require("./components/backend/admin.vue").default);

// vue instance
const app = new Vue({
    el: "#app",
    router,
    store
});
