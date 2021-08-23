'use strict';

(function slider() {
  const slides = document.querySelectorAll('.slide'),
    btnLeft = document.querySelector('.slider__btn--left'),
    btnRight = document.querySelector('.slider__btn--right');

  const dotContainer = document.querySelector('.dots');
  const fragment = document.createDocumentFragment();

  let curSlide = 0;
  const maxSlide = slides.length;

  // // Functions:
  const createDots = () => {
    slides.forEach((_, i) => {
      const btnDot = document.createElement('button');
      btnDot.classList.add('dots__dot');
      btnDot.setAttribute('data-slide', `${i}`);
      // console.log(btnDot);

      fragment.appendChild(btnDot);
    });
    dotContainer.appendChild(fragment);
  };

  const activeDot = slide => {
    document.querySelectorAll('.dots__dot').forEach(dot => {
      dot.classList.remove('dots__dot--active');
    });

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = slide => {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  // Next Slide
  const nextSlide = () => {
    curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++;

    goToSlide(curSlide); // curSlide = 1 -> -100% <- 0%, 100%, 200%
    activeDot(curSlide);
  };

  const prevSlide = () => {
    curSlide === 0 ? (curSlide = maxSlide - 1) : curSlide--;

    goToSlide(curSlide);
    activeDot(curSlide);
  };

  const init = () => {
    createDots();
    goToSlide(0); // 0%, 100%, 200%, 300%   <--   side by side
    activeDot(0);
  };
  init();

  // // Handler
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keyup', e => {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', e => {
    const { slide } = e.target.dataset;
    if (!slide) return;

    goToSlide(slide);
    activeDot(slide);
  });
})();
