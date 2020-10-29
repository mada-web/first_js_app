"use strict";

// window.onload = function () {
const personalMoviesDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMoviesDB.count = +prompt("Сколько фильмов Вы посмотрели", "");
    while (
      personalMoviesDB.count == "" ||
      personalMoviesDB.count == null ||
      isNaN(personalMoviesDB.count)
    ) {
      personalMoviesDB.count = +prompt("Сколько фильмов Вы посмотрели", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его от 1 до 5?", "");
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMoviesDB.movies[a] = b;
        console.log("Отлично!");
      } else {
        console.log("Ошибка!");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMoviesDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMoviesDB.count >= 31) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMoviesDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMoviesDB.privat) {
      personalMoviesDB.privat = false;
    } else {
      personalMoviesDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      const genres = prompt(`Ваш любимый жанр № ${i}`, "");
      if (genres == "" || genres == null) {
        console.log("Вы ввели некорректные данные");
        i--;
      } else {
        personalMoviesDB.genres[i - 1] = genres;
      }
      personalMoviesDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
    }
  },
};
// };
