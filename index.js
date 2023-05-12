
const numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let lastWatchedMovie = prompt('Один из последних просмотренных Вами фильмов?', '');
let grade = prompt('Как Вы оцените его?', '');

personalMovieDB.movies[lastWatchedMovie] = grade;

console.log(personalMovieDB);

lastWatchedMovie = prompt('Один из последних просмотренных Вами фильмов?', '');
grade = prompt('Как Вы оцените его?', '');

personalMovieDB.movies[lastWatchedMovie] = grade;
console.log(personalMovieDB);