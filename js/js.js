const nav = document.querySelector('.nav');
const navBtn = document.createElement('div');
navBtn.innerHTML = "<span></span><span></span><span></span>"
navBtn.classList.add('nav_btn')
nav.appendChild(navBtn)
navBtn.onclick = (e) =>{
    nav.classList.toggle('opened');
}
