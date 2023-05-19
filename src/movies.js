// The `movies` array from the file `src/data.js`.
const movies = require("./data")

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map((film) => {
    return film.director;
  })
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDirect = movies.filter((pelicula) => {
    return pelicula.director === 'Steven Spielberg' && pelicula.genre.includes('Drama');
  });
  return spielbergDirect.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length === 0) return 0;
  const avgMovie = movies.reduce((acc, pelicula) => {
    if (pelicula.hasOwnProperty("score")) return acc + pelicula.score;
    return acc;
  }, 0);
  return Number((avgMovie / movies.length).toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => {
    return movie.genre.includes('Drama');
  });
  averageScore = scoresAverage(dramaMovies);
  return averageScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  let clonedArray =  JSON.parse(JSON.stringify(movies))
  let sortedyears = clonedArray.sort((first, second) => {

    if (first.year > second.year) {
      return 1; 
    }else if (first.year < second.year) {
      return -1;
    }
    return 0;
  });
return sortedyears;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  let newMovies=JSON.parse(JSON.stringify(movies))
  const sortedMoviesArray = newMovies.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else  {
        return -1;
      }
    }
  );
  const titulos = sortedMoviesArray.map((elemento) => {
    return elemento.title;
  })
  return titulos.slice(0, 20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
      const newMovie = { ...movie };
      const durationParts = movie.duration.split(' ');
      let totalMinutes = 0;
  
      for (let part of durationParts) {
        if (part.includes('h')) {
          totalMinutes += parseInt(part) * 60;
        } else if (part.includes('min')) {
          totalMinutes += parseInt(part);
        }
      }
  
      newMovie.duration = totalMinutes;
      return newMovie;
    });
  }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
    if ( movies.length <= 0 ) return null
    let maxAverage = 0;
    let maxYear = undefined
    let listOfYears = movies
    .map(mv=>mv.year)
    .filter((year,i,array)=>{
      return array.indexOf(year) === i
    })
    listOfYears.forEach(year => {
      let moviesByYear = movies.filter(mv=>mv.year === year)
      let scoreAvg = scoresAverage(moviesByYear)
      if ( scoreAvg > maxAverage ) {
        maxAverage = scoreAvg; 
        maxYear = year;
      }
      if ( scoreAvg === maxAverage ){
        maxYear = maxYear < year ? maxYear : year
      }
    });
    return `The best year was ${maxYear} with an average score of ${maxAverage}`
  }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
