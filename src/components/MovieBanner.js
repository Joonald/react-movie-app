// Movie Banner
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiKey, secureUrl, imgSize, endPointNowPlaying} from '../globals/globalVariables';

import Carousel from 'react-bootstrap/Carousel';

function MovieBanner () {

    const [movieBanner, setMovieBanner] = useState(false);
    useEffect( () => {
        const fetchMovie = async () => {
            const res = await fetch(`${endPointNowPlaying}${apiKey}`);
            let data = await res.json();
            setMovieBanner(data);
        }
        fetchMovie();
    });

        return (
          <Carousel fade>
               {movieBanner.results?.map((movie) => 
            <Carousel.Item key={movie.title}>
              <img
              className="d-block w-100"
              src={`${secureUrl}w780${movie.backdrop_path}`} alt={movie.title} 
              />
              <Carousel.Caption>
                <h3>{movie.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
             )}
        </Carousel>
        );
      }
      
    
 


export default MovieBanner;