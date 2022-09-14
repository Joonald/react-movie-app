
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
  const [users,setUsers] = useState([]);
  const [text, setText] = useState ('');
  
  useEffect( () => {
    const loadUsers = async () => {
        const response = await (`https://api.themoviedb.org/3/search/movie?${apiKey}&language=en-US&query=?${input.input}&page=1&include_adult=false`);
        setUsers(response.data.data)
      
       
    }
   loadUsers();
  },[])

});
   

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



