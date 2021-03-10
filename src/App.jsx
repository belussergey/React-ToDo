import React, {useState, useEffect, useCallback} from 'react';
import TasksList from './Todo/TasksList';
import Context from './context';
import AddTask from './Todo/AddTask';
import {v4 as uuidv4} from 'uuid';

const App = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('data')) || []);

    const toggleTodo = useCallback((id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                task.checked = !task.checked;
            }
            return task;
        }));
    }, [tasks]);

    const removeTodo = useCallback((id) => {
        setTasks(tasks.filter(task => {
            return task.id !== id;
        }));
    }, [tasks]);

    const addTask = useCallback((title,value) => {
        setTasks([...tasks, {
            title,
            id: uuidv4(),
            checked: false,
            date:new Date(value).toLocaleDateString()
        }]);
    }, [tasks]);

    const completedTask = useCallback((id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                task.checked = true;
            }
            return task;
        }));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <Context.Provider value={{removeTodo, completedTask}}>
            <div className='wrapper'>
                <h1>ToDo</h1>
                <AddTask onCreate={addTask}/>
                {tasks.length ? <TasksList tasks={tasks} onToggle={toggleTodo}/> : <p>Задач нет</p>}
            </div>
        </Context.Provider>
    );
};

export default App;
