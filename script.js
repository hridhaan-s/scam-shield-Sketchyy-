document.addEventListener("DOMContentLoaded", () => {
    // 1. UI Elements Mapping
    const searchInput = document.querySelector(".search-bar input");
    const searchButton = document.querySelector(".search-bar button");
    const heroContent = document.querySelector(".hero-content");
    const weatherDisplay = document.getElementById("weather-display");
    
    // Loaded the hype audio file!
    const searchMusic = new Audio("naruto (1).mp3");

    // 2. Dynamic Results Container Definition
    const resultsContainer = document.createElement("div");
    resultsContainer.id = "results-display";
    resultsContainer.style.marginTop = "30px";
    heroContent.appendChild(resultsContainer);

    // 3. Initialize Map Center points
    const map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    let currentMarker = null;

    // Helper Function: Generates customized gear advice based on temperature numbers
    function getWeatherAdvice(temp) {
        if (temp <= 10) {
            return "❄️ **🚨 Freezing Alert!** It's absolute chills out there right now. Def pack some heavy warm clothes, thick jackets, and layers or you're gonna freeze!";
        } else if (temp > 10 && temp <= 18) {
            return "🍃 **Chilly Vibes:** It's got a bit of a nip in the air. Grab a comfortable hoodie, sweater, or light jacket before you head out.";
        } else if (temp > 18 && temp <= 27) {
            return "☀️ **Perfect Weather:** Super nice and comfortable. Standard clothing or a light t-shirt will do perfectly fine.";
        } else {
            return "🔥 **Scorching Heat:** It's getting incredibly hot out there! Keep yourself hydrated, wear light clothes, and don't forget sun protection.";
        }
    }

    // Helper Function: Dynamically creates and injects the modal popup to show supported locations
    function openSupportedPlacesModal() {
        const existingModal = document.getElementById("supported-modal");
        if (existingModal) existingModal.remove();

        const modalOverlay = document.createElement("div");
        modalOverlay.id = "supported-modal";
        modalOverlay.style.position = "fixed";
        modalOverlay.style.top = "0";
        modalOverlay.style.left = "0";
        modalOverlay.style.width = "100vw";
        modalOverlay.style.height = "100vh";
        modalOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
        modalOverlay.style.display = "flex";
        modalOverlay.style.justifyContent = "center";
        modalOverlay.style.alignItems = "center";
        modalOverlay.style.zIndex = "9999";

        const placesList = destinations.map(d => `${d.city}, ${d.country}`).sort();

        modalOverlay.innerHTML = `
            <div style="background-color: #121212; border: 3px solid #ffffff; box-shadow: 12px 12px 0px #222222; padding: 30px; max-width: 500px; width: 90%; max-height: 80vh; overflow-y: auto; font-family: inherit;">
                <h3 style="text-transform: uppercase; border-bottom: 2px solid #333; padding-bottom: 10px; margin-bottom: 15px; color: #ffffff; display: flex; justify-content: space-between; align-items: center;">
                    📋 Supported Intel Zones
                    <button id="close-modal-btn" style="background: transparent; border: none; color: #ff4444; font-size: 1.5rem; cursor: pointer; font-weight: bold;">&times;</button>
                </h3>
                <p style="color: #a0a0a0; font-size: 0.9rem; margin-bottom: 15px;">We currently track safety metrics and tourist scams across these locations:</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; color: #00ffcc; font-size: 0.95rem;">
                    ${placesList.map(place => `<div style="cursor: pointer; text-decoration: underline;" class="modal-place-item">${place}</div>`).join('')}
                </div>
            </div>
        `;

        document.body.appendChild(modalOverlay);

        document.getElementById("close-modal-btn").addEventListener("click", () => modalOverlay.remove());
        
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) modalOverlay.remove();
        });

        const items = modalOverlay.querySelectorAll(".modal-place-item");
        items.forEach(item => {
            item.addEventListener("click", () => {
                const cityName = item.textContent.split(",")[0];
                searchInput.value = cityName;
                modalOverlay.remove();
                performSearch(); // Calls cleanly now
            });
        });
    }

    // 4. API Function: Live Weather Fetching & Clothing Strategy Evaluator
    async function fetchLocalWeather(cityName) {
        const apiKey = '73112ed73eb8fe3ebbddc25419d8109a'; 
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`);
            if (!response.ok) throw new Error("Weather dataset not found");
            const data = await response.json();

            const roundedTemp = Math.round(data.main.temp);
            const smartAdvice = getWeatherAdvice(roundedTemp);

            weatherDisplay.style.display = "block";
            weatherDisplay.innerHTML = `
                <p style="color: #ffffff; font-weight: bold; margin-bottom: 8px;">🌍 Real-Time Environment Intel:</p>
                <div style="margin-bottom: 8px; color: #cccccc;">
                    <span style="color: #00ffcc; font-weight: bold;">${roundedTemp}°C</span> | 
                    <span style="text-transform: capitalize;">${data.weather[0].description}</span> | 
                    <span>💧 Humidity: ${data.main.humidity}%</span>
                </div>
                <p style="color: #ffffff; font-size: 0.95rem; border-top: 1px dashed #333; padding-top: 8px; line-height: 1.4;">${smartAdvice}</p>
            `;
        } catch (err) {
            console.log("Weather endpoint failed to resolve.");
            weatherDisplay.style.display = "none";
        }
    }

    // 5. API Function: Map Geocoding & Traversal
    async function updateMapLocation(locationName) {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${locationName}&limit=1`);
            const data = await response.json();

            if (data && data.length > 0) {
                const lat = parseFloat(data[0].lat);
                const lon = parseFloat(data[0].lon);

                map.flyTo([lat, lon], 10);

                if (currentMarker) map.removeLayer(currentMarker);

                currentMarker = L.marker([lat, lon]).addTo(map)
                    .bindPopup(`<b>${locationName}</b><br>Scanning sketchy zones...`)
                    .openPopup();
            }
        } catch (error) {
            console.log("Map routing lookup dropped.");
        }
    }

    // 6. Central Search Evaluation Logic (Converted to clean Hoisted statement format)
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        resultsContainer.innerHTML = ""; 
        weatherDisplay.style.display = "none";
        
        // Hype music trigger works flawlessly here!
        searchMusic.currentTime = 0;
        searchMusic.play().catch(err => console.log("Audio waiting for user interaction baseline."));

        if (query === "") {
            resultsContainer.innerHTML = "<p style='color: #a0a0a0;'>Please type a city name first!</p>";
            return;
        }

        const foundDest = destinations.find(dest => 
            dest.city.toLowerCase() === query || 
            dest.country.toLowerCase() === query
        );

        if (foundDest) {
            updateMapLocation(foundDest.city);
            fetchLocalWeather(foundDest.city);

            let htmlContent = `
                <h3 style="margin-bottom: 15px; text-transform: uppercase; font-size: 1.2rem;">Here is Sketchy Intel for ${foundDest.city}:</h3>
                <ul style="list-style: square; padding-left: 20px; color: #cccccc; line-height: 1.6;">
            `;

            foundDest.sketchySpots.forEach(spot => {
                htmlContent += `<li style="margin-bottom: 10px;">${spot}</li>`;
            });

            htmlContent += `</ul>`;
            resultsContainer.innerHTML = htmlContent;
        } else {
            resultsContainer.innerHTML = `
                <div style="line-height: 1.5;">
                    <p style='color: #ff4444; margin-bottom: 15px;'>Oh sorry, no reports found for "${searchInput.value}".</p>
                    <button id="view-supported-btn" style="padding: 10px 18px; border: 2px solid #ffffff; background: transparent; color: #ffffff; font-family: inherit; font-weight: bold; cursor: pointer; box-shadow: 4px 4px 0px #222222;">
                        🗺️ View Supported Locations
                    </button>
                </div>
            `;

            document.getElementById("view-supported-btn").addEventListener("click", openSupportedPlacesModal);
        }
    }

    // 7. Input Interface Bindings
    searchButton.addEventListener("click", performSearch);
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            performSearch();
        }
    });
});