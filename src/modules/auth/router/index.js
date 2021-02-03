export const AuthRoutes = [
  {
    name: "login",
    path: "/login",
    component: () =>
      import(
        /*webpackChunkName="auth-login"*/
        "@/modules/auth/components/Login"
      )
  }
];
