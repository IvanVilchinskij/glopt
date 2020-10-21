"use strict";

window.addEventListener('DOMContentLoaded', function () {
  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
  ;
  slider({
    nextArrow: '.comment__slider-next',
    prevArrow: '.comment__slider-prev',
    slide: '.comment__slide',
    wrapper: '.comment__slider-wrapper',
    field: '.comment__slider-inner',
    nextMob: '.comment__mobile-next',
    prevMob: '.comment__mobile-next-rev'
  });

  function slider(_ref) {
    var slide = _ref.slide,
        nextArrow = _ref.nextArrow,
        prevArrow = _ref.prevArrow,
        field = _ref.field,
        wrapper = _ref.wrapper,
        nextMob = _ref.nextMob,
        prevMob = _ref.prevMob;
    var slides = document.querySelectorAll(slide),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        prevM = document.querySelector(prevMob),
        nextM = document.querySelector(nextMob),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field);
    var width = window.getComputedStyle(slidesWrapper).width;

    if (document.documentElement.clientWidth <= 768) {
      slides[1].classList.remove('active-slide');
      slides[0].classList.add('active-slide');
    }

    window.onresize = function () {
      var newWidth = window.getComputedStyle(slidesWrapper).width;

      if (newWidth != width) {
        width = newWidth;
        slides.forEach(function (slide) {
          slide.style.width = width;
        });

        if (document.documentElement.clientWidth <= 768) {
          slides[1].classList.remove('active-slide');
          slides[0].classList.add('active-slide');
        }

        var _offset = 0;
        slidesField.style.transform = "translateX(".concat(_offset, "px)");
        toggleClass(_offset);

        if (document.documentElement.clientWidth > 768) {
          next.addEventListener('click', function () {
            if (_offset == -(slides.length - 2) * parseInt(width)) {
              _offset += (slides.length - 1) * parseInt(width);
            } else {
              _offset -= parseInt(width);
            }

            slidesField.style.transform = "translateX(".concat(_offset, "px)");
            toggleClass(_offset);
          });
          prev.addEventListener('click', function () {
            if (_offset == parseInt(width)) {
              _offset -= (slides.length - 1) * parseInt(width);
            } else {
              _offset += parseInt(width);
            }

            slidesField.style.transform = "translateX(".concat(_offset, "px)");
            toggleClass(_offset);
          });
        } else {
          next.addEventListener('click', function () {
            if (_offset == -(slides.length - 1) * parseInt(width)) {
              _offset += (slides.length - 1) * parseInt(width);
            } else {
              _offset -= parseInt(width);
            }

            slidesField.style.transform = "translateX(".concat(_offset, "px)");
            toggleClass(_offset);
          });
          prev.addEventListener('click', function () {
            if (_offset == 0) {
              _offset -= (slides.length - 1) * parseInt(width);
            } else {
              _offset += parseInt(width);
            }

            slidesField.style.transform = "translateX(".concat(_offset, "px)");
            toggleClass(_offset);
          });
          nextM.addEventListener('click', function () {
            if (_offset == -(slides.length - 1) * parseInt(width)) {
              _offset += (slides.length - 1) * parseInt(width);
            } else {
              _offset -= parseInt(width);
            }

            slidesField.style.transform = "translateX(".concat(_offset, "px)");
            toggleClass(_offset);
          });
          prevM.addEventListener('click', function () {
            if (_offset == 0) {
              _offset -= (slides.length - 1) * parseInt(width);
            } else {
              _offset += parseInt(width);
            }

            slidesField.style.transform = "translateX(".concat(_offset, "px)");
            toggleClass(_offset);
          });
        }
      }
    };

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.transition = '.5s all';
    slides.forEach(function (slide) {
      slide.style.width = width;
    });

    function toggleClass(offset) {
      var count = 0;

      if (document.documentElement.clientWidth > 768) {
        slides.forEach(function (item, i) {
          item.classList.remove('active-slide');

          if (i == offset / parseInt(width) + count - 1) {
            item.classList.add('active-slide');
          }

          count += 2;
        });
      } else {
        slides.forEach(function (item, i) {
          item.classList.remove('active');

          if (i == -(offset / parseInt(width))) {
            item.classList.add('active-slide');
          }
        });
      }
    }

    var offset = 0;

    if (document.documentElement.clientWidth >= 768) {
      next.addEventListener('click', function () {
        if (offset == -(slides.length - 2) * parseInt(width)) {
          offset += (slides.length - 1) * parseInt(width);
        } else {
          offset -= parseInt(width);
        }

        slidesField.style.transform = "translateX(".concat(offset, "px)");
        toggleClass(offset);
      });
      prev.addEventListener('click', function () {
        if (offset == parseInt(width)) {
          offset -= (slides.length - 1) * parseInt(width);
        } else {
          offset += parseInt(width);
        }

        slidesField.style.transform = "translateX(".concat(offset, "px)");
        toggleClass(offset);
      });
    } else {
      next.addEventListener('click', function () {
        if (offset == -(slides.length - 1) * parseInt(width)) {
          offset += (slides.length - 1) * parseInt(width);
        } else {
          offset -= parseInt(width);
        }

        slidesField.style.transform = "translateX(".concat(offset, "px)");
        toggleClass(offset);
      });
      prev.addEventListener('click', function () {
        if (offset == 0) {
          offset -= (slides.length - 1) * parseInt(width);
        } else {
          offset += parseInt(width);
        }

        slidesField.style.transform = "translateX(".concat(offset, "px)");
        toggleClass(offset);
      });
    }

    nextM.addEventListener('click', function () {
      if (offset == -(slides.length - 1) * parseInt(width)) {
        offset += (slides.length - 1) * parseInt(width);
      } else {
        offset -= parseInt(width);
      }

      slidesField.style.transform = "translateX(".concat(offset, "px)");
      toggleClass(offset);
    });
    prevM.addEventListener('click', function () {
      if (offset == 0) {
        offset -= (slides.length - 1) * parseInt(width);
      } else {
        offset += parseInt(width);
      }

      slidesField.style.transform = "translateX(".concat(offset, "px)");
      toggleClass(offset);
    });
  }

  ;
  var burger = document.querySelector('.header__burger'),
      menu = document.querySelector('.header__nav'),
      menuItems = document.querySelectorAll('.header__navItem');
  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
      document.querySelector('body').style.overflow = "hidden";
    } else {
      document.querySelector('body').style.overflow = "auto";
    }
  });

  if (document.documentElement.clientWidth <= 769) {
    menuItems.forEach(function (item) {
      item.firstChild.addEventListener('click', function () {
        burger.classList.toggle('active');
        menu.classList.toggle('active');

        if (menu.classList.contains('active')) {
          document.querySelector('body').style.overflow = "hidden";
        } else {
          document.querySelector('body').style.overflow = "auto";
        }
      });
    });
  }

  ;
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $('.upLink').fadeIn();
    } else {
      $('.upLink').fadeOut();
    }
  });
  $("a[href^='#']").click(function () {
    var _href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(_href).offset().top + 'px'
    });
    return false;
  });
  var animItems = document.querySelectorAll('.anim-item');

  if (animItems.length > 0) {
    var animOnScroll = function animOnScroll() {
      for (var i = 0; i < animItems.length; i++) {
        var animItem = animItems[i],
            animItemHeight = animItem.offsetHeight,
            animItemOffset = offset(animItem).top,
            animStart = 3;
        var animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
          animItem.classList.add('active');
        } else {
          if (!animItem.classList.contains('anim-no-hide')) {
            animItem.classList.remove('active');
          }
        }
      }
    };

    var offset = function offset(el) {
      var rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    };

    window.addEventListener('scroll', animOnScroll);
    setTimeout(function () {
      animOnScroll();
    }, 500);
  }

  
});