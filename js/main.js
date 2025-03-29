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