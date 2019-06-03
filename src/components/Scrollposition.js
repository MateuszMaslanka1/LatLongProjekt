import React, {Component} from "react";
import ReactDOM from 'react-dom';


let bodyEL = document.querySelector("body");

//console.log(bodyEL);
    

class Scrollposition extends Component
{
    render()
    {
        bodyEL.addEventListener("scroll", function(e)
        {
            console.log(bodyELscrollTop);
        })

        return null;
    }
}

export default Scrollposition