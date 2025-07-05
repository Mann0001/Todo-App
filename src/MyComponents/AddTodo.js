import React from 'react'
import { useState } from 'react'

export const AddTodo = (props) => {
    const [task, setTask] = useState("");
    const [Description, setDescription] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!task || !Description) {
            alert("Title or Description cannot be blank");
        } else {
            props.addTodo(task, Description);
            setTask("");
            setDescription("");
        }
    }

    return (
        <div className='container my-3'>
            <h2 className="mb-3 text-primary">Add a Todo</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="task" className="form-label">Todo Task</label>
                    <input type="text" value={task} onChange={(event) => { setTask(event.target.value) }} className="form-control" id="task" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Description" className="form-label">Todo Description</label>
                    <input type="text" value={Description} onChange={(event) => { setDescription(event.target.value) }} className="form-control" id="Description" />
                </div>
                <button type="submit" className="btn btn-outline-primary">Add Todo</button>
            </form>
        </div>
    )
}
