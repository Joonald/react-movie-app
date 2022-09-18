// Single movie page

// Imports
import { useParams } from 'react-router-dom';
import React, {useState,useEffect } from 'react';
import { apiKey, secureUrl, backDropSize, engLang, castSize} from '../globals/globalVariables';
import { endPointSingleMovie } from '../globals/globalVariables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import ModalVideo from 'react-modal-video';
import FavButton from '../components/FavButton';
import isFav from "../utilities/isFav";
import Carousel from 'react-multi-carousel';
import { appTitle } from '../globals/globalVariables';
import placeholder from '../image/placeholder.jpg';

function PageSingle () {
    useEffect(() => {
		document.title = `${appTitle} - Single Movie`;
	}, []);
    const single = useParams();
    const [singleMovieData, setMovieData] = useState(false);
    const [castList, setCastList] = useState(false);
    const [isOpen, setOpen] = useState(false)
    const [Trailer, setTrailer] = useState(false);


    const favs = useSelector(state => state.favs.items);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
            slidesToSlide: 5 // optional, default to 1.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 3 // optional, default to 1.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
          }
      };

    useEffect(() => {
        const fetchSingleMovie = async() => {
            const res = await fetch(`${endPointSingleMovie}${single.id}?${apiKey}${engLang}`);
            let data = await res.json();
            setMovieData(data);
        }
        fetchSingleMovie();
        console.log('search single');
    },[single.id]);

      //castlist
    useEffect(() => {
        const fetchCastList = async() => {
            const list = await fetch(`${endPointSingleMovie}${single.id}/credits?${apiKey}${engLang}`);
            let castList = await list.json();
            setCastList(castList);
        }
        fetchCastList();
        console.log('cast');
    },[single.id]);

     
   //trailer
   useEffect(() => {
    const fetchTrailer = async() => {
        const trailerlist = await fetch(`${endPointSingleMovie}${singleMovieData.id}/videos?${apiKey}${engLang}`);
        let Trailer = await trailerlist.json();
        setTrailer(Trailer);
     
    }
    fetchTrailer();
},[singleMovieData.id]);

const trailerLink = () => {
    const trailer = Trailer.results?.find (vid => vid.name === 'Official Trailer')
    
    return (

        trailer == null ?   
            (<div className='no-trailer'>
            <p>trailer not available</p>
            </div>)
         :
        (<div>
      
        <React.Fragment>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={trailer?.key} onClose={() => setOpen(false)} />

        <button className="trailer-button" onClick={()=> setOpen(true)}>Play Trailer</button>
        </React.Fragment>
     
      </div>)
        
    ) 
}
  
        const theCastList = castList.cast?.slice(0, 20);

    return (
        <main>
            <section className='single-movie-wrapper'>
                <div className='single-grid'>
                <img className='single-poster' src={`${secureUrl}${backDropSize}${singleMovieData.poster_path}`} alt={singleMovieData.title} />
                
           
                    <div className='grid-right'>
                    <h2>{singleMovieData.title}</h2>
                   
                        <div className='heart-cloud-container'>
                            <div>
                                <FavButton
                                movie={singleMovieData}
                                isFav={isFav(favs, null, singleMovieData.id)} />
                            </div>
                            <div className='ratingbox'>
                            <FontAwesomeIcon icon={faCloud} className ="rating-cloud-single" />
                            <p className='rating-single'>{Math.round(singleMovieData.vote_average * 10)}%</p>
                            </div>

                            <div>
                            {trailerLink()}
                            </div>
                        </div>
                   
                            <h3>{singleMovieData.tagline}</h3>
                            <p key={singleMovieData.id}>{singleMovieData.release_date}</p>
                            <p>
                            {singleMovieData.genres?.map((genres) => 
                            <span className='genrebox' key={genres.id}>{genres.name}</span>
                            )}
                            </p>
                            <p>{singleMovieData.overview}</p>
                    </div>
                </div>
                            
                            
                                <div className='cast'>
                                
                                <h2>Cast List</h2>
                            {castList !== false ?(
                                <Carousel   swipeable={true}
                                draggable={true}
                                showDots={true}
                                responsive={responsive}
                                ssr={true} 
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                keyBoardControl={true}>
                                {theCastList?.map((oneCast) => 
                                oneCast.profile_path == null ? 
                                    <div>
                                    <img className="cast-photo" src={placeholder} alt={oneCast.name} width="92"/>
                                    <p>{oneCast.name}</p>
                                    </div>
                                    :
                                <div >
                                    <img className="cast-photo" src={`${secureUrl}${castSize}${oneCast.profile_path}`}alt={oneCast.name} /> 
                                    <p>{oneCast.name}</p>
                                </div>
                                )}
                        
                            </Carousel>
                            ): (
                                <div>
                                    <p>loading</p>
                                </div>
                            )
                            }
                                </div>
                    
            </section>
        </main>
    );
};

export default PageSingle;