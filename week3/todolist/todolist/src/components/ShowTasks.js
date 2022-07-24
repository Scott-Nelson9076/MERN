const ShowTasks = (props) => {
    const {taskArr,setTaskArr} = props;

    const handleDone = (task) => {
        task.toDelete = !task.toDelete;
        setTaskArr([...taskArr]);
    };

    const lineThrough = (toDelete) => {if (toDelete === true) {return "done"}else {return "notDone"}};

    const deleteButt = (id) => {setTaskArr(taskArr.filter((task,index)=> {return task.id !== id}))}

    return (
        <div>
            {taskArr.map((task,index) =>(<div className={lineThrough(task.toDelete)} key = {task.id}><p>{task.content}</p> <input type = "checkbox" onChange={() => handleDone(task)}/> <button onClick={() => deleteButt(task.id)}>Delete</button>{""}</div>))}
        </div>
    )
}

export default ShowTasks;