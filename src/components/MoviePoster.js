// Movie Poster 
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiKey, secureUrl, imgSize} from '../globals/globalVariables';
import { GENRES } from '../globals/genreList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


function MoviePoster ({sort}) {
    const [movieData, setMovieData] = useState(false);
    const [isActive, setActive] = useState(false);

    const favMovie = () => {
        setActive(!isActive);
      };


    useEffect( () => {
        const fetchMovie = async () => {
            const res = await fetch(`${sort}${apiKey}`);
            let data = await res.json();
            setMovieData(data);
        }
        fetchMovie();
    }, [sort]);
function getGenreName(id) {
    const thisgenre = GENRES.filter(genre => genre.id === id)
   return (
        thisgenre[0].name
    )
}
    return (
        <div className='movie-poster-wrapper'>
        {movieData.results?.map((movie) => 
            <section className='movie-poster'key={movie.id}>
                                <FontAwesomeIcon className='heart' icon={faHeart} className ={isActive ? 'favHeart':'heart'} 
                    onClick={favMovie} />
                <img src={`${secureUrl}${imgSize}${movie.poster_path}`} alt={movie.title} />
                <section className='movie-content'>

                    <div className='movie-text'>

                 
                        <h3 className='movie-title'>{movie.title}</h3>
                        <span>
                        {movie.genre_ids.map((id) =>{
                            let genrename = getGenreName(id)
                            return (
                            <p className='genre' key={id}>{genrename}</p>
                        )}
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
                    <button className='more-info-btn'><Link to={`/single/${movie.id}`}>More Info</Link></button>    
                </section>
            </section>
        )}
        </div>
    )
};
export default MoviePoster;