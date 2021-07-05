const modules = {
  js:import.meta.glob(`./js/**/*.js`),
  css:import.meta.glob(`./css/**/index.html`),
  html:import.meta.glob(`./html/**/*.js`)
}
const $main = document.querySelector('#main')
const $about = document.querySelector('.about')
const $contact = document.querySelector('.contact')

const $aboutMe = document.querySelector('.about-me')
const $contactMe = document.querySelector('.contact-me')

$about.addEventListener('click', e => {
  e.stopPropagation()
  $main.classList.add('active')
  $aboutMe.classList.add('active')
})
$contact.addEventListener('click', e => {
  e.stopPropagation()
  $main.classList.add('active')
  $contactMe.classList.add('active')
})

// close
document.querySelectorAll(".close").forEach(function(el){
  el.addEventListener("click",function(e){
    e.stopPropagation();
    this.parentNode.classList.remove('active')
    setTimeout(()=>{
      $main.classList.remove($main.classList.contains('rotate')?"rotate":'active')
    },600)
  })
})

window.showPractices = async (type) => {
  console.log(type)
  const $title = document.querySelector('.practices-title');
  const $list = document.querySelector('.practices-list');
  let _html = '';
  $main.classList.add('rotate');
  Object.keys(modules[type]).forEach(item=>{
    console.log(item,"item")
    const name = item.split('/')[2];
    _html+=`<div class="item"><img src="/assets/images/${type}/${name}.png" alt=""><h3><a href="/${type}/${name}/index.html">${name}</a></h3></div>`
  })
  $list.innerHTML=_html
  $title.innerText=`${type.toUpperCase()} - Practices`;

  document.querySelector('.practices').classList.add('active')
}



