import Vue from "vue";
import VueRouter from "vue-router";

import Start from "@/views/Start";
import LoginSecond from "../views/LoginSecond";
import Intro from "@/views/Intro";
import Style from "@/views/Style";
import Modules from "@/views/Modules";

const startModuleA = () =>
  import("@/views/moduleA/start" /* webpackChunkName: "moduleAstart" */);
const stepAModuleA = () =>
  import("@/views/moduleA/stepA" /* webpackChunkName: "moduleAstepA" */);
const stepBModuleA = () =>
  import("@/views/moduleA/stepB" /* webpackChunkName: "moduleAstepB" */);
const stepCModuleA = () =>
  import("@/views/moduleA/stepC" /* webpackChunkName: "moduleAstepC" */);
const endModuleA = () =>
  import("@/views/moduleA/stepEnd" /* webpackChunkName: "moduleAstepEnd" */);

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/style",
      name: "Style",
      component: Style,
    },
    {
      path: "/",
      name: "Start",
      component: Start,
    },
    {
      path: "/modules",
      name: "Modules",
      component: Modules,
    },
    {
      path: "/intro",
      name: "Intro",
      component: Intro,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginSecond,
    },
    {
      path: "*",
      component: Start,
      name: "Start",
    },
    {
      path: "/module-a-start",
      component: startModuleA,
      name: "module-a-start",
    },
    {
      path: "/module-a-step-a",
      component: stepAModuleA,
      name: "module-a-step-a",
    },
    {
      path: "/module-a-step-b",
      component: stepBModuleA,
      name: "module-a-step-b",
    },
    {
      path: "/module-a-step-c",
      component: stepCModuleA,
      name: "module-a-step-c",
    },
    {
      path: "/module-a-end",
      component: endModuleA,
      name: "module-a-end",
      beforeEnter(to, from, next) {
        if (localStorage.stepTwo) {
          next();
        } else {
          next("/start");
        }
      },
    },
  ],
});

export default router;
