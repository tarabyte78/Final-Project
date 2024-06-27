// UpdateMovieModal.jsx
import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function UpdateMovieModal({ show, onHide, onSubmit, movieDetails, onChange }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={movieDetails.title}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group controlId="formDirector">
            <Form.Label>Director</Form.Label>
            <Form.Control
              type="text"
              name="director"
              value={movieDetails.director}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group controlId="formReleaseYear">
            <Form.Label>Release Year</Form.Label>
            <Form.Control
              type="text"
              name="releaseYear"
              value={movieDetails.releaseYear}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group controlId="formRating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="text"
              name="rating"
              value={movieDetails.rating}
              onChange={onChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={() => onSubmit({ ...movieDetails, id: movieDetails.id })}>
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default UpdateMovieModal;
