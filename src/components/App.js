import './../styles/App.css';
import { useState } from "react";


let id = 0




function App() {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState([])
    const [editingTaskId, setEditingTaskId] = useState(null);


    const createNewtodo = () => {
        let found = false;
        for (let i = 0; i < tasks.length; i++) {
           let task = tasks[i];
           if (task === inputValue){
            return `already in todo list`
            found = true;
            break;
        }
        }
        if (!found) {
            setTasks([...tasks, { title: inputValue, id: ++id }]);
            setInputValue('');
        }
    }
    
   

    function addTodo() {
        if (editingTaskId) {
            tasks.forEach(task => {
                if (task.id === editingTaskId) {
                    task.tittle = inputValue;
                }
            });
            setTasks([...tasks])
            setEditingTaskId(null);
            setInputValue("");

        }
        else createNewtodo()
    }
    const removeTask = (taskId) => {
        const remainingTasks = tasks.filter(task => task.id !== taskId);
        setTasks(remainingTasks);
    }

 


    return (
        <div>
            <h1>To-do App</h1>
            <div>
                 <input
                    placeholder="Enter Todo"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={addTodo}>{editingTaskId ? 'Edit Todo' : 'Add Todo'}</button>
            </div>
            <ul className="tasks-list">
                {
                    tasks.map((task) => {
                        return (
                            <li className={`task ${task.id === editingTaskId ? 'active' : ''}`}>
                                <div>
                                    <span>{task.id}</span>
                                    <span>{task.title}</span>
                                </div>
                                <div>
                                    <button onClick={() => removeTask(task.id)}>Delete</button>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
            

        </div>
    )
}

export default App;