const ShowTasks = (props) => {
    const {taskArr,setTaskArr} = props;

    const done = {
        textDecorationLine: 'line-through',
        color:'Green'
    }

    const notDone = {
        textDecorationLine:'underline',
        color:'Red'

    }
    



    const handleDone = (task) => {
        task.toGetDone = !task.toGetDone;
        setTaskArr([...taskArr]);
    };

    const lineThrough = (toGetDone) => {if (toGetDone === true) {return done }else {return notDone}};

    const deleteButt = (id) => {setTaskArr(taskArr.filter((task,index)=> {return task.id !== id}))}

    return (
        <div>
            {taskArr.map((task,index) =>(<div key = {task.id}><p style = {lineThrough(task.toGetDone)}>{task.content}</p> <input type = "checkbox" onChange={() => handleDone(task)}/> <button onClick={() => deleteButt(task.id)}>Delete</button></div>))}
        </div>
    )
}

export default ShowTasks;