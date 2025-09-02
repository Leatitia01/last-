document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for a saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    themeToggleBtn.addEventListener('click', () => {
        // Toggle the 'red-theme' class on the body
        body.classList.toggle('red-theme');
        
        // Save the theme preference to local storage
        if (body.classList.contains('red-theme')) {
            localStorage.setItem('theme', 'red-theme');
        } else {
            localStorage.removeItem('theme');
        }

        // Update the button icon
        const icon = themeToggleBtn.querySelector('i');
        if (body.classList.contains('red-theme')) {
            icon.className = 'bx bxs-moon';
        } else {
            icon.className = 'bx bxs-sun';
        }
    });
});