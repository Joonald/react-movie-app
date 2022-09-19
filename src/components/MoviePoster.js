// Movie Poster 
import { Link } from 'react-router-dom';
import { secureUrl, imgSize} from '../globals/globalVariables';
import { GENRES } from '../globals/genreList';
import FavButton from './FavButton';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
import React, {useState,useEffect } from 'react';
import { endPointSingleMovie, apiKey, engLang } from '../globals/globalVariables';
import cloud from '../image/cloud-movie-logo.svg';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                <section className='img-poster'>
                <div className='rating-box-poster'>
                    <FavButton
                    isFav={isFav} 
                    movie={movie}
                    />
                    <div className='poster'>
                        <div positon='relative'>
                        <FontAwesomeIcon icon={faCloud} className ="rating-cloud-poster" />
                        <p className='rating-poster'>{Math.round(movie.vote_average * 10)}%</p>
                        </div>
                    </div>
                </div>
                {movie.poster_path == null ?                    
                <img src={cloud} className='placeholder-poster'alt={movie.title} />:
                <img src={`${secureUrl}${imgSize}${movie.poster_path}`} alt={movie.title} />}
                </section>
                <section className='movie-content'>
                    <div className='movie-text'>
                        <h3 className='movie-title'>{movie.title}</h3>
                        <p>
                        {movie.genre_ids ? (
                            movie.genre_ids.map((id) => {
                                let genrename = getGenreName(id)
                                return (
                                <span className='genre' key={id}>{genrename}  </span>
                                )
                            }
                        )
                        )
                        : (
                            movie.genres.map((id) => {
                                return (
                                <span className='genre' key={id}>{id.name}  </span>
                                    )
                                }
                            )
                        )
                        }
                        </p>
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