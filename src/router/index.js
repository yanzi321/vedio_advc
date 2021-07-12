import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [{
        path: "/",
        meta: {
            auth: true
        },
        component: () =>
            import ("@/views/index")
    },
    {
        path: "/login",
        meta: {
            auth: false
        },
        component: () =>
            import ("@/views/login")
    }
];

const router = new VueRouter({
    routes
});

export default router;