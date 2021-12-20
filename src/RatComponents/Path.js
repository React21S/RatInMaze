import React from 'react';
import Rat from "../img/Rat.png";
import {Grid, Paper, Box} from "@material-ui/core"
import Cell from "./Cell"
import Cheese from "../img/Cheese.png"

class Path extends React.Component {
    constructor(props){
        super();
    }
    pathIdx =0;
    foundPath=[];

    createFoundPath=()=>{
        for (let i=0; i<16; i++){
            this.foundPath.push(0);
        }

        for(let j=0; j<16;j++){
            if (this.props.maze[j]===0){
                this.foundPath[j]=2;
            }
        }

        for (let k=0; k < this.props.currentPath.length; k++){
            let x = this.props.currentPath[k][0];
            let y = this.props.currentPath[k][0];
            this.foundPath[4 * x+y] = 1;
        }
    };

    findColor = ()=>{
        this.pathIdx += 1;
        let result = this.foundPath[this.pathIdx];
        if (result ===2){
            result = 0;
        }
        else if (result === 0){
            result =2;
        }
        if (this.pathIdx ===14){
            this.pathIdx = 0
        }
        return result;
    }
    printOnConsole = () => {
        for (let i = 0; i < 16; i++) {
          console.log(i + " " + this.props.currentPath[i]);
        }
      };

    render(){
        this.createFoundPath();
        this.printOnConsole();
        return (<div className="ratInMaze">
          <span className="path">
            <br></br>
            <div className="Border">
              <p>
                <Grid container spacing={3} justifyContent ="center" direction="row">
                  <Grid item>
                    <Paper style={{ background: "#4CAF50" }} elevation={3}>
                      <Box padding={4} height={50} width={50}>
                        <center>
                          <img
                            src={Rat}
                            height={50}
                            width={75}
                            vertical-align="middle"
                          alt="Rat"></img>
                        </center>
                      </Box>
                    </Paper>
                  </Grid>
                  <Cell N={this.findColor()}></Cell>
                  <Cell N={this.findColor()}></Cell>
                  <Cell N={this.findColor()}></Cell>
                </Grid>
              </p>
    
              <p>
                <Grid container spacing={3} justifyContent ="center" direction="row">
                  <Cell N={this.findColor()}></Cell>
                  <Cell N={this.findColor()}></Cell>
                  <Cell N={this.findColor()}></Cell>
                  <Cell N={this.findColor()}></Cell>
                </Grid>
              </p>
    
              <p>
                <Grid container spacing={3} justifyContent ="center" direction="row">
                  <Cell N={this.findColor()}></Cell>
                  <Cell N={this.findColor()}></Cell>
                  <Cell N={this.findColor()}></Cell>
                  <Cell N={this.findColor()}></Cell>
                </Grid>
              </p>
    
              <p>
                <Grid container spacing={3} justify="center" direction="row">
                  <Cell N={this.findColor()}></Cell>
                  <Cell N={this.findColor()}></Cell>
                  <Cell N={this.findColor()}></Cell>
                  <Grid item>
                    <Paper style={{ background: "#4CAF50" }} elevation={3}>
                      <Box padding={4} height={50} width={50}>
                        <center>
                        <img 
                                    src={Cheese} 
                                    height={50} 
                                    width={55} vertical-align="middle" alt="Cheese"/>
                        </center>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </p>
            </div>
          </span>
          </div>
        );
      }
    }

export default Path;