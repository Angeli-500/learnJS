"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms) ){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms () {
    for (let i = 1; i <= 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов','');
        let b = prompt('На сколько оцените его?','');
        if (a == null || a == '' || a.length > 50 || b == null || b == '') {
            i--;
        } else personalMovieDB.movies[a] = b;
        
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30){
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}
detectPersonalLevel();

function showMyDB () {
    if (personalMovieDB.privat == false) {
    console.log (personalMovieDB);
    }
}
showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`,``);
    }
}
writeYourGenres();
