import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LiquorRoundedIcon from '@mui/icons-material/LiquorRounded';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';

function Header() {
    return (
    <div className="header">
        <div className="header_nav_logo">
            <LiquorRoundedIcon className='nav_logo' fontSize='large'/>
            <h2 className='header_title'>LiqMart</h2>
        </div>
        <div className="header_searchbar">
            <input type='text' className='search_input'/>
            <SearchIcon className='search_icon' fontSize='large'/>
        </div>
        <div className="header_nav">
        <div className="nav_item">
            <span className="nav_item_lone">Hi Guest</span>
            <span className="nav_item_ltwo">Sign In</span>
        </div>
        <div className="nav_item_cart">
            <ShoppingCartIcon className='item_cart' fontSize='large'/>
            <span className="nav_item_count">0</span>
        </div>
        <div className="nav_item_last">
            <span className="nav_item_lone">Your</span>
            <span className="nav_item_ltwo">Shop</span>
        </div>
       
    </div>
    </div>
    );
}

export default Header;