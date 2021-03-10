import React, {useContext, useCallback} from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const TodoItem = ({task, position, onChange}) => {
    const {removeTodo} = useContext(Context);
    const {completedTask} = useContext(Context);

    const handleNameChange = useCallback(() => {
        onChange(task.id);
    }, [onChange, task.id]);

    const handleCompletedBtn = useCallback(() => {
        completedTask(task.id);
    }, [completedTask, task.id]);

    const handleRemoveBtn = useCallback(() => {
        removeTodo(task.id);
    }, [removeTodo, task.id]);

    return (
        <div>
            <hr/>
            <div className='todo-item_li'>
            <span className={task.checked ? 'done' : ''}>
                <div>Название задачи:</div>
                <strong>{position} </strong>
                {task.title}
                <div> Время создания задачи:</div>
                <span>{task.date}</span>
                <div>
                    <input
                        type='checkbox'
                        onChange={handleNameChange}
                        checked={task.checked}
                    />
                    {!task.checked && <button onClick={handleCompletedBtn}>Выполнить</button>}
                </div>
            </span>
                <div>
                    <button onClick={handleRemoveBtn}>Удалить</button>
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
