import React,{useState} from 'react'

const Tasks = (props) => {
    const {taskArr, setTaskArr} = props;

    const [task, setTask] = useState('')

    const subHand = (event) => {
        event.preventDefault();
        setTaskArr([...taskArr, {content:task,toGetDone:false,id: Math.floor(Math.random()*100000000).toString(),},]);
    };

    const handleChange =(e) => setTask(e.target.value);

        

    return (
        <div>
            <form onSubmit={subHand}>
                <label htmlFor="task">Task To Do:</label>
                <input type = "text" value= {task} name = "task" onChange={(e) => setTask(e.target.value)}/>
                <div>
                    <button>Add Task</button>
                </div>
            </form>
        </div>
    )
}

export default Tasks;