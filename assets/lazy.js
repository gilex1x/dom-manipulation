//me dice si el elemento es visible o no
const isVisible = (entry) => {
  return entry.isIntersecting;
};
//la acción que se ejecuta al ser visible mi elemento
const loadImage = (entri) => {
  const card = entri.target;
  const imageNode = card.shadowRoot.querySelector("img");
  imageNode.src = card.image;

  //remover observer
  observer.unobserve(card);
};
//creo una instancia del IntersectionObserver y le paso un callback
const observer = new IntersectionObserver((entries) => {
  entries.filter(isVisible).forEach(loadImage);
});
//asignamos el observer a un elemento
export const addImage = (image) => {
  observer.observe(image);
};
