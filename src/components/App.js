import React, { useState } from "react";
import './../styles/App.css';
import React from "react";

const App = () => {
    return (

        <div >
           
            <div className="contt">
            <h1>To-do List</h1>
            <div>
                <input
                    placeholder="Enter Todo"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={addTodo}>Add Todo</button>
                </div>
            </div>
            <ul className="tasks-list">
                {
                    tasks.map((task) => {
                        return (
                            <li className="task">
                                <span>{task}</span>
                                <button onClick={ () => removeTast(task)}>Delete</button>
                            </li>

                        );
                    })
                }
            </ul>


        </div>

    )
}

export default App;