import React, {useContext} from 'react';

import {
  Grid,
  makeStyles,
  Button,
  Typography
} from '@material-ui/core';

import {DialogContext} from '../index';
import { Context as AnaliticsContext } from '../package/analitics';

const useStyle = makeStyles(theme => ({
  pinkBlock: {
    backgroundColor: theme.palette.background.default
  },
  clipPathBlock: {
    clipPath: 'polygon(85% 0, 100% 5%, 100% 100%, 0 100%, 0 5%, 15% 0)',
    backgroundPosition: '35%',
    backgroundImage: "url('/photo.jpg'), linear-gradient(#00000003, #0000009e)",
    backgroundBlendMode: 'saturation',
    backgroundSize: 'auto 135%',
    width: '100%',
    height: '55vh',
    position: 'relative'
  },
  clipPathText: {
    paddingBottom: 64,
    paddingLeft: 16,
    color: '#fff',
  },
  divHeaderPaddingsMargins: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: '15%',
      paddingRight: '15%',
      marginBottom: 64
    },
    marginTop: 16, 
    marginBottom: 32
  }
}))

export const ScreenOne = () => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const {setDialog, open} = useContext(DialogContext);

  const handlerEvent = (openEvent, thanksName, config) => () => {
    trigger(openEvent);
    setDialog({ 
      ...config,
      open: !open, 
      onThanksHandler: (trigger) => (trigger(thanksName), trigger('thanks')),
    })
  };

  return (
    <>
      <div className={classes.divHeaderPaddingsMargins}>
        <Grid
          container
          justify='space-between'
          alignItems='center'
          style={{overflow: 'hidden'}}
        >
          <Grid item>
            <img src='/logo.png' alt="логотип Fulogy" style={{width: 120}} />
          </Grid>
          <Grid item xs>
            <Grid
              container
              justify='flex-end'
              alignItems='center'
              spacing={2}  
            >
              <Grid item style={{paddingRight: 25}}>
                <a href='tel: 8(800) 505 65 33' style={{
                  textDecoration: 'none', 
                  color: '#000', 
                  fontSize: 18}}>8 800 505-65-33</a>
              </Grid>
              <Grid item style={{paddingRight: 16}}>
                <Button variant="outlined" size="small" onClick={handlerEvent('callback0', 'thanksCallback0', {
                  title: <Typography variant='h3' component="h1" align='center'>чтобы заказать звонок</Typography>,
                  bottom: <>Заказать звонок</>,
                })}>Заказать звонок</Button>
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
        style={{marginBottom: 16}}
      >
        <Grid item xs={8}>
          <Typography variant="h1" component="h1" color='primary' align='center'>Светодиодный светильник</Typography>
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
      <Grid container justify='center' alignItems='center' style={{
          position: 'relative',
          bottom: 25,
          width: '100%'
        }}>
        <Grid item>
          <Button fullWidth variant="contained" color="primary" size="large" onClick={handlerEvent('calculation1', 'thanksCalculation1', {
            title: <Typography variant='h3' component="h1" align='center'>чтобы рассчитать стоимость</Typography>,
            bottom: <>Рассчитать стоимость</>,
          })}>Рассчитать стоимость</Button>
        </Grid>
      </Grid>
    </>
  )
}
