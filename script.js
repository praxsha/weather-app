function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    result.innerHTML = `
        <h2>${city}</h2>
        <p>🌡️ Temperature: Loading...</p>
        <p>☁️ Weather: Loading...</p>
        <p>💧 Humidity: Loading...</p>
        <p>💨 Wind Speed: Loading...</p>
    `;
}
