import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        // {
        //     path: "/add_category",
        //     name: "add_category",
        //     component: () =>
        //         import("./components/backend/category/create_category")
        // },
        {
            path: "home",
            name: "home",
            component: () => import("./components/dashboard.vue")
        },
        {
            path: "category",
            name: "category",
            component: () => import("./components/category.vue")
        },
        {
            path: "add_category",
            name: "add_category",
            component: () => import("./components/add_category.vue")
        }
    ]
});

export default router;
