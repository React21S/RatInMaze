import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Paper, Box} from "@material-ui/core";
import Cell from "../RatComponents/Cell"
import Rat from "../img/Rat.png";
import Cheese from "../img/Cheese.png"
import Path from "../RatComponents/Path";


class RatMaze extends React.Component {
    matrix =[2];
    paths =[];
    idx =0;
    numPaths = 0;
    pathIdx = 0;
   
    index =()=>{
        this.idx +=1;
        return this.matrix[this.idx];
    }
   
    findColor=(path)=>{
        this.pathIdx += 1;
        let result =path[this.pathIdx];
        if (this.pathIdx ===14){
            this.pathIdx=0
        }
        return result;
    };

    generateMatrix = ()=>{
        for (let i=0; i < 14; i++){
            let val = Math.floor(Math.random()* 4);
            if(val===0){
                this.matrix.push(0);
            }else{
                this.matrix.push(2);
            }
        }
        this.matrix.push(2);
    };

    inMaze =(x,y,visited)=>{
        let n = 4;
        return (
            x>= 0 && 
            y>=0 && 
            x<n && y<n && 
            this.matrix[x * n + y] > 0 &&
            visited[x * n + y] === 0
        );
    }

    calculatePaths = () =>{
        let visited = [];
        for (let i = 0; i <16; i++){
            visited[i]=0;
        }
        this.mazeUtil(visited, 0, 0,[]);
        return this.paths;
    };

    mazeUtil=(visited, x, y, currentPath)=>{
        if(x === 3 && y === 3){
            this.numPaths+=1;
            this.paths.push([...currentPath]);
            visited[15]=0;
            return;
        }

        if (!this.inMaze(x,y, visited)){
        return;
        };

        visited[4 * x + y] = 1;

        currentPath.push([x + 1, y]);
        this.mazeUtil(visited, x+1, y, currentPath);
        currentPath.pop()

        currentPath.push([x, y+1]);
        this.mazeUtil(visited, x, y+1, currentPath);
        currentPath.pop()

        visited[4 * x + y] = 0;
        return;
    };
    
    getNumPaths = ()=>{
        
        return(<div>
            <div style={{color:"black"}}>
            <div className="top">
            <center>
                    <b>Total Paths = {this.numPaths}</b>{" "}
                    <button className="top" onClick={() => this.props.history.go(0)}
                    >Go Back to Ratmaze</button>
                </center>
            </div>
            </div>
           
             </div>
        );
    };

    findPath=()=>{
        const displayNumPaths= <this.getNumPaths></this.getNumPaths>;
        ReactDOM.render(displayNumPaths, document.getElementById("root"));
        let grids = document.getElementById("root");
        for (let i=0; i<this.paths.length; i++){
            const solution=(<Path currentPath={this.paths[i]} maze={this.matrix}></Path>);
            const id = Math.random();
            const d = document.createElement("span");
            d.id = id;
            const gap = document.createElement("br");
            grids.appendChild(d);
            grids.appendChild(gap);
            ReactDOM.render(solution, document.getElementById(id));
        };
    };

    reSet=(e)=>{
        this.setState({numPaths:this.findPath=""});
    }
   
        handleClick = (e)=>{
        e.preventDefault();
        window.location.reload();
        console.log("This link was clicked.")
    }

    render() {
        this.matrix = new Array();
        this.matrix =[2];
        this.generateMatrix();
        this.calculatePaths();
     return (<div className="ratInMaze">
        <div>
        <center>
          <h1>Rat in a Maze</h1>
        </center>
        <div className="Border">
        <Grid container spacing={2} justify="center" className="Border" direction="column">
          <div>
          <Grid container spacing={3} justifyContent = "center" direction="row">
           
           <Grid item>
               <Paper elevation={3}>
                 <Box padding={4} height={60} width={60}>
                   <center>
                                   <img 
                                   src={Rat} 
                                   height={50} 
                                   width={75} vertical-align="middle" alt="rat"></img>
                               </center>
                           </Box>
                       </Paper>
                       </Grid> 
                       <Cell N={this.index()}></Cell>
                       <Cell N={this.index()}></Cell>
                       <Cell N={this.index()}></Cell>
                   </Grid>
                   
                   </div>

               
                   <div>
                       <Grid container spacing={3} justify = "center"
                       direction="row">
                           <Cell N={this.index()}></Cell>
                           <Cell N={this.index()}></Cell>
                           <Cell N={this.index()}></Cell>
                           <Cell N={this.index()}></Cell>
                       </Grid> 
                    </div>
              
               <div>
               <Grid container spacing={3} justifyContent  = "center" direction="row">
                   <Cell N={this.index()}></Cell>
                   <Cell N={this.index()}></Cell>
                   <Cell N={this.index()}></Cell>
                   <Cell N={this.index()}></Cell>
               </Grid>
               </div>
               
               <div>
               <Grid container spacing={3} justifyContent = "center" direction="row">
                   <Cell N={this.index()}></Cell>
                   <Cell N={this.index()}></Cell>
                   <Cell N={this.index()}></Cell>
                 
                    <Grid item>
                    <Paper elevation = {3}>
                        <Box padding = {4} height={50} width={50}>
                            <center>
                            <img 
                                    src={Cheese} 
                                    height={50} 
                                    width={75} vertical-align="middle" alt="Cheese"/>
                            </center>
                        </Box>
                    </Paper>
                    
                    </Grid>
                    
                </Grid> 
              
                </div>
               
                <div>
                
    <center>
        <button onClick={this.handleClick}>
            <b>Generate new maze</b>
        </button>
        <button
            onClick={this.findPath}>
                <b> Find Paths </b>
        </button>
        <button
        className="Button"
            onClick={this.reSet}>
                <b> Reset </b>
        </button>
        <br></br>
    </center>
    </div>
    </Grid>
    </div>
    </div>
</div>

        );
}
}

export default RatMaze;