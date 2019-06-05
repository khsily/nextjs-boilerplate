// 브라우저 호환(ie 11 이상) 체크

function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

if (isIE()) {
  alert("지원하지 않는 브라우저입니다. IE 최신버전 혹은 크롬 브라우저를 이용해주세요.");
  document.execCommand("Stop");
}