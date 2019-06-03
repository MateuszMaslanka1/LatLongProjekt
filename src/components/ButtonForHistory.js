import React, {Component} from "react";
import ReactDOM from 'react-dom';
import ShowLocation from "./ShowLocation";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class ButtonForHistory extends Component
{
    state = {
        check: 0
    }
    GetShow = () =>
    {
        return <ShowLocation />
    }

    render()
    {
        let pom = 0;
        window.addEventListener("scroll", function(e)
        {
            pom = this.pageYOffset;
            if (pom > 105)
            {
                document.querySelector(".button-for-history").classList.add("button-for-hidden");
            }
            else if (pom < 105)
            {
                document.querySelector(".button-for-history").classList.remove("button-for-hidden");
            }
        })
       
        return <Link to="/location"><button onClick={this.GetShow} className="button-for-history"  >Historia</button></Link>
    }
}

export default ButtonForHistory