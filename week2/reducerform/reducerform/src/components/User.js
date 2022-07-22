import React,{useReducer} from 'react';

const initialState = {
    firstName:{
        value: "",
        error:null
    },
    lastName :{
        value:"",
        error:null
    },
    email:{
        value:"",
        error:null
    },
    isSubmitted:false
}

const reduceIt = (state, action) => {
    switch (action.type){
        case "SET_FIRSTNAME_VALUE":
            return {...state,firstName:{...state.firstName,value :action.payload}}
        case "SET_FIRSTNAME_ERROR":
            return {...state,firstName:{...state.firstName,error:action.payload}}
        case "SET_LASTNAME_VALUE":
            return {...state,lastName:{...state.lastName,value :action.payload}}
        case "SET_LASTNAME_ERROR":
            return {...state,lastName:{...state.lastName,error:action.payload}}
        case "SET_EMAIL_VALUE":
            return {...state,email:{...state.email,value :action.payload}}
        case "SET_EMAIL_ERROR":
            return {...state,email:{...state.email,error:action.payload}}
        case "SET_IS_SUBMITTED":
            return{...state,isSubmitted:action.payload}
        
        default: return state;
    }
}

export default () => {
    const [state, dispatch] = useReducer(reduceIt,initialState);

    const handleFirstName = (e) => {if (e.target.value.length < 2){
        dispatch({type:"SET_FIRSTNAME_ERROR", payload:"First Name Must be At Least 2 Characters"});
    }
    else {
        dispatch({type: "SET_FIRSTNAME_ERROR",payload:"" });
        dispatch({type:"SET_FIRSTNAME_VALUE", payload:e.target.value});
    }
    }
    const handleLastName = (e) => {if (e.target.value.length < 2){
        dispatch({type:"SET_LASTNAME_ERROR", payload:"Last Name Must be At Least 2 Characters"});
    }
    else {
        dispatch({type: "SET_LASTNAME_ERROR",payload:"" });
        dispatch({type:"SET_LASTNAME_VALUE", payload:e.target.value});
    }
    }
    const handleEmail = (e) => {if (e.target.value.length < 5){
        dispatch({type:"SET_EMAIL_ERROR", payload:"Email Must be At Least 5 Characters"});
    }
    else {
        dispatch({type: "SET_EMAIL_ERROR",payload:"" });
        dispatch({type:"SET_EMAIL_VALUE", payload:e.target.value});
    }
    }
    const subHandle = (e) => {
        e.preventDefault();
        dispatch({type:"SET_IS_SUBMITTED",payload:true})
    }

    return (
        <div>
            <h1>Hello!</h1>
            <form onSubmit={subHandle}>
                <div>
                    <label htmlFor='firstName'>First Name:</label>
                    <input id = 'firstName'onChange = {(e) => handleFirstName(e)}/>
                    {state.firstName.error !== null && (<p>{state.firstName.error}</p>)}
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input id = 'lastName'onChange = {(e) => handleLastName(e)}/>
                    {state.lastName.error !== null && (<p>{state.lastName.error}</p>)}
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input id = 'email' onChange = {(e) => handleEmail(e)}/>
                    {state.email.error !== null && (<p>{state.email.error}</p>)}
                </div>
                <div>
                    <input type = "SUBMIT" value = "Submit"/>
                </div>
            </form>


        </div>

    )

}

