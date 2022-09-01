// Header
import logo from '../image/cloud-movie-logo.svg';

const Header = ({ title }) => (
    <header>
     <img className='header-logo' src={logo} alt='logo'/>
    </header>
);

Header.defaultProps = {
    title: 'Movie App',
};

export default Header;