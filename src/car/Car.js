import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Car.module.scss';
import withClass from "../hoc/withClass";

class Car extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        !this.props.index&&this.inputRef.current.focus()
    }

    render() {
        // if(Math.random()>0.7){
        //     throw new Error('Car random failed')
        // }
        const {name, year, onChangeName, onDelete} = this.props;

        const inputClasses = [styles.input]
        name ? inputClasses.push(styles.green) : inputClasses.push(styles.red)
        name.length > 4 && inputClasses.push(styles.bold)
        return (
            <>
                <h3>Car name: {name}</h3>
                <p>Year: <strong>{year}</strong></p>
                <input
                    ref={this.inputRef}
                    className={inputClasses.join(' ')}
                       type="text"
                       onChange={onChangeName}
                       value={name}/>
                <button onClick={onDelete}>Delete</button>
            </>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func,
}

export default withClass(Car, styles.Car)