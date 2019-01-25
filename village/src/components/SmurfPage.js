import React from 'react';



const SmurfPage = props => {
   const selectedSmurf = props.smurfs.find(smurf => props.match.params.id === `${smurf.id}`);
   
   if (!selectedSmurf) return <h2>Cannot find that Smurf!</h2>;



  return (
    <div className="Smurf">
      <h3>{selectedSmurf.name}</h3>
      <strong>{selectedSmurf.height} tall</strong>
      <p>{selectedSmurf.age} smurf years old</p>      
    </div>
  );
};

SmurfPage.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default SmurfPage;