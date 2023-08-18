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
      const item = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
      item?.classList.remove('active-link');

    }
  });
}
