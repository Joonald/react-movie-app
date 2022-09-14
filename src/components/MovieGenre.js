// Movie Poster 
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiKey, secureUrl, imgSize} from '../globals/globalVariables';
import { GENRES } from '../globals/genreList';
import FavButton from './FavButton';
import { useParams } from 'react-router-dom';
import isFav from "../utilities/isFav";
import { useSelector, useDispatch } from 'react-redux';

function MovieGenre({seletedGenre}) 
// 
{
    const favs = useSelector(state => state.favs.items);
    const [movieData, setMovieData] = useState(false);
 
    useEffect( () => {
        const fetchMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${seletedGenre}`);
            console.log(`https://api.themoviedb.org/3/discover/movie?${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${seletedGenre}`);
            let data = await res.json();
            setMovieData(data);
        }
        fetchMovie();
    }, [seletedGenre]);

    function getGenreName(id) {
        const thisgenre = GENRES.filter(genre => genre.id === id)
    return (
            thisgenre[0].name
        )
    };
    
    return (
  
        <div className='genremovie movie-poster-wrapper'>
 
        {movieData.results?.map((movie) => 
            <section className='movie-poster'key={movie.id}>
                <FavButton 
                isFav={isFav(favs, null, movie.id)}
                movie={movie}
                />
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
export default MovieGenre;