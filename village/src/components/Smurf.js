import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div className="modify">
        <button onClick={e => props.deleteSmurf(e, props.id)}>Delete Smurf</button>
        <button onClick={e => props.populateForm(e, props.id)}>Update Smurf</button>
      </div>
      
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

