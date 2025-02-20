// Ajout ou retrait d'un like au clic
"use strict";
export default class LikeEvent {
  constructor() {
    let gallery = document.querySelector("#photographer-gallery");
    gallery.addEventListener("click", (e) => {
      let islikeBtn = -1 !== e.target.classList.value.indexOf("fa-heart");
      console.log(islikeBtn);
      if (islikeBtn) {
        let counterLike =
          e.target.parentNode.firstElementChild.firstElementChild;
        let totalPhLikes = document.getElementById("total-likes");
        let isLiked = -1 !== e.target.classList.value.indexOf("isLiked");
        if (isLiked) {
          e.target.classList.remove("isLiked");
          e.target.classList.replace("fas", "far");
          totalPhLikes.innerHTML = parseInt(totalPhLikes.innerHTML) - 1;
          counterLike.innerHTML = parseInt(counterLike.innerHTML) - 1;
        } else {
          e.target.classList.add("isLiked");
          e.target.classList.replace("far", "fas");
          totalPhLikes.innerHTML = parseInt(totalPhLikes.innerHTML) + 1;
          counterLike.innerHTML = parseInt(counterLike.innerHTML) + 1;
        }
      }
    });
  }
}
