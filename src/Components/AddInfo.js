import React, { Component } from 'react';

class AddInfo extends Component {
  state= {
      Myname: null,
      Mybirthday: null,
      AboutMe: null
  }
  handleChange= (e) => {
    this.setState({
     [e.target.id]: e.target.value
    }
    )
  }
  handleSubmit= (e) => {
    e.preventDefault();

    console.log('Inside AddInfo Component', this.state);

    this.props.addInfo(this.state);   // We are accessing the function as a prop we passed from the parent component.
      this.setState({
          item: ''
      })
  }
  render(){
    return(
      <div className='AddInfo card'>
        <div className='card-content' style={{backgroundColor: 'lightblue'}}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='Myname' > Name </label>
          <input type='text' id='Myname' onChange={this.handleChange} /> <br />
          <label htmlFor='Mybirthday'> Birthday </label>
          <input type='text' id='Mybirthday' onChange={this.handleChange} /> <br />
          <label htmlFor='AboutMe'> About Me </label><br /><br />
          <input type='textarea' id='aboutMe' onChange={this.handleChange}/> <br /><br />
          <button style={{backgroundColor: 'grey'}}> Submit </button>
        </form>
        </div>
      </div>
    )
  }
}
export default AddInfo;
