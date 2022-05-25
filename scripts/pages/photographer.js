async function getPhotographer() {
  //on cherche url + enleve ?
  const ID = window.location.search.substring(1);
  console.log(ID);

  // URL
  const PhotographURL = "data/photographers.json";

  let response = await fetch(PhotographURL);
  // parse la reponse
  let data = await response.json();
  return data;
}

async function displayData(photographers, media) {
  const ID = window.location.search.substring(1);
  // aficher nom
  for (let i = 0; i < photographers.length; i++) {
    if (photographers[i].id == ID) {
      document.getElementById("mainTitle").textContent = photographers[i].name;
    }
  }
  //afficher media
  for (let i = 0; i < media.length; i++) {
    if (media[i].photographerId == ID) {
      // afficher les medias
      let mediaReceive = new MediaFactory(media[i]);
      mediaReceive.createCard();
    }
  }
}

async function init() {
  // Récupère les datas des photographes
  const { photographers, media } = await getPhotographer();

  displayData(photographers, media);
}

init();
