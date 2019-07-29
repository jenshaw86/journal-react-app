import React, {Component, Fragment} from 'react';
import Dashboard from './containers/Dashboard'
import SiteNav from './components/SiteNav'
import Book from './components/Book'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {

  constructor() {
    super()
    this.state = {
        journals: []
    }
}

componentDidMount() {
  fetch("http://localhost:3000/journals")
  .then(resp => resp.json())
  .then(data => {
    this.setState({
        journals: data
    })
  })
}

renderBook = (props) => {
  if (this.state.journals.length !== 0) {
    return <Book {...props} journals={this.state.journals} />
  }
}

  render() {
    return (
      <Router>
        <Fragment>
          <SiteNav />
          <Route path="/" exact render={() => <Dashboard journals={this.state.journals} />}/>
          <Route path="/journals/:id" exact render={(props) => this.renderBook(props)} />
        </Fragment>
      </Router>
    )
  }
}

export default App;
