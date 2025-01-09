<script>
    // Example: Countdown Timer
    const countdownElement = document.createElement('p');
    countdownElement.style.fontSize = '1.25rem';
    countdownElement.style.color = '#007bff';

    const messageContainer = document.querySelector('.message-container');
    messageContainer.appendChild(countdownElement);

    let secondsLeft = 60; // Set time in seconds
    const updateCountdown = () => {
        countdownElement.textContent = `Redirecting in ${secondsLeft} seconds...`;
        if (secondsLeft <= 0) {
            // Redirect to another page or URL
            window.location.href = "https://example.com";
        }
        secondsLeft--;
    };

    updateCountdown(); // Initial call
    setInterval(updateCountdown, 1000); // Update every second
</script>


// // Redirect to project page when clicking the "Projects" link
// document.querySelector('nav ul li a[href="projects.html"]').addEventListener('click', function(e) {
//     e.preventDefault();
//     window.location.href = 'projects.html';
// });

// // Redirect to skills page when clicking the "Skills" link
// document.querySelector('nav ul li a[href="skills.html"]').addEventListener('click', function(e) {
//     e.preventDefault();
//     window.location.href = 'skills.html';
// });

// // Redirect to certifications page when clicking the "Certifications" link
// document.querySelector('nav ul li a[href="certifications.html"]').addEventListener('click', function(e) {
//     e.preventDefault();
//     window.location.href = 'certifications.html';
// });

// // Redirect to CV page when clicking the "CV" link
// document.querySelector('nav ul li a[href="files/CV of Beckham Berhanu.pdf"]').addEventListener('click', function(e) {
//     e.preventDefault();
//     window.location.href = 'files/CV of Beckham Berhanu.pdf';
// });

// // Smooth scroll to top when clicking site title
// document.querySelector('.site-title').addEventListener('click', function() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// // Functionality to display content or additional information
// function displayContent(contentId) {
//     document.querySelectorAll('.right-panel > div').forEach(function(content) {
//         content.style.display = 'none';
//     });
//     document.querySelector(`#${contentId}`).style.display = 'block';
// }

// // Example: Display About Me section on page load
// window.addEventListener('load', function() {
//     displayContent('about-me-content');
// });

// // Adding icon classes dynamically
// document.querySelectorAll('.icon').forEach(function(icon) {
//     icon.classList.add('fas'); // Assuming Font Awesome is used
//     icon.classList.add(icon.className.split('-')[0] + '-icon'); // Example: phone-icon
// });