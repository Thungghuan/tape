import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/Home.vue";
import Ask from "@/views/ask/Ask.vue";
import Answer from "@/views/answer/Answer.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/ask",
    name: "Ask",
    component: Ask
  },
  {
    path: "/answer/:id",
    name: "Answer",
    component: Answer
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
