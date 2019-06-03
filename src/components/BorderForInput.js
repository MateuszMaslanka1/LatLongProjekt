import React, {Component} from "react";
import ReactDOM from 'react-dom';
import ResponsFormJson from './ResponsFormJson'
import BorderForAdress from './BorderForAdress'
import ShowMap from './Map'
import ShowMyLocation from './ShowMyLocation'

class BordeForInput extends Component
{
    state = {
        getlat: "",
        getlong: "",
        getid: "",
        currentlat: "",
        currentlong: "",
        currentid: "",
        showmap: false
    }
    

    GetPositionLat = (e) => {
        this.setState({
            getlat: e.target.value
        })
    }

    GetPositionLong = (e) => {
        this.setState({
            getlong: e.target.value
        })
    }

    GetID = (e) => {
        this.setState({
            getid: e.target.value
        })
    }

    GetMap = (e) => {
        this.setState({
            showmap: true,
            currentlat: this.state.getlat,
            currentlong: this.state.getlong,
            currentid: this.state.getid
        },() =>{
            this.setState({
                getlat: "",
                getlong: "",
                getid: ""
            })   
        })
    }
    
    render()
    {
        if (this.state.showmap)
        {
            return (<>
                <div className="border-for-input">
                    <label className="LabelPosition">Latitude</label>
                    <input onChange={this.GetPositionLat} value={this.state.getlat} type="text" className="input-for-lat-long"></input>

                    <label className="LabelPosition">Longitude</label>
                    <input onChange={this.GetPositionLong} value={this.state.getlong} type="text" className="input-for-lat-long"></input>

                    {/* <label className="LabelPosition">Podaj id histori</label>
                    <input onChange={this.GetID} value={this.state.getId} type="text" className="input-for-text"></input> */}

                    <button onClick={this.GetMap} className="CorrectButton">Wyświetl adres</button> 
                </div>
                <ResponsFormJson key={this.state.currentlat + this.state.currentlong} latitude={parseFloat(this.state.currentlat)} longitude={parseFloat(this.state.currentlong)} id={this.state.currentid}/></>);
        }
        else
        {
        return (<>
                <div className="border-for-input">
                <label className="LabelPosition">Latitude</label>
                <input onChange={this.GetPositionLat} value={this.state.getlat} type="text" className="input-for-lat-long"></input>

                <label className="LabelPosition">Longitude</label>
                <input onChange={this.GetPositionLong} value={this.state.getlong} type="text" className="input-for-lat-long"></input>

                {/* <label className="LabelPosition">Podaj id histori</label>
                <input  onChange={this.GetID} value={this.state.getId} type="text" className="input-for-text"></input> */}

                <button onClick={this.GetMap} className="CorrectButton">Wyświetl adres</button> 
            </div>
            <ShowMyLocation latitude={this.props.lat} longitude={this.props.long}/>
            {/* <BorderForAdress country="wpisz lokacje" countryTertiarySubdivision="wpisz lokacje" freeformAddress="wpisz lokacje"/> */}
            <div className="set-map"><ShowMap latitude={this.props.lat} longitude={this.props.long}/></div></>);
        }
    }
}

export default BordeForInput;


