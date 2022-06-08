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
    const number = document.createElement("span");
    const like = document.createElement("i");
    const numOfLikes = document.createTextNode(this.likes);
    // transfirler en nombres
    document.getElementById("likeBar").textContent =
      Number(document.getElementById("likeBar").textContent) + this.likes;
    div.appendChild(title);
    div.appendChild(video);
    div.classList.add("allMedia");
    video.classList.add("videoMedia");
    div.appendChild(source);
    title.textContent = this.title;
    //remplacer image par asset/....
    video.append(source);
    source.setAttribute("src", `assets/images/${this.video}`);
    source.setAttribute("type", "video/mp4");
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
