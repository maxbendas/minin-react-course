import React from 'react';

const Car = ({name, year, onChangeName, onDelete}) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            width: '200px',
            margin: '0 auto',
            padding: '20px'
        }}>
            <h3>Car name: {name}</h3>
            <p>Year: <strong>{year}</strong></p>
            <input type="text" onChange={onChangeName} value={name}/>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Car;