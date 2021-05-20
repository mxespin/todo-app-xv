import React, { useState } from 'react'

const InputToDo = (props) => {

    const initialToDo = {id: null, task: ''};
    const [task, setTask] = useState(initialToDo);

    const handlePressKey = (e) => {
        const { name, value } = e.target
        setTask({...task, [name]:value})
    }
    const sendTask = (e)=> {
        e.preventDefault()
        const noValid = e.target.name.length <= 0 ? true : false;
        console.log(noValid)
        if(task.task === true){
            props.addToDo(task)
            setTask(initialToDo)
        }
    }
    return (
        <div className="row">
            <div className="text-center py-5">
                <h1>To Do App</h1>
            </div>
            <form >
            <input 
                className="form-control form-control-lg" 
                type="text" 
                placeholder="Any homework to do?"
                name="task"
                onChange={handlePressKey}
                value= {task.task}
                />
                <button className="btn btn-primary mt-3" onClick={sendTask}>
                    Create
                </button>
            </form>    
        </div>
    );
}

export default InputToDo;