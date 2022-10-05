export default class Weather {
  constructor(api_key) {
    this.apiKey = api_key;
    // check if weather is in local storage
    if (
      localStorage.getItem("weather") &&
      Date.now() - localStorage.getItem("timestamp") < 60000
    ) {
      // get weather from local storage
      const weatherData = JSON.parse(localStorage.getItem("weather"));
      this.displayWeather(weatherData);
      console.log("Cached");
    } else {
      this.getLocation();
    }
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  getWeather(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          //local storage string naar json en json naar string
          localStorage.setItem("weather", JSON.stringify(data));
          // save timestamp
          localStorage.setItem("timestamp", Date.now());

          this.displayWeather(data);
        });
  }

    displayWeather(data) {
        const weather = data.weather[0].main;
        document.querySelector(".weather__main").innerText = weather;
        const weather__discr = data.weather[0].description;
        document.querySelector(".weather__description").innerText = weather__discr;
        const icon = data.weather[0].icon;
        
        const img = document.createElement("img");
        img.src= `http://openweathermap.org/img/w/${icon}.png`;
        document.querySelector(".weather__icon").appendChild(img);

    }

}