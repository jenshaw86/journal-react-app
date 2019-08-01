import React from "react"
import Book from "../components/Book"

export default class BookContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            currentIndex: 0
        }
    }

    pageUp = () => {
        let increasedIndex = this.state.currentIndex + 1
        this.setState({
            currentIndex: increasedIndex
        })
    }

    pageDown = () => {
        let decreasedIndex = this.state.currentIndex - 1
        this.setState({
            currentIndex: decreasedIndex
        })
    }


    // should return object of single journal
    getSelectedJournal = () => {
        return this.props.journals.find(journal => {
            return journal.id === parseInt(this.props.match.params.id)
        })
    }

    render() {  
        return <div><Book currentIndex={this.state.currentIndex} book={this.getSelectedJournal()} pageUp={this.pageUp} pageDown={this.pageDown} /></div>
    }
}