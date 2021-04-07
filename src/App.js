import './App.css';
import React, {Component} from "react";
import Car from "./car/Car";

class App extends Component {
    divStyle = {
        textAlign: 'center'
    }
    state = {
        cars: [
            {name: 'Audi', year: 2000},
            {name: 'Ford', year: 2010},
            {name: 'Mazda', year: 2020},
        ],
        pageTitle: 'React',
        showCars: false
    }

    onChangeName = (name, index) => {
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        cars[index]=car
        this.setState({cars})
    }

    toggleCarsHandler = () => {
        this.setState({showCars: !this.state.showCars})
    }

    onDelete = (index)=>{
        const cars = [...this.state.cars]
        cars.splice(index,1)
        this.setState({cars})
}

    render() {
        return (
            <div className="App" style={this.divStyle}>
                <h1>{this.state.pageTitle}</h1>
                <button onClick={this.toggleCarsHandler}>Toggle cars</button>
                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: 20
                }}>
                    {this.state.showCars && this.state.cars.map((car, index) => {
                        return <Car key={index}
                                    name={car.name}
                                    year={car.year}
                                    onChangeName={(e) => this.onChangeName(e.target.value, index)}
                                    onDelete={()=>this.onDelete(index)}
                        />
                    })}
                </div>
            </div>
        );
    }
}

export default App;
