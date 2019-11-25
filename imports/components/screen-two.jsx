import React from 'react';

import {makeStyles, Typography, Container, Paper} from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  redLineStyle: {
    position: 'absolute',
    top: 12,
    left: 0,
    backgroundColor: '#f37e78',
    width: 32,
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
    backgroundImage: 'linear-gradient(#ececec 35%, rgba(255,255,255,0) 0%)',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'right'
  },
  circleNumberStyle: {
    top: 32,
    right: 10,
    width: 30,
    height: 30,
    textAlign: 'center',
    position: 'absolute',
    background: '#fff',
    fontSize: 16,
    padding: 7,
    boxSizing: 'border-box',
    color: '#ececec',
  },
}))

export const ScreenTwo = () => {
  const classes = useStyle();
  
  return(
    <>
      <div style={{position: 'relative', paddingTop: 96, paddingRight: 16, paddingBottom: 48}}>
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