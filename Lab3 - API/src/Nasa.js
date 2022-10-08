export default class Nasa {
  constructor(api_key) {
    this.apiKey = api_key;
    if (
      localStorage.getItem("nasa") &&
      Date.now() - localStorage.getItem("timestamp") < 60000
    ) {
      // get weather from local storage
      this.getCached();
    } else {
      this.getNasa();
    }
  }

  getCached() {
    const nasaData = JSON.parse(localStorage.getItem("nasa"));
    this.displayNasa(nasaData);
  }

  getNasa() {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // local storage string naar json en json naar string
        localStorage.setItem("nasa", JSON.stringify(data));
        //  save timestamp
        localStorage.setItem("timestamp", Date.now());

        this.displayNasa(data);
      });
  }

  displayNasa(data) {
    if (data.media_type === "image") {
      const img = document.createElement("img");
      img.src = data.hdurl;
      img.setAttribute("alt", "nasa picture of the day");
      img.setAttribute("width", "260");
      img.setAttribute("border", "2 solid white"); 
      document.querySelector(".nasa__content").appendChild(img);
    } else if (data.media_type === "video") {
      const video = document.createElement("iframe");
      video.src = data.url;
      video.setAttribute("width", "250");
      video.setAttribute("height", "250");
      document.querySelector(".nasa__content").appendChild(video);
    }
  }
}
