class Lightbox {
  static medias = [];
  constructor(id) {
    // lightbox keyDown
    window.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) {
        modalLightBox.style.display = "none";
      } else if (event.keyCode === 37) {
        this.index =
          (((this.index - 1) % Lightbox.medias.length) +
            Lightbox.medias.length) %
          Lightbox.medias.length;
        document.getElementById("customInfo").innerHTML = "";
        document
          .getElementById("customInfo")
          .appendChild(Lightbox.medias[this.index].createCardLightBox());
      } else if (event.keyCode === 39) {
        this.index =
          (((this.index - 1) % Lightbox.medias.length) +
            Lightbox.medias.length) %
          Lightbox.medias.length;
        document.getElementById("customInfo").innerHTML = "";
        document
          .getElementById("customInfo")
          .appendChild(Lightbox.medias[this.index].createCardLightBox());
      }
    });
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

    // aller a gauche f
    const left = document.getElementById("left");
    left.addEventListener("click", () => {
      this.index =
        (((this.index - 1) % Lightbox.medias.length) + Lightbox.medias.length) %
        Lightbox.medias.length;
      document.getElementById("customInfo").innerHTML = "";
      document
        .getElementById("customInfo")
        .appendChild(Lightbox.medias[this.index].createCardLightBox());
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
