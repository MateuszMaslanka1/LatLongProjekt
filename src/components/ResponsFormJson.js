import React, {Component} from "react";
import ReactDOM from 'react-dom';
import BorderForAdress from "./BorderForAdress";
import ShowMap from './Map'
import AddToJson from './AddToJson'
const UIDGenerator = require('uid-generator');

const uidgen = new UIDGenerator(); 

class ResponsFormJson extends Component
{
    state = {
        country: "",
        countryTertiarySubdivision: "",
        freeformAddress: "",
    }

     componentDidMount() 
     {             
        if (this.props.latitude !== 0 && this.props.longitude !== 0)
        {
                fetch(`https://api.tomtom.com/search/2/reverseGeocode/${this.props.latitude},${this.props.longitude}.json?key=f2eAAbZNip8kP1s1fua618KaouD3hBxR`)
                .then(resp => resp.json())
                .then(resp =>  {
                     //console.log(resp);
                      this.setState({
                       country: resp.addresses["0"].address.country,
                       countryTertiarySubdivision: resp.addresses["0"].address.countryTertiarySubdivision,
                        freeformAddress: resp.addresses["0"].address.freeformAddress
                 })
            })
        } 
     }

    render()
    {
        console.log("tutaj: " + this.props.id)
        let userid;
        if(localStorage.getItem('key') == null)
        {
            userid = uidgen.generateSync()
            localStorage.setItem('key', userid);  
        }
        else
        {
            userid = localStorage.getItem('key')
        } 
        
        return <><BorderForAdress country={this.state.country} countryTertiarySubdivision={this.state.countryTertiarySubdivision} freeformAddress={this.state.freeformAddress}/>
        <div className="set-map"><ShowMap latitude={this.props.latitude} longitude={this.props.longitude}/></div>
        <AddToJson lat={this.props.latitude} long ={this.props.longitude} userid={userid}/></>
    }
}

export default ResponsFormJson