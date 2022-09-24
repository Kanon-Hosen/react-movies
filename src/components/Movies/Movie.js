import React from 'react';
import './Movie.css'
const Movie = (props) => {
    const { film_name ,release_dates} = props.movie;
    const images = props.movie.images.poster[1].medium.film_image;
    console.log(images)
    return (
        <div>
            <div className="movie">
                <div className='movie-card'> 
                    <div className="img">
                    <img src={images} alt="" />
                    </div>    
                    <div className="text">
                        <p>{film_name}</p>
                        <h6>{release_dates[0].release_date}</h6>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Movie;