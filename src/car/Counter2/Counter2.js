import React from 'react';
import {ClickedContext} from '../../App';


const Counter2 = (props) => {
    return (
        <div style={{border: '1px solid #ccc',
        width:200,
            margin: '0 auto'
        }}>
            <h1>Counter 2</h1>
            <ClickedContext.Consumer>
                {clicked=>clicked&&<p>Clicked</p>}
            </ClickedContext.Consumer>
        </div>
    );
};

export default Counter2;