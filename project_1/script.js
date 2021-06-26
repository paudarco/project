'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null ||isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFimls() {
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
    
}

rememberMyFimls();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Мало фильмов');
    } else if (personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман!');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.private) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let genre= prompt(`Ваш любимый жанр под номером ${i + 1}`);
        while (genre === '' || genre == null) {
            genre= prompt(`Ваш любимый жанр под номером ${i + 1}`);
        }
        personalMovieDB.genres[i] = genre;
    }
}

writeYourGenres();

console.log(personalMovieDB);