import React from "react"

export default class Book extends React.Component {
    // should return object of single journal
    getSelectedJournal = () => {
        return this.props.journals.find(journal => {
            return journal.id === parseInt(this.props.match.params.id)
        })
    }

    render() {  
        return <div>{this.getSelectedJournal().subject}</div>
    }
}