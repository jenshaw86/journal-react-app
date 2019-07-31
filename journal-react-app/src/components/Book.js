import React from 'react'
import Entry from './Entry'
import { Card, Button, Modal, Form } from "react-bootstrap";

const Book = (props) => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (ev) => {
        ev.preventDefault()
        handleClose()
        // TODO change to edit entry
        props.editJournal(ev, props.journal)
      }

    const renderEntries = () => {
        return props.book.entries.map((entry, idx) => {
            return <Entry key={idx} entry={entry}/>
        })
    }

        return <div className="card-holder">
            
            <Card className="journal-card" onClick={handleShow}>
                <Card.Body>+</Card.Body>
            </Card>
            
            {renderEntries()}
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Journal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEditSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="enter a new subject" />
                        </Form.Group>
                        {/* TODO handle submit for new entry */}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                    </Modal.Body>
            </Modal>
        </div>
}

export default Book