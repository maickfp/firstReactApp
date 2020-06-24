import React from 'react';
import './index.css';

const year = new Date().getFullYear();
function Footer() {
    return(
        <footer>
            React &copy; - {year}
        </footer>
    );
}

export default Footer;