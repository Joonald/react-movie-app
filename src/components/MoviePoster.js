// Single Movie Poster 
import { useState, useEffect } from 'react';
import { endPointNowPlaying, endPointPopular, endPointTopRated, endPointUpcoming, apiKey, secureUrl, imgSize} from '../globals/globalVariables';

function MoviePoster () {
    const [movieData, setMovieData] = useState(false);

    useEffect( () => {
        const fetchMovie = async () => {
            const res = await fetch(`${endPointNowPlaying}${apiKey}`);
            let data = await res.json();
            setMovieData(data);
        }
        fetchMovie();
    }, []);
    
    return (
        <div className='movie-poster-wrapper'>
        {movieData.results?.map((movie) => 
            <section className='movie-poster'key={movie.id}>
                <img src={`${secureUrl}${imgSize}${movie.poster_path}`} alt={movie.title} />
                <section className='movie-content'>
                    <div className='movie-text'>
                        <h3 className='movie-title'>{movie.title}</h3>
                        <span>
                        {movie.genre_ids.map((id) =>
                            <p className='genre-text'>{id}</p>
                        )}
                        </span> 
                        <p className='release-text'>
                        {movie.release_date}
                        </p>
                        <div className='overview-text'>
                            <p>
                            {movie.overview}
                            </p>
                        </div>
                    </div>
                    <button className='more-info-btn'>More Info</button>    
                </section>
            </section>
        )}
        </div>
    )
};
export default MoviePoster;