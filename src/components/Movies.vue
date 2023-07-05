<template>
  <main>
    <ul class="movies">
      <li v-for="movie in movies" :key="movie.id" class="movies__item">
        <div class="movies__front">
          <img class="movies__poster" :src="movie.poster" :alt="movie.title" />
          <h1>{{ movie.title }}</h1>
        </div>
        <div class="movies__popup" :class="{ active: showPopup }">
          <div class="movies__container">
            <h2 class="movies__title">{{ movie.title }}</h2>
            <div class="movies__info"><p><span>Released</span> {{ movie.release }} </p><p><span>Length </span>{{ movie.length }} min.</p><p><span> Gross </span>${{ movie.boxoffice }}M</p></div>
            <p class="movies__description"> {{ movie.description }}</p>
            <video class="movies__video" loop preload="metadata">
              <source :src="movie.video" type="video/mp4" />
              This browser does not support the background video playing
            </video>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
  import json from './../json/movies.json';

  export default {
    name: 'MoviesComponent',

    data() {
      return {
        movies: json,
      }
    }
  }

</script>