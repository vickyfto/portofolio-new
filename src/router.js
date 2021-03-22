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
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/skills",
      name: "skills",
      component: Skills
    },
    {
      path: "/experience",
      name: "experience",
      component: Experience
    },
    {
      path: "/portfolio/one",
      name: "one",
      component: One
    },
    {
      path: "/portfolio/two",
      name: "two",
      component: Two
    },
    {
      path: "/portfolio/three",
      name: "three",
      component: Three
    },
    {
      path: "/portfolio/four",
      name: "four",
      component: Four
    }
  ],
  mode: "history"
});
