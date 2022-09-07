
import { useState,    useEffect} from 'react';
import React from 'react';
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';
import { apiKey, secureUrl, imgSize} from '../globals/globalVariables';
import { GENRES } from '../globals/genreList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addFav, delFav } from '../features/favs/favSlice';

function Search () {

   

      const[searchTerm, setSearchTerm] = useState('');

  
  
    const handleSubmit= (event) => {
      event.preventDefault();
      setSearchTerm('');

    } 
  
 
      return (

        // <form onSubmit={handleSubmit}>
        <form onSubmit={handleSubmit}>
          <label>
         
            <input type="text" 
           onChange={event => setSearchTerm(event.target.value)}
            
            value={searchTerm} />
          </label>
          <button type="submit" value="Submit"><Link to={`/search/${searchTerm}`}>search</Link></button>    

        </form>
      )
    
  };


  export default Search;



