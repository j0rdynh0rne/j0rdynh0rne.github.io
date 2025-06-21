// script.js

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Apply only to events.html
    if (window.location.pathname.includes("events.html")) {
        const apiDataDiv = document.getElementById("apiData");

        // Fetch example JSON data from external API
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then(response => response.json())
            .then(data => {
                let output = '<h2>Latest Updates</h2><ul>';
                data.forEach(item => {
                    output += `<li><strong>${item.title}</strong><br>${item.body}</li>`;
                });
                output += '</ul>';
                apiDataDiv.innerHTML = output;
            })
            .catch(error => {
                apiDataDiv.textContent = "Error loading event data.";
                console.error("Error fetching data:", error);
            });
    }
});
