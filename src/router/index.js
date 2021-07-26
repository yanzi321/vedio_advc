import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    meta: {
      auth: true
    },
    component: () => import("@/views/index")
  },
  {
    path: "/personal",
    meta: {
      auth: true
    },
    component: () => import("@/views/personal")
  },
  {
    path: "/login",
    meta: {
      auth: false
    },
    component: () => import("@/views/login")
  },
  {
    path: "/rules/user",
    meta: {
      auth: false
    },
    component: () => import("@/views/rules/user")
  },
  {
    path: "/rules/privacy",
    meta: {
      auth: false
    },
    component: () => import("@/views/rules/privacy")
  },
  {
    path: "/cash",
    meta: {
      auth: true
    },
    component: () => import("@/views/cash")
  }
];

const router = new VueRouter({
  routes
});

export default router;
