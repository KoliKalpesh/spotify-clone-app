import React from 'react';
import './Footer.css';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplayIcon from '@mui/icons-material/Replay';

import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid,Slider  } from '@mui/material';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';

function Footer() {
  return (
    <div  className='footer'>
        <div className="footer__left">
          <img className='footer__albumLogo' src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Arijit_5th_GiMA_Awards.jpg" alt="" />
          <div className="footer__songInfo">
            <h4>Yeah!</h4>
            <p>Kalpesh</p>
          </div>
        </div>
        <div className="footer__center">
          <ShuffleIcon className='footer__green' />
          <SkipPreviousIcon className='footer__icon' />
          <PlayCircleOutlinedIcon fontSize='large' className='footer__icon' />
          <SkipNextIcon className='footer__icon' />
          <ReplayIcon className='footer__green' />

        </div>
        <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
             < PlaylistPlayIcon/>
          </Grid>
          <Grid item>
            < VolumeDownIcon/>
          </Grid>
          <Grid item xs={6}>
           < Slider size="small"
  defaultValue={70}
  aria-label="Small"
  valueLabelDisplay="auto"/>
           </Grid>
        
         </Grid>
        </div>
      
    </div>
  )
}

export default Footer
