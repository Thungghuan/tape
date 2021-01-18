import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import Home from "@/views/home/Home.vue";
import Ask from "@/views/ask/Ask.vue";
import Answer from "@/views/answer/Answer.vue";
import Admin from "@/views/admin/Admin.vue";
import Login from "@/views/admin/login/Login.vue";
import Register from "@/views/admin/register/Register.vue";

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
    path: "/admin",
    name: "Admin",
    component: Admin,
    beforeEnter: (to, from, next) => {
      if (to.path === "/admin") {
        axios({
          url: "/status"
        }).then(res => {
          if (res.status === -1) {
            next("/admin/register");
          } else if (res.status === 0) {
            next("/admin/login");
          } else {
            next();
          }
        });
      } else {
        next();
      }
      console.log(from);
    },
    children: [
      {
        path: "login",
        name: "Login",
        component: Login
      },
      {
        path: "register",
        name: "Register",
        component: Register
      }
    ]
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
