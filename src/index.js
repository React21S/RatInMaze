import React from 'react';
import ReactDOM from 'react-dom';
import "./style/App.css"
import App from './App';
import RatMaze from './components/RatMaze';





ReactDOM.render(
    <RatMaze/>,
    document.getElementById('root1')
);

ReactDOM.render(<App/>,
    
    document.getElementById('root')
);

