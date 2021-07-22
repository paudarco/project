'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null ||isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFimls: function() {
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
        
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Мало фильмов');
        } else if (personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман!');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.private) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        // for (let i = 0; i < 3; i++) {
        //     let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`).toLowerCase();
        //     while (genre === '' || genre == null) {
        //         genre = prompt(`Ваш любимый жанр под номером ${i + 1}`).toLowerCase();
        //     }
        //     personalMovieDB.genres[i] = genre;
        // }

        for (let i = 1; i < 2; i++) {
            let genre = prompt("Введите ваши любимые жанры через запятую");
            if (genre === '' || genre == null) {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
                i--;
            } else {
                personalMovieDB.genres = genre.toLowerCase().split(', ');
            }
        }

        personalMovieDB.genres.sort();
        personalMovieDB.genres.forEach((item, key) => {
            console.log(`Любимый жанр #${key + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};
