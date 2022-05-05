import React from 'react';
import { TwitterPicker } from 'react-color';

export default function MovieForm(props) {

  {/*writing function for handling the submit action on the form*/}
  function handleMovieSubmit(e) {
    e.preventDefault();

    {/*creates a new Movie and adds to the Movies state*/}
    const newMovie = {
      name: props.formTitle,
      year: props.formYear,
      backgroundColor: props.formBackgroundColor,
      textColor: props.formTextColor
    };

    props.setMovies([...props.movies, newMovie]);

    {/*Also resets state for the form*/}
    props.setFormTitle('');
    props.setFormYear('');
    props.setFormBackgroundColor('000');
    props.setFormTextColor('FFF');
  }

  return (
    <form onSubmit={handleMovieSubmit}>
      <h1>Make a New Movie:</h1>
      <label>
        Movie Name:
        <input value={props.formTitle} onChange={(e) => props.setFormTitle(e.target.value)} />
      </label>
      <label>
        Movie Year:
        <input type={'number'} value={props.formYear} onChange={(e) => props.setFormYear(e.target.value)} />
      </label>
      <label>
        Background Color:
        <TwitterPicker color={props.backgroundColor} onChange={ (color) => { props.setFormBackgroundColor(color.hex); } }/>
      </label>
      <label>
        Text Color:
        <TwitterPicker color={props.textColor} onChange={ (color) => { props.setFormTextColor(color.hex); } }/>
      </label>
    </form>
  );
}
