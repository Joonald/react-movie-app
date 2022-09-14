
import { useState,    useEffect} from 'react';
import React from 'react';
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';
import { apiKey, secureUrl, imgSize,endPointNowPlaying} from '../globals/globalVariables';
import { GENRES } from '../globals/genreList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addFav, delFav } from '../features/favs/favSlice';

const Search= () => {
  const [suggestion, setSuggestion] = useState ([]);

  
  const [movieData, setMovieData] = useState([]);


  useEffect( () => {
      const fetchMovie = async () => {
          const res = await fetch(`https://api.themoviedb.org/3/search/movie?${apiKey}&language=en-US&query=?${searchTerm}&page=1&include_adult=false`);

          let data = await res.json();
          setMovieData(data.results);
         
      }
      fetchMovie();

});


      const[searchTerm, setSearchTerm] = useState('');


  const handleChange= (searchTerm) => {
      setSearchTerm(searchTerm);
 
    let matches=[];
    if (searchTerm.length > 0) {
      // matches = movieData.filter(movie => movie.title = )
      matches = movieData.filter(movie => {
      const regex = new RegExp(`${searchTerm}`, "gi");
      return movie.title.match(regex)
      
      })
      }
      setSuggestion(matches)
      setSearchTerm(searchTerm)
     
    } 

    const resetInputField = () => {
      setSearchTerm("")
    }
    const handleSubmit= (event) => {
      event.preventDefault();
      resetInputField();

    } 
    const onSuggestHandler = (searchTerm) => {
      setSearchTerm(searchTerm)
      setSuggestion([])
      }
  
 
      return (
   
        <div>
        <form onSubmit={handleSubmit}>
              
          <label>
         
            <input type="text" value={searchTerm} onChange={e => handleChange(e.target.value)} onBlur={() => setSuggestion([])}/>
          </label>
          <button type="submit"  value="Submit"><Link to={`/search/${searchTerm}`}>search</Link></button>    

        </form>
        {suggestion && suggestion.map((onesuggestion, i) =>
          <div className="suggestion" onClick={() => onSuggestHandler(onesuggestion.title)}>{onesuggestion.title}</div>
)}
        </div>
      )
    
  };


  export default Search;



