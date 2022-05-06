import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies, handleDelete }) {
  return (
    <div className='movieList'>
      {movies.map((movie, i) => 
        <Movie 
          key={i}
          id={movie.id}
          title={movie.title}
          year={movie.year}
          backgroundColor={movie.backgroundColor}
          textColor={movie.textColor}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}
