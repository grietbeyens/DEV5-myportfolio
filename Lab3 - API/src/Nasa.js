export default class Nasa {
  constructor(api_key) {
    this.apiKey = api_key;
    this.getNasa();
  }

    getNasa() {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.displayNasa(data);
                //console.log(data);
            });
    }

    displayNasa(data) {
        //console.log(data.media_type);
        if(data.media_type === "image") {
        const img = document.createElement("img");
        img.src = data.hdurl;
        document.querySelector(".nasa__content").appendChild(img);
        } else if (data.media_type === "video") {
        const video = document.createElement("iframe");
        video.src = data.url;
        //video.classList.add(".nasa__video");
        document.querySelector(".nasa__content").appendChild(video);
        }
    }


}