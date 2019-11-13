import React from 'react';

import {
  Grid,
  makeStyles,
  Button,
  Typography
} from '@material-ui/core';


const useStyle = makeStyles(theme => ({
  pinkBlock: {
    backgroundColor: theme.palette.background.default
  },
  clipPathBlock: {
    clipPath: 'polygon(85% 0, 100% 5%, 100% 100%, 0 100%, 0 5%, 15% 0)',
    backgroundPosition: 'top',
    backgroundImage: "url('/photo.jpg'), linear-gradient(#00000003, #0000009e)",
    backgroundBlendMode: 'saturation',
    backgroundSize: 'cover',
    width: '100%',
    height: '65vh',
    position: 'relative'
  },
  clipPathText: {
    paddingBottom: 145,
    paddingLeft: 50,
    color: '#fff',
  }
}))

export const ScreenOne = () => {
  const classes = useStyle();

  return (
    <>
      <div style={{marginBottom: '3.8rem'}}>
        <Grid
          container
          justify='space-between'
          alignItems='center'
          style={{overflow: 'hidden'}}
        >
          <Grid item xs={6}>
            <img src='/logo.png' alt="логотип Fulogy" style={{width: 300}} />
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              justify='flex-end'
              alignItems='center'
              spacing={2}  
            >
              <Grid item style={{paddingRight: 75}}>
                <a href='tel: 8(800) 505 65 33' style={{
                  textDecoration: 'none', 
                  color: '#000', 
                  fontSize: 34}}>8(800) 505 65 33</a>
              </Grid>
              <Grid item style={{paddingRight: 35}}>
                <Button variant="outlined" size="small">Заказать звонок</Button>
              </Grid>
            </Grid>
          </Grid> 
        </Grid>
      </div>
      <Grid
        container
        display='column'
        justify='center'
        alignItems='center'
        style={{marginBottom: 60}}
      >
        <Grid item xs={8}>
          <Typography variant="h1" component="h1" color='primary' align='center' gutterBottom>Светодиодный светильник</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="subtitle1" component="p" color='secondary' align='center'>премиального качества для рабочей зоны кухни!</Typography>
        </Grid>
      </Grid>
      <Grid container justify='flex-start' alignItems='flex-end' className={classes.clipPathBlock}>
        <Grid item className={classes.clipPathText}>
          <Typography variant="h2" component="h2">собственное<br/>производство</Typography>
          <Typography variant="subtitle1" component="p">- создаем комфорт<br/>для Вашей кухни</Typography>
        </Grid>
      </Grid>
      <Grid container justify='center' alignItems='center' style={{position: 'relative'}}>
        <Grid item style={{
          position: 'absolute',
          bottom: -50,
        }}>
          <Button fullWidth variant="contained" color="primary" size="large">Рассчитать стоимость</Button>
        </Grid>
      </Grid>
    </>
  )
}
