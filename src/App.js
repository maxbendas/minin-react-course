import './App.scss';
import React, {Component} from "react";
import Car from "./car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./car/Counter/Counter";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cars: [
                {name: 'Audi', year: 2000},
                {name: 'Ford', year: 2010},
                {name: 'Mazda', year: 2020},
            ],
            pageTitle: 'React',
            showCars: false
        }
    }

    onChangeName = (name, index) => {
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({cars})
    }

    toggleCarsHandler = () => {
        this.setState({showCars: !this.state.showCars})
    }

    deleteHandler = (index) => {
        const cars = [...this.state.cars]
        cars.splice(index, 1)
        this.setState({cars})
    }

    render() {
        return (
            <div className="app">
                <h1>{this.props.title}</h1>
                <Counter/>
                <button
                    className="button"
                    onClick={this.toggleCarsHandler}>
                    Toggle cars
                </button>
                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: 20
                }}>
                    {this.state.showCars && this.state.cars.map((car, index) => {
                        return (
                            <ErrorBoundary key={index}>
                                <Car
                                     name={car.name}
                                     year={car.year}
                                     onChangeName={(e) => this.onChangeName(e.target.value, index)}
                                     onDelete={() => this.deleteHandler(index)}
                                />
                            </ErrorBoundary>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default App;
