import React, {useState} from 'react';

import { Switch, Route } from 'react-router';

import { ThemeProvider } from '@material-ui/core/styles';

import { AnaliticsProvider } from './package/analitics';

import {theme} from '../theme';
import {ScreenOne} from './components/screen-one';
import {ScreenTwo} from './components/screen-two';
import {ScreenThree} from './components/screen-three';
import {ScreenFour} from './components/screen-four';
import {ScreenFive} from './components/screen-five';
import {ScreenSix} from './components/screen-six';
import {ScreenSeven} from './components/screen-seven';
import {ScreenEight} from './components/screen-eight';
import {ScreenNine} from './components/screen-nine';
import {Footer} from './components/footer';

export const TitleValue = React.createContext();

export const Index = () => {
  return (
    <>
      <ScreenOne />
      <ScreenTwo />
      <ScreenThree />
      <ScreenFour />
      <ScreenFive />
      <ScreenSix />
      <ScreenSeven />
      <ScreenEight />
      <ScreenNine />
      <Footer />
    </>
  )
}

export const App = () => {
  const [title, setTitle] = useState();

  return (
    <AnaliticsProvider
      facebookPixel={null}
      googleAnalitics={null}
      yandexMetrika={null}
    >
      <ThemeProvider theme={theme}>
        <TitleValue.Provider>
          <Switch>
            <Route path='/' component={Index} />
          </Switch>
        </TitleValue.Provider>
      </ThemeProvider>
    </AnaliticsProvider>
  )
}
