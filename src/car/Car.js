import React, {Component} from 'react';
import Radium from 'radium';
import './car.css';

class Car extends Component {
    render() {
        let {name, year, onChangeName, onDelete} = this.props;
        const style = {
            ':hover': {
                border: '2px solid #ccc',
                boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .3)',
            }
        }
        const inputClasses = ['input']
        name ? inputClasses.push('green') : inputClasses.push('red')
        name.length > 4 && inputClasses.push('bold')
        return (
            <div className="car" style={style}>
                <h3>Car name: {name}</h3>
                <p>Year: <strong>{year}</strong></p>
                <input className={inputClasses.join(' ')}
                       type="text"
                       onChange={onChangeName}
                       value={name}/>
                <button onClick={onDelete}>Delete</button>
            </div>
        );
    }
}


export default Radium(Car);