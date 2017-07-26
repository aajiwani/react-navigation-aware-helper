import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import autobind from 'autobind-decorator';

import store from '@store';
import { AppNavigator } from '@components/AppNavigator';

class App extends Component
{
  render()
  {
    return (
      <AppNavigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })} />
    );
  }
}

const mapStateToProps = (store) => ({
  nav: store.navigation
});
const AppWithNavigationState = connect(mapStateToProps)(App);

class Root extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default Root;
