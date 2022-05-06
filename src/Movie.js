import React from 'react';

export default function Movie(props) {
  return (
    <div className='movie' style={{ backgroundColor: props.backgroundColor.color, color: props.textColor.color }}
      onClick={() => props.handleDelete && props.handleDelete(props.id)}
    >
      <h2>{props.title}</h2>
      <h3>{props.year}</h3>
    </div>
  );
}
