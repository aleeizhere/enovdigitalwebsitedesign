//redirecting to subpages
const servicesboxes = document.querySelectorAll(".service");
servicesboxes[0].addEventListener("click", () => {
  location.href = "/index.html";
});
servicesboxes[1].addEventListener("click", () => {
  location.href = "/index.html";
});
servicesboxes[2].addEventListener("click", () => {
  location.href = "/index.html";
});
servicesboxes[3].addEventListener("click", () => {
  location.href = "/index.html";
});
servicesboxes[4].addEventListener("click", () => {
  location.href = "/index.html";
});
servicesboxes[5].addEventListener("click", () => {
  location.href = "/index.html";
});
//redirecting to subpages

//animating the testimonials
const testleft = document.getElementById("testleft");
const testright = document.getElementById("testright");
const testcontainer = document.getElementById("test-container");
const containerarr = document.querySelectorAll(".container");

//creating a function that will run on click left
let testcounter = 1;
let trns = 770;
let offsetanimate = containerarr[1].offsetWidth + 30;
function animateright() {
  if (testcounter < containerarr.length - 1) {
    containerarr[testcounter].classList.remove("test-active");
    trns -= offsetanimate;
    testcontainer.style.transform = `translateX(${trns}px)`;
    testcounter++;
    containerarr[testcounter].classList.add("test-active");
  }
}
function animateleft() {
  if (testcounter > 0) {
    containerarr[testcounter].classList.remove("test-active");
    trns += offsetanimate;
    testcontainer.style.transform = `translateX(${trns}px)`;
    testcounter--;
    containerarr[testcounter].classList.add("test-active");
  }
}
testright.addEventListener("click", animateright);
testleft.addEventListener("click", animateleft);

//form animation
const quotebtn = document.querySelector("#get-quote");
const formelm = document.querySelector(".form-container");
const body = document.querySelector("section");
const formsubmit = document.querySelector("#form-submit");
const responsemsg = document.querySelector("#response-message");
quotebtn.addEventListener("click", () => {
  formelm.classList.add("form-container-show");
});
body.addEventListener("click",()=>{
  formelm.classList.remove("form-container-show");
})
//form animation
