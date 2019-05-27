import React, {Component} from "react";
import ReactDOM from 'react-dom';

class BordeForInput extends Component
{
    render()
    {
        return (<div className="border-for-input">
                <input type="text" className="input-for-lat-long"></input>
                <input type="text" className="input-for-lat-long"></input>
        </div>);
    }
}

export default BordeForInput;