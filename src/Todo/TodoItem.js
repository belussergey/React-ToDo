import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from "../context";
import App from "../App";

const TodoItem = ({task, position, onChange}) => {
    const {removeTodo} = useContext(Context);
    const {completedTask} = useContext(Context);
    const classes = [];

    if (task.checked) {
        classes.push('done')
    }

    return (
        <div>
            <hr/>
            <div className='todo-item_li'>
            <span className={classes.join(' ')}>
                <div>Название задачи:</div>
                <strong>{position} </strong>
                {task.title}
                <div> Время создания задачи:</div>
                <span>{task.date}</span>
                <div>
                    <input
                        type='checkbox'
                        onChange={() => onChange(task.id)}
                        checked={task.checked}
                    />
                    {!task.checked && <button onClick={completedTask.bind(App, task.id)}>Выполнить</button>}
                </div>
            </span>
                <div>
                    <button onClick={removeTodo.bind(App, task.id)}>Удалить</button>
                </div>
            </div>
        </div>
    );
};

TodoItem.propTypes = {
    task: PropTypes.object.isRequired,
    position: PropTypes.number
};

export default TodoItem;