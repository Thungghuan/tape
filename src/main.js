import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import config from "../config/index";

axios.defaults.baseURL = config.request_url;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  res => {
    return res.data;
  },
  err => {
    throw err;
  }
);

function getTime(time) {
  // console.log(time)
  let timeData = time.split(/[T.]/);
  let date = timeData[0];
  let moment = timeData[1];
  let hour = moment.split(":")[0];
  let minute = moment.split(":")[1];
  let second = moment.split(":")[2];
  let currentTime = new Date(Date.now());
  let currentDate = `${currentTime.getFullYear()}-${(currentTime.getMonth() < 9
    ? "0"
    : "") +
    (currentTime.getMonth() + 1)}-${currentTime.getDate()}`;
  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  if (date < currentDate) {
    time = date;
  } else {
    let diff = 60 * (currentHour - hour) + (currentMinute - minute);
    if (diff === 0) {
      time = `${currentTime.getSeconds() - second}秒前`;
    } else if (diff < 60) {
      time = `${diff}分钟前`;
    } else {
      time = `${Math.floor(diff / 60)}小时前`;
    }
  }
  // console.log(time);
  return time;
}

const app = createApp(App);
app.use(router).mount("#app");
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$getTime = getTime;
app.config.globalProperties.$user = config.user;
