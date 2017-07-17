import React, { Component } from 'react';

import {Scene, Router} from 'react-native-router-flux';
import Home from './containers/home';
import Menu from './containers/menu';
import Chapter1 from './containers/chapter1';
import Chapter2 from './containers/chapter2';
import Contacts from './containers/contacts';
import Me from './containers/me';
import SignIn from './containers/signin';


export default class AppRouter extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Scene key="root">
          <Scene key="home" component={Home} />
          <Scene key="menu" component={Menu} />
          <Scene key="cha" component={Chapter1} />
          <Scene key="contacts" component={Contacts} />
          <Scene key="signin" component={SignIn} />
          <Scene key="me" component={Me} />
        </Scene>
      </Router>
    )
  }
}
