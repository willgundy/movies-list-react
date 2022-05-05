import React from 'react';
import { CompactPicker } from 'react-color';

export default function MovieForm(props) {

  {/*writing function for handling the submit action on the form*/}
  function handleMovieSubmit(e) {
    e.preventDefault();

    {/*creates a new Movie and adds to the Movies state*/}
    const newMovie = {
      title: props.title,
      year: props.year,
      backgroundColor: props.backgroundColor,
      textColor: props.textColor
    };

    props.setMovies([...props.movies, newMovie]);

    {/*Also resets state for the form*/}
    props.setFormTitle('');
    props.setFormYear('');
    props.setFormBackgroundColor('#000000');
    props.setFormTextColor('#FFFFFF');
  }

  return (
    <form onSubmit={handleMovieSubmit}>
      <h1>Make a New Movie:</h1>
      <label>
        Movie Name:
        <input value={props.title} onChange={(e) => props.setFormTitle(e.target.value)} />
      </label>
      <label>
        Movie Year:
        <input type={'number'} value={props.year} onChange={(e) => props.setFormYear(e.target.value)} />
      </label>
      <label>
        Background Color:
        <CompactPicker color={props.backgroundColor} onChange={ (color) => { props.setFormBackgroundColor(color.hex); } }/>
      </label>
      <label>
        Text Color:
        <CompactPicker color={props.textColor} onChange={ (color) => { props.setFormTextColor(color.hex); } }/>
      </label>
      <button>Submit Movie</button>
    </form>
  );
}
