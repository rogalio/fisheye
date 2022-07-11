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
  }

  static mediaFill(mediaPhotographer) {
    Lightbox.medias = mediaPhotographer;
  }
}
