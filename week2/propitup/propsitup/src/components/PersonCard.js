import React, {useState} from 'react';
const PersonCard = (props) => {
    const {firstName,lastName,age,hColor} = props;
    const [newAge,setAge] = useState(age)
    const addAge = () => {setAge(newAge + 1)}
    return(
        <div>
            <h1>First Name: {firstName}</h1>
            <h3>Last Name: {lastName}</h3>
            <h3>Age: {newAge}</h3>
            <h3>Hair Color: {hColor}</h3>
            <button onClick={addAge}>Birthday</button>
        </div>

    );
}

export default PersonCard;