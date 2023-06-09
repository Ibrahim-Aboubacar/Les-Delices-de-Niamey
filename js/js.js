const nav = document.querySelector('.nav');


// call to functions
initSiteIcon(nav)
initPageTitle(nav)
initTogglerBtn(nav)

// functions
function initTogglerBtn(nav){
    const navBtn = document.createElement('div');
    navBtn.setAttribute('tabindex', "0")
    navBtn.innerHTML = "<span></span><span></span><span></span>"
    navBtn.classList.add('nav_btn')
    nav.appendChild(navBtn)
    navBtn.onclick = (e) =>{
        nav.classList.toggle('opened');
    }
    document.addEventListener('keydown', (e) => {
        if(e.key ==='m' || e.key ==='M' ) nav.classList.toggle('opened');
    })
}

function initSiteIcon(nav){
    const sieIcon = document.createElement('div');
    sieIcon.innerHTML = '<img src="images/site_icon.png" alt="Site icon">'
    sieIcon.classList.add('site_icon')
    nav.appendChild(sieIcon)
}
function initPageTitle(nav){
    const title = document.querySelector('title').innerText
    const h1 = document.createElement('h1')
    h1.textContent = title
    nav.appendChild(h1)
}