import React, {Component} from "react";
import ReactDOM from 'react-dom';


class ResponsFormJson extends Component
{
    state = {
        country: "United States",
        countryTertiarySubdivision: "Manhattan",
        freeformAddress: "89 West 86th Transverse Road, New York, NY 10024", 
    }

    // componentDidMount() 
    //  {
    //        fetch('https://api.tomtom.com/search/2/reverseGeocode/40.785091,-73.968285.json?key=')
    //        .then(resp => resp.json())
    //        .then(resp =>  {
    //            console.log(resp);
    //             this.setState({
    //              country: resp.addresses["0"].address.country,
    //              countryTertiarySubdivision: resp.addresses["0"].address.countryTertiarySubdivision,
    //              freeformAddress: resp.addresses["0"].address.freeformAddress
    //        })
    //      })
    //  }
    render()
    {
        return <h1>{this.state.country}<br></br>
                    {this.state.countryTertiarySubdivision}<br></br>
                    {this.state.freeformAddress}<br></br>
                </h1>
    }
}

export default ResponsFormJson