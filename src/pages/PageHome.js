// Page Home

// Imports
import MoviePoster from "../components/MoviePoster";
import MovieBanner from "../components/MovieBanner";
import { endPointNowPlaying, endPointPopular, endPointTopRated, endPointUpcoming, apiKey } from '../globals/globalVariables';
import Button from "../components/Button";
import { sortByButtons } from "../globals/sortByButtons";
import isFav from "../utilities/isFav";
import { useSelector } from 'react-redux';
import { appTitle } from '../globals/globalVariables';
import { useState, useEffect } from 'react';


function PageHome () {
    useEffect(() => {
		document.title = `${appTitle} - Home`;
	}, []);

    const [sortMovie, setSortMovie] = useState(endPointNowPlaying);
    const [movieData, setMovieData] = useState([]);

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


    return (
        <main>
            {/* hero banner */}
        <MovieBanner/>
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
            <div id='movie-poster'>
            {movieData.map((singleMovie)=> 
            <MoviePoster 
            key={singleMovie.id} 
            movie={singleMovie}
            isFav={isFav(favs, null, singleMovie.id)} />
            )}
            </div>
        </main>
    );
};

export default PageHome;