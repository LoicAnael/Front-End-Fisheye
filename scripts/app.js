"use strict";
import { displayPhotographers } from "./index.js";
import { getDataPhotographers } from "./api.js";
import DropdownSort from "./dropdown.js";
import { displayPhotographerProfil } from "./photographer-profil.js";
import GaleryBuilder from "./galerieBuild.js";

async function app() {
  try {
    const DATAFISHEYE = await getDataPhotographers();
    if (window.location.pathname.includes("/photographer.html")) {
      // Affichage Profil Photographe
      displayPhotographerProfil(DATAFISHEYE);
      //affichage des medias de la galerie
      new GaleryBuilder().photographersMedias(DATAFISHEYE);
      // Affichage Bouton dropdown
      new DropdownSort().dropdown(DATAFISHEYE);

      return;
    }
    // Affichage Page d'Accueil
    displayPhotographers(DATAFISHEYE);
  } catch (err) {
    console.log(err);
  }
}
app();
