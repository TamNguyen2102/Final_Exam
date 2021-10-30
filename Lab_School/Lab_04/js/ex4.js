const back = document.querySelector("#back");
const start = document.querySelector("#start");
const next = document.querySelector("#next");
const img = document.querySelector("#img");
const imgList = document.querySelector("#imageList");

imgList.addEventListener("change", (e) => {
  img.src = `./images/${e.target.value}`;
});

back.addEventListener("click", () => {
  imgList.selectedIndex = imgList.selectedIndex - 1;
  let imgSrc = imgList.options[imgList.selectedIndex].value;
  img.src = `./images/${imgSrc}`;
});
next.addEventListener("click", () => {
  imgList.selectedIndex = imgList.selectedIndex + 1;
  let imgSrc = imgList.options[imgList.selectedIndex].value;
  img.src = `./images/${imgSrc}`;
});

start.addEventListener("click", () => {
  start.innerHTML = "Stop slideshow";

  const interval = setInterval(() => {
    imgList.selectedIndex = imgList.selectedIndex + 1;
    let imgSrc = imgList.options[imgList.selectedIndex].value;
    img.src = `./images/${imgSrc}`;
  }, 1000);
});
