// Movie Poster 
import { Link } from 'react-router-dom';
import { secureUrl, imgSize} from '../globals/globalVariables';
import { GENRES } from '../globals/genreList';
import FavButton from './FavButton';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
import React, {useState,useEffect } from 'react';
import { endPointSingleMovie, apiKey, engLang } from '../globals/globalVariables';

function MoviePoster ({movie, isFav}) {
    const [isOpen, setOpen] = useState(false)
    const [Trailer, setTrailer] = useState(false);

    //trailer
    useEffect(() => {
        const fetchTrailer = async() => {
            const trailerlist = await fetch(`${endPointSingleMovie}${movie.id}/videos?${apiKey}${engLang}`);
            let Trailer = await trailerlist.json();
            setTrailer(Trailer);
         
        }
        fetchTrailer();
    },[movie.id]);
    
    const trailerLink = () => {
        const trailer = Trailer.results?.find (vid => vid.name === 'Official Trailer')
   
        return (
            <div>
          
            <React.Fragment>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={trailer?.key} onClose={() => setOpen(false)} />

            <button className="trailer-button" onClick={()=> setOpen(true)}>Watch Trailer</button>
            </React.Fragment>
         
          </div>
        )
    }
  
    function getGenreName(id) {
        const thisgenre = GENRES.filter(genre => genre.id === id)
    return (
            thisgenre[0].name
        )
    }
    return (
        <div className='movie-poster-wrapper'>
            <section className='movie-poster'key={movie.id}>
                <FavButton
                isFav={isFav} 
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
                        {trailerLink()}
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
        </div>
    )
};
export default MoviePoster;