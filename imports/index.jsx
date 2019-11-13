import React from 'react';

import { Switch, Route } from 'react-router';

import { ThemeProvider } from '@material-ui/core/styles';

import {theme} from '../theme';
import {ScreenOne} from './components/screen-one';
import {ScreenTwo} from './components/screen-two';
import {ScreenThree} from './components/screen-three';
import {ScreenFour} from './components/screen-four';
import {ScreenFive} from './components/screen-five';
import {ScreenSix} from './components/screen-six';
import {ScreenSeven} from './components/screen-seven';
import {ScreenEight} from './components/screen-eight';


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
    </>
  )
}

export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path='/' component={Index} />
      </Switch>
    </ThemeProvider>
  )
}
