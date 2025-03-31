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

const linkedin = document.querySelectorAll(".linkedin");
linkedin.forEach(l =>{
  l.addEventListener("click",()=>{
    window.open('https://www.linkedin.com/feed/');
  })
})
const github = document.querySelectorAll(".github");
github.forEach(g =>{
  g.addEventListener("click",()=>{
    window.open('https://github.com/');
  })
})
const twitter = document.querySelectorAll(".twitter");
twitter.forEach(t =>{
  t.addEventListener("click",()=>{
    window.open('https://x.com/home');
  })
})
const leetcode  = document.querySelector(".leetcode");
leetcode.addEventListener("click",()=>{
  window.open('https://leetcode.com/u/Deepak-8/');
})
const instagram = document.querySelector(".instagram");
instagram.addEventListener("click",()=>{
  window.open('https://www.instagram.com/deepak__prajapat08');
})

const resume = document.querySelector("#resume");
resume.addEventListener("click",()=>{
  window.open('https://drive.google.com/file/d/1W9ohZTrwKOjMM7MEjk3CBJl4RRkG34Da/view?usp=sharing');
})
