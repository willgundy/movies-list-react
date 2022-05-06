import React from 'react';
import { SketchPicker } from 'react-color';

export default function ColorPicker(props) {

  function updateProp(color, display) {
    props.setState({ color: color, display: display });
  }

  return (
    <div>
      <div className='colorPicker' style={{ backgroundColor: props.state.color }}
        onClick={() => { updateProp(props.state.color, !props.state.display); }}
      >
      </div>
      {props.state.display ? 
        <div className='popover'>
          <div className='cover' onClick={() => { updateProp(props.state.color, !props.state.display); }} />
          <SketchPicker color={props.state.color} onChange={ (color) => { updateProp(color.hex, props.state.display); } }/> 
        </div>
        : null}
    </div>
  );
}
