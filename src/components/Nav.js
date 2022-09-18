import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faFilm } from '@fortawesome/free-solid-svg-icons';
import { faHeart,faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

const Nav = function () {
    return (
        <nav>
            <ul>
                <li><NavLink to='/react-movie-app'><FontAwesomeIcon icon={faHouse} className='home' /></NavLink></li>
                <li><NavLink to='/favourites'><FontAwesomeIcon icon={faHeart} className='nav-btn'/></NavLink></li>
                <li><NavLink to='/genres'><FontAwesomeIcon icon={faFilm} className='nav-btn'/></NavLink></li>
                <li><NavLink to='/about'><FontAwesomeIcon icon={faCircleQuestion} className='nav-btn'/></NavLink></li>
            </ul>
        </nav>
        
    )
}
export default Nav;
