document.addEventListener('DOMContentLoaded', (event) => {
  let heroSvg = document.querySelector('.hero-svg');
  let aboutTabs = document.querySelectorAll('.about-tab');
  let aboutTabContent = document.querySelectorAll('.about-tab-content');
  let philoTabs = document.querySelectorAll('.philosophy-tab');
  let philoTabContent = document.querySelectorAll('.philosophy-tab-content');
  let philosophySection = document.querySelector(".philosophy-section");
  let philosophySvg = document.querySelector('#philosophy-svg-desktop');
  let howSection = document.querySelector('.how-title');
  let howRowIcon = document.querySelectorAll('.row-icon');

  let heroScrollObserverOptions = { threshold: 0.1 };
  function heroScrollCallback(entries, _) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('r')
        heroSvg.classList.remove('slide-out');
        heroSvg.classList.add('slide-in');
      } else {
        heroSvg.classList.add('slide-out');
        heroSvg.classList.remove('slide-in');
      }
    });
  }

  let heroScrollObserver = new IntersectionObserver(heroScrollCallback, heroScrollObserverOptions);
  heroScrollObserver.observe(heroSvg);

  window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let rotationAngle = scrollPosition * 0.1;
    heroSvg.style.transform = `rotate(${rotationAngle}deg)`;
  });

  let valuesSlideObserverOptions = { threshold: 0.1 };
  function valuesSlideCallback(entries, _) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        philosophySvg.classList.remove('slide-out');
        philosophySvg.classList.add('slide-in');
      } else {
        philosophySvg.classList.add('slide-out');
        philosophySvg.classList.remove('slide-in');
      }
    });
  }

  let valuesSlideObserver = new IntersectionObserver(valuesSlideCallback, valuesSlideObserverOptions);
  valuesSlideObserver.observe(philosophySection)


  let howTitleObserverOptions = {
    threshold: 0.1,
    rootMargin: '75px'
  };

  function howTitleScrollCallback(entries, _) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        howSection.classList.add('sticky');
        howSection.classList.remove('stick-bottom');
      } else {
        howSection.classList.remove('sticky');
        howSection.classList.add('stick-bottom');
      }
    });
  }

  let howTitleScrollObserver = new IntersectionObserver(howTitleScrollCallback, howTitleObserverOptions);
  howTitleScrollObserver.observe(howSection)

  function handleScroll(section) {
    return () => {
      const scrollPosition = window.scrollY;
      let rect = howSection.getBoundingClientRect()
      const rotationAngle = (scrollPosition - rect.bottom) * 0.1;
      section.style.transform = `rotate(${rotationAngle}deg)`;
    };
  }

  const scrollHandlers = new WeakMap();

  function rotateIconsCallback(entries, _) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!scrollHandlers.has(entry.target)) {
          const scrollHandler = handleScroll(entry.target);
          scrollHandlers.set(entry.target, scrollHandler);
          window.addEventListener('scroll', scrollHandler);
        }
      } else {
        const scrollHandler = scrollHandlers.get(entry.target);
        if (scrollHandler) {
          window.removeEventListener('scroll', scrollHandler);
          scrollHandlers.delete(entry.target);
        }
      }
    });
  }

  let rotateIconsObserver = new IntersectionObserver(rotateIconsCallback, { threshold: 0.25 });
  
  howRowIcon.forEach(icon => {
    rotateIconsObserver.observe(icon)
  })


  aboutTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.classList.contains('active')) {
        return false;
      }

      aboutTabs.forEach(t => t.classList.remove('active'));
      aboutTabContent.forEach(tc => {
        tc.classList.remove('active')
      })

      tab.classList.add('active');
      document.getElementById(tab.dataset.abouttab).classList.add('active');
    });
  });

  philoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.classList.contains('active')) {
        return false;
      }

      philoTabs.forEach(t => t.classList.remove('active'));
      philoTabContent.forEach(tc => {
        tc.classList.remove('active')
      })

      tab.classList.add('active');
      document.getElementById(tab.dataset.philosophytab).classList.add('active');
    });
  });
});