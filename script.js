const leftBtn = document.getElementById("slide");
const rightBtn = document.getElementById("slide2");
leftBtn.onclick = function () {
  let wrap = document.getElementById("wrapper");
  wrapper.scrollLeft += 500;
  console.log(wrap);
};


rightBtn.onclick = function () {
  let wrap = document.getElementById("wrapper");
  wrapper.scrollLeft -= 500;
  console.log(wrap);
}; 