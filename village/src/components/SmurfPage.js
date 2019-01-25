import React from 'react';



const SmurfPage = props => {
    console.log(props);
    // const smurfs = props.smurfs;
    // const selected = smurfs.find(smurf => props.match.params.id === `${smurf.id}`)
  return (
    <div className="Smurf">
      <h3>{props.smurfs.name}</h3>
      <strong>{props.smurfs.height} tall</strong>
      <p>{props.smurfs.age} smurf years old</p>      
    </div>
  );
};

SmurfPage.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default SmurfPage;