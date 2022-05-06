import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import Movie from './Movie';

function App() {
  //state to be tracked in app.js
  const [movies, setMovies] = useState([{
    id: 0,
    title: 'Jaws',
    year: 1976,
    backgroundColor: { color:'#22333B' },
    textColor: { color:'#F2F4F3' }
  },
  {
    id: 1,
    title: 'Willow',
    year: 1986,
    backgroundColor: { color:'#240B36' },
    textColor: { color:'#F2DC5D' }
  },
  {
    id: 2,
    title: 'Battlefield Earth',
    year: 1996,
    backgroundColor: { color:'#463F3A' },
    textColor: { color:'#E0AFA0' }
  },
  ]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [formTitle, setFormTitle] = useState('test');
  const [formYear, setFormYear] = useState('1999');
  const [formBackgroundColor, setFormBackgroundColor] = useState({ color:'#000000', display: false });
  const [formTextColor, setFormTextColor] = useState({ color:'#282c34', display: false });
  const [filterText, setFilterText] = useState('');

  function handleDeleteMovieByIndex(index) {
    movies.splice(index, 1);
    setMovies([...movies]);
  }

  useEffect(filterMoviesByTitleOrYear, [movies, filterText]);

  function filterMoviesByTitleOrYear() {
    const matchingMovies = movies.filter(movie => 
      movie.title.toLowerCase().includes(filterText.toLowerCase()) || movie.year.toString().includes(filterText)
    );
    setFilteredMovies([...matchingMovies]);
  }

  console.log(formTextColor);


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
        <label>
          Filter Movies on Title or Year:
          <input value={filterText} onChange={(e => setFilterText(e.target.value))} />
        </label>
        
        
        {/*Display list of all movies previously added, user is able to delete a movie by clicking on the div*/}
        <MovieList 
          movies={filterText ? filteredMovies : movies}
          handleDelete={handleDeleteMovieByIndex}
        />
      </section>
    </div>
  );
}

export default App;
