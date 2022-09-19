// Movie Poster 
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiKey, secureUrl, imgSize} from '../globals/globalVariables';
import { GENRES } from '../globals/genreList';
import FavButton from './FavButton';
import { useParams } from 'react-router-dom';
import isFav from "../utilities/isFav";
import { useSelector, useDispatch } from 'react-redux';
import MoviePoster from "../components/MoviePoster";
import cloud from '../image/cloud-movie-logo.svg'

function MovieGenre({seletedGenre}) 
// 
{
    const favs = useSelector(state => state.favs.items);
    const [movieData, setMovieData] = useState(false);
 
    useEffect( () => {
        const fetchMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${seletedGenre}`);
            let data = await res.json();
            setMovieData(data);
        }
        fetchMovie();
    }, [seletedGenre]);

    return (
  
        <div id='movie-poster' className='genremovie'>
 
        {movieData.results?.map((movie) => 
             <MoviePoster 
             key={movie.id} 
             movie={movie}
             isFav={isFav(favs, null, movie.id)} />
             )}
        </div>
    )
};
export default MovieGenre;