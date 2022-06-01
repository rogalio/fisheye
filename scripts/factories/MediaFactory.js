class MediaFactory {
  constructor(data) {
    console.log(data);
    //verifie si y a une clef
    if ("image" in data) {
      console.log("hello");
      return new Picture(data);
    } else {
      return new Video(data);
    }
  }
}
