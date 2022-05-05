import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import Movie from './Movie';

function App() {
  //state to be tracked in app.js
  const [movies, setMovies] = useState([{
    title: 'Jaws',
    year: 1976,
    backgroundColor: '#FFFFFFF',
    textColor: '#000000'
  },
  {
    title: 'Willow',
    year: 1986,
    backgroundColor: '#FFFFFFF',
    textColor: '#000000'
  },
  {
    title: 'Battlefield Earth',
    year: 1996,
    backgroundColor: '#FFFFFFF',
    textColor: '#000000'
  },
  ]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [formTitle, setFormTitle] = useState('test');
  const [formYear, setFormYear] = useState('1999');
  const [formBackgroundColor, setFormBackgroundColor] = useState('#000000');
  const [formTextColor, setFormTextColor] = useState('#FFFFFF');
  const [filterText, setFilterText] = useState('');

  function handleDeleteMovieByIndex(index) {
    console.log(index);
    movies.splice(index, 1);
    setMovies([...movies]);
  }

  return (
    <div className="App">

      {/*top section where the user can add/edit movie information*/}
      <section className='addMovie'>

        {/*form for adding a new movie to the Movie List, where state is primarily edited*/}
        <MovieForm 
          title={formTitle}
          year={formYear}
          backgroundColor={formBackgroundColor}
          textColor={formTextColor}
          setFormTitle={setFormTitle}
          setFormYear={setFormYear}
          setFormBackgroundColor={setFormBackgroundColor}
          setFormTextColor={setFormTextColor}
          setMovies={setMovies}
          movies={movies}
        />

        {/*Object where user can check current state of the form and how the Movie will appear in the Movie List */}
        <Movie 
          title={formTitle}
          year={formYear}
          backgroundColor={formBackgroundColor}
          textColor={formTextColor}
        />
      </section>

      {/*List of Movies at bottom of the page where user can view, filter, or delete previously added movies*/}
      <section className='viewMovies'>

        {/*Input field where the user can edit state (filterText) in order to filter the movies that display, matches on Title using USEEFFECT above*/}
        <input value={filterText} onChange={(e => setFilterText(e.target.value))} />
        
        {/*Display list of all movies previously added, user is able to delete a movie by clicking on the div*/}
        <MovieList 
          movies={movies}
          handleDelete={handleDeleteMovieByIndex}
        />
      </section>
    </div>
  );
}

export default App;
