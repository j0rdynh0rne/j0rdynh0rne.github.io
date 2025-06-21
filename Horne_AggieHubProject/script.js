// Wait for the document content to fully load before running script
document.addEventListener("DOMContentLoaded", () => {
    // Check if current page is events.html to apply AJAX logic only there
    if (window.location.pathname.includes("events.html")) {
        const apiDataDiv = document.getElementById("apiData");

        // Fetch event data from local JSON file 'events.json'
        fetch("events.json")
            .then(response => response.json()) // Parse JSON response
            .then(data => {
                // Build HTML list to display event data dynamically
                let output = '<h2>Latest Campus Events</h2><ul>';
                data.forEach(event => {
                    output += `<li><strong>${event.title}:</strong> ${event.description} <em>Date: ${event.date}</em></li>`;
                });
                output += '</ul>';

                // Insert dynamically generated HTML into the page
                apiDataDiv.innerHTML = output;
            })
            .catch(error => {
                // Handle fetch errors by showing a message and logging error to console
                apiDataDiv.textContent = "Error loading event data.";
                console.error("Error fetching data:", error);
            });
    }
});
