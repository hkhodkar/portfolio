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
