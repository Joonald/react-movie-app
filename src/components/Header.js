// Header
import logo from '../image/cloud-movie-logo.svg';
import {useState,useEffect } from 'react';
import Search from './Search'


const Header = ({ title }) => (
    <header>
     <img className='header-logo' src={logo} alt='logo'/>
    <Search/>
    </header>
);

Header.defaultProps = {
    title: 'Movie App',
};

export default Header;