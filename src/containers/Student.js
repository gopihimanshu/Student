import React, { Component } from 'react';
import axios from 'axios';
import Navigation from './Navigation';

class Student extends Component {

    state = {
        data :[]
    }
    
    componentDidMount () {
        axios.get('http://localhost:8080/name/2')
        .then(response => {
            var dbData = response.data[0];
            console.log(dbData);
            this.setState({data:response.data[0]});
        }).catch(error => {
            console.log("Error in fetching data")
        });
    }

    render () {  
        console.log("In render", this.state.data);
        return (
            <div>
                <p>Hiiii</p>
                <p>{this.state.data.id}</p>
                <p>{this.state.data.email}</p>
                <p>{this.state.data.password}</p>
           
                <Navigation />
                
            </div>
        );
    }
}

export default Student;