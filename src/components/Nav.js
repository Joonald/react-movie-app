import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faFilm } from '@fortawesome/free-solid-svg-icons';
import { faHeart,faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

const Nav = function () {
    return (
        <nav>
            <ul>
                <li><NavLink to='/'><FontAwesomeIcon icon={faHouse} className='nav-btn home' /><p>HOME</p></NavLink></li>
                <li><NavLink to='/favourites'><FontAwesomeIcon icon={faHeart} className='nav-btn'/><p>FAVOURITES</p></NavLink></li>
                <li><NavLink to='/genres'><FontAwesomeIcon icon={faFilm} className='nav-btn'/><p>GENRE</p></NavLink></li>
                <li><NavLink to='/about'><FontAwesomeIcon icon={faCircleQuestion} className='nav-btn'/><p>ABOUT</p></NavLink></li>
            </ul>
        </nav>
   
        
    )
}
export default Nav;
