import React, {Component, Fragment} from 'react';
import Dashboard from './containers/Dashboard'
import SiteNav from './components/SiteNav'
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <SiteNav />
        <Dashboard />
      </Fragment>
    )
  }
}

export default App;
