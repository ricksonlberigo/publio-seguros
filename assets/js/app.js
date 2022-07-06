window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  backToTopButtonShow()
  activeMenuCurrentSection()
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

function activeMenuCurrentSection() {
  const sections = document.querySelectorAll('section[id]')
  const checkpoints = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoints >= sectionTop
    const checkpointEnd = checkpoints <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('.nav__item a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('.nav__item a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

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

// ===== SWIPER ===============
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  breakpoints: {
    720: {
      slidesPerView: 3,
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
