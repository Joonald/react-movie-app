// Imports
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiKey, secureUrl, imgSize, backDropSize, engLang, castSize} from '../globals/globalVariables';
import { GENRES } from '../globals/genreList';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import FavButton from './FavButton';
import isFav from "../utilities/isFav";
import { useSelector } from 'react-redux';


function SearchResult() {
    const input = useParams();
    const [movieData, setMovieData] = useState(false);

    const favs = useSelector(state => state.favs.items);


    useEffect( () => {
        const fetchMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?${apiKey}&language=en-US&query=?${input.input}&page=1&include_adult=false`);
            let data = await res.json();
            setMovieData(data);
           
        }
        fetchMovie();
        console.log('search result');

    },[]
);

function getGenreName(id) {
    const thisgenre = GENRES.filter(genre => genre.id === id)
   return (
        thisgenre[0].name
    )
}


    return (
        
        <div className='movie-poster-wrapper' id='movie-poster'>
        {movieData.results?.map((movie) => 
            <section className='movie-poster'key={movie.id}>
                <FavButton 
                isFav={isFav(favs, null, movie.id)}
                movie={movie}
                />                <img src={`${secureUrl}${imgSize}${movie.poster_path}`} alt={movie.title} />
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

export default SearchResult;