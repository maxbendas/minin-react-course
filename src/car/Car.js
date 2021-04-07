import React from 'react';
import './car.css';

const Car = ({name, year, onChangeName, onDelete}) => {
    const inputClasses = ['input']
    name ? inputClasses.push('green') : inputClasses.push('red')
    name.length > 4 && inputClasses.push('bold')
    return (
        <div className="car">
            <h3>Car name: {name}</h3>
            <p>Year: <strong>{year}</strong></p>
            <input className={inputClasses.join(' ')}
                   type="text"
                   onChange={onChangeName}
                   value={name}/>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Car;