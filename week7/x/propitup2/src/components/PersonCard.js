import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            age: props.age
        }

    }
    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h1>{lastName},{firstName}</h1>
                <div>
                    <h3>Age:{this.state.age}</h3>
                </div>
                <div>
                    <h3>Hair Color: {hairColor}</h3>
                </div>
                <button onClick={() => {this.setState({age: this.state.age + 1})} }>Birthday</button>
            </div>
        )
    }
}

export default PersonCard;