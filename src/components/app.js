import React, { Component } from 'react';

import Header from './header';
import injectTapEventPlugin from 'react-tap-event-plugin';

//material-ui fix
injectTapEventPlugin();

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
