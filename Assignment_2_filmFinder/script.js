/* --       Add movies to the page      -- */

/* alternative way, I found the sencond option easier to read and I think the second one is more "bugs proof" */

// const addMoviesToDOM = function (movie) {
//     const movieUL =  document.getElementById('movies-list')

//     let movieList = movies.map(movie => {
//         return '<li>'+'<img src='+movie.poster+'></img></li>';
//     }).join('')
     
//     movieUL.innerHTML = movieList
// }

// addMoviesToDOM()

const addMoviesToDOM = function (array) {
    const moviesListUL = document.getElementById('movies-list')

    const imdbURL = "https://www.imdb.com/title/"

    array.forEach(item => {
        let movieLIs = document.createElement('li')
        let linksIMDB = document.createElement('a')
        let moviePosters = document.createElement('img')
        moviePosters.setAttribute('src', item.poster)
        linksIMDB.setAttribute('href', imdbURL+item.imdbID)
        movieLIs.appendChild(linksIMDB).appendChild(moviePosters)
        moviesListUL.appendChild(movieLIs)
    })

    console.log(moviesListUL)
}

addMoviesToDOM(movies)

/* --       Delete Movies Function      -- */

const deleteMovies = function () {
    const moviesListUL = document.getElementById('movies-list')
    while (moviesListUL.firstChild) {
        moviesListUL.firstChild.remove();
    }
}

/* --       Making the filters          -- */

const filterButtons = document.getElementsByClassName('filter-buttons')

Array.from(filterButtons).forEach(button => {
    button.onclick = function (event) {
       switch(button.id) {
           case "latest-movies":
               const moviesFiltered = movies.filter((movie) =>{
                   return movie.year > "2014";
                })
                deleteMovies()
                addMoviesToDOM(moviesFiltered)
               break;
            case "avenger-movies":
                const moviesFiltered2 = movies.filter((movie) =>{
                   return movie.title.toLowerCase().includes("avenger");
                })
                deleteMovies()
                addMoviesToDOM(moviesFiltered2)
                break;
            case "x-men-movies":
                const moviesFiltered3 = movies.filter((movie) =>{
                    return movie.title.toLowerCase().includes("x-men");
                })
                deleteMovies()
                addMoviesToDOM(moviesFiltered3)
                break;
            case "princess-movies":
                const moviesFiltered4 = movies.filter((movie) =>{
                    return movie.title.toLowerCase().includes("princess");
                })
                deleteMovies()
                addMoviesToDOM(moviesFiltered4)
                break;
            case "batman-movies":
                const moviesFiltered5 = movies.filter((movie) =>{
                return movie.title.toLowerCase().includes("batman");
                })
                deleteMovies()
                addMoviesToDOM(moviesFiltered5)
            break;
        }
    }
})



