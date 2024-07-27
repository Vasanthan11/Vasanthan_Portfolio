document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('checkbox');

    if (checkbox) {
        checkbox.addEventListener('change', function () {
            document.body.classList.toggle('dark-mode');
        });
    }

    const navIcon = document.querySelector('.navIcon');
    if (navIcon) {
        navIcon.addEventListener('click', function () {
            document.querySelector('.navList').classList.toggle('show');
        });
    }

    const element = document.getElementById('revealText');
    if (element) {
        const text = element.textContent.trim();
        let index = 0;
        let isRevealing = true;
        const speed = 100; // Adjust the speed as needed (milliseconds)

        // Function to animate the reveal and hide process
        function animateText() {
            if (isRevealing) {
                if (index < text.length) {
                    element.style.display = 'inline'; // Show the element
                    element.textContent = text.slice(0, index + 1); // Update text content
                    index++;
                    setTimeout(animateText, speed);
                } else {
                    isRevealing = false;
                    setTimeout(animateText, speed * 5); // Wait before hiding
                }
            } else {
                if (index > 0) {
                    element.textContent = text.slice(0, index); // Update text content
                    index--;
                    setTimeout(animateText, speed);
                } else {
                    isRevealing = true;
                    element.style.display = 'none'; // Hide the element
                    setTimeout(animateText, speed * 5); // Wait before revealing again
                }
            }
        }

        // Start the animation when the DOM is ready
        animateText();
        handleScrollTopSec();
    }

    // TRACK BAR STARTS HERE
    const skillsSection = document.getElementById('skills');
    const windowHeight = window.innerHeight;
    let animationStarted = false;

    function checkScroll() {
        if (!animationStarted) {
            const rect = skillsSection.getBoundingClientRect();
            if (rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.75) {
                startAnimation();
                animationStarted = true;
            }
        }
    }

    function startAnimation() {
        const skillLevels = document.querySelectorAll('.skill-level');
        skillLevels.forEach(skillLevel => {
            skillLevel.style.animationPlayState = 'running';
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', checkScroll);

    // SCROLL ANIMATION
    function handleScroll() {
        const scrollPosition = window.scrollY;
        const targetHeight = 100; // Height in pixels where you want the animations to trigger

        if (scrollPosition >= targetHeight) {
            document.querySelector('.careerLeftSec').classList.add('animate-left');
            document.querySelector('.careerRightSec').classList.add('animate-right');
            document.querySelector('.skillsLeftSec').classList.add('animate-left');
            document.querySelector('.skillsRightSec').classList.add('animate-right');
            document.querySelector('.projectGallerySection').classList.add('animate-right');
            document.querySelector('.testimonial').classList.add('animate-left');
            document.querySelector('.connectMeLeftSec').classList.add('animate-left');
            document.querySelector('.connectMeRightSec').classList.add('animate-left');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    function handleScrollTopSec() {
        document.querySelector('.introSecleft').classList.add('animate-left');
        document.querySelector('.introSecRight').classList.add('animate-right');
        document.querySelector('.aboutUsRight').classList.add('animate-right');
        document.querySelector('.aboutUsleft').classList.add('animate-left');
        window.removeEventListener('scroll', handleScrollTopSec);
    }

    // Initialize scroll handlers
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollTopSec);
});
