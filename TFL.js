// JavaScript to make page transitions smooth when you click on navbar links
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
  
    links.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent default link behavior
  
        const url = this.getAttribute("href"); // Get the URL to navigate to
        fadeOut(() => {
          window.location.href = url; // Redirect after fade-out animation
        });
      });
    });
  
    // Function to create fade-out animation before redirecting
    function fadeOut(callback) {
      const welcomeSection = document.getElementById("welcome");
      welcomeSection.style.transition = "opacity 1s";
      welcomeSection.style.opacity = "0"; // Fade out
  
      setTimeout(() => {
        callback(); // Redirect after fade-out
      }, 1000); // Wait for 1 second (duration of the fade-out)
    }
  });
  