import React, {Component, Fragment} from 'react';
import Dashboard from './containers/Dashboard'
import SiteNav from './components/SiteNav'
import BookContainer from './containers/BookContainer'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {

  constructor() {
    super()
    this.state = {
        journals: [],
        currentIndex: 0
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
    return <BookContainer {...props} journals={this.state.journals} currentIndex={this.state.currentIndex} pageUp={this.pageUp} pageDown={this.pageDown} />
  }
}

  pageUp = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 1
    })
  }

  pageDown = () => {
    this.setState({
      currentIndex: this.state.currentIndex - 1
    })
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
