<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    //get all games once vue has rendered
    const movies = document.querySelectorAll('.movies__item');

    //observe every game item for observer API
    movies.forEach(movie => {
      observer.observe(movie);
    })
  })
</script>
<template>
  <main>
    <ul class="movies">
      <li v-for="movie in movies" :key="movie.id" class="movies__item">
        <video class="movies__video" loop preload="metadata">
          <source :src="movie.video" type="video/mp4" />
          This browser does not support the background video playing
        </video>
        <div class="container">
          <h2 class="movies__title">{{ movie.title }}</h2>
          <div class="movies__info"><p><span>Released</span> {{ movie.release }} </p><p><span>Length </span>{{ movie.length }} min.</p><p><span> Gross </span>${{ movie.boxoffice }}M</p></div>
          <p class="movies__description"> {{ movie.description }}</p>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
    import json from './../json/movies.json';

    const observer = new IntersectionObserver(entries => {
    //loop through every game
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        //add transition class to current viewing game
        entry.target.classList.add('movies--enter');

        //prevents users having tinnitus from video audio
        entry.target.firstElementChild.volume = 0.5;

        //play background video
        entry.target.firstElementChild.play();
        entry.target.firstElementChild.classList.add('show');
      } else {
        //remove transition class
        entry.target.classList.remove('movies--enter');

        //pause current playing video if user leaves section
        entry.target.firstElementChild.pause();
        entry.target.firstElementChild.classList.remove('show');
      }
    })
  },
  {
    rootMargin: "-400px",
  }
  );

  export default {
    name: 'MoviesComponent',

    data() {
      return {
        movies: json,
      }
    }
  }

</script>