  const header = document.getElementById('header');
  const heroContent = document.querySelector(".rotate-content");
  let lastScrollY = window.scrollY;
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    //rotate hero content
    if (currentScrollY > lastScrollY) {
      heroContent.style.transition = "transform 0.2s ease-out";
      heroContent.style.transform = `rotate(-3deg)`;
    } else if (currentScrollY < lastScrollY) {
      heroContent.style.transition = "transform 0.2s ease-out";
      heroContent.style.transform = `rotate(0deg)`;
    }

    lastScrollY = currentScrollY;

    //toggle header
    const toggleHeight = window.innerWidth < 600? 80 : 220; 
    if (currentScrollY > toggleHeight) {
        header.classList.remove('hidden');
        header.classList.add('visible');
    } else {
        header.classList.remove('visible');
        header.classList.add('hidden');
    }
  });

  //active header, disable in mobile case, because there isn't menu
  if(window.innerWidth > 768) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: window.innerWidth < 1181 ? 0.5 : 0.9
    };  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        navLinks.forEach((item) => {
          if(item.getAttribute('href') === `#${entry.target.id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove("active")
          }
        });
      });
    }, observerOptions);
  
    sections.forEach((section) => observer.observe(section));
  }

  const logos = document.querySelector('.carousel').cloneNode(true);
  document.querySelector('.carousel-container').appendChild(logos);