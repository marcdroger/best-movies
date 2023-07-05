export default function showPopup() {
  const moviePosters = document.querySelectorAll('.movies__front');

  moviePosters.forEach((poster) => {
    let popupElement = poster.nextElementSibling;

    let videoElement = popupElement.childNodes[0];

    let closeElement = popupElement.childNodes[1];

    console.log(closeElement);

    poster.addEventListener('click', () => {
      popupElement.classList.toggle('movies__popup--show');
      videoElement.play();
    })

    closeElement.addEventListener('click', () => {
      popupElement.classList.toggle('movies__popup--show');
      videoElement.pause();
    })
  })
}