import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      deadline: "December 25,2018",
      newDeadline:""
    }
  }
  // Can be written without constructor like follows , accessed by this.state
  // state = {deadline : "December 25,2017"}
  changeDeadline(){
    this.setState({deadline:this.state.newDeadline})
  }

  render(){
    return(
      <div className="App">
        <div className="App-title">Counting {this.state.deadline}</div>
          <Clock deadline={this.state.deadline}/>
        <div>
          <input onChange={ (event) => this.setState({newDeadline:event.target.value})} placeholder="Input"/>
          <button onClick={ () => this.changeDeadline() }>Submit</button>
        </div>
      </div>)
  }
}

export default App;
