import React, {Component} from "react";
import ReactDOM from 'react-dom';
import BordeForInput from './BorderForInput';
import BorderForAdress from './BorderForAdress'
import ResponsFormJson from './ResponsFormJson'
import ButtonForHistory from "./ButtonForHistory";
import Scrollposition from "./Scrollposition";
import ShowId from "./ShowId";

let bodyEL = document.querySelector("body");


class MainContent extends Component
{  
    state = {
        lat: 0,
        long: 0
    }

     showPosition = (position) =>
     { 
        // console.log(position.coords.latitude);
        // console.log(position.coords.longitude);
        this.setState({
            lat: position.coords.latitude,
            long: position.coords.longitude
        })
     }

    render()
    {
        let pom
        //const position = [51.505, -0.09]  
        // window.addEventListener("scroll", function(e)
        // {
        //      pom = this.pageYOffset;
        //    // console.log(pom);
        // })

        if(navigator.geolocation) 
        {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } 
        else 
        {
            alert("Sorry, browser does not support geolocation!");
        } 

        return<><ButtonForHistory/> <div className="main-border">
            <BordeForInput lat={this.state.lat} long={this.state.long}/>
            <ShowId/>
            {/* <ResponsFormJson />  */}
            </div></>
    }
}

export default MainContent