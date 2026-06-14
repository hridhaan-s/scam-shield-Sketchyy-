document.addEventListener("DOMContentLoaded", () =>
    {
const searchInput = document.querySelector(".search-bar input");
const searchButton = document.querySelector(".search-bar button");
const heroContent = document.querySelector(".hero-content");

const resultsContainer = document.createElement("div");
resultsContainer.id = "results-display";
resultsContainer.style.marginTop = "30px";
heroContent.appendChild(resultsContainer);


function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        resultsContainer.innerHTML = ""; // Clear any previous search results

        if (query === "") {
            resultsContainer.innerHTML = "<p style='color: #a0a0a0;'>Please type a city name first!</p>";
            return;
        }

        // Find the matching destination
        const foundDest = destinations.find(dest => dest.city.toLowerCase() === query);

        if (foundDest) {
            // Build a clean, minimal list to hold our sketchy data points
            let htmlContent = `
                <h3 style="margin-bottom: 15px; text-transform: uppercase; font-size: 1.2rem;">⚠️ Sketchy Intel for ${foundDest.city}:</h3>
                <ul style="list-style: square; padding-left: 20px; color: #cccccc; line-height: 1.6;">
            `;

            foundDest.sketchySpots.forEach(spot => {
                htmlContent += `<li style="margin-bottom: 10px;">${spot}</li>`;
            });

            htmlContent += `</ul>`;
            resultsContainer.innerHTML = htmlContent;
        } else {
            resultsContainer.innerHTML = `<p style='color: #ff4444;'>No database records found for "${searchInput.value}". Try Paris, Rome, or New York!</p>`;
        }
    }

    searchButton.addEventListener("click", performSearch);

    searchInput.addEventListener("keypress", (e) => {
if (e.key === "Enter") {
    performSearch();
}


    });





});