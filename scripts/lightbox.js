export default class LightBox {
  constructor() {
    this.currentIndex = 0;
  }
  // Initialisation lightbox sur le click + navigation
  lightboxOpen(mediaItems, mediaName) {
    let selectMedias = document.querySelectorAll(".ph-media");
    selectMedias.forEach((media, index) =>
      media.addEventListener("click", () => {
        let lightBoxMedia = document.getElementById("lightbox-media");
        let lightBoxName = document.getElementById("lightbox-name");
        let mediaDisplay = mediaItems[index];
        let nameDisplay = mediaName[index];
        let openLightbox = document.querySelector(".lightbox");
        openLightbox.classList.add("show");
        openLightbox.setAttribute("aria-hidden", "false");
        lightBoxMedia.innerHTML = `${mediaDisplay}`;
        lightBoxName.innerHTML = `${nameDisplay}`;
        //hidding main content and modal
        document
          .querySelector(".main-content")
          .setAttribute("aria-hidden", "true");
        document
          .querySelector("#modal-container")
          .setAttribute("aria-hidden", "true");
      })
    );

    this.previous(mediaItems, mediaName);
    this.keyPrevious(mediaItems, mediaName);
    this.next(mediaItems, mediaName);
    this.keyNext(mediaItems, mediaName);
    this.close();
    this.keyClose();
  }

  // Fermeture de la lightbox
  handleClose() {
    let lightbox = document.querySelector(".lightbox");
    lightbox.classList.remove("show");
    lightbox.setAttribute("aria-hidden", "true");
    //display main content and modal
    document
      .querySelector(".main-content")
      .setAttribute("aria-hidden", "false");
    document
      .querySelector("#modal-container")
      .setAttribute("aria-hidden", "false");
  }
  close() {
    document.querySelector(".close-lightbox").addEventListener("click", () => {
      this.handleClose();
    });
  }

  // Média précédent
  handlePrevious(mediaItems, mediaName) {
    this.currentIndex -= 1;
    //si l'index est inferieure a 0 on la reaffecte la valeur du dernier element des medias
    if (this.currentIndex < 0) {
      this.currentIndex = mediaItems.length - 1;
    }
    let lightBoxMedia = document.getElementById("lightbox-media");
    let lightBoxName = document.getElementById("lightbox-name");
    let mediaDisplay = mediaItems[this.currentIndex];
    let nameDisplay = mediaName[this.currentIndex];
    lightBoxMedia.innerHTML = `${mediaDisplay}`;
    lightBoxName.innerHTML = `${nameDisplay}`;
  }
  previous(mediaItems, mediaName) {
    let previous = document.getElementById("previous");
    previous.addEventListener("click", () => {
      this.handlePrevious(mediaItems, mediaName);
    });
  }

  // Média suivant
  handleNext(mediaItems, mediaName) {
    this.currentIndex += 1;
    //si l'index est au dernier element des medias, on reinitialise sa valeur
    if (this.currentIndex > mediaItems.length - 1) {
      this.currentIndex = 0;
    }
    let lightBoxMedia = document.getElementById("lightbox-media");
    let lightBoxName = document.getElementById("lightbox-name");
    let mediaDisplay = mediaItems[this.currentIndex];
    let nameDisplay = mediaName[this.currentIndex];
    lightBoxMedia.innerHTML = `${mediaDisplay}`;
    lightBoxName.innerHTML = `${nameDisplay}`;
  }
  next(mediaItems, mediaName) {
    let next = document.getElementById("next");
    next.addEventListener("click", () => {
      this.handleNext(mediaItems, mediaName);
    });
  }

  ////////navigations clavier///////////
  //fermeture via la touche Echapper
  keyClose() {
    document.addEventListener("keyup", (e) => {
      if (e.key == "Escape") {
        this.handleClose();
      }
    });
  }
  // Média précédent
  keyPrevious(mediaItems, mediaName) {
    document.addEventListener("keyup", (e) => {
      console.log(e.code);
      if (e.key == "ArrowLeft") {
        this.handlePrevious(mediaItems, mediaName);
      }
    });
  }
  // Média suivant
  keyNext(mediaItems, mediaName) {
    document.addEventListener("keyup", (e) => {
      if (e.key == "ArrowRight") {
        this.handleNext(mediaItems, mediaName);
      }
    });
  }
}
