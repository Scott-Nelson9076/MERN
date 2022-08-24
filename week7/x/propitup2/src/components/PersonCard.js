import React, { Component } from 'react';

class PersonCard extends Component {
    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h1>{lastName},{firstName}</h1>
                <div>
                    <h3>Age:{age}</h3>
                </div>
                <div>
                    <h3>Hair Color: {hairColor}</h3>
                </div>
            </div>
        )
    }
}

export default PersonCard;