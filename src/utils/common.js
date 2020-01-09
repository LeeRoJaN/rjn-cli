/* 判断是否是微信 */

function isWxin() {
  if (navigator.userAgent.match(/MicroMessenger/i)) {
    return true;
  } else {
    return false
  }
}

/**
 * 判断是否为ios
 */

function isIos() {
  let ua = navigator.userAgent;
  let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  return isiOS;
}

/**
 * 获取当前时间
 * @param {*} text
 */

function OP_TIME() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let hh = now.getHours();
  let mm = now.getMinutes();
  let ss = now.getSeconds();
  let clock = year + "";
  if (month < 10) clock += "0";
  clock += month + "";
  if (day < 10) clock += "0";
  clock += day + "";
  if (hh < 10) clock += "0";
  clock += hh + "";
  if (mm < 10) clock += "0";
  clock += mm + "";
  if (ss < 10) clock += "0";
  clock += ss;
  return clock;
}

/**
 * 获取浏览器信息
 */

function UA() {
  if (getQueryString("from") == "webview") {
    return "";
  } else {
    return (
      "浏览器:" + navigator.appName + ",浏览器的版本号:" + navigator.appVersion
    );
  }
}

/* 
 * 生成UUID 
 */

function uuid() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}

/* 
 * 写入cookie
 */

function setCookie(name, value, expireTime) {
  var exp = new Date();
  exp.setTime(exp.getTime() + expireTime * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

/* 
 * 读取cookie
 */

function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}



export default {
  isWxin,
  isIos,
  OP_TIME,
  UA,
  uuid,
  setCookie,
  getCookie
}
