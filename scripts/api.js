// recuperatation des donnees sources
export async function getDataPhotographers() {
  const response = await fetch("./data/photographers.json");
  const dataFisheye = await response.json();

  return {
    dataPhotographers: dataFisheye.photographers,
    dataMedias: dataFisheye.media,
  };
}
