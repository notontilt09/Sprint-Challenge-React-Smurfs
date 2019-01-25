import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf">
      <Link to={`/smurf/${props.id}`}><h3>{props.name}</h3></Link>
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

