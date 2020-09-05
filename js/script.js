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
	d = prompt('Оцените его игру от 1 до 5?', ''),
	f = prompt('В каком жанре этот фильм?', ''),
	g = prompt('На сколько Вы любите этот жанр от 1 до 5?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.actors[c] = d;
personalMoviesDB.genres[f] = g;

console.log(personalMoviesDB);
};