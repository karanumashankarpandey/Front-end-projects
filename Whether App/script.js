const apiKey = "0266b228f677190c5ec358617d232235";
const apiCall = "https://api.openweathermap.org/data/2.5/weather?q=";

async function getWeatherInfo(cityName) {
  let response = await fetch(`${apiCall}${cityName}&appid=${apiKey}&units=metric`);
  let data = await response.json();

  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";
  document.querySelector(".feels-like").innerHTML = Math.floor(data.main.feels_like) + "°C";
  document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";
  document.querySelector(".visibility").innerHTML = data.visibility / 1000 + " km";
  document.querySelector(".sunrise").innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  document.querySelector(".sunset").innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();

  let img = document.querySelector(".weather-img img");
  let weatherCondition = data.weather[0].main.toLowerCase();

  const weatherIcons = {
    "clear": "https://openweathermap.org/img/wn/01d@2x.png",
    "clouds": "https://openweathermap.org/img/wn/02d@2x.png",
    "rain": "https://openweathermap.org/img/wn/10d@2x.png",
    "drizzle": "https://openweathermap.org/img/wn/09d@2x.png",
    "thunderstorm": "https://openweathermap.org/img/wn/11d@2x.png",
    "snow": "https://openweathermap.org/img/wn/13d@2x.png",
    "mist": "https://openweathermap.org/img/wn/50d@2x.png"
  };

  img.src = weatherIcons[weatherCondition] || weatherIcons["clear"];
}

document.querySelector(".search-icon").addEventListener("click", () => {
  const cityName = document.querySelector(".search-bar").value.trim();
  if (cityName) {
    getWeatherInfo(cityName);
  }
});

// Default city
getWeatherInfo("Baramati");
