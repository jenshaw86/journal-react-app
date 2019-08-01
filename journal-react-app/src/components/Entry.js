import React from "react"
import { Card, ButtonToolbar, Button, Modal, Form } from "react-bootstrap";

const Entry = (props) => {

    const [showRead, setReadShow] = React.useState(false);

    const handleCloseRead = () => setReadShow(false);
    const handleShowRead = () => setReadShow(true);

    const [showEdit, setEditShow] = React.useState(false);

    const handleCloseEdit = () => setEditShow(false);
    const handleShowEdit = () => {
        setEditShow(true);
        // handleCloseRead();
    }

    const handleDelete = () => {
        props.deleteEntry(props.entry)
        if (showRead) {
            handleCloseRead()
        }
      };
    
    const handleSubmit = (ev) => {
        ev.preventDefault()
        ev.persist()
        handleCloseEdit()
        props.editEntry(ev, props.entry)
        // console.log("submit me")
    }

    const displaySnippet = () => {
        if (props.entry.content.length > 250){
            return props.entry.content.slice(0, 247) + "..."
        } else {
            return props.entry.content
        }
    }

    return (
      <div>
        <Card className="journal-card" onClick={handleShowRead}>
          <Card.Body>
          <h3>{props.entry.title}</h3>
          <p>{displaySnippet()}</p>
          </Card.Body>
          {/* STRECH include intro snippet of entry content ... */}
        </Card>
        <ButtonToolbar className="container">
            <Button variant="primary" onClick={handleShowRead}>
              View
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
        </ButtonToolbar>
        {/* Read Modal */}
        <Modal show={showRead} onHide={handleCloseRead}>
          <Modal.Header closeButton>
            <Modal.Title>{ props.entry.title }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{props.entry.content}</p>
              <ButtonToolbar>
                <Button variant="primary" onClick={handleShowEdit} >
                  Edit
                </Button>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
              </ButtonToolbar>
          </Modal.Body>
        </Modal>

        {/* Edit Modal */}
        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Entry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <Form.Group controlId="formEditSubject">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={`${props.entry.title}`}
                />
                {/* STRETCH control returns in text area */}
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  defaultValue={`${props.entry.content}`}
                />
              </Form.Group>
                <Button variant="primary" type="submit">
                  Save
                </Button>
                <Button variant="secondary" onClick={handleCloseEdit}>Close</Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
}



export default Entry