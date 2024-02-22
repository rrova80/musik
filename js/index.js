// sliders

const categorySlider = new Swiper(".category__slider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    600: {
      slidesPerView: 1.8,
    },
    800: {
      slidesPerView: 2.5,
    },
    1000: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

const testimonialsSlider = new Swiper(".testimonials__slider", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        // type: "bullets",
        clickable: true,
      },
    },
    500: {
      slidesPerView: 1.15,
      spaceBetween: 20,
      centeredSlides: false,
    },
    800: {
      slidesPerView: 1.6,
    },
    1100: {
      slidesPerView: 2.1,
    },
    1400: {
      slidesPerView: 2.44,
    },
  },
});

const gallerySlider = new Swiper(".gallery__slider", {
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    451: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3.4,
    },
    1000: {
      slidesPerView: 4.4,
    },
    1300: {
      slidesPerView: 4.9,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// tabs

const tabs = document.querySelectorAll(".schedule__tab");
const tabsContent = document.querySelectorAll(".schedule__tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    const tabNumber = tab.dataset.tab;

    tabsContent.forEach((tabContent) => {
      tabContent.style.transform = `translateX(-${tabNumber * 100}%)`;
    });
  });
});

// timer

const spanDays = document.querySelector(".promo__timer-value--days");
const spanHours = document.querySelector(".promo__timer-value--hours");
const spanMinutes = document.querySelector(".promo__timer-value--minutes");
const spanSeconds = document.querySelector(".promo__timer-value--seconds");
const promoTimer = document.querySelector(".promo__timer");

// установка дня в будущем
const days = 30;
const hours = 24;
const endDate =
  days * 24 * 60 * 60 * 1000 + hours * 60 * 60 * 1000 + 1708592770000;

const intervalId = setInterval(() => {
  const currentDate = new Date();
  const difference = endDate - currentDate;
  // console.log(difference); // miliseconds

  // переводим милисекунды в дни, часы и тд
  const days = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  spanDays.innerHTML = `${days < 10 ? "0" : ""}${days}d`;
  spanHours.innerHTML = `${hours < 10 ? "0" : ""}${hours}h`;
  spanMinutes.innerHTML = `${minutes < 10 ? "0" : ""}${minutes}m`;
  spanSeconds.innerHTML = `${seconds < 10 ? "0" : ""}${seconds}s`;

  if (difference <= 0) {
    clearInterval(intervalId);
    promoTimer.innerHTML = "Already started!";
    promoTimer.style.justifyContent = "center";
    promoTimer.style.fontSize = "120px";
  }
}, 1000);

//Burger

const menu = document.querySelector(".menu--header");
const burger = document.querySelector(".burger--js");
const overlay = document.querySelector(".overlay");
const menuLinks = document.querySelectorAll(".menu__link--js");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    burger.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  burger.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
});

//Header

if (document.documentElement.clientWidth <= 768) {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 5) {
      header.style.background = "#321ac5";
      header.style.padding = "10px 0";
    } else {
      header.style.background = "none";
      header.style.padding = "15px 0";
    }
  });
}
