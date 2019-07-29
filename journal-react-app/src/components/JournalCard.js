import React, {Component} from 'react';
import {Card, ButtonToolbar, Button, Row, Col} from 'react-bootstrap'

class JournalCard extends Component {
    render() {
        return (
            <Card className="journal-card">
                <Card.Body>
                    {this.props.journal.subject}
                </Card.Body>
                <ButtonToolbar>
                    <Button variant="primary">Edit</Button>
                    <Button variant="danger">Delete</Button>
                </ButtonToolbar>
            </Card>
        )
    }
}

export default JournalCard