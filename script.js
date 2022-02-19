//animating the testimonials

const testleft = document.getElementById("testleft");
const testright = document.getElementById("testright");
const testcontainer = document.getElementById("test-container");
const containerarr = document.querySelectorAll(".container");

//creating a function that will run on click left
let testcounter = 1;
let trns = 0;
function animateright() {
  if (testcounter < containerarr.length - 1) {
    containerarr[testcounter].classList.remove("test-active");
    trns -= 510;
    testcontainer.style.transform = `translateX(${trns}px)`;
    testcounter++;
    containerarr[testcounter].classList.add("test-active");
  }
}
function animateleft() {
  if (testcounter > 0) {
    containerarr[testcounter].classList.remove("test-active");
    trns += 510;
    testcontainer.style.transform = `translateX(${trns}px)`;
    testcounter--;
    containerarr[testcounter].classList.add("test-active");
  }
}
testright.addEventListener("click", animateright);
testleft.addEventListener("click", animateleft);
