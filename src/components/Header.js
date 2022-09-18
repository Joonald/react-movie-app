// Header
import logo from '../image/cloud-movie-logo.svg';
import Search from './Search'
import Nav from '../components/Nav';
import { NavLink } from "react-router-dom";

const Header = ({ title }) => (
    <header id='header-nav'>
     <NavLink to='/'><img className='header-logo' src={logo} alt='logo'/></NavLink>
    <Search/>
    <Nav/>
    </header>
);

Header.defaultProps = {
    title: 'Movie App',
};

export default Header;