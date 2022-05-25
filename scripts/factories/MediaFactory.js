class MediaFactory {
  constructor(data) {
    //verifie si y a une clef
    if ("image" in data) {
      return new Picture(data);
    } else {
      return new Video(data);
    }
  }
}
