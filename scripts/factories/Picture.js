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
    const div2 = document.createElement("div");
    const title = document.createElement("p");
    const image = document.createElement("img");
    const number = document.createElement("span");
    const like = document.createElement("i");
    const numOfLikes = document.createTextNode(this.likes);
    // transfirler en nombres
    document.getElementById("likeBar").textContent =
      Number(document.getElementById("likeBar").textContent) + this.likes;
    div.appendChild(image);
    div.appendChild(div2);
    div2.appendChild(title);
    div2.classList.add("flex", "justify-between");
    div.classList.add("allMedia");
    image.classList.add("pictureMedia");

    //remplacer image par asset/....
    image.setAttribute("src", `assets/images/${this.image}`);
    image.setAttribute("alt", this.title);
    //ajouter titre
    title.textContent = this.title;

    // creer nombre  + coeur
    div2.appendChild(number);
    number.appendChild(like);
    // ajout click
    number.addEventListener("click", () => {
      this.likes = this.likes + 1;
      numOfLikes.textContent = this.likes;
      document.getElementById("likeBar").textContent =
        Number(document.getElementById("likeBar").textContent) + 1;
    });
    number.appendChild(numOfLikes);
    like.classList.add("fa-solid", "fa-heart");
    return div;

    // // creeate listener
  }

  createCardLightBox() {
    const figure = document.createElement("figure");
    const picture = document.createElement("img");
    const title = document.createElement("figcaption");
    figure.appendChild(picture);
    figure.appendChild(title);
    return figure;
  }
}
