class Picture {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.image = data.image;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
  }
  createCard() {
    const div = document.createElement("div");
    const title = document.createElement("p");
    const image = document.createElement("img");
    div.appendChild(title);
    div.appendChild(image);
    title.textContent = this.title;
    //remplacer image par asset/....
    image.setAttribute("src", `assets/images/${this.image}`);
    image.setAttribute("alt", this.title);
    return div;
  }
}
