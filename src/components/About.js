import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className="about">
            <h1> Rat and Maze Origin</h1>
            <h3>
            The use of rodent mazes began in the laboratory of Dr. Edmund Sanford at Clark University in the 1890s. One of his graduate students, Linus Kline, was interested in studying what was then known as zoological psychology, akin to what we know today as comparative psychology. Animals had long been used as models for the study of human physiology, and Kline was inspired to use them as behavioral models by Darwin’s work in the mid-1800s. 
            <Link  to={{ pathname:"https://conductscience.com/maze/historical-mazes/"}}target="_blank" ><small> Read more</small></Link>
            </h3>
        </div>
    );
};

export default About;