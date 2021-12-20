import React from 'react';
import Home from "./Home";
import About from "./About";
import { Switch, Route} from 'react-router-dom';
import RatMaze from "./RatMaze"


const Main = () => {
    return (
    <Switch>
        <Route  exact path = "/"   component={Home}/>
        <Route  exact  path= "/about" component={About}/>
        <Route   exact  path= "/ratmaze" component={RatMaze}/>
    </Switch>    
       
    );
};

export default Main;

