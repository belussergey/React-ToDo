import React, {useState, useCallback} from 'react';
import DatePicker from 'react-datepicker';

const AddTask = ({onCreate}) => {
    const [value, setValue] = useState('');
    const [startDate, setStartDate] = useState(new Date());

    const submitHandle = useCallback(() => {
        if (value.trim()) {
            onCreate(value, startDate)
            setValue('')
        } else {alert('Введите название задачи!')}
    }, [onCreate, startDate, value]);

    const handleDateChange = useCallback((date) => {
        setStartDate(date)
    }, []);

    const handleNameChange = useCallback((event) => {
        setValue(event.target.value)
    }, [])

    return (
        <div className="container_add-task">
            <input className="add-task_input" value={value} onChange={handleNameChange}/>
            <DatePicker className="add-task_date" dateFormat="dd.MM.yyyy" selected={startDate} onChange={handleDateChange}/>
            <button onClick={submitHandle}>Добавить задачу</button>
        </div>
    );
};

export default AddTask;