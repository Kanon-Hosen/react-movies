import React from 'react';
import {useState, useEffect} from 'react';
import Movie from './Movie';

const Movies = () => {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        fetch('movies.json')
        .then(res => res.json())
        .then(data =>setMovies(data))
    } , [])
    console.log(movies)
    return (
        <div className='movie'>
            {
                movies.map(movie => <Movie
                    key={movie.film_id}
                    movie={movie} />)
            }
        </div>
    );
};

export default Movies;