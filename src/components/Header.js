// Header
import logo from '../image/cloud-movie-logo.svg';
import Search from './Search'
import Nav from '../components/Nav';


const Header = ({ title }) => (
    <header id='header-nav'>
     <img className='header-logo' src={logo} alt='logo'/>
    <Search/>
    <Nav/>
    </header>
);

Header.defaultProps = {
    title: 'Movie App',
};

export default Header;