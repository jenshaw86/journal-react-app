import React from "react";
import JournalCard from "../components/JournalCard";
import { Card, Modal, Button, Form } from "react-bootstrap";

const Dashboard = props => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createCards = arr => {
    // DEBUG: arr returns integer]
    console.log("i ran")
    if (arr.length !== 0) {
        return arr.map((journal, idx) => {
            return <JournalCard key={idx} journal={journal} />;
        });
    }
  };

  const handleSubmit = (ev) => {
    handleClose();
    ev.preventDefault();
    fetch(`http://localhost:3000/journals`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id: 1,
            subject: ev.target[0].value
        })
    })
    .then(resp => resp.json())
    .then(obj => props.addJournal(obj))
  }

  return (
    <div className="card-holder">
      <Card className="journal-card" onClick={handleShow}>
        <Card.Body>+</Card.Body>
      </Card>
      {createCards(props.journals)}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Journal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject title" />
            </Form.Group>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Dashboard;
