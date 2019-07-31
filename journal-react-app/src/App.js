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

// -------- JOURNAL METHODS ----------------------------------------------------------------------

addJournal = (journal) => {
  let newJournalArr = [journal, ...this.state.journals]
  this.setState({
    journals: newJournalArr
  })
}

deleteJournal = (journal) => {
  fetch(`http://localhost:3000/journals/${journal.id}`, {
    method: "DELETE"
  })
  .then(resp => resp.json())
  .then(data => {
    this.setState({
      journals: data
    })
  })
}

  editJournal = (ev, journal) => {
    fetch(`http://localhost:3000/journals/${journal.id}`, {
      method: "PATCH",
      headers: {
        "Accepts" : "application/json",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
          subject: ev.target[0].value
      })
  })
  .then(resp => resp.json())
  .then(data => {
      this.setState({
        journals: data
      })
    })
  }

  // -------- ENTRY METHODS ----------------------------------------------------------------------
  
  
  

  render() {
    return (
      <Router>
        <Fragment>
          <SiteNav />
          <Route path="/" exact render={() => <Dashboard addJournal={this.addJournal} editJournal={this.editJournal} deleteJournal={this.deleteJournal} journals={this.state.journals} />}/>
          <Route path="/journals/:id" exact render={(props) => this.renderBook(props)} />
        </Fragment>
      </Router>
    )
  }
}

export default App;
