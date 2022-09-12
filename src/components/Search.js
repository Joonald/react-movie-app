
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

const Search= () => {

   

      const[searchTerm, setSearchTerm] = useState('');


  const handleChange= (event) => {
      event.preventDefault();
      setSearchTerm(event.target.value);

    } 

    const resetInputField = () => {
      setSearchTerm("")
    }
    const handleSubmit= (event) => {
      event.preventDefault();
      resetInputField();

    } 
  
 
      return (
        <div>
        <form onSubmit={handleSubmit}>
              
          <label>
         
            <input type="text" value={searchTerm} onChange={handleChange} />
          </label>
          <button type="submit"  value="Submit"><Link to={`/search/${searchTerm}`}>search</Link></button>    

        </form>
        </div>
      )
    
  };


  export default Search;



