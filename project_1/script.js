'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    let movie = prompt('Последний просмотренный фильм:', '');
    console.log(movie);
    if (movie === '' || movie == null  || movie.length > 50) {
        i--;
        continue;
    }
    let mark;
    do {
        mark = prompt('На сколько вы оцение его?', '');
    } while (mark === '' || mark == null);
    personalMovieDB.movies[movie] = +mark;
} 

if (personalMovieDB.count < 10) {
    alert('Мало фильмов');
} else if (personalMovieDB.count < 30) {
    alert('Вы классический зритель')
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман!');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);