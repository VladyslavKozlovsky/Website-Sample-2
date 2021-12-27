let mainPart = document.querySelector('.main');
let slider = document.querySelector('.slider');
let btn = document.querySelector('.main__btn-holder');
let isShown = false;
let off_height = mainPart.offsetHeight;
let size = slider.offsetWidth;

btn.addEventListener('click', slide)

window.addEventListener('resize',()
=> {
  off_height = mainPart.offsetHeight;
  size = slider.offsetWidth;
  slider.style.height = off_height + "px";
  if (isShown)  mainPart.style.width = `calc(98% - ${size}px)`;
  else   mainPart.style.width = "98%";
})

function slide() {
  if (!isShown) {
    size = slider.offsetWidth;
    mainPart.style.marginLeft = size + "px";
    mainPart.style.width = `calc(98% - ${size}px)`;
    slider.style.height = off_height + "px";
    isShown = !isShown;
  }
  else {
    mainPart.style.marginLeft = "0";
    mainPart.style.width = "98%";
    slider.style.height = off_height + "px";
    isShown = !isShown;
  }
}
