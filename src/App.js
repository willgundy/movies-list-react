import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [formTitle, setFormTitle] = useState('');
  const [formYear, setFormYear] = useState('');
  const [formBackgroundColor, setFormBackgroundColor] = useState('');
  const [formTextColor, setFormTextColor] = useState('');
  const [filterText, setFilterText] = useState('');

  return (
    <div className="App">
      <section className='addMovie'>
        <MovieForm />
        <Movie />
      </section>
      <MovieList />
    </div>
  );
}

export default App;
