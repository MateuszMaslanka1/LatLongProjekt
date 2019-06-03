import React, {Component} from "react";
import ReactDOM from 'react-dom';
import ResponsFormJson from './ResponsFormJson';
import MainContent from './MainContent';
import ShowLocation from './ShowLocation';


import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


class App extends Component
{
    render()
    {
        return (
            <HashRouter>
            <>
            <Switch>
                <Route exact path='/' component={MainContent} />
                <Route exact path='/location' component={ShowLocation} />
            </Switch>
            </>
            </HashRouter>  
            // <MainContent />
        )
    }
}

export default App;