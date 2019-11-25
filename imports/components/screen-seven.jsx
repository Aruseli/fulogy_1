import React, {useContext} from 'react';

import {
  Grid, 
  makeStyles, 
  Typography, 
  Container, 
  Paper, 
  Button
} from '@material-ui/core';

import {DialogContext} from '../index';
import { Context as AnaliticsContext } from '../package/analitics';

const useStyle = makeStyles(theme => ({
  progressNumberStyle: {
    width: 30,
    height: 30,
    textAlign: 'center',
    background: '#fff',
    fontSize: 18,
    padding: 6,
    boxSizing: 'border-box',
    color: theme.palette.primary.main,
    boxShadow: '0 0 0px 2px #f37e78',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative'
  },
  nudeBlockStyle: {
    backgroundColor: theme.palette.background.default,
    boxSizing: 'border-box',
    padding: '16px 100px 16px 16px',
    position: 'relative'
  },
  dottedLineStyle: {
    position: 'absolute',
    right: 24,
    top: 0,
    height: '100%',
    width: 1,
    backgroundSize: '1px 35px',
    backgroundImage: 'linear-gradient(#f3dfdf 35%, rgba(255,255,255,0) 0%)',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'right'
  },
  arrowStyles1: {
    position: 'absolute',
    width: 35,
    right: 6,
    transform: 'rotate(1deg)',
    top: -16
  },
  arrowStyles2: {
    position: 'absolute',
    width: 45,
    left: 48,
    transform: 'rotate(-7deg)',
    top: 0
  },
  arrowStyles3: {
    position: 'absolute',
    width: 35,
    right: 16,
    transform: 'rotate(1deg)',
    top: 176
  },
  arrowStyles4: {
    position: 'absolute',
    width: 45,
    left: 32,
    transform: 'rotate(-7deg)',
    top: 0
  },
  arrowStyles5: {
    position: 'absolute',
    width: 35,
    right: 48,
    transform: 'rotate(1deg)',
    top: 0
  },
  clipPathBlock: {
    clipPath: 'polygon(100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
    backgroundPosition: 'center',
    backgroundImage: "url('/Photo-13.jpg')",
    backgroundSize: 'cover',
    width: '100%',
    height: '25vh',
    position: 'relative',
    zIndex: 2
  },
  redBordersBlockStyle: {
    borderTop: `3px solid ${theme.palette.primary.main}`,
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    boxSizing: 'border-box',
    padding: 16,
    position: 'relative',
    marginTop: 16
  },
}))

export const ScreenSeven = () => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const {setDialog, open} = useContext(DialogContext);

  const handlerEvent = (openEvent, thanksName, config) => () => {
    trigger(openEvent);
    setDialog({ 
      ...config,
      open: !open, 
      onThanksHandler: (trigger) => (trigger(thanksName), trigger('thanks')), 
    });
  }
  
  return(
    <>
      <div style={{position: 'relative', paddingTop: 32, paddingBottom: 32}}>   
        <div className={classes.dottedLineStyle} /> 
          <Paper elevation={4} className={classes.progressNumberStyle}>2</Paper>
          <Typography variant='h5' component='h2' align='center' style={{paddingTop: 16}} gutterBottom>собственное<br />производство</Typography>
          <Container style={{paddingRight: 16}}>
            <Typography variant='body1' component='p'>Собственная разработка изделий и комплектующих позволяет 
                нам гарантировать максимальную согласованность комплектующих между собой и запас прочности более чем&ensp;
              <Typography variant="body1" component='span' color='primary'>на&nbsp;10-летний&nbsp;срок&nbsp;службы,
                </Typography>&ensp;а также оптимальное сочетание цены и качества.
            </Typography>
          </Container>
      </div>
      <div style={{position: 'relative', paddingTop: 32, paddingBottom: 16}}>   
        <div className={classes.dottedLineStyle} /> 
          <Paper elevation={4} className={classes.progressNumberStyle}>3</Paper>
          <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles1}/>
          <Typography variant='h5' component='h2' align='center' style={{paddingTop: 16}} gutterBottom>индивидуальное<br />исполнение</Typography>
          <Container style={{paddingRight: 16}}>
            <Typography variant='body1' component='p'>Изготовим для Вас светильник на заказ по индивидуальным размерам, вплоть до&ensp;
              <Typography variant="body1" component='span' color='primary'>МИЛЛИМЕТРА
                </Typography>&ensp;без видимых стыков (соединений) и точно в срок.
            </Typography>
            <Typography variant='body2' component='p'>Выполним монтаж.</Typography>
          </Container>
      </div>
      <div className={classes.clipPathBlock} />
      <div style={{position: 'relative', paddingTop: 32, paddingBottom: 32}}>   
        <div className={classes.dottedLineStyle} /> 
          <Paper elevation={4} className={classes.progressNumberStyle}>4</Paper>
          <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles2}/>
          <Typography variant='h5' component='h2' align='center' style={{paddingTop: 16}} gutterBottom>гарантия 5 лет</Typography>
          <Container style={{paddingRight: 16}}>
            <Typography variant='body1' component='p'>Мы даем письменну гарантию качества на светильник сроком на 5 лет 
              и гарантию на монтажные работы также на 5 лет.
            </Typography>
          </Container>
      </div>
      <div className={classes.nudeBlockStyle}>
        <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles3}/>
        <Typography variant='h2' component='h2'>в случае перебоя в работе,</Typography>
        <Typography variant='body1' component='p'>
          мы не ищем виноватых и не ищем причины отказать в замене - мы просто&ensp;
              <Typography variant="body1" component='span' color='primary'>
                меняем светильник на новый
              </Typography>&ensp;или устраняем проблемы за наш счет.
        </Typography>
      </div>
      <div style={{position: 'relative', paddingTop: 32, paddingBottom: 32}}>   
        <div className={classes.dottedLineStyle} /> 
        <Paper elevation={4} className={classes.progressNumberStyle}>5</Paper>
        <Typography variant='h5' component='h2' align='center' style={{paddingTop: 16}} gutterBottom>цена<br />производителя</Typography>
        <Container style={{paddingRight: 48, paddingBottom: 16}}>
          <Typography variant='body1' component='p'>
            Посколько светильник - это наша собственная разработка, Вы не  переплачиваете посредникам.
          </Typography>
        </Container>
        <div className={classes.redBordersBlockStyle}>
          <Typography variant='body2' component='p'>
            В нашей цепочке поставок полностью отсутствуют посредники, тем самым обеспечивая оптимальное соотношение цены
            и качества, а также гибкую систему СКИДОК.
            <span style={{display: 'inline-block', position: 'relative'}}><img src='/icon/blok-6.svg' style={{width: 25, position: 'absolute', bottom: -6, left: 2}} /></span>
          </Typography>
        </div>
      </div>
      <div style={{position: 'relative', paddingTop: 32, paddingBottom: 32}}>   
        <div className={classes.dottedLineStyle} /> 
          <Paper elevation={4} className={classes.progressNumberStyle}>6</Paper>
          <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles4}/>
          <Typography variant='h5' component='h2' align='center' style={{paddingTop: 16}} gutterBottom>
            гарантийное<br />обслуживание
          </Typography>
          <Container style={{paddingRight: 16}}>
            <Typography variant='body1' component='p'>
              Мы выполняем для своих заказчиков гарантийное и постгарантийное обслуживание и стремимся
              максимально продлить срок службы наших изделий.
            </Typography>
          </Container>
      </div>
      <div style={{position: 'relative', paddingTop: 32, paddingBottom: 32}}>   
        <div className={classes.dottedLineStyle} /> 
          <Paper elevation={4} className={classes.progressNumberStyle}>7</Paper>
          <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles5}/>
          <Typography variant='h5' component='h2' align='center' style={{paddingTop: 16}} gutterBottom>
            доставка
          </Typography>
          <Container style={{paddingRight: 16}}>
            <Typography variant='body1' component='p' align='center'>
              Осуществляем быструю доставку изделий по всей России.
            </Typography>
          </Container>
      </div>
      <div style={{position: 'relative'}}>
        <div className={classes.dottedLineStyle} />
       <Typography variant="h4" component='h2' align='center' style={{paddingTop: 32, paddingLeft: 16, paddingRight: 16}}>
        чтобы задать вопрос или оставить заявку</Typography>
        <Typography variant="body1" component='p' align='center' style={{paddingBottom: 32}}>
        нажмите на кнопку ниже:</Typography>
        <Grid display='column' container justify='center' alignItems='center' spacing={4}>
          <Grid item xs={9}>
            <Button fullWidth variant="contained" color="primary" size="large" onClick={handlerEvent('request3', 'thanksRequest3', {
              title: <Typography variant='h3' component="h1" align='center'>чтобы оставить заявку</Typography>,
              bottom: <>Оставить заявку</>
            })}>Оставить заявку</Button>
          </Grid>
          <Grid item xs={9}>
            <Button fullWidth variant="contained" color="primary" size="large" onClick={handlerEvent('question3', 'thanksQuestion3', {
              title: <Typography variant='h3' component="h1" align='center'>чтобы задать вопрос</Typography>,
              bottom: <>Задать вопрос</>
            })}>Задать вопрос</Button>
          </Grid>
          <Grid item xs={9}>
            <Button fullWidth variant="contained" color="primary" size="large" onClick={handlerEvent('callback3', 'thanksCallback3', {
              title: <Typography variant='h3' component="h1" align='center'>чтобы заказать звонок</Typography>,
              bottom: <>Заказать звонок</>
            })}>Заказать звонок</Button>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="body1" component='h2' align='center'>
          или звоните по телефону</Typography>
            <Typography variant="h4" component='p' align='center'>
              <a href='tel: 8(800) 505 65 33' style={{
                textDecoration: 'none', 
                color: '#000',
                }}>8 800 505-65-33
              </a>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>  
  )
}