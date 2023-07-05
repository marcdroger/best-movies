export default function showPopup() {
  const moviePosters = document.querySelectorAll('.movies__front');

  moviePosters.forEach((poster) => {
    let next = poster.nextElementSibling;

    poster.addEventListener('click', () => {
      next.classList.toggle('movies__popup--show');
    })
  })

  console.log(moviePosters);
}