import React, {Component} from 'react';
import {Card, ButtonToolbar, Button} from 'react-bootstrap'

class JournalCard extends Component {
    render() {
        return (
            <div className="container">
                <Card>
                    <Card.Body>
                        {this.props.journal.subject}
                    </Card.Body>
                    <ButtonToolbar>
                        <Button variant="primary">Edit</Button>
                        <Button variant="danger">Delete</Button>
                    </ButtonToolbar>
                </Card>
            </div>
        )
    }
}

export default JournalCard