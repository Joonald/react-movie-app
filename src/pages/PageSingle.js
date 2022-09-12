// Single movie page

// Imports
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiKey, secureUrl, imgSize, backDropSize, engLang, castSize} from '../globals/globalVariables';
import { endPointSingleMovie } from '../globals/globalVariables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faCloud } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addFav, delFav, favSlice } from '../features/favs/favSlice';
import YouTube from 'react-youtube';
import FavButton from '../components/FavButton';
import isFav from "../utilities/isFav";

function PageSingle () {
    const single = useParams();
    const [singleMovieData, setMovieData] = useState(false);
    const [isActive, setActive] = useState(false);
    const dispatch = useDispatch();
    const [castList, setCastList] = useState(false);
    const [Trailer, setTrailer] = useState(false);
    const [isOpen, setOpen] = useState(false)


    const favs = useSelector(state => state.favs.items);

    useEffect(() => {
        const fetchSingleMovie = async() => {
            const res = await fetch(`${endPointSingleMovie}${single.id}?${apiKey}${engLang}`);
            let data = await res.json();
            setMovieData(data);
        }
        fetchSingleMovie();
    },[single.id]);

    const favMovie = () => {
        setActive(!isActive);
      };

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
            console.log(Trailer)
        }
        fetchTrailer();
    },[single.id]);

  const trailerLink = () => {
      const trailer = Trailer.results?.find (vid => vid.name === 'Official Trailer')
      return (
          <div>
        
        <YouTube videoId={trailer?.key} />
       
        </div>
              )
        // console.log(trailer?.key)
      
  }





        const theCastList = castList.cast?.slice(0, 5);

    return (
        <main>
            <section className='single-movie-wrapper'>
                <img src={`${secureUrl}${backDropSize}${singleMovieData.backdrop_path}`} alt={singleMovieData.title} />
                <div>
                    <FavButton
                    movie={singleMovieData}
                    isFav={isFav(favs, null, singleMovieData.id)} />
                    <h2>{singleMovieData.title}</h2>
                    <div className='heart-cloud-container'>
                    <FontAwesomeIcon icon={faHeart} className ={isActive ? 'favHeart-single':'heart-single'} onClick={favMovie} />
                    <div className='ratingbox'>
                    <FontAwesomeIcon icon={faCloud} className ="rating-cloud-single" />
                    <p className='rating-single'>{Math.round(singleMovieData.vote_average * 10)}%</p>
                    </div>
                    </div>
                    {trailerLink()}
                                        {/* <p><a href={`https://www.youtube.com/watch?v=${trailer.key}`}>Watch Trailer</a></p> */}
                  
                    {/* { Trailer.find(video=>video.type === 'Trailer').map(filteredVideo =>( */}
                    {/* console.log(filteredVideo.key)                    ))} */}
                    <h3>{singleMovieData.tagline}</h3>
                    <p>{singleMovieData.release_date}</p>
                    <p> 
                    {singleMovieData.genres?.map((genres) => 
                    `${genres.name} `
                    )}
                    </p>
                    <p>{singleMovieData.overview}</p>
                    <div className='cast'>
                    <h2>Cast List</h2>

                    {theCastList?.map((oneCast) => 
                    <div >
                        <img src={`${secureUrl}${castSize}${oneCast.profile_path}`}alt={oneCast.name} /> 
                        <p>{oneCast.name}</p>
                    </div>
                    )}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PageSingle;