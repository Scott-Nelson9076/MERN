import React,{useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confPass, setConfPass] = useState("");
    const createDude = (e) => {e.preventDefault(); const newDude = {firstName:firstName, lastName:lastName, email:email, password:password, confPass:confPass};};

    return (
    <div>
        <form onSubmit = {createDude}>
            <div>
                <label>First Name:</label>
                <input type = "text" onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name:</label>
                <input type = "text" onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div>
                <label>Email:</label>
                <input type = "text" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password:</label>
                <input type = "password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type = "password" onChange={(e) => setConfPass(e.target.value)}/>
            </div>
            <div>
                <input type = "SUBMIT" value = "Submit"/>
            </div>
        </form>
        <div>
            First Name: {firstName}
        </div>
        <div>
            Last Name:  {lastName}
        </div>
        <div>
            Email:  {email}
        </div>
        <div>
            Password:  {password}
        </div>
        <div>
            Confirm Password:  {confPass}
        </div>
    </div>
    
    )

}

export default Form;