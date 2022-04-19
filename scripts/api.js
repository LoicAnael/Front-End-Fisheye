// recuperatation des donnees sources
export async function getDataPhotographers() {
  const response = await fetch("./data/photographers.json");
  const dataFisheye = await response.json();
  const dataPhotographers = [...dataFisheye.photographers];
  const dataMedias = [...dataFisheye.media];
  return {
    dataPhotographers,
    dataMedias,
  };
}
