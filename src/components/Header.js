import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
function Header() {
    return (
        <div className='header'>
            <div  className='header_logo'>E-COM 🛒</div>
            <div className='header_search'>
                <input className='header_search_input' placeholder='search'  type='text'></input>
               <button className='header_search_button'><SearchIcon className='header_search_icon'/></button>
            </div>
            <div className='header_nav'>
                <div className='header_nav_option1'>
                <div>
                     <span > Hello Guest</span>
                    </div>
                    <div>
                    <span > SignIn</span>
                    </div>
            </div>
                <div className='header_nav_option2'>
                    <span> orders</span>
                </div>
            </div>
            <div className='header_cart'>
                    <h2>🛒 0</h2>
                </div>
        </div>
        

    )
}

export default Header
