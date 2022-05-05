import './App.css';
import { useState, useEffect } from 'react';

function App() {
  //state to be tracked in app.js
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [formTitle, setFormTitle] = useState('');
  const [formYear, setFormYear] = useState('');
  const [formBackgroundColor, setFormBackgroundColor] = useState('');
  const [formTextColor, setFormTextColor] = useState('');
  const [filterText, setFilterText] = useState('');

  return (
    <div className="App">

      {/*top section where the user can add/edit movie information*/}
      <section className='addMovie'>

        {/*form for adding a new movie to the Movie List, where state is primarily edited*/}
        <MovieForm />

        {/*Object where user can check current state of the form and how the Movie will appear in the Movie List */}
        <Movie />
      </section>

      {/*List of Movies at bottom of the page where user can view, filter, or delete previously added movies*/}
      <section className='viewMovies'>

        {/*Input field where the user can edit state (filterText) in order to filter the movies that display, matches on Title using USEEFFECT above*/}
        <input value={filterText} onChange={(e => setFilterText(e.target.value))} />
        
        {/*Display list of all movies previously added, user is able to delete a movie by clicking on the div*/}
        <MovieList />
      </section>
    </div>
  );
}

export default App;
