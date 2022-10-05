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
  }
}