const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))


const divSort = document.querySelector('.skills-items ');
const spanSort = divSort.querySelectorAll('.skill');

var words = [];

for (var i = 0 ; i <spanSort.length; i++){
  words.push(spanSort[i].textContent);
}

words.sort();

for(var i = 0; i < words.length; i++){
  spanSort[i].textContent = words[i]
}

function sendEmail(){
  event.preventDefault()
  window.open('mailto:ar6shahrzad@gmail.com');
}