import React from 'react';

import {
  Grid, 
  makeStyles, 
  Typography,  
  Button, 
  List, 
  ListItem, 
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import FiberManualRecord from '@material-ui/icons/FiberManualRecord';

const useStyle = makeStyles(theme => ({
  nudeBlockStyle: {
    backgroundColor: theme.palette.background.default,
    boxSizing: 'border-box',
    padding: '32px 16px',
    marginTop: 48,
  },
  labelButtonStyle: {
    textTransform: 'none',
    textAlign: 'center'
  },
  dotStyle: {
    width: 10
  },
  minWidth: {
    minWidth: 15
  }
}))

export const Footer = () => {
  const classes = useStyle();
  
  return(
    <>
      <div className={classes.nudeBlockStyle}>
        <List>
          <ListItem>
            <ListItemIcon classes={{root: classes.minWidth}}>
              <FiberManualRecord className={classes.dotStyle} color='primary'/>
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='body1' component='p'>
                141544, МО, Пятницкое шоссе 2, Юрлово
              </Typography>
            } />
          </ListItem>
          <ListItem>
            <ListItemIcon classes={{root: classes.minWidth}}>
              <FiberManualRecord className={classes.dotStyle} color='primary'/>
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='body1' component='p'>
                г. Калининград, ул. Пограничная 766
              </Typography>
            } />
          </ListItem>
          <ListItem>
            <ListItemIcon classes={{root: classes.minWidth}}>
              <FiberManualRecord className={classes.dotStyle} color='primary'/>
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='body1' component='p'>
                <a href='tel: 8(800) 505 65 33' style={{
                  textDecoration: 'none', 
                  color: '#000',
                  }}>8 800 505-65-33
                </a>
              </Typography>
            } />
          </ListItem>
          <ListItem>
            <ListItemIcon classes={{root: classes.minWidth}}>
              <FiberManualRecord className={classes.dotStyle} color='primary'/>
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='body1' component='p'>
                info@fulogy.com
              </Typography>
            } />
          </ListItem>
        </List>
        <Grid
          container
          justify='space-around'
          alignItems='center'
          display='row'
        >
          <Grid item xs={1}>
            <img src='/Photo-19.png' alt='Master Card' className={classes.arrowStyles2} style={{width: '100%'}} />
          </Grid>
          <Grid item xs={2}>
            <img src='/Photo-20.png' alt='Visa' className={classes.arrowStyles2} style={{width: '100%'}} />
          </Grid>
          <Grid item xs={2}>
            <img src='/icon/mir-logo.svg' alt='платежная система мир' className={classes.arrowStyles2} style={{width: '100%'}} />
          </Grid>
          <Grid item xs={3}>
            <img src='/Photo-22.png' alt='Халва' className={classes.arrowStyles2} style={{width: '100%'}} />
          </Grid>
        </Grid>
      </div>
      <div style={{paddingTop: 32, paddingBottom: 64}}>
        <Grid
          container
          justify='center'
          alignItems='center'
        >
          <Grid item xs={4}>
            <Button 
              variant='text' 
              fullWidth 
              disableRipple 
              target='_blank'
              href='https://plus.google.com/118436112847149375359'
              classes={{label: classes.labelButtonStyle}}>
              <Typography variant='body1' component='h2' align='center'>
                Google+
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button 
              variant='text' 
              fullWidth 
              disableRipple 
              target='_blank'
              href='https://www.facebook.com/fulogy/'
              classes={{label: classes.labelButtonStyle}}>
              <Typography variant='body1' component='h2' align='center'>
                Facebook
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button 
              variant='text' 
              fullWidth 
              disableRipple 
              target='_blank'
              href='https://www.instagram.com/fulogy.ru/'
              classes={{label: classes.labelButtonStyle}}>
              <Typography variant='body1' component='h2' align='center'>
                Instagram
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          justify='center'
          alignItems='center'
          style={{marginTop: 64}}
        >
          <Grid item xs={4}>
            <Button 
              variant='text' 
              fullWidth 
              disableRipple 
              target='_blank'
              href='https://vk.com/public124817525'
              classes={{label: classes.labelButtonStyle}}>
              <Typography variant='body1' component='h2' align='center'>
                Vk
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button 
              variant='text' 
              fullWidth 
              disableRipple 
              target='_blank'
              href='https://www.youtube.com/channel/UC3VvssJI1Lw1Uf--3P6I2Nw'
              classes={{label: classes.labelButtonStyle}}>
              <Typography variant='body1' component='h2' align='center'>
                YouTube
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button 
              variant='text' 
              fullWidth 
              disableRipple 
              target='_blank'
              href='http://feeds.feedburner.com/SmartDimmer'
              classes={{label: classes.labelButtonStyle}}>
              <Typography variant='body1' component='h2' align='center'>
                Feet
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </div>
    </>  
  )
}