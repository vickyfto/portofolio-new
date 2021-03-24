import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Skills from "./views/Skills.vue";
import One from "./views/PortfolioOne.vue";
import Two from "./views/PortfolioTwo.vue";
import Three from "./views/PortfolioThree.vue";
import Four from "./views/PortfolioFour.vue";
import Experience from "./views/Experience.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/portofolio-new",
      name: "home",
      component: Home
    },
    {
      path: "/portofolio-new/about",
      name: "about",
      component: About
    },
    {
      path: "/portofolio-new/skills",
      name: "skills",
      component: Skills
    },
    {
      path: "/portofolio-new/experience",
      name: "experience",
      component: Experience
    },
    {
      path: "portofolio-new//portfolio/one",
      name: "one",
      component: One
    },
    {
      path: "/portofolio-new/portfolio/two",
      name: "two",
      component: Two
    },
    {
      path: "/portofolio-new/portfolio/three",
      name: "three",
      component: Three
    },
    {
      path: "/portofolio-new/portfolio/four",
      name: "four",
      component: Four
    }
  ],
  mode: "history"
});
