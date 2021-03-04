export const AdminDashboardRoutes = [
  {
    name: "home",
    path: "/admin",
    component: () => import("@/modules/admin-dashboard/components/home")
  }
];
