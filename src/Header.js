import React from 'react';
import myimg from "./pngimg.com - amazon_PNG25.png";
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


export default function Header() {
  const [{basket,user}] = useStateValue();
 
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <nav className='header'>
      <Link to="/"><img className='header_logo' src= {myimg} alt="" /></Link>
      
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon"/>
      </div>
      
      <div className="header_nav">
        <Link to={!user && "/login" }className="header_link">
        <div onClick={handleAuthenticaton} className="header_option">
          <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
          <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
        
        <Link to="/" className="header_link">
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        </Link>

        <Link to="/" className="header_link">
        <div className="header_option">
          <span className="header_optionLineOne">Your </span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        </Link>

        
        <Link to="/checkout" className="header_link">
        <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div>
        </Link>

      </div>
    </nav>
  )
}

