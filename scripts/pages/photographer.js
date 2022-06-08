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
  //afficher city
  for (let i = 0; i < photographers.length; i++) {
    if (photographers[i].id == ID) {
      document.getElementById("city").textContent = photographers[i].city;
    }
  }
  // aficher tagline
  for (let i = 0; i < photographers.length; i++) {
    if (photographers[i].id == ID) {
      document.getElementById("tagline").textContent = photographers[i].tagline;
    }
  }
  // afficher photo de profil
  for (let i = 0; i < photographers.length; i++) {
    if (photographers[i].id == ID) {
      const avatar = document.getElementById("avatar");
      avatar.setAttribute(
        "src",
        `assets/photographers/${photographers[i].portrait}`
      );
    }
  }
  //afficher media
  const mediaGroup = document.getElementById("mediaGroup");
  for (let i = 0; i < media.length; i++) {
    if (media[i].photographerId == ID) {
      // afficher les medias
      let mediaReceive = new MediaFactory(media[i]);
      mediaGroup.appendChild(mediaReceive.createCard());
    }
  }
}

async function init() {
  // Récupère les datas des photographes
  const { photographers, media } = await getPhotographer();

  displayData(photographers, media);
}

init();
