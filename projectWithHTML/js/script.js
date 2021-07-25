'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const ad = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          moviesList = document.querySelector('.promo__interactive-list'),
          addBlock = document.querySelector('form.add'),
          addInput = addBlock.querySelector('.adding__input'),
          isFavorite = addBlock.querySelector('[type="checkbox"]');
        //   deleteBtns = moviesList.querySelectorAll('.delete');
    
    const deleteAdv = (arr) => {
        arr.forEach(item => item.remove());
    };


    const makeChanges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = "url('img/bg.jpg')";
    };

    const sortArr = (arr) => {
        arr.sort();
    };
    
    function loadMovies(films, parent) {
        parent.innerHTML = '';
        films.sort().forEach((film, key) => {
            parent.insertAdjacentHTML('beforeend', `
                <li class='promo__interactive-item'>
                    ${key + 1}. ${film} 
                    <div class="delete"></div>
                </li>
            `);
            // parent.innerHTML += `
            //     <li class='promo__interactive-item'>
            //         ${key + 1}. ${film} 
            //         <div class="delete"></div>
            //     </li>
            // `;
        });

        parent.querySelectorAll('.delete').forEach((btn, i) => btn.addEventListener('click', event => {
            films.splice(i, 1);
            loadMovies(films, parent);
        }));
    }
    
    addBlock.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;

        if (newFilm) {
            newFilm = newFilm.substr(0, 1).toUpperCase() + newFilm.substr(1, newFilm.length);
            
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substr(0, 22)}...`;
            }

            movieDB.movies.push(newFilm);

            if (isFavorite.checked) {
                console.log('Добавляем любимый фильм!');
            }
            sortArr(movieDB.movies);
            loadMovies(movieDB.movies, moviesList);
            event.target.reset();
        }
    });


    deleteAdv(ad);
    makeChanges();
    sortArr(movieDB.movies);
    loadMovies(movieDB.movies, moviesList);
});