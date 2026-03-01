document.addEventListener('DOMContentLoaded', function() {
    // Show modal for form submission using plain button IDs (no data-bs-toggle attributes)
    const submitMessageButton = document.getElementById('submitMessageButton');
    if (submitMessageButton) {
        submitMessageButton.addEventListener('click', function() {
            const submitModal = new bootstrap.Modal(document.getElementById('submitModal'));
            submitModal.show();
        });
    }

    // Show modal for login
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
            loginModal.show();
        });
    }

    // Show modals using additional buttons
    const showLoginModalButton = document.getElementById('showLoginModalButton');
    if (showLoginModalButton) {
        showLoginModalButton.addEventListener('click', function() {
            const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
            loginModal.show();
        });
    }

    const showSubmitModalButton = document.getElementById('showSubmitModalButton');
    if (showSubmitModalButton) {
        showSubmitModalButton.addEventListener('click', function() {
            const submitModal = new bootstrap.Modal(document.getElementById('submitModal'));
            submitModal.show();
        });
    }
});

// Highlighting the row when hovered (optional for additional interactivity)
document.querySelectorAll("tr").forEach(row => {
    row.addEventListener("mouseover", () => {
        row.style.backgroundColor = "#e8f5e9"; // Light green highlight on hover
    });

    row.addEventListener("mouseout", () => {
        row.style.backgroundColor = ""; // Reset to default
    });
});
