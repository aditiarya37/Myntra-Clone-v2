// Dynamically load reusable components
document.addEventListener("DOMContentLoaded", () => {
    // Include header
    const headerPlaceholder = document.querySelector("[data-include='header']");
    if (headerPlaceholder) {
        fetch("header.html")
            .then((response) => response.text())
            .then((data) => (headerPlaceholder.innerHTML = data))
            .catch((error) => console.error("Error loading header:", error));
    }

    const main1Placeholder = document.querySelector("[data-include='main1']");
    if (main1Placeholder) {
        fetch("main1.html")
            .then((response) => response.text())
            .then((data) => (main1Placeholder.innerHTML = data))
            .catch((error) => console.error("Error loading footer:", error));
    }
    // Include footer
    const footerPlaceholder = document.querySelector("[data-include='footer']");
    if (footerPlaceholder) {
        fetch("footer.html")
            .then((response) => response.text())
            .then((data) => (footerPlaceholder.innerHTML = data))
            .catch((error) => console.error("Error loading footer:", error));
    }
});
