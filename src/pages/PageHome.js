// Page Home

// Imports
import MoviePoster from "../components/MoviePoster";
import { endPointNowPlaying, endPointPopular, endPointTopRated, endPointUpcoming, apiKey, secureUrl, imgSize} from '../globals/globalVariables';
import { useState, useEffect } from 'react';
import Button from "../components/Button";
import { sortByButtons } from "../globals/sortByButtons";


function PageHome () {
    const [sortMovie, setSortMovie] = useState(endPointNowPlaying);
    const [movieData, setMovieData] = useState([]);

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
            setMovieData(data.results);
        }
        fetchMovie();
    }, [sortMovie]);
    
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
            {movieData.map((movie)=> 
            <MoviePoster key={movie.id} movie={movie} />
            )}
        </main>
    );
};

export default PageHome;