// Page Home

// Imports
import MoviePoster from "../components/MoviePoster";
import { endPointNowPlaying, endPointPopular, endPointTopRated, endPointUpcoming, apiKey } from '../globals/globalVariables';
import { useState, useEffect } from 'react';
import Button from "../components/Button";
import { sortByButtons } from "../globals/sortByButtons";
import isFav from "../utilities/isFav";
import { useSelector } from 'react-redux';


function PageHome () {
    const [sortMovie, setSortMovie] = useState(endPointNowPlaying);
    const [movieData, setMovieData] = useState([]);
    const [featMovie, setFeatMovie] = useState([]);

    const favs = useSelector((state) => state.favs.items);

    function handleClick (value) {
        switch (value) {
            case 'now playing':
                setSortMovie(endPointNowPlaying);
                break;
            case 'upcoming':
                setSortMovie(endPointUpcoming);
                break;    
            case 'popular':
                setSortMovie(endPointPopular);
                break;
            case 'top rated':
                setSortMovie(endPointTopRated);
                break;
            default:
        }
    }
    
    const movies = [];
    useEffect( () => {
        const fetchMovie = async () => {
            const res = await fetch(`${sortMovie}${apiKey}`);
            let data = await res.json();
            while (data.results.length > 12 ) {
                data.results.pop();
            };
            setMovieData(data.results);
        }
        fetchMovie();
    }, [sortMovie]);

    console.log(movieData);
    console.log(featMovie);  

    return (
        <main>
            {/* hero banner */}

            {/* movie poster */}
            <div className='sort-by-btns'>
            {sortByButtons.map((btn) => 
             <Button
                key={btn.value}
                value={btn.value}
                type={btn.type}
                text={btn.text}
                handleClick={handleClick}
             />
            )}
            </div>
            {movieData.map((singleMovie)=> 
            <MoviePoster 
            key={singleMovie.id} 
            movie={singleMovie}
            isFav={isFav(favs, null, singleMovie.id)} />
            
            )}
        </main>
    );
};

export default PageHome;