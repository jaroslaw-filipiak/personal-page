export const handleTopBar = () => {
  window.addEventListener('scroll', (e) => {
    const nav = document.querySelector('nav');
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const direction = e.direction === -1 ? 'up' : 'down';
    console.log(scroll, direction);

    if (scroll > 10 && direction === 'down') {
      nav.classList.add('on-scroll-down');
    } else {
      nav.classList.remove('on-scroll-down');
    }
  });
};
