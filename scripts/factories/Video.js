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
    const div2 = document.createElement("div");
    const title = document.createElement("p");
    const video = document.createElement("video");
    const source = document.createElement("source");
    const number = document.createElement("span");
    const like = document.createElement("i");
    const numOfLikes = document.createTextNode(this.likes);

    // au click sur image lightbox
    video.addEventListener("click", () => {
      new Lightbox(this.id);
    });

    // transferer en nombres
    document.getElementById("likeBarContent").textContent =
      Number(document.getElementById("likeBarContent").textContent) +
      this.likes;
    div.appendChild(video);
    div.appendChild(div2);
    div.classList.add("allMedia");
    video.classList.add("videoMedia");
    div.appendChild(source);
    div2.appendChild(title);
    div2.classList.add("flex", "justify-between");
    title.textContent = this.title;
    //remplacer image par asset/....
    video.append(source);
    source.setAttribute("src", `assets/images/${this.video}`);
    source.setAttribute("type", "video/mp4");
    source.setAttribute("tabindex", "2");
    // creer nombre  + coeur
    div2.appendChild(number);
    number.appendChild(like);
    // ajout click
    number.addEventListener("click", () => {
      this.likes = this.likes + 1;
      numOfLikes.textContent = this.likes;
      // add to likebar
      document.getElementById("likeBarContent").textContent =
        Number(document.getElementById("likeBarContent").textContent) + 1;
    });
    number.appendChild(numOfLikes);
    like.classList.add("fa-solid", "fa-heart");
    return div;
  }

  createCardLightBox() {
    const figure = document.createElement("figure");
    const video = document.createElement("video");
    const title = document.createElement("figcaption");
    figure.appendChild(video);
    figure.appendChild(title);
    video.setAttribute("src", `assets/images/${this.video}`);
    return figure;
  }
}
