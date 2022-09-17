// Single movie page

// Imports
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiKey, secureUrl, backDropSize, engLang, castSize} from '../globals/globalVariables';
import { endPointSingleMovie } from '../globals/globalVariables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import YouTube from 'react-youtube';
import FavButton from '../components/FavButton';
import isFav from "../utilities/isFav";
import Carousel from 'react-multi-carousel';
import { appTitle } from '../globals/globalVariables';

function PageSingle () {
    useEffect(() => {
		document.title = `${appTitle} - Single Movie`;
	}, []);
    const single = useParams();
    const [singleMovieData, setMovieData] = useState(false);
    const [castList, setCastList] = useState(false);
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
    },[single.id]);

      //castlist
    useEffect(() => {
        const fetchCastList = async() => {
            const list = await fetch(`${endPointSingleMovie}${single.id}/credits?${apiKey}${engLang}`);
            let castList = await list.json();
            setCastList(castList);
        }
        fetchCastList();
    },[single.id]);

     
    //trailer
    useEffect(() => {
        const fetchTrailer = async() => {
            const trailerlist = await fetch(`${endPointSingleMovie}${single.id}/videos?${apiKey}${engLang}`);
            let Trailer = await trailerlist.json();
            setTrailer(Trailer);
          
        }
        fetchTrailer();
        console.log('single');
    },[single.id]);
   

  const trailerLink = () => {
    const trailer = Trailer.results?.find (vid => vid.name === 'Official Trailer')
    return (
        <div>
            <YouTube videoId={trailer?.key} />
        </div>
    )
       
  }
  
        const theCastList = castList.cast?.slice(0, 20);

    return (
        <main>
            <section className='single-movie-wrapper'>
                <img src={`${secureUrl}${backDropSize}${singleMovieData.backdrop_path}`} alt={singleMovieData.title} />
                <div>

                    <h2>{singleMovieData.title}</h2>

                    <div className='heart-cloud-container'>
                        <FavButton
                        movie={singleMovieData}
                        isFav={isFav(favs, null, singleMovieData.id)} />
                        <div className='ratingbox'>
                        <FontAwesomeIcon icon={faCloud} className ="rating-cloud-single" />
                        <p className='rating-single'>{Math.round(singleMovieData.vote_average * 10)}%</p>
                        </div>
                    </div>
                   
                    <h3>{singleMovieData.tagline}</h3>
                    <p key={singleMovieData.id}>{singleMovieData.release_date}</p>
                    <p>
                    {singleMovieData.genres?.map((genres) => 
                    <span key={genres.id}>{genres.name}</span>
                    )}
                    </p>
                    <p>{singleMovieData.overview}</p>
                    <div className='cast'>
                         {trailerLink()}
                    <h2>Cast List</h2>
    {castList !== false ?(
                    <Carousel responsive={responsive}>
                    {theCastList?.map((oneCast) => 
                    <div >
                        <img src={`${secureUrl}${castSize}${oneCast.profile_path}`}alt={oneCast.name} /> 
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
                </div>
            </section>
        </main>
    );
};

export default PageSingle;