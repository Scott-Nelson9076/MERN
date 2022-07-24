import React,{useState} from 'react'

const Tasks = (props) => {
    const {taskArr, setTaskArr} = props;

    const [task, setTask] = useState('')

    const subHand = (event) => {
        event.preventDeafult();
        setTaskArr([...taskArr, {content:task,toDelete:false,id: Math.floor(Math.random()*100000000).toString(),},]);
        setTask(""); 
    };

    const handleChange =(e) => setTask(e.target.value);

        

    return (
        <div>
            <form onSubmit={subHand}>
                <label htmlFor="task">Task To Do:</label>
                <input type = "text" value = {task} name = "task" onChange={handleChange}/>
                <div>
                    <input type = "SUBMIT" value = "Add Task"/>
                </div>
            </form>
        </div>
    )
}

export default Tasks;