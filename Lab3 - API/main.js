import "./style.css";
import Weather from "./src/Weather.js";
import Nasa from "./src/Nasa.js";

const weatherInstance = new Weather("0fd925d2ab43ff14d4105bd5ed37684b");

const clearText = document.getElementById("clear");
const cloudyText = document.getElementById("cloudy");

if (weatherInstance.isClear()) {
  new Nasa("sbTPIuU0IrySPRwmnaUyumYTt8Ybb8tjWNatf91c");
  clearText.style.display = "block";
  cloudyText.style.display = "none";
} else {
  clearText.style.display = "none";
  cloudyText.style.display = "block";
}

