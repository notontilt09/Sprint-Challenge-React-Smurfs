import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  // on mount write axios call to retrieve array of smurfs from API
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidUpdate() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  deleteSmurf = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })

  }

  render() {
    return (
      <div className="App">
        <div className='navBar'>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink to='/smurf-form'>Add Smurf</NavLink>
        </div>
        <Route 
          exact 
          path='/' 
          render={props => 
            <Smurfs 
              {...props} 
              smurfs={this.state.smurfs} 
              deleteSmurf={this.deleteSmurf} 
            /> } 
        />
        <Route 
          path='/smurf-form' 
          render={props => 
            <SmurfForm 
              {...props} 
              smurfs={this.state.smurfs} 
            /> } 
        />
      </div>
    );
  }
}

export default App;
