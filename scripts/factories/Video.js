class Video {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.video = data.video;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
  }
  createCard() {
    const div = document.createElement("div");
    const title = document.createElement("p");
    const video = document.createElement("video");
    const source = document.createElement("source");
    div.appendChild(title);
    div.appendChild(video);
    div.appendChild(source);
    title.textContent = this.title;
    //remplacer image par asset/....
    source.setAttribute("src", this.video);
    image.setAttribute("type", "video/mp4");
    return div;
  }
}

// rajouter les images dans le dossier  images/photograpers
