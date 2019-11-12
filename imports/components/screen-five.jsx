import React from 'react';

import {makeStyles, Typography, Container, Paper} from '@material-ui/core';

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
    backgroundImage: 'linear-gradient(#d8d8d8 33%, rgba(255,255,255,0) 0%), linear-gradient(#d8d8d8 33%, rgba(255,255,255,0) 0%)',
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
    background: '#f7f5f5',
    fontSize: '2.9rem',
    padding: 15,
    boxSizing: 'border-box',
    color: '#cdcdcd',
    borderColor: '#fff',
  },
  arrowStyles1: {
    position: 'absolute',
    width: 121,
    left: 35,
    transform: 'rotate(-14deg)',
    top: 208
  },
  arrowStyles2: {
    position: 'absolute',
    width: 121,
    left: 35,
    transform: 'rotate(-14deg)',
    top: 208
  },
  handBlockStyle: {
    backgroundImage: "url('/handAll.png')",
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '100%',
    height: 450,
    position: 'absolute',
    top: -240
  },
}))

export const ScreenFive = () => {
  const classes = useStyle();
  
  return(
    <>
      <div style={{position: 'relative', paddingTop: 240, paddingRight: 96, paddingBottom: 48}}>
        <div className={classes.dottedLineStyle} />
        <Paper elevation={4} className={classes.circleNumberStyle}>4</Paper>
        <div className={classes.headerStyle}>
          <Typography variant="h1" component='h1'>гарантия</Typography>
          <div className={classes.redLineStyle} />
        </div>
        <Container>
          <Typography variant='body1' component='p' gutterBottom>Мы настолько уверены в качестве своего продукта, что 
            даем письменную гарантию качества на &ensp;
            <Typography variant="body1" component='span' color='primary'>5 лет</Typography>&ensp;на сами изделия и на монтаж.  
          </Typography>
        </Container>
      </div> 
      <div style={{position: 'relative'}}>
        <div className={classes.nudeBlockStyle}>
          <Typography variant='body2' component='p' gutterBottom>У нас вежливые и чистоплотные монтажники, которые не мусорят.
          </Typography>
        </div>
        <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles1}/>
        <div style={{position: 'relative', paddingTop: 112}}>
          <div className={classes.dottedLineStyle} />
          <div className={classes.handBlockStyle} />
          <Container>
            <Typography variant='body1' component='p'>Мы также обеспечим для Вас гарантийное и 
            постгарантийное обслуживание.
            </Typography>
          </Container>
        </div> 
      </div>

    </>  
  )
}