import React from 'react'
import Entry from './Entry'
import { Card, Button, Modal, Form } from "react-bootstrap";

const Book = (props) => {

    const [show, setShow] = React.useState(false);

    const [entries, setEntries] = React.useState(props.book.entries)

    const handleNewEntry = (entry) =>  setEntries([entry, ...entries]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (ev) => {
        ev.preventDefault()
        handleClose()
        console.log("title:" + ev.target[0].value, "content:" + ev.target[1].value)
        // TODO change to edit entry
        // setEntries(ev.target[0].value)
        fetch(`http://localhost:3000/entries`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: ev.target[0].value,
            content: ev.target[1].value,
            journal_id: props.book.id
        })
    })
    .then(resp => resp.json())
    .then(obj => handleNewEntry(obj))
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
                <Modal.Title>New Entry</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEditSubject">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="enter a new title" />
                        <Form.Label>Content</Form.Label>
                        <Form.Control type="text" placeholder="enter content" />
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