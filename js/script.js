'use strict';

window.onload = function() {

const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели', '');

const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
	b = prompt('На сколько оцените его от 1 до 5?', ''),
	c = prompt('Какой актер Вам запомнился?', ''),
	d = prompt('В каком жанре этот фильм?', '');


personalMoviesDB.movies[a] = b;
personalMoviesDB.actors = c;
personalMoviesDB.genres = d;

console.log(personalMoviesDB);
};