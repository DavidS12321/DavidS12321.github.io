function showSection(sectionId) {
    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:shahidavid02@gmail.com?subject=Message from ${name}&body=${message}%0D%0A%0D%0AReply to: ${email}`;

    window.location.href = mailtoLink;
}

function downloadResume() {
    // Unique cache-buster using the current timestamp
    const cacheBuster = '?v=' + new Date().getTime();
    const resumeUrl = 'https://raw.githubusercontent.com/DavidS12321/DavidS12321.github.io/main/David%20Shahi%20Resume.pdf' + cacheBuster;
    window.open(resumeUrl, '_blank');
}

function showTab(tabName) {
    // Hide all tab contents
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Show the selected tab content
    var selectedTabContent = document.getElementById(tabName);
    selectedTabContent.style.display = 'block';

    // Update active tab styling
    var activeTabs = document.querySelectorAll('.tab');
    activeTabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Find the button that corresponds to the selected content
    var activeTabButton = document.getElementById(tabName.replace('-content', '-tab'));
    if (activeTabButton) {
        activeTabButton.classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Define the sections to observe
    const sections = document.querySelectorAll('.scroll-section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust as needed
    };

    // Callback function to handle intersection events
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Entry is in the viewport, update the URL and styles
                window.history.replaceState(null, null, '#' + entry.target.id);
            }
        });
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(callback, options);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});