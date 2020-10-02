import Vue from "vue";
import VueRouter from "vue-router";
import MianContent from "./components/backend/main_content.vue";
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: MianContent
        },
        {
            path: "/category",
            name: "category",
            component: () =>
                import("./components/backend/category/view_category")
        },
        {
            path: "/add_category",
            name: "add_category",
            component: () =>
                import("./components/backend/category/create_category")
        }
    ]
});

export default router;
