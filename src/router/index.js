import Vue from "vue";
import VueRouter from "vue-router";
import stepOne from "@/views/stepOne.vue";
import stepTwo from "@/views/stepTwo.vue";
import stepThree from "@/views/stepThree";
import stepFour from "@/views/stepFour";
import stepFive from "@/views/stepFive";
import stepSix from "@/views/stepSix";
import stepSeven from "@/views/stepSeven";
import stepEight from "@/views/stepEight";
import stepNine from "@/views/stepNine";
import stepTen from "@/views/stepTen";
import stepEleven from "@/views/stepEleven";
import stepTwelve from "@/views/stepTwelve";
import stepThirteen from "@/views/stepThirteen";
import stepEnd from "@/views/stepEnd";
import LoginSecond from "../views/LoginSecond";
import Intro from "@/views/Intro";
import Start from "@/views/Start";
import Style from "@/views/Style";

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
      path: "/een",
      name: "stepOne",
      component: stepOne,
    },
    {
      path: "/twee",
      name: "stepTwo",
      component: stepTwo,
    },
    {
      path: "/drie",
      name: "stepThree",
      component: stepThree,
    },
    {
      path: "/vier",
      name: "stepFour",
      component: stepFour,
    },
    {
      path: "/vijf",
      name: "stepFive",
      component: stepFive,
    },
    {
      path: "/zes",
      name: "stepSix",
      component: stepSix,
    },
    {
      path: "/zeven",
      name: "stepSeven",
      component: stepSeven,
    },
    {
      path: "/acht",
      name: "stepEight",
      component: stepEight,
    },
    {
      path: "/negen",
      name: "stepNine",
      component: stepNine,
    },
    {
      path: "/tien",
      name: "stepTen",
      component: stepTen,
    },
    {
      path: "/elf",
      name: "stepEleven",
      component: stepEleven,
    },
    {
      path: "/twaalf",
      name: "stepTwelve",
      component: stepTwelve,
    },
    {
      path: "/dertien",
      name: "stepThirteen",
      component: stepThirteen,
    },
    {
      path: "/einde",
      name: "stepEnd",
      component: stepEnd,
    },
    {
      path: "*",
      component: Start,
      name: "Start",
    },
  ],
});

export default router;
