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
    const rightIcon = document.getElementById("right");
    const closeIcon = document.getElementById("closeLightbox");
    right.addEventListener("click", () => {
      this.index = (this.index + 1) % Lightbox.medias.length;
      document.getElementById("customInfo").innerHTML = "";
      document
        .getElementById("customInfo")
        .appendChild(Lightbox.medias[this.index].createCardLightBox());
      document.getElementById("customInfo").appendChild(rightIcon);
      document.getElementById("customInfo").appendChild(left);
      document.getElementById("customInfo").appendChild(closeIcon);
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
      document.getElementById("customInfo").appendChild(rightIcon);
      document.getElementById("customInfo").appendChild(left);
      document.getElementById("customInfo").appendChild(closeIcon);
    });

    // fermer le lightgox
    closeIcon.addEventListener("click", () => {
      modalLightBox.style.display = "none";
    });
    document.getElementById("customInfo").appendChild(closeIcon);
  }

  static mediaFill(mediaPhotographer) {
    Lightbox.medias = mediaPhotographer;
  }
}
