"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// let answerMovies = 2;

// while (answerMovies > 0){
    
//     let a = prompt('Один из последних просмотренных фильмов',''),
//         b = prompt('На сколько оцените его?','');
//     if (a != null && a != '' && a.length < 50 && b != null && b != '') {
//         personalMovieDB.movies[a] = b;
//     } else { 
//         answerMovies++;
//     }
//     answerMovies--
// }

// for (let i = 1; i <= 2; i++){
//     let a = prompt('Один из последних просмотренных фильмов','');
//     let b = prompt('На сколько оцените его?','');
//     if (a == null || a == '' || a.length > 50 || b == null || b == '') {
//         i--;
//     } else personalMovieDB.movies[a] = b;
    
// }

console.log (personalMovieDB);

if (personalMovieDB.count > 0 && personalMovieDB.count <= 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30){
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30){
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}


