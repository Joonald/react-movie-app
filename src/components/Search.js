
import { useState,    useEffect} from 'react';
import React from 'react';
import { renderMatches, useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';
import { apiKey, secureUrl, imgSize,endPointNowPlaying} from '../globals/globalVariables';
import { GENRES } from '../globals/genreList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addFav, delFav } from '../features/favs/favSlice';

const Search= () => {
  const [suggestion, setSuggestion] = useState ([]);
  const[searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();


  useEffect( () => {
    if (searchTerm === '') { 
      return;
    }
      const fetchMovie = async () => {
          // const res = await fetch(`https://api.themoviedb.org/3/discover/movie?${apiKey}&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate`);
          const res = await fetch(`https://api.themoviedb.org/3/search/movie?${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`);
          let data = await res.json();
          setSuggestion(data.results);
      }
      fetchMovie();
      console.log('search');
    

},[searchTerm]

);



  const handleChange= (searchTerm) => {
      setSearchTerm(searchTerm);
      console.log(searchTerm)

    } 

    const resetInputField = () => {
      setSearchTerm("")
    }

  
    const handleSubmit= (event) => {
      event.preventDefault();
      resetInputField();
      navigate(`/search/${searchTerm}`);
    } 
    const onSuggestHandler = (searchTerm) => {
      setSearchTerm(searchTerm)
      setSuggestion([])
      setSearchTerm([])
      }

  
  
 
      return (
   
        <div>
      <form onSubmit={handleSubmit}>     
          <label>
            <input   className='searchbar'  placeholder="Search for a movie" type="text"  value={searchTerm}  onChange={e => handleChange(e.target.value)} />
          </label>
      </form>
{/*            onBlur={setSuggestion([])}
          onBlur={e => blurHandler()} */}
        
        {/* <div className="autocomplete" >
        {suggestion && suggestion.map((onesuggestion, i) =>
          <div onMouseDown={(e) => e.preventDefault()} key={i} className="suggestion" onClick={() => onSuggestHandler(onesuggestion.title)}><Link to={`/single/${onesuggestion.id}`}>{onesuggestion.title}</Link>
                    </div>
)}
        </div>  */}
     
      
        </div>
      )
    
  };


  export default Search;



