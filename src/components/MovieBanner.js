// Movie Banner
import React, {useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiKey, secureUrl, imgSize, endPointNowPlaying,endPointSingleMovie, engLang} from '../globals/globalVariables';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';

import Carousel from 'react-bootstrap/Carousel';

function MovieBanner () {
  const [isOpen, setOpen] = useState(false)
  const [Trailer, setTrailer] = useState(false);
    const [movieBanner, setMovieBanner] = useState(false);
    useEffect( () => {
        const fetchMovie = async () => {
            const res = await fetch(`${endPointNowPlaying}${apiKey}`);
            let data = await res.json();
            setMovieBanner(data);
        }
        fetchMovie();
    });

 const theMovieBanner = movieBanner.results?.slice(0, 5);


 //trailer
 let movie = "";
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

  
        return (
          <>
       
          
          <Carousel  >
             {theMovieBanner?.map((movie) => 
         
          <Carousel.Item>
           
            <img
              className="d-block w-100 carousel-poster"
             src={`${secureUrl}w780${movie.backdrop_path}`} alt={movie.title} 
            />
          
            <Carousel.Caption>
              <div>
            {/* {trailerLink(movie.id)} */}
            </div>
              <h3>{movie.title}</h3>
             
            </Carousel.Caption>
             
          </Carousel.Item>
        
             )}
          
        </Carousel>
        </>
        );
      }
      
    
 


export default MovieBanner;