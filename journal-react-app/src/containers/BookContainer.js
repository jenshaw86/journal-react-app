import React from "react"
import Book from "../components/Book"

export default class BookContainer extends React.Component {
    // should return object of single journal
    getSelectedJournal = () => {
        return this.props.journals.find(journal => {
            return journal.id === parseInt(this.props.match.params.id)
        })
    }

    render() {  
        return <div><Book book={this.getSelectedJournal()} /></div>
    }
}