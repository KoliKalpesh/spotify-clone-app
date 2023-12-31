import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar  } from '@mui/material';
import { useDataLayerValue } from './DataLayer';

function Header() {
  const [{user},dispatch]= useDataLayerValue();

  return (
    <div className='header'>
      <div className="header__left">
      <SearchIcon />
      <input placeholder='Sarch for Artist, Songs' type="text" />
      </div>
      
      <div className="header__right">
        
        <p>Explore Premium</p>
        <Avatar src={user?.images[0]?.url} alt="" />
        <h4>{user?.display_name}</h4>

      </div>
      
      
    </div>
  )
}

export default Header
