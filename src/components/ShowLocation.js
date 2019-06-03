import React, {Component} from "react";
import ReactDOM from 'react-dom';


let obj = {
    QuantityElements: 0,
    QuantityPages: 0
}

class ShowLocation extends Component
{
    state = {
        tab: [],
        CurrentSideStart: 0,
        CurrentSideEnd: 3,
    }

    componentDidMount()
     {    
         fetch('http://192.168.1.19:3000/history')
                .then(resp => resp.json())
                .then(resp =>  {
                     this.setState({
                        tab: resp,
                  })
            })
     }

     SetPages = (event) => {
         let pom = (parseInt(event.target.textContent) - 1) * obj.QuantityElements;
                this.setState({
                    CurrentSideStart: pom,
                    CurrentSideEnd: pom + obj.QuantityElements
                },()=>{
                   // console.log(this.state.CurrentSideStart);
                   // console.log(this.state.CurrentSideEnd);
                })
        }
    
    render()
    {
        let tabpom = [];
        let ArrayForNumberPages = [];
        let conunter = 1;
        let QuantityPages = 0;
        let pages = [];

        this.state.tab.forEach((element) => {
            if (element.key == localStorage.getItem('key'))
            {
                tabpom.push({lat: element.lat, long: element.long});
                ArrayForNumberPages.push(conunter++);
            }
        });

        obj.QuantityElements = 3;
        QuantityPages = ArrayForNumberPages.length/obj.QuantityElements;
         
        let pom = tabpom.map((item) => <tr>
            <td>latitude: {item.lat}</td>
            <td>&nbsp;&nbsp;longitude: {item.long}</td>
            </tr>)

        for (let i = 1; i < QuantityPages+1; i++) 
        {
            pages.push(<button onClick={this.SetPages}>{i}</button>);
        }

        return (<div className="main-border">
                <div className="main-history">
                    <h1>Twoje wyszukiwania</h1>
                    {pom.slice(this.state.CurrentSideStart,this.state.CurrentSideEnd)}
                    <div>{pages}</div>
                </div>
                </div>)
    }
}

export default ShowLocation