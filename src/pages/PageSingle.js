// Single movie page

// Imports
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiKey, secureUrl, imgSize, backDropSize, engLang} from '../globals/globalVariables';
import { endPointSingleMovie } from '../globals/globalVariables';

function PageSingle () {
    const single = useParams();
    const [singleMovieData, setMovieData] = useState(false);
    
    useEffect(() => {
        const fetchSingleMovie = async() => {
            const res = await fetch(`${endPointSingleMovie}${single.id}?${apiKey}${engLang}`);
            let data = await res.json();
            setMovieData(data);
        }
        fetchSingleMovie();
    },[single.id]);

    return (
        <main>
            <section className='single-movie-wrapper'>
                <img src={`${secureUrl}${backDropSize}${singleMovieData.backdrop_path}`} alt={singleMovieData.title} />
                <div>
                    <h2>{singleMovieData.title}</h2>
                    <h3>{singleMovieData.tagline}</h3>
                    <p>{singleMovieData.release_date}</p>
                    <p> 
                    {singleMovieData.genres?.map((genres) => 
                    `${genres.name} `
                    )}
                    </p>
                    <p>{singleMovieData.overview}</p>
                </div>
            </section>
        </main>
    )
}

export default PageSingle;