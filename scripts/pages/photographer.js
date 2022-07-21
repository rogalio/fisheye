// variable
const mediaPhotographer = [];
const mediaGroup = document.getElementById("mediaGroup");

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

// afficher le filter
const filterPop = document.getElementById("pop");
const filterDate = document.getElementById("date");
const filterTitle = document.getElementById("title");

// filter popularité
filterPop.addEventListener("click", () => {
  console.log("hello");
  mediaPhotographer.sort((a, b) => {
    return b.likes - a.likes;
  });

  mediaGroup.innerHTML = "";
  mediaPhotographer.forEach((media) => {
    mediaGroup.appendChild(media.createCard());
  });
});

// filtrer date
filterDate.addEventListener("click", () => {
  mediaPhotographer.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  mediaGroup.innerHTML = "";
  mediaPhotographer.forEach((media) => {
    mediaGroup.appendChild(media.createCard());
  });
});

// filter titre
filterTitle.addEventListener("click", () => {
  console.log("hello");
  mediaPhotographer.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  mediaGroup.innerHTML = "";
  mediaPhotographer.forEach((media) => {
    mediaGroup.appendChild(media.createCard());
  });
});

async function displayData(photographers, media) {
  const ID = window.location.search.substring(1);
  // aficher nom
  for (let i = 0; i < photographers.length; i++) {
    if (photographers[i].id == ID) {
      document.getElementById("mainTitle").textContent = photographers[i].name;
      document.getElementById("city").textContent = photographers[i].city;
      document.getElementById("tagline").textContent = photographers[i].tagline;
      const avatar = document.getElementById("avatar");
      avatar.setAttribute(
        "src",
        `assets/photographers/${photographers[i].portrait}`
      );
      avatar.setAttribute("alt", photographers[i].name);
    }
  }

  //afficher media
  const mediaGroup = document.getElementById("mediaGroup");
  for (let i = 0; i < media.length; i++) {
    if (media[i].photographerId == ID) {
      // afficher les medias
      let mediaReceive = new MediaFactory(media[i]);
      mediaGroup.appendChild(mediaReceive.createCard());
      mediaPhotographer.push(mediaReceive);
    }
  }
  Lightbox.mediaFill(mediaPhotographer);

  //afficher prix/heure et icone
  const workHour = document.getElementById("likeBar");
  for (let i = 0; i < photographers.length; i++) {
    if (photographers[i].id == ID) {
      const info = document.createElement("p");
      const iconLike = document.createElement("i");
      workHour.appendChild(iconLike);
      workHour.appendChild(info);
      info.textContent = `${photographers[i].price}$/heure`;
      iconLike.classList.add(
        "fa-solid",
        "fa-heart",
        "w-2",
        "flex",
        "items-center"
      );
    }
  }

  // close filter
  const closeFilter = document.getElementById("closeFilter");
  const filterGroup = document.getElementById("filterGroup");
  closeFilter.addEventListener("click", () => {
    if (filterGroup.style.display != "none") {
      filterGroup.style.display = "none";
    } else {
      filterGroup.style.display = "block";
    }
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers, media } = await getPhotographer();

  displayData(photographers, media);
}

init();
