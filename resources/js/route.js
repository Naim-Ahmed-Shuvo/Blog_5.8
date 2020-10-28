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
        },
        {
            path: "/edit_category/:id",
            name: "edit_category",
            component: () => import("./components/edit_category.vue")
        },

        //post routes
        {
            path: "/post",
            name: "post",
            component: () => import("./components/post/index.vue")
        },
        {
            path: "/add_post",
            name: "add_post",
            component: () => import("./components/post/create_post.vue")
        },

        {
            path: "/edit_post/:id",
            name: "edit_post",
            component: () => import("./components/post/edit_post.vue")
        },

        //frontend router
        {
            path: "/frontend_home",
            name: "frontend_home",
            component: () => require("./components/frontend/home.vue")
        }
    ]
});

export default router;
