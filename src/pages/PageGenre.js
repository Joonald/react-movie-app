// Page Genres
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiKey, secureUrl, imgSize} from '../globals/globalVariables';
import { GENRES } from '../globals/genreList';
import FavButton from '../components/FavButton';
import MovieGenre from '../components/MovieGenre';
import { appTitle } from '../globals/globalVariables';

// Imports

function PageGenre () {
    useEffect(() => {
		document.title = `${appTitle} - Genres`;
	}, []);

    const [newGenre, setGenre] = useState(28);

    const handleClick= (event) => {
        event.preventDefault();
        setGenre(event.target.value);
    }
    function getGenreName() {
        const thisgenre = GENRES.filter(genre => genre.id === 28)
    return (
            thisgenre
        )
    }
    console.log(newGenre)
    return (
        <main>
            <div className='genre-option'>
            <h2>Showing Results for:</h2><select onChange={handleClick}>
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

