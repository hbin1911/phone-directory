import React from 'react';
import './Header.css' 

const Header = function(props){
    return(
        <div className='Header'>
            {props.title}
        </div>
    )
}

export default Header;