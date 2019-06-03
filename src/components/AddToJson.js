import React, {Component} from "react";
import ReactDOM from 'react-dom';
import ShowLocation from './ShowLocation'


class AddToJson extends Component
{   
     state = {
         lat: this.props.lat,
         long: this.props.long,
         key: this.props.userid
     }

     componentDidMount()
     {    
         console.log(this.state);
         fetch('http://192.168.1.19:3000/history',{
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow', 
            referrer: 'no-referrer',
            body: JSON.stringify(this.state), 
        })
        .then(response => response.json()); 
     }
   render()
   {
       return null;
   }
}

export default AddToJson;