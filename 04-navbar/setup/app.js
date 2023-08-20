// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// Select the toggle button element
const toggleBtn = document.querySelector('.nav-toggle');

// Select the links container element
const links = document.querySelector('.links');

// Add a click event listener to the links container
toggleBtn.addEventListener('click', () => {
    // Check if the links container has the class "show-links"
    if (links.classList.contains("show-links")) {
        // If it has the class, remove it to hide the links
        links.classList.remove('show-links');
    } else {
        // If it doesn't have the class, add it to show the links
        links.classList.add("show-links");
    }
});
