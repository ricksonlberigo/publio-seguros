window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  backToTopButtonShow()
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

function backToTopButtonShow() {
  const backToTopButton = document.getElementById('backToTop')
  if (scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// ===== SWIPER ===============
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  breakpoints: {
    720: {
      slidesPerView: 2,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },
})

// SCROLL REVEAL
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home header,
  #home .content,
  #insurance header,
  #insurance .insurance__single,
  #about,
  #about header,
  #about .content,
  #insurance__company,
  #contact,
  #contact header,
  #contact .content,
  footer,
  footer p`)
