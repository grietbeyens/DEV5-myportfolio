//GET https://api.nasa.gov/planetary/apod
import './style.css';
import Weather from './src/Weather.js';
import Nasa from './src/Nasa.js';

const weatherInstance = new Weather("0fd925d2ab43ff14d4105bd5ed37684b");
const nasaInstance = new Nasa("sbTPIuU0IrySPRwmnaUyumYTt8Ybb8tjWNatf91c");

// if(weather.displayWeather === "Clouds") {
//     document.querySelector(".weather__main").innerText = "looks like todays weather is " + weather.displayWeather;
// }
