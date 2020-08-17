/**
 * @Author: harsha
 * @Date:   2020-08-16T21:54:49+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T15:32:34+02:00
 */

import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';
import DataListingComponent from './components/DataListingComponent/DataListingComponent';
import { LandingPageComponent } from './components/LandingPageComponent/LandingPageComponent';

import GlobalStyle from './styles/GlobalStyles';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <GlobalStyle />
          <HeaderComponent />
          <Route exact path="/" component={LandingPageComponent} />
          <Route exact path="/comments" component={DataListingComponent} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
