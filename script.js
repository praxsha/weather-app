const apiKey = "6f30f9fed3c314f9002a4752a8278583";

async function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("weatherResult");

    if (city.trim() === "") {
        result.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod != 200) {
            result.innerHTML = "<p>❌ City not found.</p>";
            return;
        }

        result.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <h3>${data.main.temp}°C</h3>
            <p>☁️ ${data.weather[0].main}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        result.innerHTML = "<p>Something went wrong.</p>";
    }
}
