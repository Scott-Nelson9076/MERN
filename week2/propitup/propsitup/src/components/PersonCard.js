
const PersonCard = (props) => {
    const {firstName,lastName,age,hColor} = props;
    return(
        <div>
            <h1>First Name: {firstName}</h1>
            <h3>Last Name: {lastName}</h3>
            <h3>Age: {age}</h3>
            <h3>Hair Color: {hColor}</h3>
        </div>

    );
}

export default PersonCard;