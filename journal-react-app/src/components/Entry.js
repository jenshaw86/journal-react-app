import React from "react"
import { Card, ButtonToolbar, Button, Modal, Form } from "react-bootstrap";

const Entry = (props) => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        console.log("delete me")
      };
    
      const handleSubmit = (ev) => {
        ev.preventDefault()
        handleClose()
        // props.editJournal(ev, props.journal)
        console.log("submit me")
      }



    return (
        <div>
            <Card className="journal-card">
                <Card.Body>{props.entry.title}</Card.Body>
                    <ButtonToolbar>
                        {/* TODO add edit functionality */}
                    <Button variant="primary" onClick={handleShow}>
                        Edit
                    </Button>
                    {/* TODO add delete functionality */}
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                    </ButtonToolbar>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>New Entry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form >
                    <Form.Group controlId="formEditSubject">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="enter a new title" />
                    <Form.Label>Content</Form.Label>
                    <Form.Control type="text" placeholder="enter content " />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}



export default Entry