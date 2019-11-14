import React from 'react';

import {
  makeStyles, 
  Typography, 
  Container, 
  Paper, 
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import {FiberManualRecord} from '@material-ui/icons';

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
    backgroundImage: 'linear-gradient(#f37e78 33%, rgba(255,255,255,0) 0%), linear-gradient(#f37e78 33%, rgba(255,255,255,0) 0%)',
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
    background: '#f3b3b3',
    fontSize: '2.9rem',
    padding: 15,
    boxSizing: 'border-box',
    color: '#fff',
  },
  clipPathBlock1: {
    clipPath: 'polygon(100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
    backgroundPosition: 'center',
    backgroundImage: "url('/Photo-14.png')",
    backgroundSize: 'cover',
    width: '100%',
    height: '25vh',
    position: 'relative',
    zIndex: 2
  },
  clipPathBlock2: {
    clipPath: 'polygon(100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
    backgroundPosition: 'top',
    backgroundImage: "url('/Photo-18.jpg')",
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
    src: '/Photo-15.jpg',
    alt: 'теплый свет'
  },
  {
    id: 2,
    src: '/Photo-16.jpg',
    alt: 'дневной свет'
  },
  {
    id: 3,
    src: '/Photo-17.jpg',
    alt: 'холодный свет'
  }
]

export const ScreenEight = () => {
  const classes = useStyle();
  
  return(
    <>
      <div style={{position: 'relative', paddingTop: 240, paddingRight: 96, paddingBottom: 48}}>
        <div className={classes.dottedLineStyle} />
        <Paper elevation={4} className={classes.circleNumberStyle}>6</Paper>
        <div className={classes.headerStyle}>
          <Typography variant="h1" component='h1'>преимущества</Typography>
          <Typography variant="h2" component='h1' gutterBottom>самого светильника</Typography>
          <div className={classes.redLineStyle} />
        </div>
        <Container>
          <List>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecord color='primary'/>
              </ListItemIcon>
              <ListItemText 
                primary={
                <Typography variant='h5' component='h3'>алюминиевый корпус</Typography>
              } 
              />
            </ListItem>
          </List>
          <Typography variant='body1' component='p'>позволяет рассеивать тепло,
            что делает возможным использование мощних ярких лент без боязни перегрева.
          </Typography>
        </Container>
      </div> 
      <div className={classes.clipPathBlock1} />
      <div style={{position: 'relative', paddingTop: 96, paddingRight: 96, paddingBottom: 96}}>
        <div className={classes.dottedLineStyle} />
        <Container>
          <List>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecord color='primary'/>
              </ListItemIcon>
              <ListItemText 
                primary={
                <Typography variant='body1' component='p'>Мы применяем</Typography>
              } 
              />
            </ListItem>
          </List>
          <Typography variant='body1' component='div'>
            <Typography variant='h5' component='h3'>светодиодны высокой светопередачи,</Typography>
            что делает свет приближенным к естественному солнечному цвету, и Вы видите предметы привычно, 
            как и при дневном свете.
          </Typography>
          <Typography variant='body1' component='p'>Рабочая зона столешницы при этом освещается равномерно
          для комфортного приготовления пищи.
          </Typography>
        </Container>
      </div>
      <Slider items={items} />
      <div style={{position: 'relative', paddingTop: 48, paddingRight: 32, paddingBottom: 96}}>
        <div className={classes.dottedLineStyle} />
        <Container>
          <List>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecord color='primary'/>
              </ListItemIcon>
              <ListItemText 
                primary={
                <Typography variant='body1' component='p'>Для Вашего удобства, светильник</Typography>
              } 
              />
            </ListItem>
          </List>
          <Typography variant='body1' component='span'>
            <Typography variant='h5' component='h3'>оснащен бесконтактной системой управления.</Typography>
            Вы можете его включать, выключать, регулировать яркость без прикосновения, только по взмаху руки, как
            волшебной палочкой!
          </Typography>
          <Typography variant='body2' component='p'>Это удобно и гигиенично.</Typography>
        </Container>
      </div>
      <div className={classes.clipPathBlock2} />
      <div style={{
        position: 'relative', 
        boxShadow: '0 5px 10px 0 rgba(0, 0, 0, .1)', 
        boxSizing: 'border-box',  
        zIndex: 222,
        backgroundColor: '#fff'
      }}>
        <div style={{padding: '64px 112px 96px 32px'}}>
          <List disablePadding>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecord color='primary'/>
              </ListItemIcon>
              <ListItemText 
                primary={
                <Typography variant='h5' component='h3'>блок питания</Typography>
              } 
              />
            </ListItem>
          </List>
          <Typography variant='body1' component='p'>
              Fulogy очень компактный, что позволяет проводить скрытый монтаж. При этом он не шумит и 
              прослужит долго, потому что мы НЕ ЭКОНОМИМ НА МАТЕРИАЛАХ. 
          </Typography>
        </div>
      </div>
      <div style={{position: 'relative', paddingTop: 80, paddingRight: 32}}>
        <div className={classes.dottedLineStyle} />
        <Container>
          <List disablePadding>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecord color='primary'/>
              </ListItemIcon>
              <ListItemText 
                primary={
                <Typography variant='h5' component='h3'>светодиодная подстветка</Typography>
              } 
              />
            </ListItem>
          </List>
          <Typography variant='body1' component='p'>
            имеет низкое энергопотребление, а значит,&ensp;
            <Typography variant='body2' component='span'>экономит Ваши расходы.</Typography>
          </Typography>
        </Container>
      </div> 
    </>  
  )
}