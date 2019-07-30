import React from "react"
import Entry from "../components/Entry"

export default class BookContainer extends React.Component {
    // should return object of single journal
    getSelectedJournal = () => {
        return this.props.journals.find(journal => {
            return journal.id === parseInt(this.props.match.params.id)
        })
    }

    renderEntries = () => {
        return this.getSelectedJournal().entries.map((entry, idx) => {
            return <Entry key={idx} entry={entry}/>
        })
    }

    render() {  
        return <div>{this.renderEntries()}</div>
    }
}