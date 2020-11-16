import Vue from 'vue'
import axios from 'axios'

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios;
  const token = LocalStorage.getItem("palmcbt-token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};
