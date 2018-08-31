import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return ( 
        <header>
            <div>
            <Link to='/'>Houser</Link>
            </div>
        </header>
     );
}
 
export default Header;