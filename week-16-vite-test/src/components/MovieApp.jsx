// MovieApp.jsx
import { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import AddMovieModal from './AddMoveModal';
import UpdateMovieModal from './UpdateMovieModal';
import "./MovieApp.css";


function MovieApp() {
  const API_URL = '/api/movies';
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState({
    title: '',
    director: '',
    releaseYear: '',
    rating: ''
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const apiData = await response.json();
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setMovies(apiData);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const addMovie = async (movie) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      fetchMovies();
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  const updateMovie = async (movie) => {
    try {
      const response = await fetch(`${API_URL}/${movie.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      fetchMovies();
      setShowUpdateModal(false);
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  const deleteMovie = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      fetchMovies();
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setMovieDetails(movie);
    setShowUpdateModal(true);
  };

  const handleClearSelection = () => {
    setSelectedMovie(null);
    setMovieDetails({
      title: '',
      director: '',
      releaseYear: '',
      rating: ''
    });
    setShowUpdateModal(false);
    setShowAddModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovieDetails({
      ...movieDetails,
      [name]: value
    });
  };

  return (
    <Container className="App">
      <h1>Movie List</h1>
      <Button variant="success" onClick={() => setShowAddModal(true)}>Add Movie</Button>
      <MovieList movies={movies} onEdit={handleSelectMovie} onDelete={deleteMovie} />
      <AddMovieModal
        show={showAddModal}
        onHide={handleClearSelection}
        onSubmit={addMovie}
        movieDetails={movieDetails}
        onChange={handleInputChange}
      />
      {selectedMovie && (
        <UpdateMovieModal
          show={showUpdateModal}
          onHide={handleClearSelection}
          onSubmit={updateMovie}
          movieDetails={movieDetails}
          onChange={handleInputChange}
        />
      )}
    </Container>
  );
}

export default MovieApp;
