import React, {useState} from 'react'

const Generator = (props) => {
    const {boxArr,setBoxArr} = props;
    const [color,setColor] = useState("")
    const [[heights],setHeight] = useState("")
    const [[widths], setWidth] = useState("")

    const submitHand = (event) => {
        event.preventDefault();
        setBoxArr([...boxArr,color]);
    }

    return(
        <div>
            <form onSubmit={submitHand}>
                <label htmlFor = "color">Color:</label>
                <input type = "text" name = "color" onChange={(e) => setColor(e.target.value)}/>
                <div>
                    <input type ="SUBMIT" value= "Submit"/>
                </div>
            </form>
        </div>
    )


}

export default Generator;