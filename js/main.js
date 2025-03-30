const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const tg_remove = document.querySelectorAll(".tg_remove");
tg_remove.forEach((tg)=>{
  tg.addEventListener("click",()=>{
    navLinks.classList.toggle('active')
  })
})

const linkedin = document.querySelector("#linkedin");
console.log(linkedin);
linkedin.addEventListener("click",()=>{
  window.open('https://www.linkedin.com/feed/');
})
const github = document.querySelector("#github");
console.log(linkedin);
github.addEventListener("click",()=>{
  window.open('https://github.com/');
})
const twitter = document.querySelector("#twitter");
console.log(linkedin);
twitter.addEventListener("click",()=>{
  window.open('https://x.com/home');
})
const leetcode  = document.querySelector("#leetcode");
console.log(linkedin);
leetcode.addEventListener("click",()=>{
  window.open('https://leetcode.com/u/Deepak-8/');
})
const instagram = document.querySelector("#instagram");
console.log(linkedin);
instagram.addEventListener("click",()=>{
  window.open('https://www.instagram.com/deepak__prajapat08');
})
