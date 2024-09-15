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
  let philoTabs = document.querySelectorAll('.philosophy-tab');
  let philoTabContent = document.querySelectorAll('.philosophy-tab-content');
  let howSection = document.querySelector('.how-title');
  let howRowIcon = document.querySelectorAll('.row-icon');
  let skillRankSection = document.querySelector('.swiper-wrapper');
  let skillsRankPan = document.querySelector('.skills-rank-pan');
  let swiper;

  function renderSkillCategories() {
    skills.forEach(skill => {
      // 'skills-rank-box'
      let skillRankBox = document.createElement('div');
      skillRankBox.classList.add('skills-rank-box');
      skillRankBox.classList.add('swiper-slide');

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

    swiper = new Swiper('.skills-rank-pan', {
      speed: 1000,
      slidesPerView: 1,
      keyboard: {
        enabled: true,
      },
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      breakpoints: {
        425: {
          slidesPerView: 1,
          speed: 500,
        },
        776: {
          slidesPerView: 2,
          speed: 500,
        },
        1024: {
          slidesPerView: 2,
          speed: 500,
        },
        1279: {
          slidesPerView: 3,
          speed: 500,
        },
        1441: {
          slidesPerView: 3,
        },
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
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

        skillRankSection.focus();
        swiper.autoplay.start();
        setTimeout(() => swiper.autoplay.stop(), 1000)
      }
    });
  }, { threshold: 0.25 });
  skillScrollObserver.observe(skillsRankPan);

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

  philoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.classList.contains('active')) {
        return false;
      }

      gtag('event', 'button_click', {
        'event_category': 'philo-tab-click',
        'event_label': 'Philosophy Tab Click',
        'value': 1
      });

      philoTabs.forEach(t => t.classList.remove('active'));
      philoTabContent.forEach(tc => {
        tc.classList.remove('active')
      })

      tab.classList.add('active');
      document.getElementById(tab.dataset.philosophytab).classList.add('active');
    });
  });
});