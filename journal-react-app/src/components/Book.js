import React from "react"

export default class Book extends React.Component {
    // should return object of single journal
    getSelectedJournal = (selectedJournalId) => {
        return this.props.journals.find((journal) => {
            return journal.id === parseInt(selectedJournalId)
        })
    }

    render() {  
        return <div>{this.props.journals[this.props.match.params.id].subject}</div>
    }
}