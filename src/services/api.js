import { HTTP } from "@/utils/axios";

// 登录
export const UserLogin = data => HTTP(`/api/frontend/login`, data);

// 用户详情
export const UserInfo = data => HTTP(`/api/frontend/user-info`, data, "get");

// 获取播放地址
export const GetVideo = data => HTTP(`/api/frontend/video-url`, data, "get");

// 用户协议
export const GetRules = data => HTTP(`/api/frontend/rules`, data, "get");

// 图片验证码
export const CheckCaptcha = data => HTTP(`/api/frontend/check-captcha`, data);
