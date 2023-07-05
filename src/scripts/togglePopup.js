export default function showPopup() {
  const moviePosters = document.querySelectorAll('.movies__front');
  const closeElements = document.querySelectorAll('.movies__close');
  let popupElement;

  moviePosters.forEach((poster) => {
    popupElement = poster.nextElementSibling;

    poster.addEventListener('click', () => {
      popupElement.classList.toggle('movies__popup--show');
    })
  })

  closeElements.forEach((close) => {
    close.addEventListener('click', () => {
      popupElement.classList.toggle('movies__popup--show');
    })
  })
}