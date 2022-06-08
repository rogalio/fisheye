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
    const number = document.createElement("span");
    const like = document.createElement("i");
    const numOfLikes = document.createTextNode(this.likes);
    // transfirler en nombres
    document.getElementById("likeBar").textContent =
      Number(document.getElementById("likeBar").textContent) + this.likes;
    div.appendChild(title);
    div.appendChild(image);
    div.classList.add("allMedia");
    image.classList.add("pictureMedia");
    title.textContent = this.title;
    //remplacer image par asset/....
    image.setAttribute("src", `assets/images/${this.image}`);
    image.setAttribute("alt", this.title);
    // creer nombre  + coeur
    div.appendChild(number);
    number.appendChild(like);
    // ajout click
    number.addEventListener("click", () => {
      this.likes = this.likes + 1;
      numOfLikes.textContent = this.likes;
    });
    number.appendChild(numOfLikes);
    like.classList.add("fa-solid", "fa-heart");
    return div;
  }
}
