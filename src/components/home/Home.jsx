import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import Modal from 'react-bootstrap/Modal';

import './home.css';

const Home = (props) => {
  const [max, setMax] = useState(0);
  const [rpe, setRpe] = useState(0);
  const [reps, setReps] = useState(0);
  const [topSet, setTopSet] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (max == 0) return;
    setTopSet(Math.round(props.myArray[rpe][reps] * max));
    handleShow();
  }

  return (

    <Container>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter your max</Form.Label>
        <Form.Control type="number" required value={max} onChange={(e) => setMax(e.target.value)}/>
      </Form.Group>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicRPE">
          <Form.Label>RPE</Form.Label>
          <Form.Select aria-label="Default select example" required value={rpe} onChange={(e) => setRpe(e.target.value)}>
            <option value="0">10</option>
            <option value="1">9.5</option>
            <option value="2">9</option>
            <option value="3">8.5</option>
            <option value="4">8</option>
            <option value="5">7.5</option>
            <option value="6">7</option>
            <option value="7">6.5</option>
            <option value="8">6</option>
            <option value="9">5.5</option>
            <option value="10">5</option>
            <option value="11">4</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicREPS">
          <Form.Label>REPs</Form.Label>
          <Form.Select aria-label="Default select example" required value={reps} onChange={(e) => setReps(e.target.value)}>
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
            <option value="4">5</option>
            <option value="5">6</option>
            <option value="6">7</option>
            <option value="7">8</option>
            <option value="8">9</option>
            <option value="9">10</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>RPE/REPs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>{topSet}</Modal.Title>
        </Modal.Body>
      </Modal>

    </Container>
  )
}

export default Home