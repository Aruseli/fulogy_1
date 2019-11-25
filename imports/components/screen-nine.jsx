import React, {useContext} from 'react';

import {
  makeStyles, 
  Typography, 
  Paper, 
  Button,
  Grid
} from '@material-ui/core';
import { Context as AnaliticsContext } from '../package/analitics';

const useStyle = makeStyles(theme => ({
  redLineStyle: {
    position: 'absolute',
    top: 12,
    left: 0,
    backgroundColor: '#f37e78',
    width: 64,
    height: 3
  },
  headerStyle: {
    position: 'relative', 
    paddingLeft: 48
  },
  nudeBlockStyle: {
    backgroundColor: theme.palette.background.default,
    boxSizing: 'border-box',
    padding: 16
  },
  dottedLineStyle: {
    position: 'absolute',
    right: 24,
    top: 0,
    height: '100%',
    width: 1,
    backgroundSize: '1px 35px',
    backgroundImage: 'linear-gradient(#f37e78 35%, rgba(255,255,255,0) 0%)',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'right'
  },
  dottedLineStyleTop: {
    position: 'absolute',
    left: 24,
    top: 0,
    height: 1,
    width: 'calc(100% - 48px)',
    backgroundSize: '35px 1px',
    backgroundImage: 'linear-gradient(to right, #f37e78 35%, rgba(255, 255, 255, 0) 0%)',
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'top'
  },
  dottedLineStyleRight: {
    position: 'absolute',
    right: 24,
    top: 0,
    height: '100%',
    width: 1,
    backgroundSize: '1px 35px',
    backgroundImage: 'linear-gradient(#f37e78 35%, rgba(255,255,255,0) 0%)',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'right'
  },
  dottedLineStyleLeft: {
    position: 'absolute',
    left: 24,
    top: 0,
    height: '100%',
    width: 1,
    backgroundSize: '1px 35px',
    backgroundImage: 'linear-gradient(#f37e78 35%, rgba(255,255,255,0) 0%)',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'right'
  },
  dottedLineStyleBottom: {
    position: 'absolute',
    left: 24,
    top: 182,
    height: 1,
    width: 'calc(100% - 48px)',
    backgroundSize: '35px 1px',
    backgroundImage: 'linear-gradient(to right, #f37e78 35%, rgba(255, 255, 255, 0) 0%)',
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'bottom'
  },
  circleNumberStyle: {
    top: 32,
    right: 10,
    width: 30,
    height: 30,
    textAlign: 'center',
    position: 'absolute',
    background: '#f37e78',
    fontSize: 16,
    padding: 7,
    boxSizing: 'border-box',
    color: '#fff',
  },
}))

export const ScreenNine = () => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);

  const onClick = () => {
    trigger('quiz');
  }
  
  return(
    <>
      <div style={{position: 'relative', paddingTop: 96, paddingRight: 32, paddingBottom: 32}}>
        <div className={classes.dottedLineStyle} />
        <Paper elevation={4} className={classes.circleNumberStyle}>7</Paper>
        <div className={classes.headerStyle}>
          <Typography variant="h1" component='h1' align='center'>хотите узнать</Typography>
          <Typography variant="h2" component='h1' gutterBottom>какая подсветка подойдет вашей кухне?</Typography>
          <div className={classes.redLineStyle} />
        </div>
      </div> 
      <div style={{position: 'relative', padding: 48}}>
        <div className={classes.dottedLineStyleTop} />
        <div className={classes.dottedLineStyleRight} />
        <div className={classes.dottedLineStyleLeft} />
        <div className={classes.dottedLineStyleBottom} />
        <Typography variant='body1' component='p' align='center'>Пройдите тест из&ensp;
          <Typography variant='body2' component='span'>6 вопросов за 2 минуты</Typography>&ensp;
          и получите&ensp;
          <Typography variant='h5' component='span'>скидку 20%</Typography>&ensp;на оригинальный светильник от компании&ensp;
          <Typography variant='body2' component='span' style={{color: '#252049'}}>Fulogy</Typography>&ensp;
        </Typography>
      </div>
    <div style={{height: 48}} />
    <Grid 
      container
      justify='center'
      alignItems='center'
    >
      <Grid item xs={9}>
        <Button fullWidth variant="contained" color="primary" size="large" href='https://constructor.fulogy.com/quiz' target='_blank' onClick={onClick}>Пройти тест</Button>
      </Grid>
    </Grid>
    </>  
  )
}