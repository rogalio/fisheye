function photographerFactory(data) {
  const { name, portrait, city, tagline, price, id } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const priceOfArtist = document.createElement("p");
    const cityOfWork = document.createElement("p");
    const quote = document.createElement("p");
    const article = document.createElement("article");
    const img = document.createElement("img");
    +img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const link = document.createElement("a");
    link.appendChild(article);
    link.setAttribute("href", `photographer.html?${id}`);
    article.appendChild(img);
    article.appendChild(h2);
    cityOfWork.textContent = city;
    cityOfWork.classList.add("city");
    article.appendChild(cityOfWork);
    quote.textContent = tagline;
    quote.classList.add("quote");
    article.appendChild(quote);
    priceOfArtist.textContent = `${price}$/heure`;
    priceOfArtist.classList.add("price");
    article.appendChild(priceOfArtist);

    return link;
  }
  return { name, picture, getUserCardDOM };
}
