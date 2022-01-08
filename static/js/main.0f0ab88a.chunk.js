(this.webpackJsonpratmaze=this.webpackJsonpratmaze||[]).push([[0],{46:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(20),s=n.n(a),r=(n(46),n(11)),j=n(0),d=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)(r.c,{activeClassName:"active",to:"/",exact:!0,children:" Home "})," "]}),Object(j.jsxs)("li",{children:[Object(j.jsx)(r.c,{activeClassName:"active",to:"/about",exact:!0,children:" About RatinMaze "})," "]}),Object(j.jsxs)("li",{children:[Object(j.jsx)(r.c,{activeClassName:"active",to:"/ratmaze",children:" RatMaze"})," "]})]})})},h=function(){return Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Rat and Maze App"}),Object(j.jsx)(d,{})]})},o=function(){return Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsx)("footer",{children:Object(j.jsxs)("div",{className:"footerWrapper",children:[Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)("a",{href:"https://www.linkedin.com/in/femi-adesola-oyinloye-106454145/",target:"_blank",rel:"noreferrer",className:"linkedin",children:Object(j.jsx)("i",{className:"fab fa-linkedin fa-2x"})}),Object(j.jsx)("a",{href:"#1",className:"facebook",children:Object(j.jsx)("i",{className:"fab fa-facebook fa-2x"})}),Object(j.jsx)("a",{href:"https://github.com/FemiAdesola",target:"_blank",rel:"noreferrer",className:"github",children:Object(j.jsx)("i",{className:"fab fa-github fa-2x"})})]}),Object(j.jsxs)("p",{children:["Femi Adesola \xa9 ",(new Date).getFullYear()," "]})]})})})},l=function(){return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)("h1",{children:" Rat in a Maze"}),Object(j.jsx)("img",{src:"https://source.unsplash.com/bwt0XBiKaTc ",alt:"maze"})]})},b=function(){return Object(j.jsxs)("div",{className:"about",children:[Object(j.jsx)("h1",{children:" Rat and Maze Origin"}),Object(j.jsxs)("h3",{children:["The use of rodent mazes began in the laboratory of Dr. Edmund Sanford at Clark University in the 1890s. One of his graduate students, Linus Kline, was interested in studying what was then known as zoological psychology, akin to what we know today as comparative psychology. Animals had long been used as models for the study of human physiology, and Kline was inspired to use them as behavioral models by Darwin\u2019s work in the mid-1800s.",Object(j.jsx)(r.b,{to:{pathname:"https://conductscience.com/maze/historical-mazes/"},target:"_blank",children:Object(j.jsx)("small",{children:" Read more"})})]})]})},x=n(4),O=n(12),u=n(24),m=n(13),p=n(29),f=n(27),g=n(68),v=n(69),N=n(70),w=n(67),C=Object(w.a)({paper:{background:"#4CAF50"}}),y=Object(w.a)({paper:{background:"#FF5757"}});function k(){return Object(j.jsx)(g.a,{item:!0,children:Object(j.jsx)(v.a,{elevation:3,children:Object(j.jsx)(N.a,{padding:4,height:50,width:50})})})}function z(){var e=y();return Object(j.jsx)(g.a,{item:!0,children:Object(j.jsx)(v.a,{className:e.paper,elevation:3,children:Object(j.jsx)(N.a,{padding:4,height:50,width:50})})})}function P(){var e=C();return Object(j.jsx)(g.a,{item:!0,children:Object(j.jsx)(v.a,{className:e.paper,elevation:3,children:Object(j.jsx)(N.a,{padding:4,height:50,width:50})})})}var I=function(e){return 0===e.N?Object(j.jsx)(z,{}):1===e.N?Object(j.jsx)(P,{}):Object(j.jsx)(k,{})},M=n.p+"static/media/Rat.d067acd2.png",A=n.p+"static/media/Cheese.78b87dc2.png",F=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this)).pathIdx=0,c.foundPath=[],c.createFoundPath=function(){for(var e=0;e<16;e++)c.foundPath.push(0);for(var t=0;t<16;t++)0===c.props.maze[t]&&(c.foundPath[t]=2);for(var n=0;n<c.props.currentPath.length;n++){var i=c.props.currentPath[n][0],a=c.props.currentPath[n][1];c.foundPath[4*i+a]=1}},c.findColor=function(){c.pathIdx+=1;var e=c.foundPath[c.pathIdx];return 2===e?e=0:0===e&&(e=2),14===c.pathIdx&&(c.pathIdx=0),e},c}return Object(m.a)(n,[{key:"render",value:function(){return this.createFoundPath(),Object(j.jsx)("div",{className:"ratInMaze",children:Object(j.jsxs)("span",{className:"path",children:[Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"Border",children:[Object(j.jsx)("p",{children:Object(j.jsxs)(g.a,{container:!0,spacing:3,justifyContent:"center",direction:"row",children:[Object(j.jsx)(g.a,{item:!0,children:Object(j.jsx)(v.a,{style:{background:"#4CAF50"},elevation:3,children:Object(j.jsx)(N.a,{padding:4,height:50,width:50,children:Object(j.jsx)("center",{children:Object(j.jsx)("img",{src:M,height:50,width:75,"vertical-align":"middle",alt:"Rat"})})})})}),Object(j.jsx)(I,{N:this.findColor()}),Object(j.jsx)(I,{N:this.findColor()}),Object(j.jsx)(I,{N:this.findColor()})]})}),Object(j.jsx)("p",{children:Object(j.jsxs)(g.a,{container:!0,spacing:3,justifyContent:"center",direction:"row",children:[Object(j.jsx)(I,{N:this.findColor()}),Object(j.jsx)(I,{N:this.findColor()}),Object(j.jsx)(I,{N:this.findColor()}),Object(j.jsx)(I,{N:this.findColor()})]})}),Object(j.jsx)("p",{children:Object(j.jsxs)(g.a,{container:!0,spacing:3,justifyContent:"center",direction:"row",children:[Object(j.jsx)(I,{N:this.findColor()}),Object(j.jsx)(I,{N:this.findColor()}),Object(j.jsx)(I,{N:this.findColor()}),Object(j.jsx)(I,{N:this.findColor()})]})}),Object(j.jsx)("p",{children:Object(j.jsxs)(g.a,{container:!0,spacing:3,justify:"center",direction:"row",children:[Object(j.jsx)(I,{N:this.findColor()}),Object(j.jsx)(I,{N:this.findColor()}),Object(j.jsx)(I,{N:this.findColor()}),Object(j.jsx)(g.a,{item:!0,children:Object(j.jsx)(v.a,{style:{background:"#4CAF50"},elevation:3,children:Object(j.jsx)(N.a,{padding:4,height:50,width:50,children:Object(j.jsx)("center",{children:Object(j.jsx)("img",{src:A,height:50,width:55,"vertical-align":"middle",alt:"Cheese"})})})})})]})})]})]})})}}]),n}(i.a.Component),R=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e,c=this;Object(u.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).matrix=[2],e.paths=[],e.idx=0,e.numPaths=0,e.pathIdx=0,e.index=function(){return e.idx+=1,e.matrix[e.idx]},e.findColor=function(t){e.pathIdx+=1;var n=t[e.pathIdx];return 14===e.pathIdx&&(e.pathIdx=0),n},e.generateMatrix=function(){for(var t=0;t<14;t++){0===Math.floor(4*Math.random())?e.matrix.push(0):e.matrix.push(2)}e.matrix.push(2)},e.inMaze=function(t,n,c){return t>=0&&n>=0&&t<4&&n<4&&e.matrix[4*t+n]>0&&0===c[4*t+n]},e.calculatePaths=function(){for(var t=[],n=0;n<16;n++)t[n]=0;return e.mazeUtil(t,0,0,[]),e.paths},e.mazeUtil=function(t,n,c,i){if(3===n&&3===c)return e.numPaths+=1,e.paths.push(Object(O.a)(i)),void(t[15]=0);e.inMaze(n,c,t)&&(t[4*n+c]=1,i.push([n+1,c]),e.mazeUtil(t,n+1,c,i),i.pop(),i.push([n,c+1]),e.mazeUtil(t,n,c+1,i),i.pop(),t[4*n+c]=0)},e.getNumPaths=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{style:{color:"black"},children:Object(j.jsx)("div",{className:"top",children:Object(j.jsxs)("center",{children:[Object(j.jsxs)("div",{className:"paths",children:["Total Paths = ",e.numPaths]})," ",Object(j.jsx)("button",{className:"top",onClick:function(){return e.props.history.go(0)},children:"Go Back to Ratmaze"})]})})})})},e.findPath=function(){var t=Object(j.jsx)(c.getNumPaths,{});s.a.render(t,document.getElementById("root"));for(var n=document.getElementById("root"),i=0;i<e.paths.length;i++){var a=Object(j.jsx)(F,{currentPath:e.paths[i],maze:e.matrix}),r=Math.random(),d=document.createElement("span");d.id=r;var h=document.createElement("br");n.appendChild(d),n.appendChild(h),s.a.render(a,document.getElementById(r))}},e.reSet=function(t){e.setState({numPaths:e.findPath=""})},e.handleClick=function(e){e.preventDefault(),window.location.reload(),console.log("This link was clicked.")},e}return Object(m.a)(n,[{key:"render",value:function(){return this.matrix=new Array,this.matrix=[2],this.generateMatrix(),this.calculatePaths(),Object(j.jsx)("div",{className:"ratInMaze",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("center",{children:Object(j.jsx)("h1",{children:"Rat in a Maze"})}),Object(j.jsx)("div",{className:"Border",children:Object(j.jsxs)(g.a,{container:!0,spacing:2,justify:"center",className:"Border",direction:"column",children:[Object(j.jsx)("div",{children:Object(j.jsxs)(g.a,{container:!0,spacing:3,justifyContent:"center",direction:"row",children:[Object(j.jsx)(g.a,{item:!0,children:Object(j.jsx)(v.a,{elevation:3,children:Object(j.jsx)(N.a,{padding:4,height:60,width:60,children:Object(j.jsx)("center",{children:Object(j.jsx)("img",{src:M,height:50,width:75,"vertical-align":"middle",alt:"rat"})})})})}),Object(j.jsx)(I,{N:this.index()}),Object(j.jsx)(I,{N:this.index()}),Object(j.jsx)(I,{N:this.index()})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)(g.a,{container:!0,spacing:3,justify:"center",direction:"row",children:[Object(j.jsx)(I,{N:this.index()}),Object(j.jsx)(I,{N:this.index()}),Object(j.jsx)(I,{N:this.index()}),Object(j.jsx)(I,{N:this.index()})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)(g.a,{container:!0,spacing:3,justifyContent:"center",direction:"row",children:[Object(j.jsx)(I,{N:this.index()}),Object(j.jsx)(I,{N:this.index()}),Object(j.jsx)(I,{N:this.index()}),Object(j.jsx)(I,{N:this.index()})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)(g.a,{container:!0,spacing:3,justifyContent:"center",direction:"row",children:[Object(j.jsx)(I,{N:this.index()}),Object(j.jsx)(I,{N:this.index()}),Object(j.jsx)(I,{N:this.index()}),Object(j.jsx)(g.a,{item:!0,children:Object(j.jsx)(v.a,{elevation:3,children:Object(j.jsx)(N.a,{padding:4,height:50,width:50,children:Object(j.jsx)("center",{children:Object(j.jsx)("img",{src:A,height:50,width:75,"vertical-align":"middle",alt:"Cheese"})})})})})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("center",{children:[Object(j.jsx)("button",{onClick:this.handleClick,children:Object(j.jsx)("b",{children:"Generate new maze"})}),Object(j.jsx)("button",{onClick:this.findPath,children:Object(j.jsx)("b",{children:" Find Paths "})}),Object(j.jsx)("button",{className:"Button",onClick:this.reSet,children:Object(j.jsx)("b",{children:" Reset "})}),Object(j.jsx)("br",{})]})})]})})]})})}}]),n}(i.a.Component),B=R,E=function(){return Object(j.jsxs)(x.c,{children:[Object(j.jsx)(x.a,{exact:!0,path:"/",component:l}),Object(j.jsx)(x.a,{exact:!0,path:"/ratmaze",component:B}),Object(j.jsx)(x.a,{exact:!0,path:"/about",component:b})]})};var U=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(E,{}),Object(j.jsx)(o,{})]})})};s.a.render(Object(j.jsx)(U,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.0f0ab88a.chunk.js.map