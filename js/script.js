'use strict';

window.onload = function () {

	const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели', '');

	const personalMoviesDB = {
		count: numberOfFilms,
		movies: {},
		actors: {},
		genres: [],
		privat: false
	};

	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько оцените его от 1 до 5?', ''),
			e = prompt('Какой актер Вам запомнился?', ''),
			f = prompt('В каком жанре этот фильм?', '');

			if(a != null && b != null && a != '' && b!= '' && a.length < 50){
				personalMoviesDB.movies[a] = b;
				console.log('Отлично!');
			} else {
				console.log('Ошибка!');
				i--;
			}

		personalMoviesDB.movies[a] = b;
		personalMoviesDB.actors = e;
		personalMoviesDB.genres = f;
	}
	
	if (personalMoviesDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMoviesDB.count >= 31) {
		console.log('Вы киноман');
	} else  {
		console.log('Произошла ошибка');
	}


	console.log(personalMoviesDB);
};