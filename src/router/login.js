import Start from "@/views/Start";
import LoginSecond from "../views/LoginSecond";
import Intro from "@/views/Intro";
import Style from "@/views/Style";
import Modules from "@/views/Modules";

const routes = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/style",
    name: "Style",
    component: Style,
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
];
export default routes;
