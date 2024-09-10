let skillsSvgs = {
  2: `
    <svg class="rank-svg-desktop" xmlns="http://www.w3.org/2000/svg" width="142" height="18" fill="none" viewBox="0 0 142 18">
      <path fill="#302B2B" d="M124 6h15a3 3 0 1 1 0 6h-15V6ZM93 6h18v6H93zM62 6h18v6H62z"/>
      <circle cx="40" cy="9" r="9" fill="#E62E00"/>
      <path fill="#E62E00" d="M0 9a3 3 0 0 1 3-3h15v6H3a3 3 0 0 1-3-3Z"/>
    </svg>
    <svg class="rank-svg-mobile" xmlns="http://www.w3.org/2000/svg" width="76" height="12" fill="none" viewBox="0 0 76 12">
      <path fill="#302B2B" d="M64 3h9a3 3 0 1 1 0 6h-9V3ZM48 3h12v6H48zM32 3h12v6H32V3Z"/>
      <circle cx="22" cy="6" r="6" fill="#E62E00"/>
      <path fill="#E62E00" d="M0 6a3 3 0 0 1 3-3h9v6H3a3 3 0 0 1-3-3Z"/>
    </svg>
  `,
  3: `
    <svg class="rank-svg-desktop" xmlns="http://www.w3.org/2000/svg" width="142" height="18" fill="none" viewBox="0 0 142 18">
      <path fill="#E62E00" d="M0 9a3 3 0 0 1 3-3h15v6H3a3 3 0 0 1-3-3ZM31 6h18v6H31V6Z"/>
      <circle cx="71" cy="9" r="9" fill="#E62E00"/>
      <path fill="#302B2B" d="M124 6h15a3 3 0 1 1 0 6h-15V6ZM93 6h18v6H93z"/>
    </svg>
    <svg class="rank-svg-mobile" xmlns="http://www.w3.org/2000/svg" width="76" height="12" fill="none" viewBox="0 0 76 12">
      <path fill="#302B2B" d="M64 3h9a3 3 0 1 1 0 6h-9V3ZM48 3h12v6H48z"/>
      <path fill="#E62E00" d="M16 3h12v6H16V3Z"/>
      <circle cx="38" cy="6" r="6" fill="#E62E00"/>
      <path fill="#E62E00" d="M0 6a3 3 0 0 1 3-3h9v6H3a3 3 0 0 1-3-3Z"/>
    </svg>
  `,
  4: `
    <svg class="rank-svg-desktop" xmlns="http://www.w3.org/2000/svg" width="142" height="18" fill="none" viewBox="0 0 142 18">
      <path fill="#302B2B" d="M124 6h15a3 3 0 1 1 0 6h-15V6Z"/>
      <circle cx="102" cy="9" r="9" fill="#E62E00"/>
      <path fill="#E62E00" d="M62 6h18v6H62zM31 6h18v6H31zM0 9a3 3 0 0 1 3-3h15v6H3a3 3 0 0 1-3-3Z"/>
    </svg>
    <svg class="rank-svg-mobile" xmlns="http://www.w3.org/2000/svg" width="76" height="12" fill="none" viewBox="0 0 76 12">
      <path fill="#302B2B" d="M64 3h9a3 3 0 1 1 0 6h-9V3Z"/>
      <path fill="#E62E00" d="M16 3h12v6H16zM32 3h12v6H32V3Z"/>
      <circle cx="54" cy="6" r="6" fill="#E62E00"/>
      <path fill="#E62E00" d="M0 6a3 3 0 0 1 3-3h9v6H3a3 3 0 0 1-3-3Z"/>
    </svg>
  `,
  5: `
    <svg class="rank-svg-desktop" xmlns="http://www.w3.org/2000/svg" width="142" height="18" fill="none" viewBox="0 0 142 18">
      <path fill="#E62E00" d="M0 9a3 3 0 0 1 3-3h15v6H3a3 3 0 0 1-3-3ZM31 6h18v6H31zM62 6h18v6H62zM93 6h18v6H93z"/>
      <circle cx="133" cy="9" r="9" fill="#E62E00"/>
    </svg>
    <svg class="rank-svg-mobile" xmlns="http://www.w3.org/2000/svg" width="76" height="12" fill="none" viewBox="0 0 76 12">
      <path fill="#E62E00" d="M48 3h12v6H48zM32 3h12v6H32V3ZM16 3h12v6H16V3Z"/>
      <circle cx="70" cy="6" r="6" fill="#E62E00"/>
      <path fill="#E62E00" d="M0 6a3 3 0 0 1 3-3h9v6H3a3 3 0 0 1-3-3Z"/>
    </svg>
  `,
};

let skills = [
  {
    label: 'Languages',
    subCatergories: [
      {
        label: 'JavaScript',
        rank: 5,
      },
      {
        label: 'TypeScript',
        rank: 5,
      },
      {
        label: 'Python',
        rank: 4,
      },
      {
        label: 'C#',
        rank: 3,
      },
      {
        label: 'HTML',
        rank: 5,
      },
    ]
  },
  {
    label: 'Front end libraries',
    subCatergories: [
      {
        label: 'React',
        rank: 5,
      },
      {
        label: 'NextJS',
        rank: 4,
      },
      {
        label: 'GatsbyJS',
        rank: 4,
      },
      {
        label: 'Remix',
        rank: 3,
      },
    ]
  },
  {
    label: 'Database',
    subCatergories: [
      {
        label: 'PostgreSQL',
        rank: 5,
      },
      {
        label: 'CouchDB',
        rank: 4,
      },
      {
        label: 'MySQL',
        rank: 4,
      },
      {
        label: 'MongoDB',
        rank: 5,
      },
    ]
  },
  {
    label: 'Styles',
    subCatergories: [
      {
        label: 'CSS',
        rank: 5,
      },
      {
        label: 'Sass',
        rank: 3,
      },
      {
        label: 'CSS in JS',
        rank: 5,
      },
      {
        label: 'Tailwind',
        rank: 2,
      },
      {
        label: 'CSS Modules',
        rank: 4,
      },
    ]
  },
  {
    label: 'State management',
    subCatergories: [
      {
        label: 'React Context API',
        rank: 5,
      },
      {
        label: 'Redux',
        rank: 4,
      },
      {
        label: 'XState',
        rank: 3,
      },
      {
        label: 'MobX',
        rank: 2,
      },
    ]
  },
  {
    label: 'Infra Tools',
    subCatergories: [
      {
        label: 'Amazon SQS',
        rank: 4,
      },
      {
        label: 'Kafka',
        rank: 3,
      },
      {
        label: 'Redis',
        rank: 4,
      },
      {
        label: 'Cloudflare',
        rank: 4,
      },
      {
        label: 'NGINX',
        rank: 5,
      },
      {
        label: 'Docker',
        rank: 4,
      },
    ]
  },
  {
    label: 'Cloud Computing',
    subCatergories: [
      {
        label: 'AWS',
        rank: 4,
      },
      {
        label: 'Azure',
        rank: 5,
      }
    ]
  },
  {
    label: 'Observability',
    subCatergories: [
      {
        label: 'Splunk',
        rank: 5,
      },
      {
        label: 'DataDog',
        rank: 5,
      },
      {
        label: 'Google Analytics',
        rank: 5,
      },
      {
        label: 'CloudWatch',
        rank: 3,
      },
      {
        label: 'Grafana',
        rank: 2,
      },
    ]
  },
  {
    label: 'Miscellaneous',
    subCatergories: [
      {
        label: 'Figma',
        rank: 5,
      },
      {
        label: 'Asana',
        rank: 4,
      },
      {
        label: 'Github',
        rank: 5,
      },
      {
        label: 'Notion',
        rank: 5,
      },
      {
        label: 'Jira',
        rank: 5,
      },
      {
        label: 'Slack',
        rank: 5,
      },
    ]
  },
  {
    label: 'API Development',
    subCatergories: [
      {
        label: 'GraphQL',
        rank: 5,
      },
      {
        label: 'GRPC',
        rank: 2,
      },
      {
        label: 'RESTful Design',
        rank: 5,
      },
      {
        label: 'Scale/Avail',
        rank: 5,
      },
      {
        label: 'HTTP/HTTPS',
        rank: 5,
      },
    ]
  },
];

document.addEventListener('DOMContentLoaded', (event) => {
  let aboutTabs = document.querySelectorAll('.about-tab');
  let aboutTabContent = document.querySelectorAll('.about-tab-content');
  let philoTabs = document.querySelectorAll('.philosophy-tab');
  let philoTabContent = document.querySelectorAll('.philosophy-tab-content');
  let philosophySection = document.querySelector(".philosophy-section");
  let philosophySvg = document.querySelector('#philosophy-svg-desktop');
  let howSection = document.querySelector('.how-title');
  let howRowIcon = document.querySelectorAll('.row-icon');
  let skillsRankSection = document.querySelector('.skills-rank-section');
  let ctaSection = document.querySelector('.contact-cta-section');
  let skillRankSection = document.querySelector('.skills-rank-pan');
  let flickitySlider = document.querySelector('.skills-rank-pan');
  let flick;

  function renderSkillCategories() {
    skills.forEach(skill => {
      // 'skills-rank-box'
      let skillRankBox = document.createElement('div');
      skillRankBox.classList.add('skills-rank-box');

      //'skill-category-box'
      let categoryBox = document.createElement('div');
      categoryBox.classList.add('skill-category-box');
      
      // 'skill-category-label'
      let categoryLabel = document.createElement('div');
      categoryLabel.classList.add('skill-category-label');
      let categoryLabelHeading = document.createElement('h1');
      categoryLabelHeading.textContent = skill.label;

      // category header
      categoryLabel.appendChild(categoryLabelHeading);
      categoryBox.appendChild(categoryLabel);
      skillRankBox.appendChild(categoryBox);
      skillRankSection.appendChild(skillRankBox);

      // 'skill-category-inner'
      let skillCategoryInner = document.createElement('div');
      skillCategoryInner.classList.add('skill-category-inner');

      skill.subCatergories.forEach(category => {
        // 'skill-item'
        let skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');

        // 'skill-label'
        let skillLabel = document.createElement('div');
        skillLabel.classList.add('skill-label');
        let skillItemLabel = document.createElement('span');
        skillItemLabel.textContent = category.label;
        skillLabel.appendChild(skillItemLabel);
        skillItem.appendChild(skillLabel);

        // 'skill-rank'
        let skillRank = document.createElement('div');
        skillRank.classList.add('skill-rank');
        skillRank.innerHTML = skillsSvgs[category.rank]
        skillItem.appendChild(skillRank)
        
        skillCategoryInner.appendChild(skillItem)
      });

      categoryBox.appendChild(skillCategoryInner)
    })

    flick = new Flickity(skillRankSection, {
      cellAlign: 'center',
      setGallerySize: true,
      prevNextButtons: false,
      wrapAround: true,
      pageDots: false,
      friction: 0.8
    });
  }

  renderSkillCategories()

  const mediaQuery = window.matchMedia('(max-width: 768px)')

  let isSmallReso = false;
  function handleTabletChange(e) {
    if (e.matches) {
      isSmallReso = true;
    }
  }
  
  mediaQuery.addEventListener("change", handleTabletChange)
  
  handleTabletChange(mediaQuery)
  const skillScrollObserver = new IntersectionObserver((entries, _) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        flick.isFreeScrolling = true;
        flick.startAnimation();
        
        if (isSmallReso) {
          flick.velocity += 750 * -0.1;
        } else {
          flick.velocity += 1000 * -0.1;
        }
        flick.x += flick.velocity;
        flick.velocity *= 0.3;
    

        flick.positionSlider();
      }
    });
  }, { threshold: 1 });
  skillScrollObserver.observe(flickitySlider);

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

  let aboutSectionOptions = {
    threshold: 0.1,
    rootMargin: '175px'
  };

  function aboutSectionObserverCallback(entries, _) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ctaSection.classList.add('in-view');
      } else {
        ctaSection.classList.remove('in-view');
      }
    });
  }

  let aboutSectionObserver = new IntersectionObserver(aboutSectionObserverCallback, aboutSectionOptions);
  aboutSectionObserver.observe(skillsRankSection)

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