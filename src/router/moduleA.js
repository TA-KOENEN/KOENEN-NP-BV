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
];
export default routes;
