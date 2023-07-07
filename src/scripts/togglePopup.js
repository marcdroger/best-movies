export default function showPopup() {
  //get all movie poster elements
  const moviePosters = document.querySelectorAll('.movies__front');

  moviePosters.forEach((poster) => {
    //get popup element
    let popupElement = poster.nextElementSibling;

    //get video element
    let videoElement = popupElement.childNodes[0];

    //get close icon element
    let closeElement = popupElement.childNodes[1];

    //add click event for poster and toggle popup + play video
    poster.addEventListener('click', () => {
      popupElement.classList.toggle('movies__popup--show');
      videoElement.play();
    })

    //add click event for close icon and toggle popup + pause video
    closeElement.addEventListener('click', () => {
      popupElement.classList.toggle('movies__popup--show');
      videoElement.pause();

      //temporary fix for the issue of filtering but after the filter the toggle popup is not workign anymore
      //location.reload();
    })
  })
}