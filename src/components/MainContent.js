import React, {Component} from "react";
import ReactDOM from 'react-dom';
import BordeForInput from './BorderForInput';


class MainContent extends Component
{
    render()
    {
        return <div className="main-border">
            <BordeForInput />
        </div>
    }
}

export default MainContent