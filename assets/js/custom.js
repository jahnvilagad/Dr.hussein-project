(function () {
  window.onload = function () {
    var preloader = document.querySelector('.page-loading');
    preloader.classList.remove('active');
    setTimeout(function () {
      preloader.remove();
    }, 1000);
  };
})();

$(function () { // Dropdown toggle
  $('.dropdown i').click(function () {
    $(this).next('.dropdown-menu').slideToggle();
  });

  $(document).click(function (e) {
    var target = e.target;
    if (!$(target).is('.dropdown i') && !$(target).parents().is('.dropdown i'))
    //{ $('.dropdown').hide(); }
    { $('.dropdown-menu').slideUp(); }
  });
});


const swiperTestmonials = new Swiper('.swiper-testmonials', {
  loop: true,
  slidesPerView: 1,
  grabCursor: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-testmonials-next',
    prevEl: '.swiper-button-testmonials-prev',
  },
  breakpoints: {
    // when window width is >= 640px
    500: {
      slidesPerView: 1.2,
    },
    780: {
      slidesPerView: 1.8,
    },
    1300: {
      slidesPerView: 2.6,
    },
    1630: {
      slidesPerView: 2.2,
    }
  }

});