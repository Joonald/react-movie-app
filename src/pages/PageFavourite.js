// Page Favourite

// Imports
import { useSelector } from 'react-redux';
import MoviePoster from '../components/MoviePoster';
import { Link } from 'react-router-dom';

function PageFavourite () {
    const favs = useSelector((state) => state.favs.items);
    return (
        <main>
            <h2>Favourite Movies</h2>
            
            {favs.length < 1 ? <p> Oh no! You don't have any favourite movies. Return to the <Link to='/'>home</Link> page to add some favourite movies.</p> : 
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