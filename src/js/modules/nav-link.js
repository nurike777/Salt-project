const links = document.querySelectorAll('.topbar-nav__link')

links.forEach(item => {
  item.addEventListener('click', event => {
    links.forEach(item => {
      item.classList.remove('is-active')
    })
    event.target.classList.add('is-active')
  })
})