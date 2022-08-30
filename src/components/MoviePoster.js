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
        console.log('hi');
        fetchMovie();
    }, []);
    
    return (
        <div>
        {movieData.results?.map((movie) => 
            <div key={movie.id}>
                <img src={`${secureUrl}${imgSize}${movie.poster_path}`} alt="" />
                <h2>{movie.title}</h2>
                <span>
                {movie.genre_ids.map((id) =>
                    <p>{id}</p>
                )}
                </span> 
                <p>
                {movie.release_date}
                </p>
                <p>
                {movie.overview}
                </p>
            </div>
        )}
        </div>
    )
};
export default MoviePoster;