import React from 'react';

import {makeStyles, Typography, Container, Paper} from '@material-ui/core';

import {Slider} from './slider';

const useStyle = makeStyles(theme => ({
  redLineStyle: {
    position: 'absolute',
    top: 35,
    left: 0,
    backgroundColor: '#f37e78',
    width: 80,
    height: 7
  },
  headerStyle: {
    position: 'relative', 
    paddingLeft: 90
  },
  nudeBlockStyle: {
    backgroundColor: theme.palette.background.default,
    boxSizing: 'border-box',
    padding: '32px 100px 32px 32px'
  },
  dottedLineStyle: {
    position: 'absolute',
    right: 75,
    top: 0,
    height: '100%',
    width: 1,
    backgroundSize: '1px 66px',
    backgroundImage: 'linear-gradient(#f3dfdf 33%, rgba(255,255,255,0) 0%), linear-gradient(#f3dfdf 33%, rgba(255,255,255,0) 0%)',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'right'
  },
  circleNumberStyle: {
    top: 105,
    right: 39,
    width: 80,
    height: 80,
    textAlign: 'center',
    position: 'absolute',
    background: '#f3dfdf',
    fontSize: '2.9rem',
    padding: 15,
    boxSizing: 'border-box',
    color: '#fff',
  },
  progressNumberStyle: {
    width: 80,
    height: 80,
    textAlign: 'center',
    background: '#fff',
    fontSize: '2.9rem',
    padding: 15,
    boxSizing: 'border-box',
    color: theme.palette.primary.main,
    boxShadow: '0 0 0px 6px #f37e78',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative'
  },
  arrowStyles: {
    position: 'absolute',
    top: 0,
    width: 100,
    left: 45,
    transform: 'rotate(-12deg)',
  },
  progressStepsStyle: {
    color: '#000', 
    opacity: 0.2,
    position: 'absolute',
    top: 7,
    left: 90,
    width: 100
  }
}))

export const ScreenSix = () => {
  const classes = useStyle();
  
  return(
  <>
    <div style={{position: 'relative'}}>
      <div style={{paddingTop: 240, paddingRight: 80, paddingBottom: 48}}>
        <div className={classes.dottedLineStyle} />
        <Paper elevation={4} className={classes.circleNumberStyle}>5</Paper>
        <div className={classes.headerStyle}>
          <Typography variant="h1" component='h1'>почему стоит купить</Typography>
          <Typography variant="h2" component='h1' gutterBottom>светильник именно у нас?</Typography>
          <div className={classes.redLineStyle} />
        </div>
        <div style={{position: 'relative', paddingTop: 32, paddingBottom: 48}}>
          <Paper elevation={4} className={classes.progressNumberStyle}>1
            <Typography variant='body1' component='span' className={classes.progressStepsStyle}>из 7</Typography>
          </Paper>
          <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles}/>
          <Typography variant='h5' component='h2' align='center' style={{paddingTop: 64}} gutterBottom>уникальные качества светильника</Typography>
          <Container>
            <Typography variant='body1' component='p'>
              <Typography variant="body1" component='span' color='primary'>Яркий,</Typography>&ensp;качественный и естественный свет "БЕЗ ТОЧЕК",
              что создает комфортные условия для приготовления еды.
            </Typography>
          </Container>
        </div>
      </div>
      <Slider /> 
    </div> 
  </>  
  )
}