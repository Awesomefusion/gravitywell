import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '@fontsource/roboto';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </CssBaseline>
  </React.Fragment>
    ,
  document.getElementById('root')
);