// Movie Banner
import React, {useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiKey, secureUrl, imgSize, endPointNowPlaying,endPointSingleMovie, engLang} from '../globals/globalVariables';


import Carousel from 'react-bootstrap/Carousel';

function MovieBanner () {
  const [isOpen, setOpen] = useState(false)
  
    const [movieBanner, setMovieBanner] = useState(false);
    useEffect( () => {
        const fetchMovie = async () => {
            const res = await fetch(`${endPointNowPlaying}${apiKey}`);
            let data = await res.json();
            setMovieBanner(data);
        }
        fetchMovie();
    },[]);

 const theMovieBanner = movieBanner.results?.slice(0, 5);



  
        return (
          <>
       
          
          <Carousel  >
             {theMovieBanner?.map((movie) => 
         
          <Carousel.Item key={movie.id}>
            <Link to={`/single/${movie.id}`}>
            <img
              className="d-block w-100 carousel-poster"
             src={`${secureUrl}w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/${movie.backdrop_path}`} alt={movie.title} 
            />
            <Carousel.Caption>
              <div>
            {/* {trailerLink(movie.id)} */}
            </div>
           
              <h3>{movie.title}</h3>
           
            </Carousel.Caption>
            </Link>
          </Carousel.Item>
        
             )}
        </Carousel>
        </>
        );
      }
      
    
 


export default MovieBanner;