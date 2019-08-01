import React from "react";
import Entry from "./Entry";
import { Card, Button, Modal, Form, ButtonToolbar } from "react-bootstrap";

const Book = props => {
    // Modal Hooks
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   Entries Hook
  const [entries, setEntries] = React.useState(props.book.entries);
  const handleNewEntry = entry => {
      setEntries([entry, ...entries]);
      props.resetCurrentIndex()
  }
  
  const handleSubmit = ev => {
    ev.preventDefault();
    handleClose();
    fetch(`http://localhost:3000/entries`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: ev.target[0].value,
        content: ev.target[1].value,
        journal_id: props.book.id
      })
    })
      .then(resp => resp.json())
      .then(obj => handleNewEntry(obj));
  };

  const filterEntries = entries => {
    let filteredEntries = entries.filter(entry => entry.journal_id === props.book.id);
    setEntries(filteredEntries);
  };

  const deleteEntry = entry => {
    fetch(`http://localhost:3000/entries/${entry.id}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(data => filterEntries(data));
  };

  const editEntry = (ev, entry) => {
    fetch(`http://localhost:3000/entries/${entry.id}`, {
      method: "PATCH",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: ev.target[0].value,
        content: ev.target[1].value
      })
    })
      .then(resp => resp.json())
      .then(data => filterEntries(data));
  };

    const renderEntries = () => {
        console.log(`I'm running.`)
      if (entries && entries.length !== 0) {
        const sortedEntries = [...entries].sort((a, b) => (b.created_at > a.created_at) ? 1 : -1);
        console.log(`I have ${sortedEntries.length} entries. Current Index is ${props.currentIndex}`)
        console.log(sortedEntries.length === props.currentIndex)
        return sortedEntries.slice(props.currentIndex, props.currentIndex + 1).map((entry, idx) => {
            if (props.currentIndex === 0) {
                return (
                    <div className="page-flipper">
                        <Button className="hidden" onClick={() => props.pageDown()}>Left</Button>
                        <Entry key={idx} entry={entry} editEntry={editEntry} deleteEntry={deleteEntry} />
                        <Button onClick={() => props.pageUp()}>Right</Button>
                    </div>
                )
            } else if (sortedEntries.length === props.currentIndex) {
                console.log(`TRUTH`)
                return (
                    <div className="page-flipper">
                        <Button onClick={() => props.pageDown()}>Left</Button>                    
                        <div>
                            <Card className="journal-card" onClick={handleShow}>
                                <Card.Body><span>+</span><p>Add New Entry</p></Card.Body>
                            </Card>
                        </div>
                        <Button className="hidden" onClick={() => props.pageUp()}>Right</Button>
                    </div>
                )
            } else if (props.currentIndex > 0 && props.currentIndex < sortedEntries.length) {
                console.log(`You're in the middle!`)
                return (
                    <div className="page-flipper">
                        <Button onClick={() => props.pageDown()}>Left</Button>
                        <Entry key={idx} entry={entry} editEntry={editEntry} deleteEntry={deleteEntry} />
                        <Button onClick={() => props.pageUp()}>Right</Button>
                    </div>
                );
            }
        })
      } else {
        return(
            <div className="page-flipper">
                <Card className="journal-card" onClick={handleShow}>
                    <Card.Body>
                        <span>+</span>
                        <p>Add New Entry</p>
                        </Card.Body>
                </Card>
            </div>
        )
      }
    }
                
  return (
    <>`
      <h1>Journal Entries</h1>
      <div className="container">
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
    </>
  );
};

export default Book
