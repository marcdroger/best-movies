<template>
  <main>
    <div class="input">
      <input class="input__search" v-model="search" type="text" placeholder="Search film database" />
      <p>Categories: </p>
      <select class="input__category" v-model="category">
        <option value="">All</option>
        <option value="Action">Action</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="History">History</option>
        <option value="Western">Western</option>
      </select>
    </div>
    <ul class="movies">
      <p v-if="!filterList.length" class="movies__empty">
        No movies found for your criteria &#128532;
      </p>
      <li v-for="movie in filterList" :key="movie.id" class="movies__item">
        <div class="movies__front">
          <img class="movies__poster" :src="movie.poster" :alt="movie.title" />
          <h1>{{ movie.title }}</h1>
        </div>
        <div class="movies__popup">
          <video class="movies__video" loop preload="none">
            <source :src="movie.video" type="video/mp4" />
            This browser does not support the background video playing
          </video>
          <img class="movies__close" src="/img/close.svg" alt="close popup" />
          <div class="movies__container">
            <h2 class="movies__title">{{ movie.title }}</h2>
            <div class="movies__info"><p><span>Released</span> {{ movie.release }} </p><p><span> Category </span>{{ movie.category }}</p><p><span>Length </span>{{ movie.length }} min.</p><p><span> Gross </span>${{ movie.boxoffice }}M</p></div>
            <p class="movies__description"> {{ movie.description }}</p>
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
        search: '',
        category: ''
      }
    },

    computed: {
      filterList() {
        return this.movies.filter(movie => !movie.category.indexOf(this.category) && movie.title.toLowerCase().includes(this.search.toLocaleLowerCase()))
      }
    }
  }

</script>