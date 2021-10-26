import React, {useContext, useState, useEffect} from 'react';
import { TaskListContext } from './context/TaskListContext';

const TaskForm = () => {
    const { addTask, clearList, editItem, editTasks } = useContext(TaskListContext);

    const [title, setTitle] = useState('');

    const handleChange = (e) =>{
        setTitle(e.target.value)

    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!editItem){
            addTask(title)
            setTitle('')   
        } else {
            editTasks(title, editItem);
        }
    };

    useEffect(() => {
        if (editItem){
            setTitle(editItem.title)

        } else {
            setTitle('');
        }
        
    }, [editItem])


    return (
        <>
            <form onSubmit={handleSubmit} action="" className="form">
                <input 
                type="text" 
                onChange={handleChange}
                value = {title}
                className="task-input" 
                placeholder='Add-Task...'
                required
                />
                <div className="buttons">
                    <button type='submit' className="btn add-task-btn">
                        {editItem ? 'Edit Task' : 'Add Task'}
                    </button>
                    <button 
                    onClick={clearList}
                    className="btn clear-btn">Clear Task</button>

                </div>
            </form>
            
        </>
    )
}
export default TaskForm;