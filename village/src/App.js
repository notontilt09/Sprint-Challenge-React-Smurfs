import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';


const emptySmurf = {
  name: '',
  age: '',
  height: ''
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: emptySmurf,
      isUpdating: false
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

  handleChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        smurf: {
          ...prevState.smurf,
          [e.target.name] : e.target.value
        }
      }
    })
  }

  addSmurf = () => {
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', this.state.smurf)
      .then(res => {
        this.setState({
          smurfs: res.data,
          smurf: emptySmurf
        })
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err);
      })
  }

  deleteSmurf = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  populateForm = (e, id) => {
    e.preventDefault();
    this.setState({
      smurf: this.state.smurfs.find(smurf => smurf.id === id),
      isUpdating: true
    })
    this.props.history.push('/smurf-form')
  }

  updateSmurf = id => {
    axios.put(`http://localhost:3333/smurfs/${id}`, this.state.smurf)
      .then(res => {
        this.setState({
          smurfs: res.data,
          isUpdating: false,
          smurf: emptySmurf
        })
        this.props.history.push('/');
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
              updateSmurf={this.updateSmurf}
              populateForm={this.populateForm}
            /> } 
        />
        <Route 
          path='/smurf-form' 
          render={props => 
            <SmurfForm 
              {...props} 
              smurfs={this.state.smurfs} 
              smurf={this.state.smurf}
              isUpdating={this.state.isUpdating}
              updateSmurf={this.updateSmurf}
              handleChanges={this.handleChanges}
              addSmurf={this.addSmurf}
            /> } 
        />
      </div>
    );
  }
}

export default App;
