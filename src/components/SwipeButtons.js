import React from 'react';
import './Styles/SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
  return (
    <div className="swipe-buttons">
      <IconButton className="icon-repeat">
        <ReplayIcon fontSize="large"></ReplayIcon>
      </IconButton>
      <IconButton className="icon-close">
        <CloseIcon fontSize="large"></CloseIcon>
      </IconButton>
      <IconButton className="icon-star">
        <StarRateIcon fontSize="large"></StarRateIcon>
      </IconButton>
      <IconButton className="icon-fav">
        <FavoriteIcon fontSize="large"></FavoriteIcon>
      </IconButton>
      <IconButton className="icon-flash">
        <FlashOnIcon fontSize="large"></FlashOnIcon>
      </IconButton>
    </div>
  )
}

export default SwipeButtons
