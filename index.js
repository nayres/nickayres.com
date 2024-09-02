document.addEventListener('DOMContentLoaded', (event) => {
  let aboutTabs = document.querySelectorAll('.about-tab');
  let aboutTabContent = document.querySelectorAll('.about-tab-content');
  let philoTabs = document.querySelectorAll('.philosophy-tab');
  let philoTabContent = document.querySelectorAll('.philosophy-tab-content');
  let philosophySection = document.querySelectorAll("#philosophy");
  let philosophySvg = document.querySelector('#philosophy-svg');

  const options = {
    threshold: 0.25
  };

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        philosophySvg.classList.remove('slide-out');
        philosophySvg.classList.add('slide-in');
      } else {
        philosophySvg.classList.add('slide-out');
        philosophySvg.classList.remove('slide-in');
      }
    });
  }, options);

  philosophySection.forEach(section => {
    observer.observe(section);
  });

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