const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Copy menu for mobile, tablet devices
function copyMenu() {
  // Copy category
  const category = $('.sidebar')
  const categoryAside = $('.offcanvas-departments')
  categoryAside.innerHTML = category.innerHTML

  // Copy navigation
  const nav = $('.header-nav nav')
  const navAside = $('.offcanvas-nav')
  navAside.innerHTML = nav.innerHTML

  // copy top navigation
  const topNav = $('.header-top')
  const topNavAside = $('.offcanvas-top-nav')
  topNavAside.innerHTML = topNav.innerHTML
}

copyMenu()

// Show submenu on element which has child
const submenuBtn = $$('.has-child > a')

submenuBtn.forEach((menu) => menu.addEventListener('click', toggle))

function toggle(e) {
  e.preventDefault()
  const parent = this.closest('.has-child')
  parent.classList.toggle('expand')
}

// Show search on mobile
const searchBtn = $('.search-btn-mobile')
const closeSearch = $('.close-search-btn')
const searchClass = $('.search-mobile')

searchBtn.addEventListener('click', () => {
  searchClass.classList.toggle('d-none')
})

closeSearch.addEventListener('click', () => {
  searchClass.classList.add('d-none')
})

// Show cart on click (mobile)
const cart = $('.cart-mini')
const cartTrigger = $('.cart-btn-mobile')

cartTrigger.addEventListener('click', () => {
  setTimeout(() => {
    if (!cart.classList.contains('show')) {
      cart.classList.add('show')
    }
  }, 250)
})

// Close cart by click outside
document.addEventListener('click', (e) => {
  const isClosest = e.target.closest('.cart-mini')
  if (!isClosest && cart.classList.contains('show')) {
    cart.classList.remove('show')
  }
})

// Show department menu
const dptBtn = $('.department-toggle')
const dptPageClass = $('.site')

dptBtn.addEventListener('click', () => {
  dptPageClass.classList.toggle('show-dpt')
})
