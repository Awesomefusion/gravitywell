import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '@fontsource/roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    background: {
      default: "white"
    }
  }
});


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </CssBaseline>
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root')
);