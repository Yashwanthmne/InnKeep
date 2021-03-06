import Vue from "vue";
import VueRouter from "vue-router";

import { AuthRoutes } from "@/modules/auth/router";
import { DashboardRoutes } from "@/modules/dashboard/router";
import { UserRoutes } from "@/modules/user/router";


Vue.use(VueRouter);

const routes = [
  ...AuthRoutes,
  ...DashboardRoutes,
  ...UserRoutes,
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
