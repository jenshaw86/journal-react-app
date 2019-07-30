import React, {Component} from 'react'
import Entry from './Entry'
import {ButtonToolbar, Button} from 'react-bootstrap'

export default class Book extends Component {
    renderEntries = () => {
        return this.props.book.entries.slice(this.props.currentIndex, (this.props.currentIndex + 1)).map((entry, idx) => {
            return <Entry key={idx} entry={entry}/>
        })
    }

    handlePageDown = () => {
        this.props.pageDown()
        this.renderEntries()
    }

    handlePageUp = () => {
        this.props.pageUp()
        this.renderEntries()
    }

    render() {
        return <div>
            {this.renderEntries()}
            <ButtonToolbar>
                <Button onClick={this.handlePageDown}>Down</Button>
                <Button onClick={this.handlePageUp}>Up</Button>
            </ButtonToolbar>
        </div>
    }
}