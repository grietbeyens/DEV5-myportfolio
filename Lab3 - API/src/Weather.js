export default class Weather {
  constructor(api_key) {
    this.apiKey = api_key;
    this.position;
  }

  async initializeWeather() {
    // check if weather is in local storage
    if (
      localStorage.getItem("weather") &&
      Date.now() - localStorage.getItem("timestamp") < 60000
    ) {
      this.getWeatherFromCache();
    } else {
      await this.getWeather();
    }
  }

  getWeatherFromCache() {
    console.log("Weather - From cache");

    // get weather from local storage
    const weather = JSON.parse(localStorage.getItem("weather"));
    console.log(weather);
    this.displayWeather(weather);
  }

  isClear() {
    const weatherData = JSON.parse(localStorage.getItem("weather"));

    if (weatherData.length < 1) return false;
    if (weatherData.weather[0].main === "Clear") return true;
    return false;
  }

  getWeather() {
    if (navigator.geolocation) {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((position) => {
          this.setPosition(position);
          resolve(this.getWeatherFromApi(this.position));
        });
      });
    } else {
      return console.log("Geolocation is not supported by this browser.");
    }
  }

  async setPosition(pos) {
    this.position = pos;
  }

  async getWeatherFromApi(position) {
    console.log("Weather - From api");

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    //local storage string naar json en json naar string
    localStorage.setItem("weather", JSON.stringify(data));
    // save timestamp
    localStorage.setItem("timestamp", Date.now());

    this.displayWeather(data);
  }

  displayWeather(data) {
    const weather = data.weather[0].main;
    document.querySelector(".weather__main").innerText = weather;
    const weather__discr = data.weather[0].description;
    document.querySelector(".weather__description").innerText = weather__discr;
    const icon = data.weather[0].icon;

    const img = document.createElement("img");
    img.src = `http://openweathermap.org/img/w/${icon}.png`;
    document.querySelector(".weather__icon").appendChild(img);
  }
}
