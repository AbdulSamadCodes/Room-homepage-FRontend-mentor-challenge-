

//Function to toggle navbar

function navToggle() {
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const overlay = document.querySelector("[data-overlay]");
  
  navTogglers.forEach((toggler) => {
    toggler.addEventListener("click" , (event) => {
       event.preventDefault();
       
       if(navbar.classList.contains("deactive")) {
        navbar.classList.remove("deactive");
       }

       navbar.classList.toggle("active");
       overlay.classList.toggle("active");

       if(!navbar.classList.contains("active")) {
        navbar.classList.add("deactive");
       }
      
    })
  })

  navLinks.forEach((link) => {
    link.addEventListener("click" , (event) => {
        event.preventDefault();
        navbar.classList.remove("active");
        navbar.classList.add("deactive")
        overlay.classList.remove("active");
    })
  })
}

navToggle();


//Function to handle  hero slider

function handleHeroSlider() {
  const heroSlider = document.querySelector("[data-slider]");
  const sliderContainer = document.querySelector("[data-slider-container]");

  const nextBtns = document.querySelectorAll("[data-next-btn]");
  const prevBtns = document.querySelectorAll("[data-prev-btn]");
  
  const slidesArray = Array.from(sliderContainer.children);
  const totalSlides = slidesArray.length;
 
  let slideNumber= 1;

  const nextSlide = () => {
     if(slideNumber >= totalSlides) {
       slideNumber = 0;
   }
    
     slideNumber++;
     sliderContainer.style.transform = `translateX(-${slidesArray[slideNumber - 1].offsetLeft}px)`;
  }
  nextBtns.forEach((nextBtn) => {
    nextBtn.addEventListener("click", nextSlide);
  })

  const prevSlide = () => {
    if(slideNumber <= 0) {
      slideNumber = totalSlides +  1;
    }

    slideNumber--;
    sliderContainer.style.transform = `translateX(-${slidesArray[slideNumber - 1].offsetLeft}px)`;
  }
  prevBtns.forEach((prevBtn) => {
    prevBtn.addEventListener("click",prevSlide );
  })
}

handleHeroSlider();


//Function to handle slides background images on desktop and mobile screens

function handleSlidesBg() {
  const slideImages = document.querySelectorAll("[data-slide-img]");
  
  const changeBg = () => {
    slideImages.forEach((img) => {
      console.log(img.dataset)
      let desktopUrl = img.dataset.desktopBgurl;
      let mobileUrl = img.dataset.mobileBgurl;

      if(window.innerWidth > 992) {
         img.src = desktopUrl;
      } else {
        img.src = mobileUrl;
      }
    })
  }

  window.addEventListener("resize" , changeBg);
  window.addEventListener("load" , changeBg);
}

handleSlidesBg();