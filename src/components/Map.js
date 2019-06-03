import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'
import React, {Component} from "react";
import ReactDOM from 'react-dom';
import ResponsFormJson from './ResponsFormJson'

class ShowMap extends Component
{
    state = {
        lat: this.props.latitude,
        long: this.props.longitude
    }
        
   render()
   {
        const map = (
        <Map center={[this.props.latitude, this.props.longitude]} zoom={17} width={650} height={400}>
          <Marker anchor={[this.props.latitude, this.props.longitude]} payload={1} onClick={({ event, anchor, payload }) => {}} />
      
          <Overlay anchor={[this.props.latitude, this.props.longitude]} offset={[120, 79]}>
            <img src='pigeon.jpg' width={240} height={158} alt='' />
          </Overlay>
        </Map>
        )
        return map 
   }   
}

export default ShowMap;
