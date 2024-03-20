//
//
let sectionSkills = document.querySelector(".our-skills");
let progSpans = document.querySelectorAll(".progress span");
window.addEventListener("scroll", () => {
  if (window.scrollY >= sectionSkills.offsetTop - 200) {
    progSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});
//
//
let el = document.querySelector("#scroller");
let height =
  1700 +
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  let scrolling = document.documentElement.scrollTop;
  el.style.width = ` ${(scrolling / height) * 100}% `;
});
//
//
let statsSection = document.querySelector(".stats");
let boxNumbers = document.querySelectorAll(".box .num ");
function startCount(e) {
  let progGoals = e.dataset.goal;
  let counter = setInterval(() => {
    e.textContent++;
    if (e.textContent == progGoals) {
      clearInterval(counter);
    }
  }, (16 + 16 + 16 + 16) / progGoals);
}
let started = false;
window.addEventListener("scroll", () => {
  if (window.scrollY >= statsSection.offsetTop - 200) {
    if (!started) {
      boxNumbers.forEach((num) => startCount(num));
    }
    started = true;
  }
});
//
//
// let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
// let counter = setInterval(() => {
//   let dateNew = new Date().getTime();
//   let dateDifferanc = countDownDate - dateNew;
//   let days = Math.floor(dateDifferanc / (1000 * 60 * 60 * 24));
//   document.querySelector(".days").innerHTML = days > 10 ? `0${days}` : days;
//   let hours = Math.floor((dateDifferanc % (1000 * 60 * 60 * 24))/(1000 * 60 * 60 ));
//   document.querySelector(".hours").innerHTML = hours > 10 ? `0${hours}` : hours;
//   let minutes = Math.floor((dateDifferanc % (1000 * 60 * 60))/(1000 * 60 )) ;
//   document.querySelector(".minutes").innerHTML = minutes > 10 ? `0${minutes}` : minutes;
//   let seconds = Math.floor((dateDifferanc % (1000 * 60))/(1000 )); ;
//   document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` :seconds ;
//   if (dateDifferanc == 0) {
//     clearInterval(counter)
//     // add happy new years
//   }
// }, 1000);
//
//

let counterDwonDate = new Date("Dec 31,2023 23:59:59").getTime();

let counterDate = setInterval(() =>
{
  let dateNow = new Date().getTime();
  let dateDifferenc = counterDwonDate - dateNow;
  let days = Math.floor(dateDifferenc / (1000 * 60 * 60 * 24));
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  let hours = Math.floor(
    (dateDifferenc % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  document.querySelector(".hours").innerHTML =
    hours < 10 ? ` 0${hours} ` : hours;
  let minutes = Math.floor((dateDifferenc % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  let seconds = Math.floor((dateDifferenc % (1000 * 60)) / (1000));
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (dateDifferenc == 0) {
    clearInterval(counterDate);
    // add text here to say "happy new year"
  }
}, 1000);
