import React from 'react';
import ReactDom from "react-dom";
import Guide from './Guide'

class Main extends React.Component{
    constructor(){
        super()
        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        if (event.target.name === 'UpButton'){
            this.props.history.push('/Upload')
        }

    }

    render (){

        return (
            <div>
            <Guide onClick = {this.handleClick} page = "main"></Guide>
            <h2>Hello Page</h2>
            
            </div>
    
        );
    
    }

}


export default Main;