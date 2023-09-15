$(document).ready(function () {
  // Sticky header ////////////////////////////////////////////////////////////////////////////

  const header = document.querySelector("#header");
  let lastScroll = 0;

  const throttle = (func, time = 100) => {
    let lastTime = 0;
    return () => {
      const now = new Date();
      if (now - lastTime >= time) {
        func();
        time = now;
      }
    };
  };

  const validateHeader = () => {
    const windowY = window.scrollY;
    const windowH = window.innerHeight;
    if (windowY > windowH / 3.5) {
      // We passed the first section, set a toggable class
      header.classList.add("is-fixed");
      // Determine is we ready to animate
      if (windowY > windowH - windowH / 1.5) {
        header.classList.add("can-animate");
        if (windowY < lastScroll) {
          // Determine if we scrolling up
          header.classList.add("scroll-up");
        } else {
          header.classList.remove("scroll-up");
        }
      } else {
        header.classList.remove("scroll-up");
      }
    } else {
      header.classList.remove("is-fixed", "can-animate");
    }
    lastScroll = windowY;
  };

  window.addEventListener("scroll", throttle(validateHeader, 100));

  // Banner Slider ////////////////////////////////////////////////////////////////////////////

  $(".hero-wrapper").slick({
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: true,
    arrows: false,
    infinite: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    speed: 300,
    adaptiveHeight: true,
  });

  // Cookie Pop-up ////////////////////////////////////////////////////////////////////////////

  const crumbOverlay = document.getElementById("crumbOverlay");
  const acceptCrumbs = document.getElementById("acceptCrumbs");
  const crumbPreferenceBtn = document.getElementById("crumbPreferenceBtn");

  if (document.cookie.indexOf("cookiesAccepted=true") > -1) {
    crumbOverlay.style.display = "none";
    document.body.classList.remove("no-scroll");
  } else {
    crumbOverlay.style.display = "flex";
    document.body.classList.add("no-scroll");
  }

  acceptCrumbs.addEventListener("click", () => {
    document.cookie =
      "cookiesAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    crumbOverlay.style.display = "none";
    document.body.classList.remove("no-scroll");
  });

  crumbPreferenceBtn.addEventListener("click", () => {
    crumbOverlay.style.display = "flex";
    document.body.classList.add("no-scroll");
  });

  // Accreditations Slider ////////////////////////////////////////////////////////////////////

  $(".accreditations-slider").slick({
    // control the width of the images in the slider
    variableWidth: true,
    autoplay: true,
    pauseOnHover: false,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  });

  // Latest Clients Slider ////////////////////////////////////////////////////////////////////

  $(".latest-clients-list").slick({
    // control the width of the images in the slider
    variableWidth: true,
    autoplay: true,
    pauseOnHover: false,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  });

  // Side Menu ////////////////////////////////////////////////////////////////////////////////

  const hamburger = document.querySelector("#hamburger");
  const cover = document.querySelector("#cover");
  const sidenav = document.querySelector(".sidenav");

  function showNav() {
    let containerValue = window.innerWidth >= 992 ? "350px" : "275px";
    container.style.right = containerValue;
    container.style.left = "-" + containerValue;
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.overflow = "hidden";
    cover.style.visibility = "visible";
    cover.style.opacity = "0.6";
    cover.style.right = containerValue;
    cover.style.left = "-" + containerValue;
    sidenav.style.visibility = "visible";

    // Burger Icon Switch (Open)
    $(".bar1").attr("y", "11").attr("transform", "rotate(-45 13 11)");
    $(".bar2").attr("width", "0");
    $(".bar3").attr("y", "11.85").attr("transform", "rotate(45 13 14)");
  }

  function hideNav() {
    container.style.right = "0";
    container.style.left = "0";
    cover.style.right = "0";
    cover.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.overflow = "visible";
    cover.style.opacity = "0";
    sidenav.style.visibility = "hidden";

    setTimeout(function () {
      cover.style.visibility = "hidden";
    }, 500);

    // Burger Icon Switch (Close)
    $(".bar1").attr("y", "5.5").attr("transform", "rotate(0 13 11)");
    $(".bar2").attr("width", "20");
    $(".bar3").attr("y", "16.5").attr("transform", "rotate(0 13 11)");
  }

  hamburger.addEventListener("click", showNav);
  cover.addEventListener("click", hideNav);

  // add event listener to listen to the width of the screen when it is resized and adjust the right and left values accordingly
  window.addEventListener("resize", function () {
    if (sidenav.style.visibility === "visible") {
      showNav();
    }
  });
});
