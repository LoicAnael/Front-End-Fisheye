// Création Profil Photographe
import { contactModal } from "./modal.js";

export async function displayPhotographerProfil(dataFisheye) {
  const PHOTOGRAPHERS_DATA = dataFisheye.dataPhotographers;
  //recuperation de la valeur de ID dans l'URL
  /*const ID = window.location.search.substring(1).split("=")[1];*/

  let searchParam = new URLSearchParams(window.location.search);
  const ID = searchParam.get("id");
  const PHOTOGRAPHERS = PHOTOGRAPHERS_DATA.find(
    (photographer) => photographer.id == ID
  );
  const photographerProfileArticle =
    document.getElementById("ph-profil-header");
  const templatePhotographerProfil = `
            <article  class="ph-profil">
                <div class='ph-infos'>
                    <h2>${PHOTOGRAPHERS.name}</h2>
                    <p class="ph-city">${PHOTOGRAPHERS.city}, ${PHOTOGRAPHERS.country}</p>
                    <p class="ph-tagline">${PHOTOGRAPHERS.tagline}</p>
                </div>
                <button id="btn-contact" >Contactez-moi</button>
                <a href='#'><img src="${PHOTOGRAPHERS.image}" alt="${PHOTOGRAPHERS.alt}"></a>
            </article>
            `;

  photographerProfileArticle.innerHTML = templatePhotographerProfil;
  contactModal(PHOTOGRAPHERS);
}
