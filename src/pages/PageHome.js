// Page Home

// Imports
import MoviePoster from "../components/MoviePoster";
import { endPointNowPlaying, endPointPopular, endPointTopRated, endPointUpcoming, apiKey, secureUrl, imgSize} from '../globals/globalVariables';
import { useState } from 'react';
import Button from "../components/Button";
import { sortByButtons } from "../globals/sortByButtons";


function PageHome () {
    const [sortMovie, setSortMovie] = useState(endPointNowPlaying)

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
           
            <MoviePoster sort={sortMovie}/>
        </main>
    );
};

export default PageHome;