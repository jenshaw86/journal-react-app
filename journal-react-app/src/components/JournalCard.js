import React from "react";
import { Card, ButtonToolbar, Button, Modal, Form } from "react-bootstrap";
// import Entry from "./Entry";
import { Link } from "react-router-dom";

const JournalCard = props => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    props.deleteJournal(props.journal);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault()
    handleClose()
    props.editJournal(ev, props.journal)
  }

  return (
    <>
      <Card className="journal-card">
        <Link to={`/journals/${props.journal.id}`}>
          <Card.Body>{props.journal.subject}</Card.Body>
        </Link>
        <ButtonToolbar>
          <Button variant="primary" onClick={handleShow}>
            Edit
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </ButtonToolbar>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Journal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <Form.Group controlId="formEditSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" defaultValue={`${props.journal.subject}`} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default JournalCard;
