class Lightbox {
  static medias = [];
  constructor(id) {
    this.index = Lightbox.medias.find((e) => {
      return e.id == id;
    });
    document.getElementById("modalLightBox").style.display = "flex";
    document
      .getElementById("customInfo")
      .appendChild(Lightbox.medias[this.index].createCardLightBox());
  }

  static mediaFill(mediaPhotographer) {
    Lightbox.medias = mediaPhotographer;
  }
}
