'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let movie = prompt('Последний просмотренный фильм:', '');

personalMovieDB.movies[movie] = +prompt('На сколько вы оцение его?', '');

movie = prompt('Последний просмотренный фильм:', '');

personalMovieDB.movies[movie] = +prompt('На сколько вы оцение его?', '');

console.log(personalMovieDB);