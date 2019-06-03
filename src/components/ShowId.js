import React, {Component} from "react";
import ReactDOM from 'react-dom';

const UIDGenerator = require('uid-generator');

const uidgen = new UIDGenerator(); 

class ShowId extends Component
{
    render()
    {
        let userid = localStorage.getItem('key');
        return (<div className="show-id"><h1>Id dla histori</h1><p>{userid}</p></div>);
    }
}

export default ShowId
