import "./style.css";
import Weather from "./src/Weather.js";
import Nasa from "./src/Nasa.js";

const weatherInstance = new Weather("0fd925d2ab43ff14d4105bd5ed37684b");


const nasaInstance = new Nasa("sbTPIuU0IrySPRwmnaUyumYTt8Ybb8tjWNatf91c");

//hier code uitvoeren om shit te doen
//weatherInstance.getWeather()
// dan op basis van deze data  dus checken of cloudy
// dan pas de nasaInstance.display shit doen
// dat betekent dus ook dat in uw nasa de constructor niet per se de data moet ophalen
//dus eenmaal je weet wat je moet tonen kan je ofwel displayNasa doen ofwel gewoon zelf iets tonen

//console.log(weatherInstance.getWeather())
//check if cloudy
// if (test.data.weather[0].main == "Clouds") {
//     nasaInstance.getNasa();
//     nasaInstance.displayNasa();
// }
