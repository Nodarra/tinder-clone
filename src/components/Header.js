import React from 'react';
import './Styles/Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import TinderIcon from './Styles/Tinder-Emblem.png';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header-icon"/>
      </IconButton>

      <img 
        className="header-logo"
        src={TinderIcon}
        alt=""
      />

      <IconButton>
        <ForumIcon fontSize="large" className="header-icon"/>
      </IconButton>
    </div>
  )
}

export default Header
