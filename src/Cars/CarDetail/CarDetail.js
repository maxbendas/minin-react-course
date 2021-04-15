import React from 'react';
import {withRouter} from "react-router-dom";

const CarDetail = ({match}) => {
    console.log(match.params.name)
    return (
        <div style={{textAlign: 'center'}}>
            <h1>
                {match.params.name}
            </h1>
        </div>
    );
};

export default withRouter(CarDetail);