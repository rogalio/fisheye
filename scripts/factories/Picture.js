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

    // au click sur image lightbox
    image.addEventListener("click", () => {
      new Lightbox(this.id);
    });


 
    // transfirler en nombres
    document.getElementById("likeBarContent").textContent =
      Number(document.getElementById("likeBarContent").textContent) +
      this.likes;
    div.appendChild(image);
    div.appendChild(div2);
    div2.appendChild(title);
    div2.classList.add("flex", "justify-between");
    div.classList.add("allMedia");
    image.classList.add("pictureMedia");
    image.setAttribute("tabindex", "2");

    //remplacer image par asset/....
    image.setAttribute("src", `assets/images/${this.image}`);
    image.setAttribute("alt", this.title);
    //ajouter titre
    title.textContent = this.title;

    // creer nombre  + coeur
    div2.appendChild(number);
    number.appendChild(like);
    // ajout click
    number.addEventListener("click", (event) => {
      const target = event.currentTarget
      if (!target.classList.contains("like")) {
        this.likes = this.likes + 1;
        numOfLikes.textContent = this.likes;
        document.getElementById("likeBarContent").textContent =
        Number(document.getElementById("likeBarContent").textContent) + 1;
        target.classList.add("like")
      }
    })

    number.appendChild(numOfLikes);
    like.classList.add("fa-solid", "fa-heart");
    return div;
  }

  createCardLightBox() {
    const figure = document.createElement("figure");
    
    const customBox = document.getElementById("customInfo");
    const picture = document.createElement("img");
    const title = document.createElement("figcaption");
    figure.appendChild(picture);
    picture.classList.add("w-4/5", "object-cover", "mx-auto", "block");
    figure.appendChild(title);
    picture.setAttribute("src", `assets/images/${this.image}`);
    picture.setAttribute("alt", this.title);

    return figure;
  }


}
    // click lightbox on tab
    document.body.onkeyup = function(e) {
      if (e.key == " " ||
          e.code == "Space" ||      
          e.keyCode == 32      
      ) {
        document.activeElement.click();
      }
    }
