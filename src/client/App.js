import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppbarDrawer from './AppbarDrawer';

class App extends React.Component {
  render() {

    return (
      <React.Fragment>
        <CssBaseline />
        <AppbarDrawer />
      </React.Fragment>
    );
  }
}

export default App;
