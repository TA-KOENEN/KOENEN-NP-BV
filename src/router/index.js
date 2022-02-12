import Vue from "vue";
import VueRouter from "vue-router";

import Start from "@/views/Start";
import LoginSecond from "../views/LoginSecond";
import Intro from "@/views/Intro";
import Style from "@/views/Style";
import Modules from "@/views/Modules";

const Eind = () => import("@/views/Eind" /* webpackChunkName: "moduleEind" */);

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

const startModuleG = () =>
  import("@/views/moduleG/start" /* webpackChunkName: "moduleGstart" */);
const stepAModuleG = () =>
  import("@/views/moduleG/stepA" /* webpackChunkName: "moduleGstepA" */);
const stepBModuleG = () =>
  import("@/views/moduleG/stepB" /* webpackChunkName: "moduleGstepB" */);
const stepCModuleG = () =>
  import("@/views/moduleG/stepC" /* webpackChunkName: "moduleGstepC" */);
const endModuleG = () =>
  import("@/views/moduleG/stepEnd" /* webpackChunkName: "moduleGstepEnd" */);

const startModuleH = () =>
  import("@/views/moduleH/start" /* webpackChunkName: "moduleHstart" */);
const stepAModuleH = () =>
  import("@/views/moduleH/stepA" /* webpackChunkName: "moduleHstepA" */);
const stepBModuleH = () =>
  import("@/views/moduleH/stepB" /* webpackChunkName: "moduleHstepB" */);
const stepCModuleH = () =>
  import("@/views/moduleH/stepC" /* webpackChunkName: "moduleHstepC" */);
const endModuleH = () =>
  import("@/views/moduleH/stepEnd" /* webpackChunkName: "moduleHstepEnd" */);

const startModuleI = () =>
  import("@/views/moduleI/start" /* webpackChunkName: "moduleIstart" */);
const stepAModuleI = () =>
  import("@/views/moduleI/stepA" /* webpackChunkName: "moduleIstepA" */);
const stepBModuleI = () =>
  import("@/views/moduleI/stepB" /* webpackChunkName: "moduleIstepB" */);
const stepCModuleI = () =>
  import("@/views/moduleI/stepC" /* webpackChunkName: "moduleIstepC" */);
const stepDModuleI = () =>
  import("@/views/moduleI/stepD" /* webpackChunkName: "moduleIstepD" */);
const endModuleI = () =>
  import("@/views/moduleI/stepEnd" /* webpackChunkName: "moduleIstepEnd" */);

const startModuleJ = () =>
  import("@/views/moduleJ/start" /* webpackChunkName: "moduleJstart" */);
const stepAModuleJ = () =>
  import("@/views/moduleJ/stepA" /* webpackChunkName: "moduleJstepA" */);
const stepBModuleJ = () =>
  import("@/views/moduleJ/stepB" /* webpackChunkName: "moduleJstepB" */);
const stepCModuleJ = () =>
  import("@/views/moduleJ/stepC" /* webpackChunkName: "moduleJstepC" */);
const stepDModuleJ = () =>
  import("@/views/moduleJ/stepD" /* webpackChunkName: "moduleJstepD" */);
const endModuleJ = () =>
  import("@/views/moduleJ/stepEnd" /* webpackChunkName: "moduleJstepEnd" */);

const startModuleK = () =>
  import("@/views/moduleK/start" /* webpackChunkName: "moduleKstart" */);
const stepAModuleK = () =>
  import("@/views/moduleK/stepA" /* webpackChunkName: "moduleKstepA" */);
const stepBModuleK = () =>
  import("@/views/moduleK/stepB" /* webpackChunkName: "moduleKstepB" */);
const endModuleK = () =>
  import("@/views/moduleK/stepEnd" /* webpackChunkName: "moduleKstepEnd" */);

const startModuleL = () =>
  import("@/views/moduleL/start" /* webpackChunkName: "moduleLstart" */);
const stepAModuleL = () =>
  import("@/views/moduleL/stepA" /* webpackChunkName: "moduleLstepA" */);
const endModuleL = () =>
  import("@/views/moduleL/stepEnd" /* webpackChunkName: "moduleLstepEnd" */);

const startModuleM = () =>
  import("@/views/moduleM/start" /* webpackChunkName: "moduleMstart" */);
const stepAModuleM = () =>
  import("@/views/moduleM/stepA" /* webpackChunkName: "moduleMstepA" */);
const endModuleM = () =>
  import("@/views/moduleM/stepEnd" /* webpackChunkName: "moduleMstepEnd" */);

const startModuleN = () =>
  import("@/views/moduleN/start" /* webpackChunkName: "moduleNstart" */);
const stepAModuleN = () =>
  import("@/views/moduleN/stepA" /* webpackChunkName: "moduleNstepA" */);
const endModuleN = () =>
  import("@/views/moduleN/stepEnd" /* webpackChunkName: "moduleNstepEnd" */);

const ReportEnd = () =>
  import("@/views/Report" /* webpackChunkName: "reportEnd" */);

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
      path: "/einde",
      name: "eind",
      component: Eind,
    },
    {
      path: "/rapportage",
      name: "report-end",
      component: ReportEnd,
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
    {
      path: "/module-g-start",
      component: startModuleG,
      name: "module-g-start",
    },
    {
      path: "/module-g-step-a",
      component: stepAModuleG,
      name: "module-g-step-a",
    },
    {
      path: "/module-g-step-b",
      component: stepBModuleG,
      name: "module-g-step-b",
    },
    {
      path: "/module-g-step-c",
      component: stepCModuleG,
      name: "module-g-step-c",
    },
    {
      path: "/module-g-end",
      component: endModuleG,
      name: "module-g-end",
      beforeEnter(to, from, next) {
        if (localStorage.stepTwo) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/module-h-start",
      component: startModuleH,
      name: "module-h-start",
    },
    {
      path: "/module-h-step-a",
      component: stepAModuleH,
      name: "module-h-step-a",
    },
    {
      path: "/module-h-step-b",
      component: stepBModuleH,
      name: "module-h-step-b",
    },
    {
      path: "/module-h-step-c",
      component: stepCModuleH,
      name: "module-h-step-c",
    },
    {
      path: "/module-h-end",
      component: endModuleH,
      name: "module-h-end",
      beforeEnter(to, from, next) {
        if (localStorage.stepTwo) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/module-i-start",
      component: startModuleI,
      name: "module-i-start",
    },
    {
      path: "/module-i-step-a",
      component: stepAModuleI,
      name: "module-i-step-a",
    },
    {
      path: "/module-i-step-b",
      component: stepBModuleI,
      name: "module-i-step-b",
    },
    {
      path: "/module-i-step-c",
      component: stepCModuleI,
      name: "module-i-step-c",
    },
    {
      path: "/module-i-step-d",
      component: stepDModuleI,
      name: "module-i-step-d",
    },
    {
      path: "/module-i-end",
      component: endModuleI,
      name: "module-i-end",
      beforeEnter(to, from, next) {
        if (localStorage.stepTwo) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/module-j-start",
      component: startModuleJ,
      name: "module-j-start",
    },
    {
      path: "/module-j-step-a",
      component: stepAModuleJ,
      name: "module-j-step-a",
    },
    {
      path: "/module-j-step-b",
      component: stepBModuleJ,
      name: "module-j-step-b",
    },
    {
      path: "/module-j-step-c",
      component: stepCModuleJ,
      name: "module-j-step-c",
    },
    {
      path: "/module-j-step-d",
      component: stepDModuleJ,
      name: "module-j-step-d",
    },
    {
      path: "/module-j-end",
      component: endModuleJ,
      name: "module-j-end",
    },
    {
      path: "/module-k-start",
      component: startModuleK,
      name: "module-k-start",
    },
    {
      path: "/module-k-step-a",
      component: stepAModuleK,
      name: "module-k-step-a",
    },
    {
      path: "/module-k-step-b",
      component: stepBModuleK,
      name: "module-k-step-b",
    },
    {
      path: "/module-k-end",
      component: endModuleK,
      name: "module-k-end",
      beforeEnter(to, from, next) {
        if (localStorage.stepTwo) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "/module-l-start",
      component: startModuleL,
      name: "module-l-start",
    },
    {
      path: "/module-l-step-a",
      component: stepAModuleL,
      name: "module-l-step-a",
    },
    {
      path: "/module-l-end",
      component: endModuleL,
      name: "module-l-end",
    },
    {
      path: "/module-m-start",
      component: startModuleM,
      name: "module-m-start",
    },
    {
      path: "/module-m-step-a",
      component: stepAModuleM,
      name: "module-m-step-a",
    },
    {
      path: "/module-m-end",
      component: endModuleM,
      name: "module-m-end",
    },
    {
      path: "/module-n-start",
      component: startModuleN,
      name: "module-n-start",
    },
    {
      path: "/module-n-step-a",
      component: stepAModuleN,
      name: "module-n-step-a",
    },
    {
      path: "/module-n-end",
      component: endModuleN,
      name: "module-n-end",
    },
  ],
});

export default router;
