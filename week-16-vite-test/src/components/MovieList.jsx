// MovieList.jsx
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

function MovieList({ movies, onEdit, onDelete }) {
  return (
    <Row>
      {movies.map((movie) => (
        <Col key={movie.id} xs={12} md={6} lg={3} className="mb-6">
          <div className="movie-item">
            <h2>{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Release Year: {movie.releaseYear}</p>
            <p>Rating: {movie.rating}</p>
            <Button variant="link" onClick={() => onEdit(movie)}>Edit</Button>
            <Button variant="link" onClick={() => onDelete(movie.id)}>Delete</Button>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;
