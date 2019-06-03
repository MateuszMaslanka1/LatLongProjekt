import React, {Component} from "react";
import ReactDOM from 'react-dom';
import BorderForAdress from "./BorderForAdress";
import ShowMap from './Map'
import AddToJson from './AddToJson'
const UIDGenerator = require('uid-generator');

const uidgen = new UIDGenerator(); 

class ShowMyLocation extends Component
{
    state = {
        country: "",
        countryTertiarySubdivision: "",
        freeformAddress: "",
    }

     componentDidMount() 
     {     
        this.interval = setTimeout(() => {  
        // console.log(this.props.latitude);  
        // console.log(this.props.longitude);        
        if (this.props.latitude !== 0 && this.props.longitude !== 0)
        {
            //console.log("jestem");
                fetch(`https://api.tomtom.com/search/2/reverseGeocode/${this.props.latitude},${this.props.longitude}.json?key=f2eAAbZNip8kP1s1fua618KaouD3hBxR`)
                .then(resp => resp.json())
                .then(resp =>  {
                     console.log(resp);
                      this.setState({
                       country: resp.addresses["0"].address.country,
                       countryTertiarySubdivision: resp.addresses["0"].address.countryTertiarySubdivision,
                        freeformAddress: resp.addresses["0"].address.freeformAddress,
                 })
            })
        } 
        }, 2000); 
     }
     
    render()
    {        
        return <BorderForAdress country={this.state.country} countryTertiarySubdivision={this.state.countryTertiarySubdivision} freeformAddress={this.state.freeformAddress}/>
    }
}

export default ShowMyLocation