import React from "react"
import { Card, ButtonToolbar, Button, Modal, Form } from "react-bootstrap";

const Entry = (props) => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        props.deleteEntry(props.entry)
      };
    
    const handleSubmit = (ev) => {
        ev.preventDefault()
        ev.persist()
        handleClose()
        props.editEntry(ev, props.entry)
        // console.log("submit me")
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
                    <Modal.Title>Edit Entry</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <Form.Group controlId="formEditSubject">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" defaultValue={`${props.entry.title}`} />

                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows="3" defaultValue={`${props.entry.content}`} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}



export default Entry