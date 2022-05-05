import React from 'react';

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
    <div>

    </div>
  );
}
