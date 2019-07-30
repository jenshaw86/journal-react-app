import React, {Component} from 'react';
import {Card, ButtonToolbar, Button} from 'react-bootstrap'
import Entry from "./Entry"
import {Link} from 'react-router-dom'

class JournalCard extends Component {

    getEntries = (journal) => {
        return journal.entries.map((entry, idx) => {
            return <Entry key={idx} entry={entry}/>
        })
    }

    handleDelete = () => {
        this.props.deleteJournal(this.props.journal)
    }

    render() {
        return (
            <Card className="journal-card">
                <Link to={`/journals/${this.props.journal.id}`}>
                    <Card.Body>
                        {this.props.journal.subject}
                    </Card.Body>
                </Link>
                <ButtonToolbar>
                    <Button variant="primary">Edit</Button>
                    <Button variant="danger" onClick={this.handleDelete}>Delete</Button>
                </ButtonToolbar>
            </Card>
            
        )
    }
}

export default JournalCard