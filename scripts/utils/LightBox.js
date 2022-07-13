class Lightbox {
  static medias = [];
  constructor(id) {
    this.index = Lightbox.medias.findIndex((e) => {
      return e.id == id;
    });

    document.getElementById("modalLightBox").style.display = "flex";
    document
      .getElementById("customInfo")
      .appendChild(Lightbox.medias[this.index].createCardLightBox());

    // aler a droite
    const right = document.getElementById("right");
    right.addEventListener("click", () => {
      this.index = (this.index + 1) % Lightbox.medias.length;
      document.getElementById("customInfo").innerHTML = "";
      document
        .getElementById("customInfo")
        .appendChild(Lightbox.medias[this.index].createCardLightBox());
    });

    // aller a gauche
    const left = document.getElementById("left");
    left.addEventListener("click", () => {
      if (this.index === 0) {
        this.index = this.index.length;
        left.style.display = "none";
      } else {
        left.style.display = "flex";
        this.index = (this.index - 1) % Lightbox.medias.length;
        document.getElementById("customInfo").innerHTML = "";
        document
          .getElementById("customInfo")
          .appendChild(Lightbox.medias[this.index].createCardLightBox());
      }
    });

    // fermer le lightgox
    const close = document.getElementById("closeLightbox");
    close.addEventListener("click", () => {
      modalLightBox.style.display = "none";
    });
  }

  static mediaFill(mediaPhotographer) {
    Lightbox.medias = mediaPhotographer;
  }
}
