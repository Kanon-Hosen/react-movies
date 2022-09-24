import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <div className="search">
                <input type="text" placeholder='Search here...' />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Navbar;