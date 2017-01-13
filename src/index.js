import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory} from 'react-router';
import promise from 'redux-promise';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducers from './reducers';
import routes from './routes';


const store = createStore(reducers, {}, applyMiddleware(promise));

ReactDOM.render(
  <MuiThemeProvider >
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </MuiThemeProvider>
  , document.getElementById('main'));
