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

const routes = [
  {
    path: "module-a-start",
    component: startModuleA,
    name: "module-a-start",
  },
  {
    path: "module-a-step-a",
    component: stepAModuleA,
    name: "module-a-step-a",
  },
  {
    path: "module-a-step-b",
    component: stepBModuleA,
    name: "module-a-step-b",
  },
  {
    path: "module-a-step-c",
    component: stepCModuleA,
    name: "module-a-step-c",
  },
  {
    path: "module-a-end",
    component: endModuleA,
    name: "module-a-end",
  },
  {
    path: "module-b-start",
    component: startModuleB,
    name: "module-b-start",
  },
  {
    path: "module-b-step-a",
    component: stepAModuleB,
    name: "module-b-step-a",
  },
  {
    path: "module-b-end",
    component: endModuleB,
    name: "module-b-end",
  },
];
export default routes;
