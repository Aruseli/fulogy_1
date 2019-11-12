import React from 'react';
import { renderToString } from "react-dom/server";

import { StaticRouter } from 'react-router';

import { onPageLoad } from "meteor/server-render";
  
import { ServerStyleSheets } from '@material-ui/core/styles';

import CleanCSS from 'clean-css';

import {App} from '../imports/index';

const cleanCSS = new CleanCSS();

onPageLoad(sink => {
  const sheets = new ServerStyleSheets();

  sink.renderIntoElementById('react-target', renderToString(
    sheets.collect(
      <StaticRouter location={sink.request.url} context={{}}>
        <App />
      </StaticRouter>
    ),
  ));

  const css = cleanCSS.minify(sheets.toString()).styles;
  sink.appendToHead(`<style>${css}</style>`);
});