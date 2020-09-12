'use strict';

window.onload = function () {

	let numberOfFilms;

	function start() {
		numberOfFilms = +prompt('Сколько фильмов Вы посмотрели', '');
		while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
			numberOfFilms = +prompt('Сколько фильмов Вы посмотрели', '');
		}
	}

	start();


	const personalMoviesDB = {
		count: numberOfFilms,
		movies: {},
		actors: {},
		genres: [],
		privat: true
	};


	function rememberMyFilms() {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его от 1 до 5?', '');
			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMoviesDB.movies[a] = b;
				console.log('Отлично!');
			} else {
				console.log('Ошибка!');
				i--;
			}
		}
	}

	rememberMyFilms();


	function writeYourGenres() {
		for (let i = 1; i <= 3; i++) {
			const c = prompt(`Ваш любимый жанр № ${i}`, '');
			personalMoviesDB.genres[i - 1] = c;
		}
	}

	writeYourGenres();




	function detectPersonalLevel() {
		if (personalMoviesDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
			console.log('Вы классический зритель');
		} else if (personalMoviesDB.count >= 31) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	}

	detectPersonalLevel();

	function showMyDB(hidden) {
		if (!hidden) {
			console.log(personalMoviesDB);
		}
	}

	showMyDB(personalMoviesDB.privat);

};