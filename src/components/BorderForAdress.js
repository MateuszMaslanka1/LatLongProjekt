import React, {Component} from "react";
import ReactDOM from 'react-dom';



class BorderForAdress extends Component
{

    render()
    {
       // console.log(this.props)
        return (<div className="BorderAdress">
                <h1 className="header">{this.props.country}</h1>
                <h2 className="header">{this.props.countryTertiarySubdivision}</h2>
                <h3 className="header">{this.props.freeformAddress}</h3>
        </div>)
    }
}

export default BorderForAdress