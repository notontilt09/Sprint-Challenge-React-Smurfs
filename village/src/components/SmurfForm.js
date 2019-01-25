import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.isUpdating) {
      this.props.updateSmurf(this.props.smurf.id);
    } else {
      this.props.addSmurf();
    }
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            required
            onChange={this.props.handleChanges}
            placeholder="name"
            value={this.props.smurf.name}
            name="name"
          />
          <input
            required
            onChange={this.props.handleChanges}
            placeholder="age"
            value={this.props.smurf.age}
            name="age"
          />
          <input
            required
            onChange={this.props.handleChanges}
            placeholder="height"
            value={this.props.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
