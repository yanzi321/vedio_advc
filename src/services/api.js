import { HTTP } from "@/utils/axios";

const domain = "http://advpc.muke.design";

// 登录
export const UserLogin = data => HTTP(`${domain}/api/frontend/login`, data);

// 用户详情
export const UserInfo = data =>
  HTTP(`${domain}/api/frontend/user-info`, data, "get");

// 获取播放地址
export const GetVideo = data =>
  HTTP(`${domain}/api/frontend/video-url`, data, "get");

// 获取间隔播放
export const GetTimeVideo = data =>
  HTTP(`${domain}/api/frontend/check-video-url`, data, "post");

// 用户协议
export const GetRules = data =>
  HTTP(`${domain}/api/frontend/rules`, data, "get");

// 图片验证码
export const CheckCaptcha = data =>
  HTTP(`${domain}/api/frontend/check-captcha`, data);

// 提现类型
export const GetCashType = data =>
  HTTP(`${domain}/api/frontend/exchange-type`, data, "get");

// 提现列表
export const GetCashList = data =>
HTTP(`${domain}/api/frontend/cash-out`, data, "get");

// 提现说明
export const GetCashMsg = data =>
HTTP(`${domain}/api/frontend/rules`, data, "get");

// 提现
export const DoCash = data => HTTP(`${domain}/api/frontend/cash-out`, data);

// 获取公网IP
export const GetIp = data => HTTP(`http://httpbin.org/ip`, data, "get");

export const ChinaIp = data => HTTP(`https://api.5ics.cn/h5/qs/ip`, data);

export const GetBulletin = data =>
  HTTP(`${domain}/api/frontend/get-bulletin`, data, "get");
