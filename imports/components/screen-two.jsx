import React from 'react';

import {Grid, makeStyles, Typography, Container, Paper} from '@material-ui/core';

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
    backgroundImage: 'linear-gradient(#ececec 33%, rgba(255,255,255,0) 0%), linear-gradient(#ececec 33%, rgba(255,255,255,0) 0%)',
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
    background: '#fff',
    fontSize: '2.9rem',
    padding: 15,
    boxSizing: 'border-box',
    color: '#ececec',
    borderColor: '#fff',
  }
}))

export const ScreenTwo = () => {
  const classes = useStyle();
  
  return(
    <>
      <div style={{position: 'relative', paddingTop: 240, paddingRight: 96, paddingBottom: 48}}>
        <div className={classes.dottedLineStyle} />
        <Paper elevation={4} className={classes.circleNumberStyle}>2</Paper>
        <div className={classes.headerStyle}>
          <Typography variant="h1" component='h1'>здравствуйте,</Typography>
          <Typography variant="h2" component='h1' gutterBottom>уважаемый заказчик!</Typography>
          <div className={classes.redLineStyle} />
        </div>
        <Container>
          <Typography variant='body1' component='p'>Компания Fulogy представляет абсолютно
            уникальный продукт собственной разработки - 
          </Typography>
        </Container>
      </div> 
      <div className={classes.nudeBlockStyle}>
        <Typography variant='h3' component='p'>эксклюзивный светодиодный светильник премиального качества
        для рабочей зоны кухни.
        </Typography>
      </div>
    </>  
  )
}