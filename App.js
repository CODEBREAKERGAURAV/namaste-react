
 
const parents=React.createElement("div",{id:"parents"},[React.createElement("div",{id:"child"},React.createElement("h1",{},"I am H1")),React.createElement("div",{id:"child2"},React.createElement("h1",{},"I am H2"))]);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parents);