export default class Weather {
  constructor(api_key) {
    this.apiKey = api_key;
    this.getLocation();
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
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            });
  }
}