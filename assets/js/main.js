/*========== show sidebar ===========*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add('show-sidebar')
  })
}

if(navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove('show-sidebar')
  })
}

/*========== skills tab ===========*/
const tabs = document.querySelectorAll('[data-target]');
const tabsContent = document.querySelectorAll('[data-content]');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContent.forEach(tabsContent => {
      tabsContent.classList.remove('skills__active');
    });

    target.classList.add('skills__active');

    tabs.forEach(tab => {
      tab.classList.remove('skills__active');
    });

    tab.classList.add('skills__active');
  });
});

/*========== MIXITUP FILTER PORTFOLIO ===========*/
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.work__card',
  },
  animation: {
    duration: 300,
  },
});

/*========== Link active work ===========*/
const linkwork = document.querySelectorAll('.work__item');
console.log(linkwork);

function activeWOrk() {
  linkwork.forEach(l => l.classList.remove('active-work'));
  this.classList.add('active-work');
}

linkwork.forEach(l => l.addEventListener('click', activeWOrk));

/*========== work popup ===========*/
document.addEventListener('click', e => {
  if (e.target.classList.contains('work__button')) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector('.portfolio__popup').classList.toggle('open');
}

document
  .querySelector('.portfolio__popup-close')
  .addEventListener('click', togglePortfolioPopup);

function portfolioItemDetails(portFolioItem) {
  console.log(portFolioItem);
  document.querySelector('.pp__thumbnail img').src =
    portFolioItem.querySelector('.work__img').src;

  document.querySelector('.portfolio__popup-subtitle span').innerHTML =
    portFolioItem.querySelector('.work__title').innerHTML;

  document.querySelector('.portfolio__popup-body').innerHTML =
    portFolioItem.querySelector('.portfolio__items-details').innerHTML;
}

/*========== services modal ===========*/
const modalViews = document.querySelectorAll('.services__modal');
const modalBtn = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal');
};

modalBtn.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', _ => {
    modal(i);
  });
});

modalCloses.forEach(modalClose => {
  modalClose.addEventListener('click', _ => {
    modalViews.forEach(modalView => {
      modalView.classList.remove('active-modal');
    });
  });
});

/*========== swiper ===========*/
let swiper = new Swiper('.testimonials__container', {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*========== Input Animation ===========*/
const inputs = document.querySelectorAll('.input');
function focusFunc() {
  let node = this.parentNode;
  node.classList.add('focus');
}

function blurFunc() {
  let node = this.parentNode;
  if (this.value == '') {
    node.classList.remove('focus');
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
});

/*========== Scroll to top ===========*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', navHightLighter);

function navHightLighter() {
  //get current scroll position
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
