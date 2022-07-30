import { useParams, useNavigate, Navigate } from "react-router-dom";

const NumberWord = (props) => {
    const {numword,c1,c2} = useParams();
    const style = {
        backgroundColor:c1,
        color : c2
    }
    if (isNaN(numword) === true){
        return (
            <h1 style={style}>The Bird Is The Word Is : {numword}</h1>
        )
    }
    else if (isNaN(numword) === false) {
        return (
            <h1 style = {style}>The Number is : {numword}</h1>
        )
    }

}

export default NumberWord;