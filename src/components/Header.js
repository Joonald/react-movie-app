// Header

const Header = ({ title }) => (
    <header>
        <h1>{title}</h1>
    </header>
);

Header.defaultProps = {
    title: 'Movie App',
};

export default Header;