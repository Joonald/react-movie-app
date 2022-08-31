// Single Movie Poster 
import { useState, useEffect } from 'react';
import { endPointNowPlaying, endPointPopular, endPointTopRated, endPointUpcoming, apiKey, secureUrl, imgSize} from '../globals/globalVariables';
// const GENRES = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}];
const GENRES = [
    {id:28, name:'Action'},
    {id:12,name:'Adventure'},
    {id:16,name:'Animation'},
    {id:35,name:'Comedy'},
    {id:80,name:'Crime'},
    {id:99,name:'Documentary'},
    {id:18,name:'Drama'},
    {id:10751,name:'Family'},
    {id:14,name:'Fantasy'},
    {id:36,name:'History'},
    {id:27,name:'Horror'},
    {id:10402,name:'Music'},
    {id:9648,name:'Mystery'},
    {id:10749,name:'Romance'},
    {id:878,name:'Science Fiction'},
    {id:10770,name:'TV Movie'},
    {id:53,name:'Thriller'},
    {id:10752,name:'War'},
    {id:37,name:'Western'}];
    let index =null;

function MoviePoster () {
    const [movieData, setMovieData] = useState(false);

    useEffect( () => {
        const fetchMovie = async () => {
            const res = await fetch(`${endPointNowPlaying}${apiKey}`);
            let data = await res.json();
            setMovieData(data);
        }
        console.log('hi');
        fetchMovie();
    }, []);
function getGenreName(id) {
    const thisgenre = GENRES.filter(genre => genre.id === id)
   return (
        thisgenre[0].name
    )
}
    return (
        <div>
        {movieData.results?.map((movie) => 
        
            <div key={movie.id}>
                <img src={`${secureUrl}${imgSize}${movie.poster_path}`} alt="" />
                <h2>{movie.title}</h2>
                <span>
                {movie.genre_ids.map((id) =>{
                    let genrename = getGenreName(id)
                    return (
                    <p>{genrename}</p>
                )}
                // index = GENRES.map(object => object.id).indexOf(id),
                // for ((id) !== {GENRES.id} ) {
                //     if ((id) === GENRES.id ){
                //       <p>{GENRES.name}</p>
                //     }
                // }
              
            
    
         
                
     
             
             
                )} 
                </span> 
                <p>
                {movie.release_date}
                </p>
                <p>
                {movie.overview}
                </p>
            </div>
        )}
        </div>
    )
};
export default MoviePoster;