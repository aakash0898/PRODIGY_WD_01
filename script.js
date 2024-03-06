window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#0056b3'; /* Darker shade */
    } else {
        navbar.style.backgroundColor = '#007bff'; /* Primary color */
    }
  });
  
  // Add active class to the current menu item based on scroll position
  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('#navbar a');
    sections.forEach(function(section, index) {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
            });
            navLinks[index].classList.add('active');
        }
    });
  });
  
  // Add hover effect to menu items
  var navLinks = document.querySelectorAll('#navbar a');
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#0056b3'; /* Darker shade */
    });
    navLink.addEventListener('mouseleave', function() {
        this.style.backgroundColor = ''; /* Revert to default */
    });
  });
  