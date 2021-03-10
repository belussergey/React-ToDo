import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const TasksList = ({tasks, onToggle}) => {
    return (
        <div className='list'>
            {tasks.map((task, index) => (
                <TodoItem
                    task={task}
                    key={task.id}
                    position={index + 1}
                    onChange={onToggle}
                />
            ))}
        </div>
    );
};

TasksList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
};

export default TasksList;
