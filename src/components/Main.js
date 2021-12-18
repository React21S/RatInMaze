import React from 'react';
import Home from "./Home";
import About from "./About";
import { Switch, Route} from 'react-router-dom';
import RatMaze from "./RatMaze"


const Main = () => {
    return (
    <Switch>
        <Route  path = "/"  exact component={Home}/>
        <Route  path = "/about"  exact component={About}/>
        <Route  path = "/ratmaze" component={RatMaze}/>
    </Switch>    
       
    );
};

export default Main;

