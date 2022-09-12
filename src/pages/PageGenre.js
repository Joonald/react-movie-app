// Page Genres
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiKey, secureUrl, imgSize} from '../globals/globalVariables';
import { GENRES } from '../globals/genreList';
import FavButton from '../components/FavButton';
import MovieGenre from '../components/MovieGenre';

// Imports

function PageGenre () {

    const [newGenre, setGenre] = useState('')

    const handleClick= (event) => {
        event.preventDefault();

        setGenre(event.target.value)
        console.log(`https://api.themoviedb.org/3/discover/movie?${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${event.target.value}`)
    }
    return (
        <main>
    
            <div className='genre-option'>
            <select onChange={handleClick}>
            {GENRES.map((GENRE) => 
             <option
                key={GENRE.id}
                value={GENRE.id}
                text={GENRE.name}
               >{GENRE.name}
                {/* <Link to={`/genre/${GENRE.id}`}>{GENRE.name}</Link> */}
</option>
            )}
            </select>
            </div>
           
            <MovieGenre seletedGenre={newGenre}/>
        </main>
    );
    
};


export default PageGenre;

