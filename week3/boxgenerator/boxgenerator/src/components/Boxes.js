const Boxes = (props) => {
    const {boxArr} = props;

    return (
        <div>
            {boxArr.map((color,index)=> (<div key = {index} style = {{display: "inline-block", height:"20px", width:"20px", backgroundColor:color}}></div>))}
        </div>
    )
}

export default Boxes;