// Page Favourite

// Imports
import { useSelector } from 'react-redux';
import MoviePoster from '../components/MoviePoster';
import { Link } from 'react-router-dom';
import { appTitle } from '../globals/globalVariables';
import { useEffect } from 'react';

function PageFavourite () {
    useEffect(() => {
		document.title = `${appTitle} - Favourite`;
	}, []);
    
    const favs = useSelector((state) => state.favs.items);

    return (
        <main>
          
            <h2 className='bluefont'>Favourite Movies</h2>
    
            {favs.length < 1 ? <p className='bluefont'> Oh no! You don't have any favourite movies. Return to the <Link to='/'>home</Link> page to add some favourite movies.</p> : 
                <div id='movie-poster'>
                    {favs.map((singleMovie) => {
                        console.log(singleMovie)
                        return <MoviePoster
                        key={singleMovie.id}
                        movie={singleMovie} />
        
                    })}
                </div>}
                
        </main>
    )
};

export default PageFavourite;