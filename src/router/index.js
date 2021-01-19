import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import Home from "@/views/home/Home.vue";
import Ask from "@/views/ask/Ask.vue";
import ShowAnswer from "@/views/showAnswer/ShowAnswer.vue";
import Admin from "@/views/admin/Admin.vue";
import AllQuestions from "@/views/admin/allQuestions/AllQuestions";
import Login from "@/views/admin/login/Login.vue";
import Register from "@/views/admin/register/Register.vue";
import AdminAnswer from "@/views/admin/adminAnswer/AdminAnswer.vue";

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
    name: "ShowAnswer",
    component: ShowAnswer
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
        path: "",
        name: "AllQuestions",
        component: AllQuestions
      },
      {
        path: "login",
        name: "Login",
        component: Login
      },
      {
        path: "register",
        name: "Register",
        component: Register
      },
      {
        path: "answer/:id",
        name: "AdminAnswer",
        component: AdminAnswer
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
