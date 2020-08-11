import React from 'react';
import './App.css';
import Guide from './Guide'

class Upload extends React.Component {
  constructor(){
    super()
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    if (event.target.name === "MainButton") {
      this.props.history.push('/')
    }

  }

  render (){
  return (
    <div>
        <Guide onClick = {this.handleClick} page = "upload"></Guide>
        <h3>The Guide</h3>
    </div>
  );
}

}


export default Upload;
