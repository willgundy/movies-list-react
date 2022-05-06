import React from 'react';
import ColorPicker from './ColorPicker';

export default function MovieForm(props) {

  {/*writing function for handling the submit action on the form*/}
  function handleMovieSubmit(e) {
    e.preventDefault();

    const movieIdArr = props.movies.map(movie => { return movie.id; });

    const newMovieId = Math.max(...movieIdArr) + 1;

    {/*creates a new Movie and adds to the Movies state*/}
    const newMovie = {
      id: newMovieId,
      title: props.title,
      year: props.year,
      backgroundColor: props.backgroundColor,
      textColor: props.textColor 
    };

    props.setMovies([...props.movies, newMovie]);

    {/*Also resets state for the form*/}
    props.setFormTitle('');
    props.setFormYear('');
    props.setFormBackgroundColor({ color: '#000000' });
    props.setFormTextColor({ color:'#FFFFFF' });
  }

  return (
    <form onSubmit={handleMovieSubmit}>
      <label>
        Movie Name:
        <input required value={props.title} onChange={(e) => props.setFormTitle(e.target.value)} />
      </label>
      <label>
        Movie Year:
        <input required type={'number'} value={props.year} onChange={(e) => props.setFormYear(e.target.value)} />
      </label>
      <label>
        Background Color:
        <ColorPicker 
          state={props.backgroundColor}
          setState={props.setFormBackgroundColor}
        />
      </label>
      <label>
        Text Color:
        <ColorPicker 
          state={props.textColor}
          setState={props.setFormTextColor}
        />
      </label>
      <button>Submit Movie</button>
    </form>
  );
}
