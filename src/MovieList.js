import React from 'react';
import Movie from './Movie';

export default function MovieList(props) {
  return (
    <div>
      <h1>Movies</h1>
      {props.movies.map((movie, i) => 
        <Movie 
          key={i}
          title={movie.title}
          year={movie.year}
          backgroundColor={movie.backgroundColor}
          textColor={movie.textColor}
        />
      )}
    </div>
  );
}
