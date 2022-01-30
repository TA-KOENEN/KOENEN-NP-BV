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

const startModuleB = () =>
  import("@/views/moduleB/start" /* webpackChunkName: "moduleBstart" */);
const stepAModuleB = () =>
  import("@/views/moduleB/stepA" /* webpackChunkName: "moduleBstepA" */);
const endModuleB = () =>
  import("@/views/moduleB/stepEnd" /* webpackChunkName: "moduleBstepEnd" */);

const startModuleC = () =>
  import("@/views/moduleC/start" /* webpackChunkName: "moduleCstart" */);
const stepAModuleC = () =>
  import("@/views/moduleC/stepA" /* webpackChunkName: "moduleCstepA" */);
const stepBModuleC = () =>
  import("@/views/moduleC/stepB" /* webpackChunkName: "moduleCstepB" */);
const stepCModuleC = () =>
  import("@/views/moduleC/stepC" /* webpackChunkName: "moduleCstepC" */);
const endModuleC = () =>
  import("@/views/moduleC/stepEnd" /* webpackChunkName: "moduleCstepEnd" */);

const startModuleD = () =>
  import("@/views/moduleD/start" /* webpackChunkName: "moduleDstart" */);
const stepAModuleD = () =>
  import("@/views/moduleD/stepA" /* webpackChunkName: "moduleDstepA" */);
const stepBModuleD = () =>
  import("@/views/moduleD/stepB" /* webpackChunkName: "moduleDstepB" */);
const stepCModuleD = () =>
  import("@/views/moduleD/stepC" /* webpackChunkName: "moduleDstepC" */);
const stepDModuleD = () =>
  import("@/views/moduleD/stepD" /* webpackChunkName: "moduleDstepD" */);
const endModuleD = () =>
  import("@/views/moduleD/stepEnd" /* webpackChunkName: "moduleDstepEnd" */);

const startModuleE = () =>
  import("@/views/moduleE/start" /* webpackChunkName: "moduleEstart" */);
const stepAModuleE = () =>
  import("@/views/moduleE/stepA" /* webpackChunkName: "moduleEstepA" */);
const endModuleE = () =>
  import("@/views/moduleE/stepEnd" /* webpackChunkName: "moduleEstepEnd" */);

const startModuleF = () =>
  import("@/views/moduleF/start" /* webpackChunkName: "moduleFstart" */);
const stepAModuleF = () =>
  import("@/views/moduleF/stepA" /* webpackChunkName: "moduleFstepA" */);
const stepBModuleF = () =>
  import("@/views/moduleF/stepB" /* webpackChunkName: "moduleFstepB" */);
const stepCModuleF = () =>
  import("@/views/moduleF/stepC" /* webpackChunkName: "moduleFstepC" */);
const stepDModuleF = () =>
  import("@/views/moduleF/stepD" /* webpackChunkName: "moduleFstepD" */);
const stepEModuleF = () =>
  import("@/views/moduleF/stepE" /* webpackChunkName: "moduleFstepE" */);
const stepFModuleF = () =>
  import("@/views/moduleF/stepF" /* webpackChunkName: "moduleFstepF" */);
const stepGModuleF = () =>
  import("@/views/moduleF/stepG" /* webpackChunkName: "moduleFstepG" */);
const endModuleF = () =>
  import("@/views/moduleF/stepEnd" /* webpackChunkName: "moduleFstepEnd" */);

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
    {
      path: "/module-b-start",
      component: startModuleB,
      name: "module-b-start",
    },
    {
      path: "/module-b-step-a",
      component: stepAModuleB,
      name: "module-b-step-a",
    },
    {
      path: "/module-b-end",
      component: endModuleB,
      name: "module-b-end",
    },
    {
      path: "/module-c-start",
      component: startModuleC,
      name: "module-c-start",
    },
    {
      path: "/module-c-step-a",
      component: stepAModuleC,
      name: "module-c-step-a",
    },
    {
      path: "/module-c-step-b",
      component: stepBModuleC,
      name: "module-c-step-b",
    },
    {
      path: "/module-c-step-c",
      component: stepCModuleC,
      name: "module-c-step-c",
    },
    {
      path: "/module-c-end",
      component: endModuleC,
      name: "module-c-end",
      beforeEnter(to, from, next) {
        if (localStorage.stepTwo) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/module-d-start",
      component: startModuleD,
      name: "module-d-start",
    },
    {
      path: "/module-d-step-a",
      component: stepAModuleD,
      name: "module-d-step-a",
    },
    {
      path: "/module-d-step-b",
      component: stepBModuleD,
      name: "module-d-step-b",
    },
    {
      path: "/module-d-step-c",
      component: stepCModuleD,
      name: "module-d-step-c",
    },
    {
      path: "/module-d-step-d",
      component: stepDModuleD,
      name: "module-d-step-d",
    },
    {
      path: "/module-d-end",
      component: endModuleD,
      name: "module-d-end",
      beforeEnter(to, from, next) {
        if (localStorage.stepTwo) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/module-e-start",
      component: startModuleE,
      name: "module-e-start",
    },
    {
      path: "/module-e-step-a",
      component: stepAModuleE,
      name: "module-e-step-a",
    },
    {
      path: "/module-e-end",
      component: endModuleE,
      name: "module-e-end",
    },
    {
      path: "/module-f-start",
      component: startModuleF,
      name: "module-f-start",
    },
    {
      path: "/module-f-step-a",
      component: stepAModuleF,
      name: "module-f-step-a",
    },
    {
      path: "/module-f-step-b",
      component: stepBModuleF,
      name: "module-f-step-b",
    },
    {
      path: "/module-f-step-c",
      component: stepCModuleF,
      name: "module-f-step-c",
    },
    {
      path: "/module-f-step-d",
      component: stepDModuleF,
      name: "module-f-step-d",
    },
    {
      path: "/module-f-step-e",
      component: stepEModuleF,
      name: "module-f-step-e",
    },
    {
      path: "/module-f-step-f",
      component: stepFModuleF,
      name: "module-f-step-f",
    },
    {
      path: "/module-f-step-g",
      component: stepGModuleF,
      name: "module-f-step-g",
    },
    {
      path: "/module-f-end",
      component: endModuleF,
      name: "module-f-end",
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
