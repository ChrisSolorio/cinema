import React from 'react';
import ReactDom from "react-dom";
import Guide from './Guide'
import DataList from './DataList'

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
            <h3>This project is meant to display my ability to create a web app that works with a postgress database. Its a work in progress
                due to a very limited amount of time I have to work on it. Been quite busy.
            </h3>
            <DataList/>
            
            </div>
    
        );
    
    }

}


export default Main;