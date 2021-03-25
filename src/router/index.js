import Vue from "vue";
import VueRouter from "vue-router";

import { AuthRoutes } from "@/modules/auth/router";
import { UserRoutes } from "@/modules/user/router";
import { AdminDashboardRoutes } from "@/modules/admin-dashboard/router";

import Request from "@/modules/institutions/details/request";

Vue.use(VueRouter);

const routes = [
  ...UserRoutes,
  {
    path: "/request/status/:id",
    name: "request-status",
    component: Request
  },
  {
    path: "/",
    component: () => import("../views/main.vue"),
    children: [...AuthRoutes, ...AdminDashboardRoutes]
  },
  {
    path: "*",
    component: () => import("../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
