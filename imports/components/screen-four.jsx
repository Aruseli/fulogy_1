import React from 'react';

import {Grid, makeStyles, Typography, Container, Paper} from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  handBlockStyle: {
    backgroundImage: "url('/hand.png')",
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '100%',
    height: '100%',
  },
  dottedLineStyle: {
    position: 'absolute',
    right: 75,
    top: 0,
    height: '100%',
    width: 1,
    backgroundSize: '1px 66px',
    backgroundImage: 'linear-gradient(#ededed 33%, rgba(255,255,255,0) 0%), linear-gradient(#ededed 33%, rgba(255,255,255,0) 0%)',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'right'
  },
  dottedLineStyleDarker: {
    position: 'absolute',
    right: 75,
    top: 0,
    height: '100%',
    width: 1,
    backgroundSize: '1px 66px',
    backgroundImage: 'linear-gradient(#EEECED 33%, rgba(255,255,255,0) 0%), linear-gradient(#EEECED 33%, rgba(255,255,255,0) 0%)',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'right'
  },
  dottedLineStyleDarker2: {
    position: 'absolute',
    right: 75,
    top: 0,
    height: '100%',
    width: 1,
    backgroundSize: '1px 66px',
    backgroundImage: 'linear-gradient(#F0EAEC 33%, rgba(255,255,255,0) 0%), linear-gradient(#F0EAEC 33%, rgba(255,255,255,0) 0%)',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'right'
  },
  clipPathBlock: {
    clipPath: 'polygon(100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
    backgroundPosition: 'center',
    backgroundImage: "url('/Photo-5.jpg')",
    backgroundSize: 'cover',
    width: '100%',
    height: '35vh',
    position: 'relative',
    zIndex: 2
  },
  clipPathBlock2: {
    clipPath: 'polygon(100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
    backgroundPosition: 'center',
    backgroundImage: "url('/Photo-6.jpg')",
    backgroundSize: 'cover',
    width: '100%',
    height: '35vh',
    position: 'relative',
    zIndex: 2
  },
  arrowStyles1: {
    position: 'absolute',
    width: 100,
    right: 342,
    transform: 'rotate(15deg)',
    bottom: 342,
  },
  arrowStyles2: {
    position: 'absolute',
    width: 121,
    left: 35,
    transform: 'rotate(-1deg)',
    bottom: 30,
  },
  arrowStyles3: {
    position: 'absolute',
    width: 121,
    right: 13,
    transform: 'rotate(-1deg)',
    top: 335,
  }
}))

export const ScreenFour = () => {
  const classes = useStyle();
  
  return(
    <>
      <div style={{position: 'relative'}}>
        <div style={{position: 'relative', paddingTop: 240, paddingRight: 96, paddingBottom: 48}}>
          <div className={classes.dottedLineStyle} />
          <div className={classes.handBlockStyle}>
              <Typography variant='body1' component='p'>&ensp;
              <Typography variant="body1" component='span' style={{color: '#fff'}}>Мы</Typography>&ensp;не экономим на материалах, а потому качество нашей 
                продукции на высшем уровне, в чем Вы сможете убедиться сами.
              </Typography>
          </div>
        </div> 
        <div className={classes.clipPathBlock} />
        <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles1}/>
        <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles2}/>
        <div style={{boxShadow: '0 5px 10px 0 rgba(0, 0, 0, .1)'}}>
          <Typography variant='h3' component='p' align='center' style={{padding: 64}}>подробнее 
            ознакомиться с необычными свойствами светильника вы можете<br />на этой странице
          </Typography>
        </div>
      </div>
      <div style={{position: 'relative', paddingTop: 240, paddingRight: 96, paddingBottom: 48}}>
        <div className={classes.dottedLineStyleDarker} />
        <Container>
          <Typography variant="h2" component='h1' gutterBottom>благодаря отсутствию посредников</Typography>
          <Typography variant='body1' component='p'>(поскольку это собственная разработка) и высококачественным комплектующим,&ensp;
                <Typography variant="body1" component='span' style={{color: '#fff'}}>мы предлагаем</Typography>&ensp;оптимальное
                сщчетание цены и качества!
                </Typography>
        </Container>
        <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles3}/>
      </div>
        <div className={classes.clipPathBlock2} />
      <div style={{position: 'relative'}}>   
        <div className={classes.dottedLineStyleDarker2} />     
        <Typography variant='body1' component='p' align='center' style={{padding: 64}}>Таким образом, приобритая наши светильники,
        Вы получаете оригинальную продукцию от компании&ensp;
            <Typography variant="body1" component='span' style={{color: '#241E4C'}}>Fulogy</Typography>&ensp;
        </Typography>
      </div>
    </>  
  )
}