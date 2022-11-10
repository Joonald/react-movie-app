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
            <div id='favourite'>
                <h2>Favourite Movies</h2>
    
                {favs.length < 1 ? 
                <div className='favourite-text'>
                <p><span>Oh no!</span><br></br> 
                You don't have any favourite movies.
                <br></br> Return to the <Link to='/'>home</Link> page to add some favourite movies.</p>
                </div> : 
                    <div id='movie-poster'>
                        {favs.map((singleMovie) => {
                        return <MoviePoster
                        key={singleMovie.id}
                        movie={singleMovie} />
                    })}
                    </div>}
            </div>   
        </main>
    )
};

export default PageFavourite;