/**
 * Created by xusheng on 2018/7/10 0010.
 */
import axios from "axios";
import qs from "qs";
import router from "@/router";

// http://advpc.muke.design
const domain = "http://advpc.muke.design";

axios.defaults.timeout = 60000;
axios.defaults.baseURL = domain;

//http request 拦截器
axios.interceptors.request.use(
  config => {
    const token = sessionStorage.video_token || "";
    config.headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: token
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//响应拦截器即异常处理
axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    return Promise.reject(err);
  }
);

export async function HTTP(url = "", params = {}, methods = "post") {
  return new Promise((resolve, reject) => {
    axios[methods](
      methods === "get" ? `${url}?${qs.stringify(params)}` : url,
      qs.stringify(params)
    )
      .then(({ data }) => {
        if (data.code && data.code !== 0) {
          reject(data.msg);
        } else {
          resolve(data);
        }
      })
      .catch(err => {
        const response = err.response;
        if (response.status === 401) {
          localStorage.clear();
          sessionStorage.clear();
          router.push("/login");
        }
        reject(response.data.msg || response.statusText);
      });
  });
}
