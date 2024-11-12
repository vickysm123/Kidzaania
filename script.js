const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// when we click on hamburger icon its close

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
document.getElementById('searchInput').addEventListener('input', function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const listItems = document.querySelectorAll('#itemList li');

    listItems.forEach(function (item) {
        const itemText = item.textContent.toLowerCase();

        if (itemText.includes(searchTerm)) {
            item.style.display = 'list-item';
        } else {
            item.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.elementor-counter-number');
  
    counters.forEach(function (counter) {
      const duration = counter.getAttribute('data-duration'); // Get duration
      const toValue = counter.getAttribute('data-to-value'); // Get the target value
      const fromValue = counter.getAttribute('data-from-value'); // Get the starting value
      const delimiter = counter.getAttribute('data-delimiter'); // Get delimiter for thousands (optional)
  
      // Function to format the number with a delimiter (e.g., commas)
      function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
      }
  
      let currentValue = parseInt(fromValue);
      const increment = (toValue - fromValue) / (duration / 50); // Speed of the animation
  
      function updateCounter() {
        if (currentValue < toValue) {
          currentValue += increment;
          counter.textContent = formatNumber(Math.floor(currentValue));
          requestAnimationFrame(updateCounter); // Continuously update until it reaches the target
        } else {
          counter.textContent = formatNumber(toValue); // Ensure it shows the final value
        }
      }
  
      updateCounter(); // Start the animation
    });
  });
  
    
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentIndex = 0;

    // Function to show the slide at the current index
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    // Show the initial slide
    showSlide(currentIndex);

    // Next button click event
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Previous button click event
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
});



let currentIndex = 0;

  function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth + 15; // Adjust based on item width and gap

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > items.length - 6) { // 3 visible items
        currentIndex = items.length - 6;
    }

    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
  
let currentIndexes = 0;

function moveCarousels(direct) {
  const tracks = document.querySelector('.carousel-tracks');
  const item = document.querySelectorAll('.carousel-items');
  const itemWidths = item[0].offsetWidth + 14; // Adjust based on item width and gap

  currentIndexes += direct;
  if (currentIndexes < 0) {
      currentIndexes = 0;
  } else if (currentIndexes > item.length - 5) { // 3 visible items
      currentIndexes = item.length - 6;
  }

  tracks.style.transform = `translateX(-${currentIndexes * itemWidths}px)`;
}
// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Show after scrolling 200px
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const whatsappConsent = document.getElementById("whatsappConsent").checked;

    // Perform form validation or submission logic here
    console.log({
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
        whatsappConsent
    });

    alert("Form submitted successfully!");
});
