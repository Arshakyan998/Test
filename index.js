const sliderBar = document.querySelector(".slider_main_content");

const src = [
  "./assets/body/Group1.svg",
  "./assets/body/Слой22.svg",
  "./assets/body/Group1043.svg",
  "./assets/body/Group924.svg",
  "./assets/body/Vector5.svg",
];

function drowImages() {
  src.forEach((el) => {
    sliderBar.insertAdjacentHTML(
      "afterbegin",
      `
                   <div class="slider_main_content_images">
                     <img src=${el} alt='slide'>
                   </div>
                `
    );
  });
}

drowImages();
let slideDirection = null;

const allImages = document.querySelectorAll(".slider_main_content_images");
const slideLeft = document.querySelector(".slider_main_left");
const slideRight = document.querySelector(".slider_main_right");
slideRight.classList.add("disabled");
slideLeft.addEventListener("click", slideLeftHendler("slider_main_left"));
slideRight.addEventListener("click", slideLeftHendler("slider_main_right"));

function slideLeftHendler(cuurentElement) {
  let currentSlydeWidth = null;
  let parrentNode = null;
  window.addEventListener("resize", checkInnerWidth);
  function checkInnerWidth() {
    if (window.innerWidth <= 600) {
      currentSlydeWidth = allImages[0].getBoundingClientRect().width;
      parrentNode =
        allImages[0].offsetParent.offsetParent.getBoundingClientRect().width;
    } else {
      allImages.forEach((el) => {
        el.style.transform = `translate(0px)`;
      });
      slideDirection = 0;
      slideLeft.classList.remove("disabled");
      slideRight.classList.add("disabled");
    }
  }

  return () => {
    checkInnerWidth();

    if (cuurentElement === "slider_main_left") {
      slideRight.classList.remove("disabled");

      if (parrentNode * src.length - parrentNode > slideDirection) {
        slideDirection = slideDirection + currentSlydeWidth;
        allImages.forEach((el) => {
          el.style.transform = `translate(-${slideDirection}px)`;
        });
      }
      if (
        parrentNode * src.length - parrentNode - parrentNode <
        slideDirection
      ) {
        slideLeft.classList.add("disabled");
      }
    }
    if (cuurentElement === "slider_main_right") {
      slideLeft.classList.remove("disabled");
      if (slideDirection > 0) {
        slideDirection = slideDirection - currentSlydeWidth;

        allImages.forEach((el) => {
          el.style.transform = `translate(-${slideDirection}px)`;
        });
      }
      if (slideDirection - currentSlydeWidth < 0) {
        slideRight.classList.add("disabled");
      }
    }
  };
}

const secondSliderSrc = [
  {
    src: "./assets/slider2/Group1.svg",
    text: "Проведём интервью",
  },
  {
    src: "./assets/slider2/plan2.svg",
    text: "Составим план",
  },
  {
    src: "./assets/slider2/Group953.svg",
    text: "Соберём команду",
  },
  {
    src: "./assets/slider2/продукт4.svg",
    text: "Разработаем продукт",
  },
  {
    src: "./assets/slider2/метрика5svg.svg",
    text: "Улучшим метрики",
  },
];

const secondSlider = document.querySelector(".slider_second_main");

drowSecondSlideImages(secondSliderSrc);
function drowSecondSlideImages(arr) {
  arr.forEach((el) => {
    secondSlider.insertAdjacentHTML(
      "afterbegin",
      `
                                     <div class="slider_second_main_images">
                                      <div class="slider_second_main_images_contnet">
                                       <img src=${el.src} alt='slide'>
                                       </div>

                                       <div class="slider_second_main_images_text">
                                         <p> ${el.text}</p>
                                       </div>
                                       
                                     </div>
                                  `
    );
  });
}

let secondSliderDirection = null;
const secondSlydeLeft = document.querySelector(".second_slide_left");
const secondSlydeRight = document.querySelector(".second_slide_right");
secondSlydeRight.classList.add("disabled");
const secondSlyderSlides = document.querySelectorAll(
  ".slider_second_main_images"
);
secondSlydeLeft.addEventListener(
  "click",
  secondSlideHendler("second_slide_left")
);
secondSlydeRight.addEventListener(
  "click",
  secondSlideHendler("second_slide_right")
);

function secondSlideHendler(currentElement) {
  let getElementWidth = null;

  window.addEventListener("resize", checkInnerWidth);
  function checkInnerWidth() {
    if (window.innerWidth <= 600) {
      getElementWidth = secondSlyderSlides[0].getBoundingClientRect().width;
    } else {
      secondSlyderSlides.forEach((el) => {
        el.style.transform = `translate(0px)`;
      });
      secondSliderDirection = 0;
      secondSlydeLeft.classList.remove("disabled");
      secondSlydeRight.classList.add("disabled");
    }
  }

  return () => {
    checkInnerWidth();
    if (currentElement === "second_slide_left") {
      if (
        getElementWidth * secondSlyderSlides.length - getElementWidth >
        secondSliderDirection
      ) {
        secondSlydeRight.classList.remove("disabled");

        secondSliderDirection += getElementWidth;

        secondSlyderSlides.forEach((el) => {
          el.style.transform = `translate(-${secondSliderDirection}px)`;
        });
        if (
          getElementWidth * secondSlyderSlides.length - getElementWidth * 2 <
          secondSliderDirection
        ) {
          secondSlydeLeft.classList.add("disabled");
        }
      }
    }
    if (currentElement === "second_slide_right") {
      if (secondSliderDirection > 0) {
        secondSlydeLeft.classList.remove("disabled");
        secondSliderDirection -= getElementWidth;
        secondSlyderSlides.forEach((el) => {
          el.style.transform = `translate(-${secondSliderDirection}px)`;
        });
      }
      if (secondSliderDirection - getElementWidth < 0) {
        secondSlydeRight.classList.add("disabled");
      }

      {
      }
    }
  };
}

const secton = document.querySelector(".second");

const elipseSrc = [
  "./assets/section/Ellipse13elipse3.svg",
  "./assets/section/Ellipse14elipse2.svg",
  "./assets/section/Ellipse5elipse1.svg",
  "./assets/section/Ellipse6elipse4.svg",
];

drowElipse(elipseSrc);
function drowElipse(arr) {
  arr.forEach((el, i) => {
    secton.insertAdjacentHTML(
      `afterbegin`,
      ` 
    <div class="second_elipse el${i}"> <img src=${el} alt='elipse'/> </div>
      
    `
    );
  });
}

const thirdSlideSrc = [
  {
    src: "./assets/thierdSlide/thirdslider1.svg",
    text: "ECOMERCE",
  },
  {
    src: "./assets/thierdSlide/thirdslider2.svg",
    text: "SAAS-ПЛАТФОРМЫ",
  },
  {
    src: "./assets/thierdSlide/thirdslider3.svg",
    text: "Мобилное приложение",
  },
  {
    src: "./assets/thierdSlide/thirdslider4.svg",
    text: "IOT-преложение",
  },
  {
    src: "./assets/thierdSlide/thirdslider5.svg",
    text: "AR/VR",
  },
  {
    src: "./assets/thierdSlide/thirdslider6.svg",
    text: "mvp",
  },
  {
    src: "./assets/thierdSlide/thirdslider7.svg",
    text: "crm/erp",
  },
  {
    src: "./assets/thierdSlide/thirdslider8.svg",
    text: "blockchain",
  },
];

const thierdSlide = document.querySelector(".third_slider_main");
drowThierdSlide(thirdSlideSrc);

function drowThierdSlide(arr) {
  arr.forEach((el) => {
    thierdSlide.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="for_background">
       <div class="third_slider_main_images">
           <div class="third_slider_main_images_images">
           <img src=${el.src} alt='image'/ >
           </div>
           <p>${el.text}</p>
            <button class='pink-button'> Заказать</button>
           
       </div> <div class="third_slider_main_images_background">  </div>
       </div>
     `
    );
  });
}

const thirdSlideLeft = document.querySelector(".third_slide_left");
const thirdSlideRight = document.querySelector(".third_slide_right");

thirdSlideRight.classList.add("disabled");

const allThirdSlides = document.querySelectorAll(".for_background");

let thirdSlideDirection = null;

thirdSlideLeft.addEventListener(
  "click",
  thirdSliderHendler("third_slide_left")
);
thirdSlideRight.addEventListener(
  "click",
  thirdSliderHendler("third_slide_right")
);

function thirdSliderHendler(currentElement) {
  let getElementWidth = null;

  window.addEventListener("resize", checkInnerWidth);
  function checkInnerWidth() {
    if (window.innerWidth <= 600) {
      getElementWidth = allThirdSlides[0].getBoundingClientRect().width;
    } else {
      allThirdSlides.forEach((el) => {
        el.style.transform = `translate(0px)`;
      });
      thirdSlideDirection = 0;
      thirdSlideLeft.classList.remove("disabled");
      thirdSlideRight.classList.add("disabled");
    }
  }

  return () => {
    checkInnerWidth();
    if (currentElement === "third_slide_left") {
      thirdSlideRight.classList.remove("disabled");
      if (
        getElementWidth * allThirdSlides.length - getElementWidth >
        thirdSlideDirection
      ) {
        thirdSlideDirection += getElementWidth;
        allThirdSlides.forEach((el) => {
          el.style.transform = `translate(-${thirdSlideDirection}px)`;
        });
        if (
          getElementWidth * allThirdSlides.length - getElementWidth * 2 <
          thirdSlideDirection
        ) {
          thirdSlideLeft.classList.add("disabled");
        }
      }
    }
    if (currentElement === "third_slide_right") {
      thirdSlideLeft.classList.remove("disabled");
      if (thirdSlideDirection > 0) {
        thirdSlideDirection -= getElementWidth;
        allThirdSlides.forEach((el) => {
          el.style.transform = `translate(-${thirdSlideDirection}px)`;
        });
        if (thirdSlideDirection - getElementWidth < 0) {
          thirdSlideRight.classList.add("disabled");
        }
      }
    }
  };
}
