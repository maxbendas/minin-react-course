import React from 'react'
import './Car.scss'
import {withRouter} from "react-router-dom";


const Car = ({history, name, year}) => {
  return (
    <div
        onClick={()=>{history.push('/cars/'+(name).toLowerCase())}}
        className={'Car'}
    >
      <h3>Сar name: {name}</h3>
      <p>Year: <strong>{year}</strong></p>
    </div>
  )
}

export default withRouter(Car)