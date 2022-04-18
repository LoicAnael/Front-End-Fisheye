class ImgFactory {
  creatingHTML(photographer) {
    let eltImage = document.createElement("img");
    eltImage.setAttribute("src", photographer.image);
    eltImage.setAttribute("alt", photographer.alt);
    eltImage.setAttribute("role", "button");
    return eltImage;
  }
}
//creation des cartes protographes en fonction des donnees .json
class PhotographerFactory {
  createPhotographer(photographer) {
    let imgFactory = new ImgFactory().creatingHTML(photographer);
    const ARTICLE = document.createElement("article");
    ARTICLE.className = "photographers-grid";
    let templatePhotographer = `
      <a href="./photographer.html?id=${photographer.id}">
      ${imgFactory.outerHTML}
      <h2 class="name">${photographer.name}</h2>
      </a>
      <p class="location">${photographer.city}, ${photographer.country}</p>
      <p class="tagline">${photographer.tagline}</p>
      <p class="price">${photographer.price}€/jour</p>
      `;
    ARTICLE.innerHTML = templatePhotographer;
    return ARTICLE;
  }
}
// Récupération du tableau des photographes
export function displayPhotographers({ dataPhotographers }) {
  const photographersSection = document.querySelector(".photographers_section");
  // remplissage de la section "photographers_section" avec tous les photographes
  dataPhotographers.forEach((photographer) => {
    photographersSection.appendChild(
      new PhotographerFactory().createPhotographer(photographer)
    );
  });
}
