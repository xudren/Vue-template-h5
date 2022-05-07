// function setRem() {
//   const baseSize = 16; // 32
//   const scale = document.documentElement.clientWidth / 375; // 750
//   document.documentElement.style.fontSize =
//     baseSize * Math.min(scale, 2) + "px";
//   console.log(
//     document.documentElement.style.fontSize,
//     "document.documentElement.style.fontSize"
//   );
// }
// setRem();
// window.onresize = function() {
//   setRem();
// };
(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 750) {
        docEl.style.fontSize = "100px";
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
