import React, {Component} from 'react'
import Entry from './Entry'

export default class Book extends Component {
    renderEntries = () => {
        return this.props.book.entries.map((entry, idx) => {
            return <Entry key={idx} entry={entry}/>
        })
    }

    render() {
        return <div>{this.renderEntries()}</div>
    }
}