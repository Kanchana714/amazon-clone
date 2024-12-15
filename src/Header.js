import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
// import SearchIcon from "@mui-ui/icons/Search";d
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"

function Header() {
  return (                                                         
    <nav className='header'>      {/*logo on left->clickable img*/}
      <Link to="/">
      <img className='header__logo' src="https://freepnglogo.com/images/all_img/1715487998amazon-logo-transparent.png" alt="logo"/>
      </Link>
     {/*search box*/}
     <div className="header__search">
      <input type="text" className="header__searchInput"/>
      <SearchIcon className="header__searchIcon" />
     </div>
      {/*3 links */}
      <div className='header__nav'>
        {/*1st link */}
           <Link to="/login" className='header__link'>
             <div className='header__option'>
             <span className='header__optionLineOne'>hello </span>
             <span className='header__optionLineTwo'>sign in</span>
             </div>
            
           </Link>

        {/*2st link */}
        <Link to="/" className='header__link'>
             <div className='header__option'>
             <span  className='header__optionLineOne'>Returns </span>
             <span className='header__optionLineTwo'> & Order</span>
             </div>
            
           </Link>

        {/*3st link */}
        <Link to="/" className='header__link'>
             <div className='header__option'>
             <span  className='header__optionLineOne'>Your </span>
             <span className='header__optionLineTwo'>Prime</span>
             </div>
            
           </Link>

        {/*4st link */}
            <Link to="/checkout" className='header__link'>
              <div className="header__optionBasket">
                {/* shopping basket icon */}
                <ShoppingBasketIcon/>
                 {/*num inside basket*/}
                 <span  className='header__optionLineTwo header__basketcount'>0</span>
              </div> 
            </Link>
      </div>
    </nav>
  );
}

export default Header
