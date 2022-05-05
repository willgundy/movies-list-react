import React from 'react';

export default function Movie(props) {
  return (
    <div style={{ backgroundColor: props.backgroundColor, color: props.textColor }}
      onClick={() => props.handleDelete && props.handleDelete(props.index)}
    >
      <h2>{props.title}</h2>
      <h3>{props.year}</h3>
    </div>
  );
}
