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
  arrowStyles1: {
    position: 'absolute',
    width: 100,
    right: 130,
    transform: 'rotate(7deg)',
    top: 375
  },
  arrowStyles2: {
    position: 'absolute',
    width: 100,
    left: 175,
    transform: 'rotate(-10deg)',
    top: 600
  },
  progressStepsStyle: {
    color: '#000', 
    opacity: 0.2,
    position: 'absolute',
    top: 7,
    left: 90,
    width: 100
  },
  clipPathBlock: {
    clipPath: 'polygon(100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
    backgroundPosition: 'center',
    backgroundImage: "url('/Photo-12.jpg')",
    backgroundSize: 'cover',
    width: '100%',
    height: '25vh',
    position: 'relative',
    zIndex: 2
  },
}))

const items = [
  {
    id: 1,
    src: '/Photo-9.png',
    alt: 'подсветка кухни'
  },
  {
    id: 2,
    src: '/Photo-10.png',
    alt: 'подсветка кухни'
  },
  {
    id: 3,
    src: '/Photo-11.jpg',
    alt: 'подсветка кухни'
  }
]

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
        <div style={{position: 'relative', paddingTop: 96, paddingBottom: 48}}>
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
      <Slider items={items}/>
      <div style={{position: 'relative'}}>
        <div style={{
          position: 'relative', 
          boxShadow: '0 5px 10px 0 rgba(0, 0, 0, .1)', 
          boxSizing: 'border-box', 
          padding: 80, 
          zIndex: 222,
          backgroundColor: '#fff'
        }}>
          <Typography variant='h2' component='p' align='center'>оригинальный дизайн "не&nbsp;как&nbsp;у&nbsp;всех"</Typography>
          <Typography variant='body1' component='p' align='center'>- выглядит стильно, этетично и просто красиво!</Typography>
        </div>
        <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles1}/>
        <div style={{position: 'relative', paddingTop: 128, paddingRight: 96, paddingBottom: 48}}>
          <div className={classes.dottedLineStyle} />
          <Container style={{paddingRight: 50}}>
            <Typography variant='body1' component='p'>Свет, максимально направленный на рабочую зону,&ensp;
              <Typography variant="body1" component='span' color='primary'>не бьет в глаза</Typography>. 
              А также многие другие качества с которыми Вы ознакомитесь далее.
            </Typography>
          </Container>
        </div>
      </div>
      <div style={{position: 'relative'}}>
        <div className={classes.clipPathBlock} />
        <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles2}/>
      </div>
    </div> 
  </>  
  )
}