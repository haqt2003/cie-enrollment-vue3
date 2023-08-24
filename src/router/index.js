import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegisterView.vue"),
  },
  {
    path: "/requirements",
    name: "Requirements",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RequirementsView.vue"),
  },
  {
    path: "/resume-and-guides",
    name: "Resume",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ResumeView.vue"),
  },
  {
    path: "/explore",
    name: "Explore",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ExploreView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
